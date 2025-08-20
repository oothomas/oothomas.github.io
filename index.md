---
layout: default
title: "Home"
---

<!-- GLightbox (dependency-free lightbox for project images) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

<!-- Project gallery styles -->
<link rel="stylesheet" href="{{ '/assets/css/projects.css' | relative_url }}">

<!-- Icon libraries and skills styling -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
<link rel="stylesheet" href="{{ '/assets/css/skills.css' | relative_url }}">

<style>
/* Nav buttons (kept from your version) */
.nav-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  background-color: #2a63a4;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}
.nav-button:hover {
  background-color: #1d4f8c;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>

<nav style="display:flex;flex-wrap:wrap;justify-content:center;gap:15px;margin:20px 0;background:#f5f5f5;padding:10px;border-radius:8px;">
  <a href="/" class="nav-button">Home</a>
  <a href="/#projects" class="nav-button">Projects</a>
  <a href="/#skills-and-expertise" class="nav-button">Skills and Expertise</a>
  <a href="/#cv" class="nav-button">CV</a>
</nav>

<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
  <img src="{{ 'assets/images/profile.jpg' | relative_url }}"
       alt="Portrait of Oshane O. Thomas"
       style="width:150px;border-radius:8px;">
  <div style="font-size:18px;max-width:700px;">
    I am a computational biologist and machine learning researcher specializing in biological shape analysis,
    AI-powered phenotyping, and functional morphology. My expertise bridges academic research and industry applications,
    leveraging deep learning and 3D data processing to extract meaningful insights from morphological datasets.
  </div>
</div>

<!-- no <hr> here to avoid the white line above Projects -->

<h2 id="skills-and-expertise">🛠️ Skills and Expertise</h2>

<!-- Introductory Focus/Throughline Highlight -->
<div class="focus-box">
  <p><strong>Focus:</strong> Medical image analysis (CT/MRI/X‑ray, micro‑CT) and 3D computer vision — from dataset curation to deployed models.</p>
  <p><strong>Throughline:</strong> Ship interpretable, reproducible systems for segmentation, classification, detection, registration, and landmarking on volumetric data.</p>
</div>

<!-- Tech Stack as an icon list -->
<div class="tech-stack">
  <h3>Tech stack at a glance:</h3>
  <ul class="tech-list">
    <li><i class="devicon-python-plain colored"></i> Python</li>
    <li><i class="devicon-pytorch-original colored"></i> PyTorch</li>
    <li><i class="devicon-tensorflow-original colored"></i> TensorFlow/Keras</li>
    <li><i class="devicon-docker-plain colored"></i> Docker</li>
    <li><i class="devicon-amazonwebservices-original colored"></i> AWS</li>
    <li><i class="devicon-googlecloud-plain colored"></i> GCP</li>
    <li><i class="devicon-microsoftsqlserver-plain colored"></i> SQL</li>
    <li><i class="fa-solid fa-cube"></i> NIfTI/DICOM</li>
  </ul>
</div>

<!-- Responsive grid of skill cards -->
<div class="skills-grid">
  <!-- Card 1: Modalities & Data Ops -->
  <div class="skill-card">
    <div class="card-icon"><i class="fa-solid fa-database"></i></div>
    <h3>Modalities &amp; Data Ops</h3>
    <ul>
      <li><strong>Formats &amp; ecosystems:</strong> DICOM, NIfTI; whole‑embryo diceCT; surface meshes (OBJ/PLY).</li>
      <li><strong>Pipelines:</strong> end‑to‑end data loaders, artifact/version tracking, automated reports for accuracy &amp; calibration.</li>
    </ul>
  </div>

  <!-- Card 2: CV/ML Tasks & XAI -->
  <div class="skill-card">
    <div class="card-icon"><i class="fa-solid fa-brain"></i></div>
    <h3>CV/ML Tasks/Algorithms &amp; XAI</h3>
    <ul>
      <li><strong>Core tasks:</strong> 3D segmentation, classification, anomaly detection, and <em>automatic landmarking</em>.</li>
      <li><strong>Architectures:</strong> Vision Transformers, SwinUNETR, 3D U‑Net/UNet++, geometric deep learning (functional maps, DiffusionNet), mesh autoencoders.</li>
      <li><strong>Techniques:</strong> Integrated Gradients, Layerwise Relevance Propagation.</li>
    </ul>
  </div>

  <!-- Card 3: Tooling & Platforms -->
  <div class="skill-card">
    <div class="card-icon"><i class="fa-solid fa-toolbox"></i></div>
    <h3>Tooling &amp; Platforms</h3>
    <ul>
      <li><strong>Med-imaging &amp; 3D:</strong> 3D Slicer/SlicerMorph, VTK/ITK, OpenCV, trimesh.</li>
      <li><strong>Photogrammetry:</strong> OpenDroneMap (NodeODM).</li>
      <li><strong>Programming:</strong> Python, R/Rcpp, C/C++, SQL; PyTorch, PyTorch-Geometric, TensorFlow/Keras; scikit-learn, pandas, NumPy, statsmodels.</li>
    </ul>
  </div>

  <!-- Card 4: MLOps & Reproducibility -->
  <div class="skill-card">
    <div class="card-icon"><i class="fa-solid fa-arrows-rotate"></i></div>
    <h3>MLOps &amp; Reproducibility</h3>
    <ul>
      <li><strong>Stack:</strong> Docker, MLflow, WandB, Git/GitHub Actions; AWS/Azure/GCP for GPU training &amp; inference.</li>
      <li><strong>Practices:</strong> experiment tracking, artifact versioning, config-as-code, CI for data/metrics drift, model cards.</li>
    </ul>
  </div>

  <!-- Card 5: Open-Source & Extensions -->
  <div class="skill-card">
    <div class="card-icon"><i class="fa-solid fa-code-branch"></i></div>
    <h3>Open‑Source &amp; Extensions</h3>
    <ul>
      <li><strong>SlicerPhotogrammetry</strong> (SAM→NodeODM end‑to‑end), <strong>MorphoSourceImport</strong>, <strong>SkyscanReconImport</strong>, <strong>HiResScreenCapture</strong>, <strong>SlicerScriptEditor</strong> — modules adopted for faster, reproducible 3D data processing and visualization.</li>
    </ul>
  </div>

  <!-- Card 6: Stats & Modeling -->
  <div class="skill-card">
    <div class="card-icon"><i class="fa-solid fa-chart-line"></i></div>
    <h3>Stats &amp; Modeling</h3>
    <ul>
      <li>Bayesian &amp; classical inference; variational methods; predictive modeling; statistical shape analysis; evaluation beyond accuracy (AUPRC, calibration, uncertainty).</li>
    </ul>
  </div>
</div>

<!-- no <hr> here either -->

<h2 id="projects">🚀 Featured Work</h2>

<!-- Standard include (no full-bleed wrapper) -->
{% include projects.html %}

<hr>

<h2 id="cv">📄 Curriculum Vitae</h2>
<p><a href="{{ '/assets/docs/Thomas_Oshane_CV.pdf' | relative_url }}" class="nav-button">Download Full CV (PDF)</a></p>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      openEffect: 'zoom',
      closeEffect: 'zoom',
      zoomable: false
    });
  });
</script>
