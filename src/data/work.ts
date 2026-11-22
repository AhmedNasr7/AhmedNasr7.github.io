// Selected Work case studies. Every sentence is derived from resume.md bullets
// (IDs in comments). No client names. `result` is only set where the resume states one.
export interface WorkItem {
  tag: string;
  title: string;
  context: string;
  problem: string;
  built: string[];
  result?: string;
  stack: string[];
  links?: { label: string; href: string }[];
}

export const work: WorkItem[] = [
  {
    // Z-CPT, Z-SFT (+ Phase 1: 128K)
    tag: 'LLM Training',
    title: 'Continual pretraining of a 31B LLM',
    context: 'Zazmic · ongoing',
    problem: 'Specialize Gemma 4 31B on domain-specific data and extend its context length.',
    built: [
      'Continual pretraining on 5B domain-specific tokens with long-context scaling from 8K to 128K.',
      'Runs on multi-node H100 clusters (16 GPUs) with Megatron and NeMo AutoModel.',
      'SFT and LoRA post-training pipelines for LLMs and VLMs with TRL and Unsloth.',
    ],
    stack: ['Megatron', 'NeMo AutoModel', 'H100 × 16', 'TRL', 'Unsloth'],
  },
  {
    // Z-EDGE (+ US and Canada, license plates: Ahmed, Phase 4)
    tag: 'Edge AI',
    title: 'License plate detection and OCR on the edge',
    context: 'Zazmic',
    problem: 'Detect and read license plates directly on street cameras, on edge neural accelerators.',
    built: [
      'License plate detection and OCR models trained on 1.5M images.',
      'Shipped on Hailo neural accelerators across 1,200 street cameras in multiple US states and Canada.',
    ],
    result: '~2% CER with models of just a few MB, at ~2,200 FPS in streaming mode.',
    stack: ['Hailo', 'Detection', 'OCR', 'Streaming'],
  },
  {
    // COM-IOT Technologies bullets (resume.md)
    tag: 'LiDAR · Edge',
    title: 'LiDAR and camera perception on the edge',
    context: 'COM-IOT Technologies',
    problem: 'Process 3D LiDAR point clouds and camera images for smart city security, traffic safety, and crowd analytics.',
    built: [
      'End-to-end ML systems for image and 3D LiDAR point cloud processing.',
      'LiDAR and camera perception models optimized for NVIDIA Jetson.',
      "The company's ML/MLOps infrastructure from scratch: model development, versioning, evaluation, and deployment.",
    ],
    result: 'Production deployments across the UAE (Dubai, Abu Dhabi), India, and Germany.',
    stack: ['3D point clouds', 'NVIDIA Jetson', 'MLOps'],
  },
  {
    // Avelabs bullets (resume.md) + "designed, built, trained, hardware-aware" per Ahmed (Phase 4)
    tag: 'Audio · Edge',
    title: 'Audio recognition for autonomous vehicles',
    context: 'Avelabs',
    problem: 'Audio recognition for an AI-enabled audio sensor in autonomous vehicles, within the limits of embedded hardware.',
    built: [
      'Designed, built, and trained deep learning models for audio recognition, with hardware-aware constraints.',
      'Audio processing pipelines in Python and C++, optimized for the target hardware.',
      'Models deployed on embedded hardware targets using TensorFlow.',
    ],
    stack: ['TensorFlow', 'Python', 'C++', 'Embedded'],
  },
  {
    // S-VLM, S-ARCH, S-LIFE
    tag: 'Inference',
    title: 'High-throughput VLM serving',
    context: 'Solutions by STC · NEOM',
    problem: 'Serve vision-language models in production on on-premises infrastructure, under full data sovereignty constraints.',
    built: [
      'Qwen3-VL served with vLLM and Ray Serve on an 8× A100 node, with custom batching and autoscaling.',
      'Async orchestration, event-driven inference, and containerized deployments.',
    ],
    result: 'Sustained 60 to 100 requests/sec.',
    stack: ['Qwen3-VL', 'vLLM', 'Ray Serve', '8× A100', 'Containers'],
  },
  {
    // Z-AGENTS, Z-EVAL
    tag: 'Agents',
    title: 'Deep research multi-agent systems',
    context: 'Zazmic',
    problem: 'Deep research tasks need many searches, parallel analysis, and one coherent synthesis.',
    built: [
      'An orchestrator that dynamically spawns parallel subagents for search, analysis, and synthesis, built with LangGraph and Deep Agents.',
      'Multi-agent systems with Google ADK and MCP.',
      'LLM evaluation pipelines with custom benchmarks, LLM-as-judge scoring, and regression evals for agentic and fine-tuned systems.',
    ],
    stack: ['LangGraph', 'Deep Agents', 'Google ADK', 'MCP', 'LLM-as-judge'],
  },
  {
    // Z-DIST
    tag: 'Distributed',
    title: 'Distributed training on GPUs and TPUs',
    context: 'Zazmic',
    problem: 'Scale training of vision models and LLMs beyond a single device.',
    built: [
      'Vision models with PyTorch DDP on multi-node A100 clusters, up to 4 nodes × 8 GPUs.',
      'LLMs with FSDP and pipeline parallelism.',
      'LLM and vision training on multi-slice TPU v5e.',
    ],
    stack: ['PyTorch DDP', 'FSDP', 'Pipeline parallelism', 'A100', 'TPU v5e'],
  },
  {
    // Z-PIML
    tag: 'Scientific ML',
    title: 'Physics-informed ML workshop',
    context: 'Zazmic · for a semiconductor company',
    problem: 'Accelerate simulation by embedding PDE constraints into neural networks.',
    built: [
      'Delivered a physics-informed ML workshop on embedding PDE constraints into neural networks.',
      'PINN demos on multi-slice TPU v5e.',
    ],
    stack: ['PINNs', 'TPU v5e'],
  },
  {
    // Activities: Open Source, Deep Learning from Scratch (resume.md); framing from the repo README
    tag: 'Open Source',
    title: 'Deep learning from scratch',
    context: 'GitHub · 2026',
    problem: 'Implement core deep learning components by hand, without frameworks doing the heavy lifting.',
    built: [
      'Transformer/GPT, ViT, attention, diffusion, flow matching, autograd, and optimizers, from the ground up in PyTorch and JAX.',
    ],
    stack: ['PyTorch', 'JAX'],
    links: [
      { label: 'deep-learning-from-scratch', href: 'https://github.com/AhmedNasr7/deep-learning-from-scratch' },
    ],
  },
];
