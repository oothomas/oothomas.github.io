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
<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">

{% include nav.html %}

<!-- Skills section banner -->
<img src="{{ '/assets/images/page_banner.png' | relative_url }}"
     alt="Skills banner"
     width="1200" height="314"
     style="display:block; margin:0 auto; width:100%; max-width:1200px; height:auto;">

<h2 id="publications">📚 Publications</h2>
<h3>Peer-Reviewed Publications</h3>
<div class="pub-list">
  <div class="publication">
    <h4>Trustworthy detection of exencephaly in high-throughput micro-CT embryo screens with focal-loss transformers</h4>
    <p>Thomas, O. O., Roston, R., Shen, H., &amp; Maga, A. M. (2025). <em>BioRxiv</em> (In Review: PLOS Computational Biology). <a href="https://doi.org/10.1101/2025.08.12.669840" target="_blank">https://doi.org/10.1101/2025.08.12.669840</a></p>
  </div>
  <div class="publication">
    <h4>SlicerMorph photogrammetry: An open-source photogrammetry workflow for reconstructing 3D models</h4>
    <p>Thomas, O. O., Zhang, C., &amp; Maga, A. M. (2025). <em>Biology Open</em>, 14, bio062126. In Press. <a href="https://doi.org/10.1242/bio.062126" target="_blank">https://doi.org/10.1242/bio.062126</a></p>
  </div>
  <div class="publication">
    <h4>Leveraging descriptor learning and functional map-based shape matching for automated anatomical landmarking in mouse mandibles</h4>
    <p>Thomas, O. O., &amp; Maga, A. M. (2025). <em>Journal of Anatomy</em>, 00, 1–17. <a href="https://doi.org/10.1111/joa.14196" target="_blank">https://doi.org/10.1111/joa.14196</a></p>
  </div>
  <div class="publication">
    <h4>Automated morphological phenotyping using learned shape descriptors and functional maps: A novel approach to geometric morphometrics</h4>
    <p>Thomas, O. O., Shen, H., Raaum, R. L., Harcourt-Smith, W. H. E., Polk, J. D., &amp; Hasegawa-Johnson, M. (2023). <em>PLOS Computational Biology</em>, 19(1), e1009061. <a href="https://doi.org/10.1371/journal.pcbi.1009061" target="_blank">https://doi.org/10.1371/journal.pcbi.1009061</a></p>
  </div>
</div>

<!-- no <hr> here to avoid the white line above Projects -->

<h2 id="projects">🚀 Featured Work</h2>

<!-- Standard include (no full-bleed wrapper) -->
{% include projects.html %}

<!-- no <hr> here either -->

<h2 id="skills-and-expertise">🛠️ Skills and Expertise</h2>
<!-- Introductory Focus/Throughline Highlight -->
<div class="focus-box">
  <p class="focus-text"><strong>Focus:</strong> Medical image analysis (CT/MRI/X-ray, micro-CT) and 3D computer vision — from dataset curation to deployed models.</p>
</div>

<style>
.focus-text {
  font-size: 1.2rem;   /* larger than normal text */
  line-height: 1.6;    /* improves readability */
}
</style>
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
