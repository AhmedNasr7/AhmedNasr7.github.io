// Activities and certificates.
// Sources: private/resume.md (Selected Activities) + current live site (ROV MATE, Computational
// Neuroscience; kept per Phase 1 answer) + the certificate PDFs themselves (issuer names).
// Deep Learning from Scratch lives in work.ts.
import kaustThumb from '../assets/certs/al-khawarizmi-tour-2026-kaust-hpc-ai-hackathon.webp';
import oxmlThumb from '../assets/certs/oxml-2023.webp';
import neuroThumb from '../assets/certs/intro-computational-neuroscience-2025.webp';

export const activities = [
  {
    title: 'EEG/EMG Foundation Model Challenge',
    meta: 'NeurIPS 2026 Brain & Body Workshop',
    year: '2026',
    // resume.md + "fusion" framing from Ahmed + task details from neural-interfaces26.github.io/tracks.html
    bullets: [
      'Track 2, BCI decoding: classify three cued mental commands from EEG (motor imagery, mental calculation, word association), generalizing across sessions and across subjects.',
      'Developed a hybrid model fusing a wavelet neural operator with attention and shift-invariant SPD-manifold feature embeddings.',
    ],
  },
  {
    title: 'Al-Khawarizmi Tour 2026 (KAUST): HPC & AI Hackathon',
    meta: 'Participant',
    year: '2026',
    bullets: ['Hackathon dedicated to high performance computing and artificial intelligence.'], // certificate text
  },
  {
    title: 'Intro to Computational Neuroscience Summer School',
    meta: 'Arabs in Neuroscience',
    year: '2025',
    bullets: ['Computational neuroscience foundations, fMRI brain decoding, and hands-on EEG analysis projects.'],
  },
  {
    title: 'Oxford ML Summer School (OxML23)',
    meta: 'Oxford Mathematical Institute & Deep Medicine Program',
    year: '2023',
    bullets: ['43 hours of lectures covering ML fundamentals, advanced theory, and applications in health.'], // previous site + certificate
  },
  {
    title: 'HackZurich, AI Developer',
    meta: "Europe's Largest Hackathon",
    year: '2020, 2021, 2022',
    bullets: ['Three consecutive editions as an AI developer, building AI prototypes with international teams.'], // previous site
  },
  {
    title: 'RoboSub International Competition, AUV Perception Team Lead',
    meta: 'ASMarine Team',
    year: '2019 – 2020',
    bullets: [
      'Led the perception team for an Autonomous Underwater Vehicle (AUV) built for the RoboSub international competition in San Diego, USA; project sponsored by Valeo.',
      'Designed and implemented computer vision pipelines for underwater object detection and tracking using RetinaNet, YOLO, and EfficientDet, and developed ROS packages for the AUV.',
    ],
  },
  {
    title: 'ROV MATE Competition',
    meta: '4th in the MENA region',
    year: '2017 – 2018',
    bullets: ['Developed embedded software in C on ATmega and Python on Raspberry Pi for a remotely operated underwater vehicle.'],
  },
];

export const certificates = [
  {
    title: 'Al-Khawarizmi Tour 2026: HPC & AI Hackathon',
    issuer: 'KAUST',
    year: '2026',
    href: '/certs/al-khawarizmi-tour-2026-kaust-hpc-ai-hackathon.pdf',
    thumb: kaustThumb,
  },
  {
    title: 'Intro to Computational Neuroscience',
    issuer: 'Arabs in Neuroscience',
    year: '2025',
    href: '/certs/intro-computational-neuroscience-2025.pdf',
    thumb: neuroThumb,
  },
  {
    title: 'Oxford ML Summer School (OxML23)',
    issuer: 'AI for Global Goals · University of Oxford Deep Medicine Program',
    year: '2023',
    href: '/certs/oxml-2023.pdf',
    thumb: oxmlThumb,
  },
];
