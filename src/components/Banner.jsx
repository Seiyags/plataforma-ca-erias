// Banner.js
import { useEffect, useRef } from 'react';

const Banner = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    // Ajustar el tamaño del canvas al tamaño del contenedor
    canvas.width = container.offsetWidth * window.devicePixelRatio;
    canvas.height = container.offsetHeight * window.devicePixelRatio;

    canvas.style.width = `${container.offsetWidth}px`;
    canvas.style.height = `${container.offsetHeight}px`;

    class Particle {
      constructor(x, y, effect) {
        this.originX = x;
        this.originY = y;
        this.effect = effect;
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.ctx = this.effect.ctx;
        this.ctx.fillStyle = 'white';
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.2;
        this.friction = 0.95;
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
        this.size = Math.floor(Math.random() * 2); // Reducir tamaño de las partículas
        this.draw();
      }

      draw() {
        this.ctx.beginPath();
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
      }

      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance * 8;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        this.draw();
      }
    }

    class Effect {
      constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.ctx = context;
        this.particlesArray = [];
        this.gap = 10; // Reducir gap para más partículas
        this.mouse = { radius: 3000, x: 0, y: 0 };

        window.addEventListener('mousemove', (e) => {
          const rect = canvas.getBoundingClientRect();
          this.mouse.x = (e.clientX - rect.left) * window.devicePixelRatio;
          this.mouse.y = (e.clientY - rect.top) * window.devicePixelRatio;
        });

        window.addEventListener('resize', () => {
          canvas.width = container.offsetWidth * window.devicePixelRatio;
          canvas.height = container.offsetHeight * window.devicePixelRatio;
          this.width = container.offsetWidth;
          this.height = container.offsetHeight;
          canvas.style.width = `${container.offsetWidth}px`;
          canvas.style.height = `${container.offsetHeight}px`;

          this.particlesArray = [];
          this.init();
        });

        this.init();
      }

      init() {
        for (let x = 0; x < this.width; x += this.gap) {
          for (let y = 0; y < this.height; y += this.gap) {
            this.particlesArray.push(new Particle(x, y, this));
          }
        }
      }

      update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.particlesArray.length; i++) {
          this.particlesArray[i].update();
        }
      }
    }

    const effect = new Effect(canvas.width, canvas.height, ctx);

    function animate() {
      effect.update();
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-gray-900"
      style={{
        overflow: 'hidden',
        height: '200px', // Aquí puedes ajustar la altura del banner
      }}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
    </div>
  );
};

export default Banner;
