// Faint wireframe loss surface with a momentum-SGD trajectory descending it.
// Canvas 2D, simple perspective projection, slow rotation. Pauses off-screen.
const N = 26; // grid resolution
const R = 2.2; // domain [-R, R]^2
const FRAME_MS = 1000 / 30;

// Non-convex surface: two basins, a saddle, gentle bowl.
const f = (x: number, y: number) =>
  0.035 * (x * x + y * y) -
  0.9 * Math.exp(-((x - 0.9) ** 2 + (y - 0.5) ** 2) / 0.6) -
  0.6 * Math.exp(-((x + 0.8) ** 2 + (y + 0.8) ** 2) / 0.45) +
  0.35 * Math.exp(-(x * x + (y - 1.2) ** 2) / 0.3);

const grad = (x: number, y: number): [number, number] => {
  const h = 1e-3;
  return [(f(x + h, y) - f(x - h, y)) / (2 * h), (f(x, y + h) - f(x, y - h)) / (2 * h)];
};

export function initLandscape(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Precompute surface heights.
  const Z = new Float32Array(N * N);
  for (let j = 0; j < N; j++)
    for (let i = 0; i < N; i++) Z[j * N + i] = f(-R + (2 * R * i) / (N - 1), -R + (2 * R * j) / (N - 1));

  let rgb = '42, 143, 175';
  const readColor = () => {
    rgb = getComputedStyle(document.documentElement).getPropertyValue('--field-rgb').trim() || rgb;
  };

  let w = 0, h = 0, dpr = 1;
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    w = r.width; h = r.height;
    canvas.width = Math.max(1, Math.round(w * dpr));
    canvas.height = Math.max(1, Math.round(h * dpr));
  };

  let yaw = 0.6;
  const pitch = 1.15;
  const project = (x: number, y: number, z: number): [number, number, number] => {
    const cy = Math.cos(yaw), sy = Math.sin(yaw);
    const xr = x * cy - y * sy, yr = x * sy + y * cy;
    const cp = Math.cos(pitch), sp = Math.sin(pitch);
    const zz = z * 1.1;
    const y2 = yr * cp - zz * sp, depth = yr * sp + zz * cp + 9;
    const s = (Math.min(w, h) * 1.3) / depth;
    return [w / 2 + xr * s, h * 0.5 + y2 * s, depth];
  };

  // Optimizer state (SGD with momentum), restarts from the rim.
  let px = 0, py = 0, vx = 0, vy = 0, steps = 0, rest = 0;
  let trail: [number, number][] = [];
  const restart = () => {
    const a = Math.random() * Math.PI * 2;
    px = Math.cos(a) * R * 0.9; py = Math.sin(a) * R * 0.9;
    vx = vy = 0; steps = 0; rest = 0; trail = [[px, py]];
  };
  const optStep = () => {
    if (rest > 0) { if (--rest === 0) restart(); return; }
    const [gx, gy] = grad(px, py);
    vx = 0.8 * vx - 0.04 * gx; vy = 0.8 * vy - 0.04 * gy;
    px = Math.max(-R, Math.min(R, px + vx)); py = Math.max(-R, Math.min(R, py + vy));
    trail.push([px, py]);
    if (trail.length > 120) trail.shift();
    if (++steps > 260 || (Math.hypot(vx, vy) < 1e-4 && steps > 40)) rest = 60;
  };

  const draw = () => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    const P = new Array<[number, number, number]>(N * N);
    for (let j = 0; j < N; j++)
      for (let i = 0; i < N; i++)
        P[j * N + i] = project(-R + (2 * R * i) / (N - 1), -R + (2 * R * j) / (N - 1), Z[j * N + i]!);
    const line = (a: [number, number, number], b: [number, number, number]) => {
      const fade = Math.max(0, Math.min(1, (11.5 - (a[2] + b[2]) / 2) / 4));
      ctx.strokeStyle = `rgba(${rgb}, ${0.08 + 0.2 * fade})`;
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    };
    for (let j = 0; j < N; j++)
      for (let i = 0; i < N; i++) {
        if (i < N - 1) line(P[j * N + i]!, P[j * N + i + 1]!);
        if (j < N - 1) line(P[j * N + i]!, P[(j + 1) * N + i]!);
      }
    // Trajectory
    for (let k = 1; k < trail.length; k++) {
      const [ax, ay] = trail[k - 1]!, [bx, by] = trail[k]!;
      const a = project(ax, ay, f(ax, ay) + 0.02), b = project(bx, by, f(bx, by) + 0.02);
      ctx.strokeStyle = `rgba(${rgb}, ${0.15 + 0.75 * (k / trail.length)})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    }
    const [hx, hy] = trail[trail.length - 1]!;
    const head = project(hx, hy, f(hx, hy) + 0.02);
    ctx.fillStyle = `rgba(${rgb}, 1)`;
    ctx.beginPath(); ctx.arc(head[0], head[1], 3.2, 0, Math.PI * 2); ctx.fill();
  };

  readColor();
  resize();
  restart();
  new MutationObserver(() => { readColor(); if (reduced) draw(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.addEventListener('resize', () => { resize(); if (reduced) draw(); });

  if (reduced) {
    for (let k = 0; k < 200 && rest === 0; k++) optStep();
    draw();
    return;
  }

  let visible = true, raf = 0, last = 0;
  const loop = (now: number) => {
    raf = requestAnimationFrame(loop);
    if (now - last < FRAME_MS) return;
    last = now;
    yaw += 0.0025;
    optStep();
    draw();
  };
  const run = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(loop); };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; };
  new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting; visible ? run() : stop(); }).observe(canvas);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : run()));
  run();
}
