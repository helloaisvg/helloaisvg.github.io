---
layout: single
title: CV
permalink: /cv/
---

# JIAHUI HUANG (黄家辉)

jiahuihuang@connect.hku.hk · [jiahuihuang.me](https://jiahuihuang.me) · [github.com/helloaisvg](https://github.com/helloaisvg)

MSc(Eng) in Robotics and Intelligent Systems, HKU (2026.9 - 2027.6).

[Download PDF](/files/CV-Jiahui.pdf)

## Research Interests

Multi-Agent Learning · Reinforcement Learning · Generative Models · Agentic AI

## Education

* **M.Sc. in Engineering (Robotics and Intelligent Systems)**, The University of Hong Kong, 2026.9 - 2027.6 (expected)
* **B.Eng. in Artificial Intelligence**, Chongqing University, 2022.9 - 2026.6 · GPA 3.5/4.0
  * B.Eng. Thesis: *Design and Implementation of an LLM-based Enterprise Fundamental Analysis Agent*

## Publications & Manuscripts

* **Risk-sensitive reinforcement learning with generative value distributions** — NeurIPS 2026 (under review) · first author. Models the full return distribution via conditional flow matching and jointly trains mean- and CVaR-optimized actors on a shared flow-based critic; competitive reward with 7 baselines and a substantially lower crash rate.
* **Cause-specific local repair for scalable multi-agent path finding** — AAAI 2027 (under review) · first author. Propose a local-repair framework that decomposes the repairable slack of a MAPF solution into goal-lock, detour and precedence causes, with a dedicated repair operator per cause. 100% solve rate on 5,850 MovingAI instances across 10 map types, ~2.0 s average runtime; at a matched 2 s budget, excess sum-of-costs (SoC) is 5.1 percentage points below LaCAM3.
* Three additional first-author manuscripts under review at AAAI 2027: generative experience replay for continual off-policy RL; robot controller interface calibration; distributionally robust learning under calibrated shifts.

## Research Experience

* **Algorithm Engineer, Shanghai Xianruan Information Technology** — 04/2025 - 06/2025.
  * Built the core solver module of a multi-robot warehouse path planning system: a Python ECBS implementation with task allocation, designed for production-scale warehouse deployment.
  * Tuned the conflict-detection mechanism and heuristics to product-scale instances: +40% solve speed, +30% throughput, under high-concurrency workloads.

## Research Projects

### Agentic AI

* **Vellorys** — an LLM-based multi-agent research system for equity analysis across CN/HK/US/crypto markets. Designed a LangGraph-based agent workflow with upfront tool evidence registration, formal argumentation for conflict resolution, and a PPO router for adaptive route selection. 1.9% hallucination rate, 0.960 fact accuracy on 300 FinDebate-Eval samples. [vellorys.com](https://vellorys.com)

### Multi-Agent Path Finding

* **GCSS** — a guided large-scale MAPF solver: scatter-guided multi-strategy PIBT with automatic swap handling; decentralized priority-based execution that scales to 500-1000 agents in sub-second to seconds. 87.5% solve rate across 33 MovingAI official maps, SoC within 2% of LaCAM3.
* **DiffRefine** — learning-based MAPF trajectory refinement: SE(2)-equivariant GNN plus Mamba sequence model, B-spline parameterization; complete training/eval pipeline with test suite.
* **Classical implementations**: [A*](https://github.com/helloaisvg/A-star), [Focal A*](https://github.com/helloaisvg/focalA_star), [SIPP](https://github.com/helloaisvg/SIPP), CBS ([MAPF](https://github.com/helloaisvg/MAPF)) in Python and C++.

### Robot Learning

* **VLA: Rectified Flow Vision-Language-Action** — one-step generation at 170 Hz; in our evaluation, 1-step MSE is 98.3% lower than DDPM.
* **Robotic deployments** — navigation and control on Scout Mini, camera-IMU calibration (Kalibr, 1.10 px), LiDAR odometry (NDT/ICP/GN-ICP). [Planning-control](https://github.com/helloaisvg/Planning-control) · [Camera-calibration](https://github.com/helloaisvg/Camera-calibration) · [lidar](https://github.com/helloaisvg/lidar)

## Skills

* **Programming**: Python, C++, Rust, Go, SQL, LaTeX
* **RL**: PPO, SAC, DQN, distributional RL
* **Generative / Deep Learning**: diffusion, flow matching, GNNs, Mamba, PyTorch
* **Multi-Agent / Planning**: MAPF, A*, CBS, ECBS, SIPP, PIBT
* **Robotics**: ROS, MuJoCo, Gazebo, PCL, Kalibr
