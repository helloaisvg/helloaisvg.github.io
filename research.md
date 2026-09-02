---
layout: single
title: Research
permalink: /research/
---

My main interest is making multi-agent systems that are fast, safe and learnable. Three directions currently:

## Scalable Multi-Agent Path Finding

Multi-agent path finding (MAPF) asks how to route many robots through a shared map without collisions. The hard part is that solving it optimally is NP-hard, so practical solvers trade quality against speed. My work builds down this chain:

* **Cause-specific local repair** — under review (AAAI 2027). Instead of repairing arbitrary neighborhoods, the solver classifies where a solution's slack comes from (goal-lock, detour or precedence) and applies a matching repair operator. 100% solve rate on 5,850 MovingAI instances across 10 map types, ~2.0 s mean runtime; at a matched 2 s budget the excess SOC is 5.1 percentage points below LaCAM3.
* **GCSS** — a large-scale solver built around precomputed Scatter paths; several PIBT strategies are tried at each decision and the best result is kept, with automatic swap handling. 87.5% solve rate across 33 MovingAI official maps, sub-second to seconds for 500-1000 agents, SoC within ~2% of LaCAM3.
* **DiffRefine** — refines MAPF trajectories with an SE(2)-equivariant GNN and Mamba sequence model, parameterizing trajectories as B-splines. Complete training and evaluation pipeline with a test suite.

## Risk-Sensitive Reinforcement Learning

Learned controllers usually optimize the average return. In safety-critical settings the worse-than-average outcomes are exactly what matter, so I look at models that represent the whole distribution of returns instead of a single number:

* **Generative value distributions** — under review (NeurIPS 2026). Conditional flow matching learns the full return distribution, with a dual mean/CVaR actor design. Reward is on par with 7 baselines while the crash rate is notably lower.
* **Generative experience replay for continual off-policy RL** — under review (AAAI 2027). Uses a rectified flow to replay experiences instead of storing millions of transitions.

## Robot Learning & Embodied Systems

On the applied side I work with real robots and sensors, from perception to control:

* **VLA: Rectified Flow Vision-Language-Action** — one-step generation, 170 Hz inference, 98.3% lower 1-step MSE than DDPM.
* **DMS (Driver Monitoring System)** — MediaPipe face and gaze features, 60 s temporal state machine, YOLOv8n-cls eye state, RandomForest fatigue grading, OpenCV HUD. [DMS](https://github.com/helloaisvg/DMS)
* **Robot deployments** — [Scout Mini](https://github.com/helloaisvg/Planning-control) navigation and control; [camera-IMU calibration](https://github.com/helloaisvg/Camera-calibration) (Kalibr, 1.10 px); [LiDAR odometry](https://github.com/helloaisvg/lidar) (NDT/ICP/GN-ICP); [target detection](https://github.com/helloaisvg/target-detection) (YOLOv5). Also an intelligent blind cane (Raspberry Pi, YOLOv5, GPS) under Prof. Yuanxin Luo at CQU.

More detail: [CV](/files/CV-Jiahui.pdf).
