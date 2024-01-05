import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ModelViewer = ({src}) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({alpha:true});

  const containerRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();

    // Load the GLB model
    loader.load(
      src,
      (gltf) => {
        // Adjust the position, rotation, or scale of the loaded model if needed
        gltf.scene.position.set(-2, 0, 0);
        gltf.scene.rotation.set(0, 0, 0);
        gltf.scene.scale.set(1, 1, 1);

        // Add the loaded model to the scene
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('Error loading GLB model', error);
      }
    );

    // Set up camera and renderer
    camera.position.z = 5;
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer to the container
    containerRef.current.appendChild(renderer.domElement);

    // Animation/rendering loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Perform any animations or updates here

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      // Clean up resources, if needed
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return <div ref={containerRef} />;
};

export default ModelViewer;
