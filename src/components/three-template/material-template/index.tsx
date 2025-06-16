'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const TreeMaterialTemplate = () => {
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
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, +1000);

    // 立方体の定義 (幅, 高さ, 奥行き)
    const geometry = new THREE.SphereGeometry(300, 30, 30);
    // 色や質感の設定
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    // 定義したオブジェクトを配置
    const box = new THREE.Mesh(geometry, material);
    // シーンに配置
    scene.add(box);

    // 光源の生成と、どこから光を当てるかを設定
    const directionalLight = new THREE.DirectionalLight(0xffffff); // 平行光源。ライトの位置と方向を指定し平行に到達する光
    directionalLight.position.set(1, 1, 1);
    // 作成した光源をシーンに配置
    scene.add(directionalLight);

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
