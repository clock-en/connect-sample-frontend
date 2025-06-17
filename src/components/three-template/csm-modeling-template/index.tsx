'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader, OrbitControls } from 'three/examples/jsm/Addons.js';

export const TreeCsmModelingTemplate = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = 960;
    const height = 540;

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    const containerElm = containerRef.current;
    containerElm?.appendChild(renderer.domElement);

    // シーンとは3D空間のことで、3Dオブジェクトや光源などの置き場所
    const scene = new THREE.Scene();
    // どの視点から空間を撮影するか (画角, アスペクト比)
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 100);
    camera.position.set(1, 1, 1);

    // カメラコントローラーを作成
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    // 平行光源を作成
    // 上から照らす
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // 横からの光源も用意する
    const directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(1, 0, 1);
    scene.add(directionalLight2);

    const tick = () => {
      // レンダリング
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    const loader = new GLTFLoader();
    // GLTFファイルのパスを指定
    loader
      .loadAsync(
        '/assets/models/csm-lotte-container/glb/ASSET_1750137025_1427641.glb'
      )
      .then((gltf) => {
        const model = gltf.scene;
        scene.add(model);

        console.log(model);
        renderer.render(scene, camera);
        model.scale.set(30, 30, 30);
        tick();
      });

    return () => {
      containerElm?.removeChild(renderer.domElement);
    };
  }, [containerRef]);

  return <div ref={containerRef} />;
};
