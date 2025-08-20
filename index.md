---
layout: default
title: "Home"
---

<!-- GLightbox (dependency-free lightbox for the project images) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

<!-- Project gallery styles -->
<link rel="stylesheet" href="{{ '/assets/css/projects.css' | relative_url }}">

<style>
/* Nav buttons (yours, kept intact) */
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

<hr>

<h2 id="skills-and-expertise">🛠️ Skills and Expertise</h2>

### AI & Computational Morphology
Deep learning for biological shape analysis, automated landmarking, and morphospace visualization.

### 3D Data Processing & Visualization
Advanced geometric morphometrics, micro-CT data segmentation, functional shape analysis.

### Machine Learning & AI
Transformer-based classification, generative AI, functional map-based shape matching.

### Software Development & Tooling
Developer of **3D Slicer extensions** and open-source tools for biological and medical imaging research.

### Interdisciplinary Research & Leadership
Experience collaborating across **biomechanics, evolutionary biology, and AI** to develop cutting-edge solutions.

<hr>

<h2 id="projects">🚀 Featured Work</h2>

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
