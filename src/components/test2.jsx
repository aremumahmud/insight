import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Render() {
  const containerRef = useRef();

  useEffect(() => {
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputEncoding = THREE.sRGBEncoding; // Use sRGBEncoding instead of SRGBColorSpace

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);

    containerRef.current.appendChild(renderer.domElement);

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(4, 5, 11);
    camera.lookAt(0, 0, 0);

    // Create ground
    const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      side: THREE.DoubleSide,
    });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    scene.add(groundMesh);

    // Create spot light
    const spotLight = new THREE.SpotLight(0xffffff, 3, 100);
    spotLight.position.set(0, 25, 0);
    scene.add(spotLight);

    // Animation function
    function animate() {
      requestAnimationFrame(animate);

      // Update your animations or other logic here

      renderer.render(scene, camera);
    }

    // Start animation loop
    animate();

    // Handle window resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} />;
}

export default Render;
