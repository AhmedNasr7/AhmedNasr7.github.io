// Site-wide interactivity: theme toggle, mobile nav, condensed nav, active section,
// scroll reveals. All vanilla, all optional.
const root = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Theme toggle
document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
});

// Condensed nav on scroll
const nav = document.querySelector<HTMLElement>('[data-nav]');
const onScroll = () => nav?.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const setNav = (open: boolean) => {
  nav?.classList.toggle('is-open', open);
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};
toggle?.addEventListener('click', () => setNav(!nav?.classList.contains('is-open')));
document.querySelectorAll('[data-nav-link]').forEach((a) => a.addEventListener('click', () => setNav(false)));

// Active section highlight
const links = new Map<string, Element>();
document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((a) => {
  const id = a.getAttribute('href')?.split('#')[1];
  if (id) links.set(id, a);
});
const sections = [...links.keys()].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
if (sections.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.removeAttribute('aria-current'));
      links.get(e.target.id)?.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((s) => io.observe(s));
  const first = sections[0]!;
  window.addEventListener('scroll', () => {
    if (first.getBoundingClientRect().top > window.innerHeight * 0.45) links.forEach((a) => a.removeAttribute('aria-current'));
  }, { passive: true });
}

// Scroll reveals
const reveals = document.querySelectorAll('.reveal');
if (reduced || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  reveals.forEach((el) => io.observe(el));
}

