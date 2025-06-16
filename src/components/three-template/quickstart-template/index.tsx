'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const TreeQuickstartTemplate = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = 960;
    const height = 540;

    const renderer = new THREE.WebGLRenderer();
    const containerElm = containerRef.current;
    containerElm?.appendChild(renderer.domElement);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンとは3D空間のことで、3Dオブジェクトや光源などの置き場所
    const scene = new THREE.Scene();
    // どの視点から空間を撮影するか (画角, アスペクト比)
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 立方体の定義 (幅, 高さ, 奥行き)
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    // 色や質感の設定 (ここではデフォルトのものを使用)
    const material = new THREE.MeshNormalMaterial();
    // 定義したオブジェクトを配置
    const box = new THREE.Mesh(geometry, material);
    // シーンに配置
    scene.add(box);

    const tick = () => {
      box.rotation.x += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    };

    tick();

    return () => {
      containerElm?.removeChild(renderer.domElement);
    };
  }, [containerRef]);

  return <div ref={containerRef} />;
};
