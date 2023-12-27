import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Spiral = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    new OrbitControls(camera, renderer.domElement);

    const particles = new THREE.Group();
    scene.add(particles);

    const geometry = new THREE.SphereGeometry(0.005, 32, 72);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 1000; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = Math.random() * 10 - 5;
      mesh.position.y = Math.random() * 10 - 5;
      mesh.position.z = Math.random() * 10 - 5;
      particles.add(mesh);
    }

    const animate = function () {
      requestAnimationFrame(animate);
      particles.children.forEach(p => {
        p.position.y -= 0.01;
        if (p.position.y < -5) p.position.y = 5;
      });
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div style={{width:'100%', height:'100vh',position:'fixed'}}  ref={mountRef} />;
};

export default Spiral;
