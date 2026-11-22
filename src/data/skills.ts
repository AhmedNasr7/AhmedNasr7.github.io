// Source: private/resume.md, Technical Skills (Main variant order). Do not add skills that are not on the resume.
export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Core Areas',
    items: ['Computer Vision', 'Multimodal & Vision-Language Models', 'LLM Pretraining & Post-training', 'Distributed Training', 'AI Agents', 'Speech & Audio', 'Generative Models (Diffusion/Flow)', 'Physics-Informed ML', 'Edge AI'],
  },
  {
    group: 'Training & Distributed',
    items: ['PyTorch DDP & FSDP', 'Megatron (pipeline parallelism)', 'NeMo AutoModel', 'TRL', 'Unsloth', 'SFT & LoRA', 'JAX', 'TPU (multi-slice v5e)', 'HuggingFace Accelerate', 'PyTorch Lightning'],
  },
  {
    group: 'Frameworks & Libraries',
    items: ['PyTorch', 'TensorFlow/Keras', 'HuggingFace', 'Ray (Core, Tune, Data)', 'Scikit-learn', 'NumPy', 'SciPy', 'OpenCV', 'Librosa', 'Open3D', 'PCL'],
  },
  {
    group: 'Inference & Edge',
    items: ['vLLM', 'Ray Serve', 'LitServe', 'FastAPI', 'ONNX', 'TensorRT', 'OpenVINO', 'Hailo', 'NVIDIA Jetson'],
  },
  {
    group: 'Agents & Orchestration',
    items: ['LangGraph', 'Deep Agents', 'LangChain', 'Google Agent Development Kit (ADK)', 'Model Context Protocol (MCP)'],
  },
  {
    group: 'MLOps & Infrastructure',
    items: ['Docker', 'CI/CD (GitHub Actions)', 'MLflow', 'W&B', 'Multi-node GPU clusters'],
  },
  {
    group: 'Cloud & Databases',
    items: ['GCP (Vertex AI, BigQuery, Cloud Run, Cloud Functions, Cloud Build/Trigger, TPU)', 'MongoDB', 'PostgreSQL', 'Weaviate', 'LanceDB', 'Qdrant'],
  },
  {
    group: 'Languages',
    items: ['Python', 'C/C++', 'MATLAB/Octave'],
  },
];
