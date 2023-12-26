import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Spiral = () => {
  const containerRef = useRef();

 

  useEffect(() => {
 
  }, []);

  return <div style={{position:'fixed',zIndex:-1}} ref={containerRef}></div>;
};



export default Spiral;
