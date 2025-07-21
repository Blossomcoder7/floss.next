import React from "react";
import useScene from "../elements/useScene";
import * as Three from "three";

const Cube3D = () => {
  const { camera, renderer, scene } = useScene();
  const geometry = new Three.RingGeometry(50, 60, 2, 1);
  const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new Three.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);
  return (
    <div>
      <div className=""></div>
    </div>
  );
};

export default Cube3D;
