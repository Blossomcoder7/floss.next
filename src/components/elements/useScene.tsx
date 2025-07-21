import * as Three from "three";

const scene = new Three.Scene();
const useScene = () => {
  const camera = new Three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new Three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  return {
    scene,
    camera,
    renderer,
  };
};

export default useScene;
