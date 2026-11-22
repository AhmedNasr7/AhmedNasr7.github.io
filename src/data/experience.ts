// Source: private/resume.md, Main variant wording and bullet order.
// `visible` = how many bullets show before the "more" toggle.
export interface Role {
  title: string;
  company: string;
  location: string;
  dates: string;
  note?: string;
  bullets: string[];
  visible?: number;
  compact?: boolean;
}

export const experience: Role[] = [
  {
    title: 'Senior Machine Learning Engineer',
    company: 'Zazmic Inc.',
    location: 'Cairo, Egypt · US-based company',
    dates: 'Jun 2025 – Present',
    visible: 5,
    bullets: [
      // Reworded per Ahmed (Phase 4): emphasis on leading initiatives; squad size removed.
      'Led the technical planning and development of major initiatives across 7+ delivered client projects, POCs, and MVPs spanning LLM training, edge vision, and agentic AI; led technical workshops, solution scoping, and effort estimation across 20+ client engagements.',
      // 8K to 128K: Phase 1 answer (resume variants say 256K).
      'Working on a project to do continual pretraining of Gemma 4 31B on 5B domain-specific tokens, with long-context scaling from 8K to 128K, on multi-node H100 clusters (16 GPUs) using Megatron and NeMo AutoModel.',
      'Built large-scale deep research systems with LangGraph and Deep Agents, using an orchestrator that dynamically spawns parallel subagents for search, analysis, and synthesis; also built multi-agent systems with Google ADK and MCP.',
      'Built SFT and LoRA post-training pipelines for LLMs and VLMs with TRL and Unsloth.',
      // Split out of Z-EDGE per Ahmed (Phase 4).
      'Deployed and served LLMs with vLLM on A100 servers.',
      'Trained vision models with PyTorch DDP on multi-node A100 clusters (up to 4 nodes × 8 GPUs) and LLMs with FSDP and pipeline parallelism; ran LLM and vision training on multi-slice TPU v5e.',
      'Built and shipped edge license plate detection and OCR models on Hailo neural accelerators across 1,200 street cameras, trained on 1.5M images: ~2% CER with models of just a few MB at ~2,200 FPS in streaming mode.',
      // Ahmed (Phase 4), not on the resume.
      'Participated in knowledge sharing across ML systems, AI agents, software engineering, and general AI and ML topics.',
    ],
  },
  {
    title: 'Senior Machine Learning Engineer & Data Scientist',
    company: 'Solutions by STC',
    location: 'Cairo, Egypt · KSA',
    dates: 'Dec 2023 – Mar 2026',
    note: 'Full-time until Jun 2025, then part-time consultant',
    visible: 4,
    bullets: [
      'Built and deployed production ML systems for the NEOM smart city program across vision, NLP, speech, and generative AI, serving analytics over millions of digital assets.',
      'Deployed vision-language models (Qwen3-VL) with vLLM and Ray Serve on an 8× A100 node, sustaining 60 to 100 requests/sec through custom batching and autoscaling.',
      'Architected scalable ML serving and data pipelines from the ground up, including async orchestration, event-driven inference, and containerized deployments on on-premises infrastructure.',
      'Delivered full ML lifecycle across vision, speech (Whisper), and generative AI: research, training, fine-tuning, and production deployment under full data sovereignty constraints.',
    ],
  },
  {
    title: 'Machine Learning & Computer Vision Engineer',
    company: 'COM-IOT Technologies',
    location: 'Cairo, Egypt · Dubai, UAE',
    dates: 'Apr 2022 – Dec 2023',
    bullets: [
      'Developed and deployed end-to-end ML systems for image and 3D LiDAR point cloud processing, powering smart city applications in security, traffic safety, and crowd analytics.',
      "Built the company's ML/MLOps infrastructure from scratch, covering model development, versioning, evaluation, and deployment for LiDAR and camera-based perception systems.",
      'Optimized LiDAR and camera perception models for edge hardware (NVIDIA Jetson) and shipped production deployments across the UAE (Dubai, Abu Dhabi), India, and Germany.',
    ],
  },
  {
    title: 'Independent ML Consultant (Freelance, part-time)',
    company: 'Upwork',
    location: 'Remote',
    dates: 'Jun 2021 – Jun 2025',
    compact: true,
    bullets: [
      'Delivered ML consulting and development projects for international clients across computer vision, NLP, audio/speech processing, and data science.',
    ],
  },
  {
    title: 'Machine Learning R&D Engineer',
    company: 'Avelabs',
    location: 'Cairo, Egypt',
    dates: 'Mar 2021 – Apr 2022',
    compact: true,
    bullets: [
      'Designed, built, and trained deep learning models for audio recognition, with hardware-aware constraints, for an AI-enabled audio sensor for autonomous vehicles.',
      'Built and optimized audio processing pipelines in Python and C++; deployed models on embedded hardware targets using TensorFlow.',
    ],
  },
  {
    title: 'Part-Time Teaching Assistant',
    company: 'Faculty of Engineering, Ain Shams University',
    location: 'Cairo, Egypt',
    dates: 'Oct 2020 – Mar 2021',
    compact: true,
    bullets: [
      'Taught the Neural Networks course to senior Computer Engineering students; prepared tutorials and evaluated assignments and projects.',
    ],
  },
  {
    title: 'Computer Vision & Perception Research Assistant',
    company: 'Autotronics Research Lab, ASU',
    location: 'Cairo, Egypt',
    dates: 'Mar 2020 – Sep 2021',
    compact: true,
    bullets: [
      'Conducted applied research on object detection, multi-object tracking, segmentation, and LiDAR-camera fusion, on projects funded by governmental agencies.',
      'Collaborated with the Center of Mobility Research to develop computer vision-based traffic analysis tools and led a group of graduate and undergraduate students.',
    ],
  },
];
