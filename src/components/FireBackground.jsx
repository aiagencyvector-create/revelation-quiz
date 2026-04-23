import { useEffect, useRef } from 'react';

export default function FireBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Fire particles
    class Ember {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 40;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = -(Math.random() * 1.2 + 0.3);
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
        // Color: mix of deep red, orange, dark amber
        const colors = [
          [180, 40, 20],   // deep red
          [200, 80, 10],   // dark orange
          [160, 60, 15],   // ember
          [120, 20, 10],   // dark crimson
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX + Math.sin(this.life * 0.02) * 0.3;
        this.y += this.speedY;
        this.life++;
        this.opacity = (1 - this.life / this.maxLife) * 0.5;
        this.size *= 0.999;
        if (this.life >= this.maxLife || this.y < -10) this.reset();
      }
      draw(ctx) {
        const [r, g, b] = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${this.opacity})`;
        ctx.fill();
        // Glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${this.opacity * 0.15})`;
        ctx.fill();
      }
    }

    // Floating occult symbols (very subtle, slow, minimal)
    class Symbol {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 16 + 10;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.06 + 0.02; // very subtle
        this.fadeSpeed = Math.random() * 0.0008 + 0.0003;
        this.fadingIn = true;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.003;
        this.driftX = (Math.random() - 0.5) * 0.15;
        this.driftY = (Math.random() - 0.5) * 0.1;
        // Pick a symbol type
        this.type = Math.floor(Math.random() * 5);
      }
      update() {
        if (this.fadingIn) {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= this.maxOpacity) this.fadingIn = false;
        } else {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0) this.reset();
        }
        this.rotation += this.rotSpeed;
        this.x += this.driftX;
        this.y += this.driftY;
      }
      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = `rgba(180, 50, 20, ${this.opacity})`;
        ctx.lineWidth = 0.8;
        const s = this.size;

        switch (this.type) {
          case 0: // Inverted triangle (alchemical)
            ctx.beginPath();
            ctx.moveTo(0, s * 0.6);
            ctx.lineTo(-s * 0.5, -s * 0.4);
            ctx.lineTo(s * 0.5, -s * 0.4);
            ctx.closePath();
            ctx.stroke();
            break;
          case 1: // Eye shape
            ctx.beginPath();
            ctx.ellipse(0, 0, s * 0.5, s * 0.25, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, s * 0.1, 0, Math.PI * 2);
            ctx.stroke();
            break;
          case 2: // Serpent S-curve
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.5);
            ctx.bezierCurveTo(s * 0.4, -s * 0.3, -s * 0.4, s * 0.3, 0, s * 0.5);
            ctx.stroke();
            break;
          case 3: // Broken pentagram (partial)
            for (let i = 0; i < 4; i++) {
              const a1 = (i * 4 * Math.PI) / 5 - Math.PI / 2;
              const a2 = ((i + 1) * 4 * Math.PI) / 5 - Math.PI / 2;
              ctx.beginPath();
              ctx.moveTo(Math.cos(a1) * s * 0.5, Math.sin(a1) * s * 0.5);
              ctx.lineTo(Math.cos(a2) * s * 0.5, Math.sin(a2) * s * 0.5);
              ctx.stroke();
            }
            break;
          case 4: // Chain links (bondage/mark)
            ctx.beginPath();
            ctx.ellipse(-s * 0.2, 0, s * 0.2, s * 0.12, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(s * 0.2, 0, s * 0.2, s * 0.12, 0, 0, Math.PI * 2);
            ctx.stroke();
            break;
        }
        ctx.restore();
      }
    }

    // Initialize
    const particleCount = Math.min(80, Math.floor(canvas.width / 15));
    for (let i = 0; i < particleCount; i++) {
      const p = new Ember();
      p.y = Math.random() * canvas.height; // spread initially
      particles.push(p);
    }

    const symbolCount = 8;
    const symbols = [];
    for (let i = 0; i < symbolCount; i++) {
      symbols.push(new Symbol());
    }

    // Bottom fire glow gradient
    const drawFireGlow = () => {
      const grad = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - 250);
      grad.addColorStop(0, 'rgba(140, 30, 10, 0.12)');
      grad.addColorStop(0.3, 'rgba(100, 20, 5, 0.06)');
      grad.addColorStop(0.7, 'rgba(60, 10, 0, 0.02)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, canvas.height - 250, canvas.width, 250);
    };

    // Side vignette (dark, ominous)
    const drawVignette = () => {
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2,
        canvas.height * 0.2,
        canvas.width / 2, canvas.height / 2,
        canvas.height * 0.9
      );
      grad.addColorStop(0, 'transparent');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawFireGlow();
      drawVignette();

      particles.forEach(p => { p.update(); p.draw(ctx); });
      symbols.forEach(s => { s.update(); s.draw(ctx); });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
