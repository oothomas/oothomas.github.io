---
layout: default
title: "About Me"
permalink: /about/
---

{% include nav.html %}

<style>
/* Profile Introduction Card Styles */
.intro-card {
  background-color: #fff;
  font-family: 'Inter', 'Open Sans', system-ui, sans-serif;
  color: #000;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  /* Fade-in animation */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideIn 0.6s ease-out 0.1s forwards;
}
@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.profile-photo {
  width: 150px;
  max-width: 100%;
  border-radius: 8px;
  border: 4px solid #2a63a4;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  margin-right: 1.5rem;
}
.profile-summary {
  flex: 1;
}
.profile-summary p {
  line-height: 1.6;
  margin: 0 0 1rem 0;
}
.profile-summary hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 1rem 0;
}
@media (max-width: 600px) {
  .intro-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .profile-photo {
    margin: 0 0 1rem 0;
    width: 50%;
  }
  .profile-summary {
    max-width: 100%;
  }
}
@media (prefers-color-scheme: dark) {
  .intro-card {
    background-color: #fff;
  }
}
</style>

<section class="intro-card">
  <img src="{{ 'assets/images/profile.jpg' | relative_url }}" alt="Portrait of Oshane O. Thomas" class="profile-photo" />
  <div class="profile-summary">
    <p>I am a computational biologist and machine learning researcher with a passion for decoding biological form. I specialize in biological shape analysis, AI-powered phenotyping, and functional morphology, using deep learning and advanced 3D imaging to quantify the rich information embedded in anatomical structures. My expertise spans both academic research and industry applications. I develop novel algorithms and pipelines that push the boundaries of scientific discovery while also translating these advances into practical tools for biomedical and evolutionary studies.</p>
    <hr>
    <p>I'm particularly drawn to questions about how shape encodes biological information—whether it reveals evolutionary patterns, reflects developmental processes, or signals the onset of disease. In pursuing these questions, I've worked with diverse 3D datasets across species and scales (from high-resolution scans of mouse bones to primate skeletal collections and clinical human images) while focusing on extracting quantitative phenotypes from complex morphology. A hallmark of my work is an emphasis on open science and tool-building: I develop robust, open-source software (such as 3D Slicer extensions) that enables high-throughput, reproducible shape analysis.</p>
    <hr>
    <p>Through interdisciplinary collaborations across evolutionary biology, biomechanics, and AI, I aim to transform cutting-edge computational methods into accessible tools and translational applications. Ultimately, I strive to advance both scientific understanding and human health through this work.</p>
  </div>
</section>
