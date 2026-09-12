(() => {
  "use strict";

  const TRAIL_COUNT = 20;
  const PARTICLE_SIZE = 5;
  const SPAWN_OPACITY = 0.7;
  const LIFE_MIN = 400;
  const LIFE_MAX = 600;
  const ATTRACT_RADIUS = (5 * 96) / 2.54;
  const ATTRACT_STRENGTH = 0.05;
  const MIN_VIEWPORT = 1024;

  const root = document.documentElement;
  const finePointer = window.matchMedia("(pointer: fine)");

  let canvas = null;
  let ctx = null;
  let particles = [];
  let rafId = null;
  let running = false;
  let spawning = false;
  let palette = null;
  let dash = null;
  let dashPrevPosition = "";
  let dashPrevZIndex = "";

  const mouse = { x: 0, y: 0, hasMoved: false };
  let coordsDirty = false;
  let resizeTicking = false;

  const lerp = (a, b, t) => a + (b - a) * t;

  const parseCssColor = (raw) => {
    const value = String(raw).trim();
    if (!value) return null;

    const hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(value);
    if (hex) {
      let h = hex[1];
      if (h.length === 3) {
        h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      }
      return {
        r: parseInt(h.slice(0, 2), 16),
        g: parseInt(h.slice(2, 4), 16),
        b: parseInt(h.slice(4, 6), 16),
      };
    }

    const rgb = /^rgba?\(\s*([0-9.]+)\s*[,\s]\s*([0-9.]+)\s*[,\s]\s*([0-9.]+)/i.exec(
      value
    );
    if (rgb) {
      return { r: Number(rgb[1]), g: Number(rgb[2]), b: Number(rgb[3]) };
    }

    return null;
  };

  const readPalette = () => {
    const styles = getComputedStyle(root);
    const purple = parseCssColor(styles.getPropertyValue("--color-purple-strong"));
    const blue = parseCssColor(styles.getPropertyValue("--color-blue-strong"));
    if (!purple || !blue) return null;
    return { purple, blue };
  };

  const mix = (from, to, t) => ({
    r: Math.round(lerp(from.r, to.r, t)),
    g: Math.round(lerp(from.g, to.g, t)),
    b: Math.round(lerp(from.b, to.b, t)),
  });

  const isReducedMotion = () => {
    const attr = root.getAttribute("data-reduced-motion");
    if (attr === "true") return true;
    if (attr === "false") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  const canRun = () =>
    finePointer.matches &&
    window.innerWidth >= MIN_VIEWPORT &&
    !isReducedMotion();

  const assignTrailColours = () => {
    if (!palette) return;
    const last = Math.max(particles.length - 1, 1);
    particles.forEach((particle, index) => {
      particle.color = mix(palette.purple, palette.blue, index / last);
    });
  };

  const sizeCanvas = () => {
    if (!canvas || !ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const spawnParticle = () => {
    if (!palette) return;
    particles.unshift({
      x: mouse.x + (Math.random() - 0.5) * 6,
      y: mouse.y + (Math.random() - 0.5) * 6,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      lag: 0.012 + Math.random() * 0.06,
      born: performance.now(),
      life: LIFE_MIN + Math.random() * (LIFE_MAX - LIFE_MIN),
      opacity: SPAWN_OPACITY,
      color: palette.purple,
    });
    if (particles.length > TRAIL_COUNT) {
      particles.length = TRAIL_COUNT;
    }
    assignTrailColours();
  };

  const onMouseMove = (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.hasMoved = true;
    coordsDirty = true;
  };

  const onResize = () => {
    if (resizeTicking) return;
    resizeTicking = true;
    requestAnimationFrame(() => {
      resizeTicking = false;
      if (!running) return;
      if (window.innerWidth < MIN_VIEWPORT || !finePointer.matches) {
        spawning = false;
        return;
      }
      sizeCanvas();
    });
  };

  const restoreDashStacking = () => {
    if (!dash) return;
    dash.style.position = dashPrevPosition;
    dash.style.zIndex = dashPrevZIndex;
    dash = null;
  };

  const teardown = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onResize);

    if (canvas && canvas.parentNode) {
      canvas.parentNode.removeChild(canvas);
    }

    restoreDashStacking();

    canvas = null;
    ctx = null;
    particles = [];
    running = false;
    spawning = false;
    coordsDirty = false;
    mouse.hasMoved = false;
    palette = null;
  };

  const drawParticle = (particle) => {
    const lifeT = Math.min(1, (performance.now() - particle.born) / particle.life);
    const radius = (PARTICLE_SIZE / 2) * (1 - lifeT);
    if (radius <= 0.15) return;

    const { r, g, b } = particle.color;
    const glow = radius * 2.2;
    const gradient = ctx.createRadialGradient(
      particle.x,
      particle.y,
      0,
      particle.x,
      particle.y,
      glow
    );
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${particle.opacity})`);
    gradient.addColorStop(0.45, `rgba(${r}, ${g}, ${b}, ${particle.opacity * 0.45})`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(particle.x, particle.y, glow, 0, Math.PI * 2);
    ctx.fill();
  };

  const tick = () => {
    rafId = null;
    if (!running || !ctx) return;

    if (
      isReducedMotion() ||
      window.innerWidth < MIN_VIEWPORT ||
      !finePointer.matches
    ) {
      spawning = false;
    }

    if (spawning && mouse.hasMoved && coordsDirty && particles.length < TRAIL_COUNT) {
      spawnParticle();
    }
    coordsDirty = false;

    const now = performance.now();
    const next = [];

    for (let i = 0; i < particles.length; i += 1) {
      const particle = particles[i];
      const age = now - particle.born;
      const lifeT = age / particle.life;
      if (lifeT >= 1) continue;

      particle.opacity = SPAWN_OPACITY * (1 - lifeT);
      if (particle.opacity <= 0) continue;

      particle.x += particle.vx;
      particle.y += particle.vy;

      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const dist = Math.hypot(dx, dy);
      if (mouse.hasMoved && dist > 0 && dist < ATTRACT_RADIUS) {
        const pull = (1 - dist / ATTRACT_RADIUS) * ATTRACT_STRENGTH;
        particle.vx += (dx / dist) * pull;
        particle.vy += (dy / dist) * pull;
      }

      particle.vx *= 0.96;
      particle.vy *= 0.96;
      particle.x += (mouse.x - particle.x) * particle.lag;
      particle.y += (mouse.y - particle.y) * particle.lag;

      next.push(particle);
    }

    particles = next;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < particles.length; i += 1) {
      drawParticle(particles[i]);
    }

    if (!spawning && particles.length === 0) {
      teardown();
      return;
    }

    rafId = requestAnimationFrame(tick);
  };

  const init = () => {
    if (running && spawning) return;

    if (running) {
      teardown();
    }

    if (!canRun()) return;

    palette = readPalette();
    if (!palette) return;

    dash = document.querySelector("main.dash");
    if (dash) {
      dashPrevPosition = dash.style.position;
      dashPrevZIndex = dash.style.zIndex;
      dash.style.position = "relative";
      dash.style.zIndex = "1";
    }

    canvas = document.createElement("canvas");
    canvas.id = "firefly-canvas";
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "0";

    ctx = canvas.getContext("2d");
    if (!ctx) {
      canvas = null;
      restoreDashStacking();
      return;
    }

    document.body.insertBefore(canvas, document.body.firstChild);
    sizeCanvas();

    particles = [];
    spawning = true;
    running = true;
    coordsDirty = false;
    mouse.hasMoved = false;

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    rafId = requestAnimationFrame(tick);
  };

  const destroy = () => {
    if (!running) return;
    spawning = false;
    if (particles.length === 0) {
      teardown();
    }
  };

  window.CampOSFirefly = { init, destroy };
})();
