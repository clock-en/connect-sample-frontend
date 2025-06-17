'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const TreeMouseEventTemplate = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = 960;
    const height = 540;

    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      const mouseLocation = watchMouseMove(event);
      if (!mouseLocation) return;
      const { x, y, w, h } = mouseLocation;

      // -1〜+1の範囲で現在のマウス座標を登録する
      mouse.x = (x / w) * 2 - 1;
      mouse.y = -(y / h) * 2 + 1;
    };

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    const containerElm = containerRef.current;
    containerElm?.appendChild(renderer.domElement);

    // シーンとは3D空間のことで、3Dオブジェクトや光源などの置き場所
    const scene = new THREE.Scene();
    // どの視点から空間を撮影するか (画角, アスペクト比)
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 立方体の定義 (幅, 高さ, 奥行き)
    const geometry = new THREE.BoxGeometry(50, 50, 50);

    const meshList = [...Array(200)].map(() => {
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 800;
      mesh.position.y = (Math.random() - 0.5) * 800;
      mesh.position.z = (Math.random() - 0.5) * 800;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      scene.add(mesh);

      return mesh;
    });

    // 光源の生成と、どこから光を当てるかを設定
    const directionalLight = new THREE.DirectionalLight(0xffffff); // 平行光源。ライトの位置と方向を指定し平行に到達する光
    directionalLight.position.set(1, 1, 1);
    // 作成した光源をシーンに配置
    scene.add(directionalLight);

    // 環境光源
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    // レイキャストを作成
    const raycaster = new THREE.Raycaster();
    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    const tick = () => {
      // レイキャスト = マウス位置からまっすぐに伸びる光線ベクトルを生成
      raycaster.setFromCamera(mouse, camera);

      // その光線とぶつかったオブジェクトを得る
      const intersects = raycaster.intersectObjects(meshList);

      meshList.map((mesh) => {
        // 交差しているオブジェクトが1つ以上存在し、
        // 交差しているオブジェクトの1番目(最前面)のものだったら
        if (intersects.length > 0 && mesh === intersects[0].object) {
          // 色を赤くする
          mesh.material.color.setHex(0xff0000);
        } else {
          // それ以外は元の色にする
          mesh.material.color.setHex(0xffffff);
        }
      });

      // レンダリング
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

const watchMouseMove = (event: MouseEvent) => {
  const element = event.currentTarget as HTMLElement;
  if (!element) return;

  // canvas要素上のXY座標
  const x = event.clientX - element.offsetLeft;
  const y = event.clientY - element.offsetTop;
  // canvas要素の幅・高さ
  const w = element.offsetWidth;
  const h = element.offsetHeight;

  return { x, y, w, h };
};
