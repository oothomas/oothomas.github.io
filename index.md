---
layout: default
title: "Home"
---

<style>
.nav-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
}
</style>

<nav style="display: flex; justify-content: center; gap: 15px; margin: 20px 0; background-color: #f5f5f5; padding: 10px; border-radius: 8px;">
  <a href="/" class="nav-button">Home</a>
  <a href="/#expertise-skills" class="nav-button">Expertise & Skills</a>
  <a href="/#career-highlights" class="nav-button">Career Highlights</a>
  <a href="/#projects" class="nav-button">Projects</a>
  <a href="/cv/" class="nav-button">CV</a>
  <a href="/#get-in-touch" class="nav-button">Get in Touch</a>
</nav>

# **Oshane O. Thomas, PhD**
Seattle, WA | [LinkedIn](https://www.linkedin.com/in/oshane-o-thomas) | [GitHub](https://github.com/oothomas)

<div style="display: flex; align-items: center;">
    <img src="assets/images/profile.jpg" alt="Oshane O. Thomas" style="width: 150px; border-radius: 8px; margin-right: 20px;">
    <div style="font-size: 18px;">
        I am a computational biologist and machine learning researcher specializing in biological shape analysis, AI-powered phenotyping, and functional morphology.  
        My expertise bridges academic research and industry applications, leveraging deep learning and 3D data processing to extract meaningful insights from morphological datasets.  
    </div>
</div>

---

<h2 id="expertise-skills">🛠️ Expertise & Skills</h2>

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

---

<h2 id="career-highlights">📄 Career Highlights</h2>

🔹 **Postdoctoral Fellow, Seattle Children's Research Institute**  
   - Developing AI-driven **morphometric analysis tools** to study biological shape variation.  
   - Creating **automated pipelines for 3D shape processing** in biomedical imaging.  
   - Leading **SlicerMorph training sessions** to advance the adoption of computational shape analysis.  

🔹 **Research in AI & Shape Analysis**  
   - **Published in PLOS Computational Biology & Journal of Anatomy.**  
   - Developed **novel deep learning frameworks** for shape-based phenotyping.  
   - Applied **functional map-based methods** to automate biological morphology studies.  

🔹 **Machine Learning & Data Science**  
   - **Developed Explainable GaitViT**, a Transformer-based gait classification model.  
   - Created **morphVQ**, an AI pipeline for automated shape matching.  
   - Built **micro-CT segmentation models** for biomedical research.  

---

<h2 id="projects">🚀 Featured Work</h2>
### Interactive Morphospace Tool
[Launch Roden Mandible Morphospace Viewer](assets/docs/projects/interactive_morphospace.html)

### SSC-MorphVQ for Landmark Placement
![Project Image](/assets/images/projects/ssc-morphvq.png "A schematic of the MorphVQ pipeline showing two input shapes, S1 and S2, each processed through a Siamese DiffusionNet to produce shape descriptors. These descriptors are projected onto eigenbases and passed into functional map estimation modules, including a main branch and a complex functional map branch. The figure highlights the integration of spectral and spatial cycle consistency and a regularization block, resulting in multiple functional map outputs and a combined loss function.")
*Adapted from Thomas & Maga "Leveraging Descriptor Learning and Functional Map-based Shape Matching for Automatic Landmark Acquisition" (In Press, Journal of Anatomy), this figure illustrates the enhanced MorphVQ pipeline for automatic landmark acquisition. It integrates Siamese DiffusionNet-based descriptor learning with functional map estimation and cycle consistency modules, streamlining the mapping of complex 3D shapes and improving both accuracy and efficiency in identifying morphological landmarks.*

**Description:** Developed a Spatially and Spectrally Consistent MorphVQ model to enhance automatic landmark acquisition in complex biological shapes.
**Practical Application:** Improves accuracy and reproducibility in morphometric analyses, enabling researchers to handle large-scale anatomical datasets with minimal manual intervention.
**Outcomes:**
- Reduced manual landmarking time by ~50%.
- Improved landmark placement accuracy across diverse taxa.
**Links:**
- [GitHub Repository](https://github.com/oothomas/SSC-MorphVQ)

---

### SlicerMorph Modules and 3D Slicer Extensions
![Project Image](# "Optional alt text for accessibility")
*Brief visual description, e.g. "Screenshot of SlicerMorph modules streamlining micro-CT data processing."*

**Description:** Created and refined a suite of 3D Slicer extensions (MorphoSourceImport, HiResScreenCapture, SkyscanReconImport, SlicerScriptEditor) to streamline micro-CT data processing and visualization.
**Practical Application:** Enables automated workflows and direct MorphoSource integration, beneficial for large-scale morphological research and clinical imaging analyses.
**Outcomes:**
- Reduced data processing time with automated steps.
- Publication-quality visualizations for complex 3D data.
**Links:**
- [MorphoSourceImport Tutorial](https://github.com/SlicerMorph/Tutorials/tree/main/MorphoSourceImport) | [GitHub](https://github.com/SlicerMorph/SlicerMorph/tree/master/MorphoSourceImport)
- [HiResScreenCapture Tutorial](https://github.com/SlicerMorph/Tutorials/tree/main/HiResScreenCapture) | [GitHub](https://github.com/SlicerMorph/SlicerMorph/tree/master/HiResScreenCapture)
- [SkyscanReconImport Tutorial](https://github.com/SlicerMorph/Tutorials/tree/main/SkyscanReconImport) | [GitHub](https://github.com/SlicerMorph/SlicerMorph/tree/master/SkyscanReconImport)
- [SlicerScriptEditor Tutorial](https://github.com/SlicerMorph/Tutorials/tree/main/ScriptEditor) | [GitHub](https://github.com/SlicerMorph/SlicerScriptEditor)

---

### Mouse Embryo micro-CT Image Segmentation with SWIN Transformer
![Project Image](# "Optional alt text for accessibility")
*Brief visual description, e.g. "Segmented 3D model of a mouse embryo highlighting tissue boundaries."*

**Description:** Developed a SWIN UNETR-based segmentation pipeline pretrained on micro-CT data, achieving high accuracy in tissue labeling.
**Practical Application:** Reduces manual segmentation effort, aiding developmental biology and genetics research.
**Outcomes:**
- State-of-the-art segmentation accuracy with fewer training samples.
- Scalable to large embryo imaging datasets.
**Links:**
- [GitHub Repository](#)

---

### Explainable GaitViT: A Transformer-based Classifier for Gait Analysis
![Project Image](# "Optional alt text for accessibility")
*Brief visual description, e.g. "Visual representation of gait cycle phases used in the gait classification model."*

**Description:** Built a transformer-based gait classifier that balances accuracy and explainability.
**Practical Application:** Useful for clinical diagnostics, rehabilitation, and sports science by providing interpretable joint kinematics analysis.
**Outcomes:**
- High classification accuracy on complex locomotor datasets.
- Enhanced interpretability via gradient-weighted relevance propagation.
**Links:**
- [GitHub Repository](https://github.com/oothomas/Explainable-GaitViT)

---

### morphVQ: Deep Learning Pipeline for Morphological Phenotyping
![Project Image](# "Optional alt text for accessibility")
*Brief visual description, e.g. "3D rendering of bone shape variations captured by the morphVQ pipeline."*

**Description:** Created a deep learning pipeline for quantifying bone shape and size across diverse anatomical collections.
**Practical Application:** Streamlines phenotype characterization in evolutionary biology, comparative morphology, and medical imaging.
**Outcomes:**
- Improved reproducibility and scalability for large morphological datasets.
- Integration with functional maps for richer shape descriptors.
**Links:**
- [GitHub Repository](https://github.com/oothomas/morphVQ)

---

### HindSight-VAE: Recurrent VAE for Human Motion Analysis
![Project Image](# "Optional alt text for accessibility")
*Brief visual description, e.g. "Graphical representation of motion sequences learned by the VAE model."*

**Description:** Designed a Variational Autoencoder with Autoregressive Flow for analyzing variable-length human motion sequences.
**Practical Application:** Supports clinical gait analysis, sports performance, and ergonomic assessments by capturing subtle motion differences.
**Outcomes:**
- High accuracy in movement classification and subject identification.
- Demonstrated at AABA 2020, showing feasibility for large-scale biomechanical data analyses.
**Links:**
- [GitHub Repository](https://github.com/oothomas/HindSight-VAE)

---

**Additional Resources:**
- For a comprehensive view of my background, see my [Curriculum Vitae](/cv/).

---

<h2 id="get-in-touch">📩 Get in Touch</h2>
If you'd like to get in touch, please reach out via:
- Email: [oothomas07@gmail.com](mailto:oothomas07@gmail.com)
- LinkedIn: [Oshane O. Thomas](https://www.linkedin.com/in/oshane-o-thomas)

---
