import React, { useState, useRef, useEffect } from 'react';
import Home from './Home';
import Chats from './Chats';
const particlesArray = [];

export default function App() {
  const [page, setPage] = useState('Home');
  const canvasRef = useRef(null);

  const mouse = {
    x: undefined,
    y: undefined,
  }

  useEffect(() => {
    let canvas;
    let c;
    let animationFrameId;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    const colors = ['#ebebeb', '#e1e2e6', '#c4b3a9', '#787775'];
    class Particle {
      constructor(c) {
        this.c = c;
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.05;
      }

      draw() {
        this.c.fillStyle = this.color;
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.c.fill();
      }
    }

    const updateMousePosition = (event) => {
      let rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      particlesArray.push(new Particle(c));
    };

    if (page === 'Home') {
      canvas = canvasRef.current;
      if (canvas) {
        c = canvas.getContext('2d');
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', updateMousePosition);
      }

      function handleParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
          if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1)
            i--;
          }
        }
      }

      function animate() {
        c.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        animationFrameId = requestAnimationFrame(animate);
      }
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', updateMousePosition);
      }
    };
  }, [page])

  return (
    <div id="App">
      <div>
        {(page === 'Home') && (<Home setPage={(e) => { setPage(e); }} canvasRef={canvasRef} />)}
        {(page === 'Chats') && (<Chats setPage={(e) => { setPage(e); }} />)}
      </div>
    </div>
  );
}
