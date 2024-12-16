---
layout: default
title: "Projects"
permalink: /projects/
---

# Projects

Explore a selection of my projects that bridge computational anatomy, machine learning, and 3D shape analysis. Each project highlights tangible results, scalability, and industry-relevant applications.

## Interactive Morphospace Tool
[Launch Roden Mandible Morphospace Viewer](assets/docs/projects/interactive_morphospace.html)

## SSC-MorphVQ for Landmark Placement
![Project Image](/assets/images/projects/ssc-morphvq.png "A schematic of the MorphVQ pipeline showing two input shapes, S1 and S2, each processed through a Siamese DiffusionNet to produce shape descriptors. These descriptors are projected onto eigenbases and passed into functional map estimation modules, including a main branch and a complex functional map branch. The figure highlights the integration of spectral and spatial cycle consistency and a regularization block, resulting in multiple functional map outputs and a combined loss function.")  
*Adapted from Thomas & Maga "Leveraging Descriptor Learning and Functional Map-based Shape Matching for Automatic Landmark Acquisition" (In Press, Journal of Anatomy), this figure illustrates the enhanced MorphVQ pipeline for automatic landmark acquisition. It integrates Siamese DiffusionNet-based descriptor learning with functional map estimation and cycle consistency modules, streamlining the mapping of complex 3D shapes and improving both accuracy and efficiency in identifying morphological landmarks."*

**Description:** Developed a Spatially and Spectrally Consistent MorphVQ model to enhance automatic landmark acquisition in complex biological shapes.  
**Practical Application:** Improves accuracy and reproducibility in morphometric analyses, enabling researchers to handle large-scale anatomical datasets with minimal manual intervention.  
**Outcomes:**  
- Reduced manual landmarking time by ~50%.  
- Improved landmark placement accuracy across diverse taxa.  
**Links:**  
- [GitHub Repository](https://github.com/oothomas/SSC-MorphVQ)

---

## SlicerMorph Modules and 3D Slicer Extensions
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

## Mouse Embryo micro-CT Image Segmentation with SWIN Transformer
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

## Explainable GaitViT: A Transformer-based Classifier for Gait Analysis
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

## morphVQ: Deep Learning Pipeline for Morphological Phenotyping
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

## HindSight-VAE: Recurrent VAE for Human Motion Analysis
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
- Interested in collaborating or learning more? [Contact Me](/contact/).
