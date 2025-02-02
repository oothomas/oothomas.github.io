// src/main.js

// Import vtk.js modules from the installed package.
import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkHttpDataSetReader from '@kitware/vtk.js/IO/Core/HttpDataSetReader';
import vtkColorTransferFunction from '@kitware/vtk.js/Rendering/Core/ColorTransferFunction';
import vtkScalarBarActor from '@kitware/vtk.js/Rendering/Core/ScalarBarActor';
import vtkDataArray from '@kitware/vtk.js/Common/Core/DataArray';

// 1. Create two side-by-side vtk.js render windows (disable optional orientation widget)
const fullScreenRenderWindow1 = vtkFullScreenRenderWindow.newInstance({
  rootContainer: document.getElementById('view1'),
  background: [0.2, 0.2, 0.2],
  enableOrientationWidget: false
});
const renderer1 = fullScreenRenderWindow1.getRenderer();
const renderWindow1 = fullScreenRenderWindow1.getRenderWindow();

const fullScreenRenderWindow2 = vtkFullScreenRenderWindow.newInstance({
  rootContainer: document.getElementById('view2'),
  background: [0.2, 0.2, 0.2],
  enableOrientationWidget: false
});
const renderer2 = fullScreenRenderWindow2.getRenderer();
const renderWindow2 = fullScreenRenderWindow2.getRenderWindow();

// 2. Share the same camera between both renderers.
const camera = renderer1.getActiveCamera();
renderer2.setActiveCamera(camera);

// Update both render windows together.
function updateBoth() {
  renderWindow1.render();
  renderWindow2.render();
}
renderWindow1.getInteractor().onAnimation(updateBoth);
renderWindow1.getInteractor().onEndAnimation(updateBoth);
renderWindow2.getInteractor().onAnimation(updateBoth);
renderWindow2.getInteractor().onEndAnimation(updateBoth);

// 3. Set up pipeline objects: readers, mappers, and actors.
const reader1 = vtkHttpDataSetReader.newInstance();
const reader2 = vtkHttpDataSetReader.newInstance();

const mapper1 = vtkMapper.newInstance();
const actor1 = vtkActor.newInstance();
actor1.setMapper(mapper1);

const mapper2 = vtkMapper.newInstance();
const actor2 = vtkActor.newInstance();
actor2.setMapper(mapper2);

// 4. Create a color transfer function (lookup table).
const lut = vtkColorTransferFunction.newInstance();
lut.addRGBPoint(0.0, 0.267, 0.005, 0.329);
lut.addRGBPoint(0.33, 0.128, 0.568, 0.551);
lut.addRGBPoint(0.66, 0.369, 0.788, 0.382);
lut.addRGBPoint(1.0, 0.993, 0.906, 0.144);

mapper1.setLookupTable(lut);
mapper1.setColorModeToMapScalars();
mapper1.setScalarModeToUsePointFieldData();

mapper2.setScalarModeToUsePointFieldData();
mapper2.setColorModeToDirectScalars();

// 5. Add a scalar bar (color legend) to renderer1.
const scalarBarActor = vtkScalarBarActor.newInstance();
scalarBarActor.setScalarsToColors(lut);
renderer1.addActor(scalarBarActor);

// 6. Define a smoothing function for mesh2's color array.
function smoothColorArray(polyData, colorArray) {
  const polys = polyData.getPolys().getData();
  const nPoints = polyData.getPoints().getNumberOfPoints();
  const adjacency = new Array(nPoints).fill(null).map(() => []);
  let idx = 0;
  while (idx < polys.length) {
    const nPts = polys[idx++];
    const cellVerts = polys.slice(idx, idx + nPts);
    idx += nPts;
    for (let a = 0; a < cellVerts.length; a++) {
      for (let b = a + 1; b < cellVerts.length; b++) {
        adjacency[cellVerts[a]].push(cellVerts[b]);
        adjacency[cellVerts[b]].push(cellVerts[a]);
      }
    }
  }
  const newColor = new Float32Array(colorArray.length);
  for (let v = 0; v < nPoints; v++) {
    const neighbors = adjacency[v].slice();
    neighbors.push(v);
    let r = 0, g = 0, b = 0;
    for (const nb of neighbors) {
      r += colorArray[3 * nb + 0];
      g += colorArray[3 * nb + 1];
      b += colorArray[3 * nb + 2];
    }
    const count = neighbors.length;
    newColor[3 * v + 0] = r / count;
    newColor[3 * v + 1] = g / count;
    newColor[3 * v + 2] = b / count;
  }
  return newColor;
}

// 7. Fetch JSON data, build the pipelines, and render.
const urlOfJson = "https://oothomas.github.io/assets/data/output_vtk_data.json";
fetch(urlOfJson)
  .then(response => response.json())
  .then(data => {
    const textEnc = new TextEncoder();
    const mesh1Buffer = textEnc.encode(JSON.stringify(data.mesh1)).buffer;
    const mesh2Buffer = textEnc.encode(JSON.stringify(data.mesh2)).buffer;

    reader1.parseAsArrayBuffer(mesh1Buffer);
    reader2.parseAsArrayBuffer(mesh2Buffer);

    const mesh1PolyData = reader1.getOutputData();
    const mesh2PolyData = reader2.getOutputData();
    const vertexMapping = data.vertexMapping;

    // (A) Create a scalar array for mesh1 (values from 0 to 1).
    const nVerts1 = mesh1PolyData.getPoints().getNumberOfPoints();
    const scalars1 = new Float32Array(nVerts1);
    for (let i = 0; i < nVerts1; i++) {
      scalars1[i] = i / (nVerts1 - 1);
    }
    const scalarData1 = vtkDataArray.newInstance({
      name: "mesh1_scalars",
      values: scalars1,
      numberOfComponents: 1,
    });
    mesh1PolyData.getPointData().setScalars(scalarData1);

    // (B) Transfer colors from mesh1 to mesh2 using vertex mapping.
    const nVerts2 = mesh2PolyData.getPoints().getNumberOfPoints();
    const colors2 = new Float32Array(nVerts2 * 3);
    const counts2 = new Uint32Array(nVerts2);
    for (let i = 0; i < nVerts1; i++) {
      const mapped = vertexMapping[i];
      if (mapped >= 0 && mapped < nVerts2) {
        const c = lut.getColor(scalars1[i]); // returns [r, g, b]
        colors2[3 * mapped + 0] += c[0];
        colors2[3 * mapped + 1] += c[1];
        colors2[3 * mapped + 2] += c[2];
        counts2[mapped]++;
      }
    }
    for (let v = 0; v < nVerts2; v++) {
      if (counts2[v] > 0) {
        colors2[3 * v + 0] /= counts2[v];
        colors2[3 * v + 1] /= counts2[v];
        colors2[3 * v + 2] /= counts2[v];
      }
    }

    // Optionally, smooth mesh2 colors.
    const smoothedColors2 = smoothColorArray(mesh2PolyData, colors2);
    const colorData2 = vtkDataArray.newInstance({
      name: "mesh2_colors",
      values: smoothedColors2,
      numberOfComponents: 3,
    });
    mesh2PolyData.getPointData().setScalars(colorData2);

    // Connect polydata to mappers and add actors to renderers.
    mapper1.setInputData(mesh1PolyData);
    mapper2.setInputData(mesh2PolyData);
    renderer1.addActor(actor1);
    renderer2.addActor(actor2);

    // Reset cameras and render.
    renderer1.resetCamera();
    renderer2.resetCamera();
    renderWindow1.render();
    renderWindow2.render();
  })
  .catch(err => {
    console.error("Failed to load JSON:", err);
  });
