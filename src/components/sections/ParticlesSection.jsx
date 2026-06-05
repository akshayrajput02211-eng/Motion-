import { useEffect, useRef } from "react";

export default function ParticleNoiseSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 700;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.baseX = this.x;
        this.baseY = this.y;

        this.size = Math.random() * 4 + 2;

        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > canvas.width || this.x < 0)
          this.vx *= -1;

        if (this.y > canvas.height || this.y < 0)
          this.vy *= -1;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < mouse.radius) {
            const force =
              (mouse.radius - distance) /
              mouse.radius;

            this.x -= dx * force * 0.03;
            this.y -= dy * force * 0.03;
          }
        }
      }

      draw() {
        ctx.beginPath();

        ctx.shadowBlur = 20;
        ctx.shadowColor = "#38bdf8";

        ctx.fillStyle = "#38bdf8";

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }
    }

    const particles = [];

    for (let i = 0; i < 130; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (
          let b = a + 1;
          b < particles.length;
          b++
        ) {
          const dx =
            particles[a].x - particles[b].x;

          const dy =
            particles[a].y - particles[b].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 120) {
            ctx.beginPath();

            ctx.strokeStyle = `rgba(
              56,
              189,
              248,
              ${1 - distance / 120}
            )`;

            ctx.lineWidth = 1;

            ctx.moveTo(
              particles[a].x,
              particles[a].y
            );

            ctx.lineTo(
              particles[b].x,
              particles[b].y
            );

            ctx.stroke();
          }
        }
      }
    };

    let animationId;

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();

      animationId =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, []);

  return (
    <section
      className="
      relative
      h-[700px]
      overflow-hidden
      rounded-[40px]
      bg-black
    "
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="
        absolute
        inset-0
        w-full
        h-full
      "
      />

      {/* Noise Layer */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.06]
        pointer-events-none
      "
        style={{
          backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,.1) 1px, transparent 1px),
          radial-gradient(circle at 80% 60%, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Glow Background */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        w-[700px]
        h-[700px]
        bg-sky-500/20
        rounded-full
        blur-[180px]
        -translate-x-1/2
        -translate-y-1/2
      "
      />

      {/* Content */}
      <div
        className="
        relative
        z-10
        flex
        flex-col
        justify-center
        items-center
        h-full
        text-center
        text-white
      "
      >
        <h2
          className="
          text-7xl
          font-bold
          mb-6
        "
        >
          Particle Universe
        </h2>

        <p
          className="
          text-xl
          text-slate-300
          max-w-2xl
        "
        >
          Interactive Particle System with
          Dynamic Noise, Mouse Repulsion and
          Real-Time Connections.
        </p>
      </div>
    </section>
  );
}