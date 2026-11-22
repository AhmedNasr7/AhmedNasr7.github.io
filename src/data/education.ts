// Source: private/resume.md, Education. Rule: never show an overall B.Sc. grade;
// "Excellent" belongs only to the graduation project.
export const education = [
  {
    degree: 'M.Sc., Computer Engineering',
    school: 'Cairo University',
    dates: 'Oct 2021 – Present',
    details: [
      { label: 'GPA', value: '3.6/4.0' },
      { label: 'Thesis', value: 'Physics-informed ML for solving PDEs in forward and inverse problems, combining deep models and neural operators.' },
      { label: 'Selected coursework', value: 'Advanced Deep Learning, Neural Networks, Computer Vision, Parallel Hardware & Computing, Computer Architecture for Deep Learning' },
    ],
  },
  {
    degree: 'B.Sc., Electrical & Computer Engineering',
    school: 'Ain Shams University (ASU)',
    dates: '2015 – 2020',
    details: [
      { label: 'Major', value: 'Computer & Systems Engineering' },
      { label: 'Graduation project (Excellent)', value: 'Perception System for Autonomous Underwater Vehicles (AUVs)' },
    ],
  },
];
