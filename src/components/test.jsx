import React, { useRef, useEffect } from 'react';

const ParticleFall = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function Particle(x, y) {
      this.x = x;
      this.y = y;
      this.size = .1;
      this.speedY = Math.random() * 1.5 + 0.5; // Decreased speed
      this.color = `hsl(0, 0%, ${Math.random() * 100}%)`; // Random shades of gray
      this.angle = Math.random() * Math.PI * 2; // Random initial angle
      this.speedX = Math.random() * 2 - 1; // Random horizontal speed
    }

    function createParticles() {
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(Math.random() * canvas.width, 0));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.y += p.speedY;
        p.x += Math.cos(p.angle) * p.speedX; // Update x position based on angle
        p.angle += 0.01; // Increment angle to create spiral effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = p.color;
        ctx.fill();
        if (p.y > canvas.height) {
          particles.splice(i, 1);
          i--;
        }
      }
      createParticles();
      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }, []);

  return <canvas style={{width:'100%', height:'100vh',position:'fixed'}}  ref={canvasRef} />;
};

export default ParticleFall;

