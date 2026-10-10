import { particleShapes } from './data.js';

let canvas, ctx;
let particles = [];
let targetPoints = []; // Array of { x, y, color }
let currentShapeIndex = 0;
let animationState = 'denoising'; // denoising | generating | done | resetting
let stateTime = 0;
let holdTimer = 0;
let mouse = { x: -1000, y: -1000, active: false };

// Offscreen 400x400 canvas for target point generation
let offCanvas, offCtx;

export function initParticleEngine() {
  canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  offCanvas = document.createElement('canvas');
  offCanvas.width = 400;
  offCanvas.height = 400;
  offCtx = offCanvas.getContext('2d');

  setupCanvasSize();
  window.addEventListener('resize', setupCanvasSize);

  setupMouseInteraction();
  setupStatusPanelControls();
  setupPhotoUpload();

  // Create initial particle pool
  createParticles();

  // Load first shape
  loadShape(0);

  // Main Animation Loop
  let lastTime = performance.now();
  function loop(now) {
    let dt = (now - lastTime) / 1000;
    lastTime = now;
    if (dt > 0.05) dt = 0.05; // clamp delta time for smooth physics

    updateParticles(dt);
    drawParticles();

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

/* ==========================================================================
   1. Canvas Sizing & Particle Creation
   ========================================================================== */
function setupCanvasSize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.scale(dpr, dpr);

  // If particle count needs adjusting on mobile vs desktop
  const isMobile = window.innerWidth <= 700;
  const targetCount = isMobile ? 1500 : 3200;

  if (particles.length !== targetCount) {
    createParticles(targetCount);
  }
}

function createParticles(count) {
  const isMobile = window.innerWidth <= 700;
  const numParticles = count || (isMobile ? 1500 : 3200);

  particles = [];
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 40,
      vy: (Math.random() - 0.5) * 40,
      tx: Math.random() * window.innerWidth,
      ty: Math.random() * window.innerHeight,
      color: getRandomThemeColor(),
      delay: Math.random() * 1.2, // Random start delay for gradual formation
      size: Math.random() > 0.8 ? 2.5 : 2.0,
      reached: false,
      burstVx: 0,
      burstVy: 0
    });
  }
}

function getRandomThemeColor() {
  const styles = getComputedStyle(document.body);
  const accent = styles.getPropertyValue('--accent-color').trim() || '#52e0ff';
  const secondary = styles.getPropertyValue('--secondary-color').trim() || '#ff9ad5';
  const text = styles.getPropertyValue('--text-color').trim() || '#e8f1ff';

  const r = Math.random();
  if (r < 0.6) return accent;
  if (r < 0.85) return secondary;
  return text;
}

/* ==========================================================================
   2. Shape Target Generation (400x400 Offscreen Canvas Sampling)
   ========================================================================== */
function loadShape(index) {
  currentShapeIndex = index;
  const shape = particleShapes[index];

  // Render vector shape on offscreen 400x400 canvas
  generateOffscreenShape(shape.type);

  // Sample target points from offscreen canvas
  sampleTargetPoints();

  // Assign target points to particles
  assignTargets();

  // Transition state
  animationState = 'denoising';
  stateTime = 0;
  holdTimer = 0;

  // Update Status Panel UI
  updateStatusPanelUI(shape);
}

function generateOffscreenShape(type) {
  offCtx.clearRect(0, 0, 400, 400);
  offCtx.fillStyle = '#ffffff';
  offCtx.strokeStyle = '#ffffff';
  offCtx.lineWidth = 12;
  offCtx.textAlign = 'center';
  offCtx.textBaseline = 'middle';

  if (type === 'monogram') {
    offCtx.font = '900 160px "IBM Plex Mono", VT323, monospace';
    offCtx.fillText('OM', 200, 200);
  } else if (type === 'brackets') {
    offCtx.font = '900 130px VT323, monospace';
    offCtx.fillText('</>', 200, 200);
  } else if (type === 'network') {
    // 3-layer neural network
    const layers = [
      [{ x: 80, y: 120 }, { x: 80, y: 200 }, { x: 80, y: 280 }],
      [{ x: 200, y: 80 }, { x: 200, y: 160 }, { x: 200, y: 240 }, { x: 200, y: 320 }],
      [{ x: 320, y: 140 }, { x: 320, y: 260 }]
    ];

    // Draw connecting lines
    offCtx.lineWidth = 6;
    for (let l = 0; l < layers.length - 1; l++) {
      for (const n1 of layers[l]) {
        for (const n2 of layers[l + 1]) {
          offCtx.beginPath();
          offCtx.moveTo(n1.x, n1.y);
          offCtx.lineTo(n2.x, n2.y);
          offCtx.stroke();
        }
      }
    }

    // Draw node circles
    for (const layer of layers) {
      for (const node of layer) {
        offCtx.beginPath();
        offCtx.arc(node.x, node.y, 22, 0, Math.PI * 2);
        offCtx.fill();
      }
    }
  } else if (type === 'phone') {
    // Phone UI Outline
    offCtx.lineWidth = 10;
    // Outer phone body
    roundRect(offCtx, 110, 40, 180, 320, 24);
    offCtx.stroke();
    // Top Notch
    offCtx.fillRect(160, 52, 80, 8);
    // Home indicator bar
    offCtx.fillRect(160, 342, 80, 6);
    // UI layout cards
    roundRect(offCtx, 130, 80, 140, 70, 8);
    offCtx.stroke();
    roundRect(offCtx, 130, 165, 140, 70, 8);
    offCtx.stroke();
    roundRect(offCtx, 130, 250, 140, 70, 8);
    offCtx.stroke();
  } else if (type === 'cube') {
    // Wireframe isometric cube
    const cx = 200, cy = 200, r = 120;
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI / 3) - Math.PI / 6;
      points.push({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) });
    }

    offCtx.lineWidth = 8;
    // Outer hexagon
    offCtx.beginPath();
    offCtx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < 6; i++) offCtx.lineTo(points[i].x, points[i].y);
    offCtx.closePath();
    offCtx.stroke();

    // Center inner Y lines
    offCtx.beginPath();
    offCtx.moveTo(cx, cy);
    offCtx.lineTo(points[1].x, points[1].y);
    offCtx.moveTo(cx, cy);
    offCtx.lineTo(points[3].x, points[3].y);
    offCtx.moveTo(cx, cy);
    offCtx.lineTo(points[5].x, points[5].y);
    offCtx.stroke();
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function sampleTargetPoints() {
  const imgData = offCtx.getImageData(0, 0, 400, 400);
  const data = imgData.data;

  targetPoints = [];
  const step = 4; // Step size for sampling

  for (let y = 0; y < 400; y += step) {
    for (let x = 0; x < 400; x += step) {
      const idx = (y * 400 + x) * 4;
      if (data[idx + 3] > 128) {
        targetPoints.push({
          x: x,
          y: y,
          color: null // Use dynamic theme colors
        });
      }
    }
  }
}

function assignTargets() {
  if (targetPoints.length === 0) return;

  // Center offset to position 400x400 shape in center of screen
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const offsetX = (screenWidth - 400) / 2;
  const offsetY = (screenHeight - 400) / 2;

  // Shuffle target points for organic generation
  const shuffled = [...targetPoints].sort(() => Math.random() - 0.5);

  particles.forEach((p, idx) => {
    const target = shuffled[idx % shuffled.length];
    p.tx = target.x + offsetX;
    p.ty = target.y + offsetY;
    p.delay = Math.random() * 1.0;
    p.reached = false;
    if (target.color) {
      p.color = target.color;
    } else {
      p.color = getRandomThemeColor();
    }
  });
}

/* ==========================================================================
   3. Custom Photo Upload Feature (120x120 Downsampled Full-Color Portrait)
   ========================================================================== */
function setupPhotoUpload() {
  const photoInput = document.getElementById('photo-input');
  const uploadBtn = document.getElementById('btn-upload-photo');

  if (uploadBtn && photoInput) {
    uploadBtn.addEventListener('click', () => photoInput.click());

    photoInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const img = new Image();
      img.onload = () => {
        processUploadedImage(img);
        URL.revokeObjectURL(img.src);
      };
      img.src = URL.createObjectURL(file);
    });
  }
}

function processUploadedImage(img) {
  // Downsample image to 120x120 square offscreen
  offCtx.clearRect(0, 0, 400, 400);

  const size = 120;
  const aspect = img.width / img.height;
  let sw = img.width, sh = img.height, sx = 0, sy = 0;

  if (aspect > 1) {
    sw = img.height;
    sx = (img.width - img.height) / 2;
  } else {
    sh = img.width;
    sy = (img.height - img.width) / 2;
  }

  // Draw downsampled photo onto temporary offscreen 120x120
  const photoCanvas = document.createElement('canvas');
  photoCanvas.width = size;
  photoCanvas.height = size;
  const pCtx = photoCanvas.getContext('2d');

  pCtx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size);
  const imgData = pCtx.getImageData(0, 0, size, size);
  const data = imgData.data;

  // Sample points with brightness probability
  targetPoints = [];
  const scale = 3.2; // Scale 120px to ~384px on screen

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      if (a < 50) continue;

      const brightness = (r + g + b) / 3;
      // Higher brightness / opacity = higher probability of sampling
      if (Math.random() < 0.75 + (brightness / 255) * 0.25) {
        targetPoints.push({
          x: x * scale,
          y: y * scale,
          color: `rgb(${r},${g},${b})`
        });
      }
    }
  }

  assignTargets();

  animationState = 'denoising';
  stateTime = 0;
  holdTimer = 0;

  updateStatusPanelUI({
    name: "Custom Portrait Photo",
    prompt: "Local portrait image processed into full-color particle lattice."
  });
}

/* ==========================================================================
   4. Particle Physics Update Loop (Spring k=20, Damping ~9)
   ========================================================================== */
function updateParticles(dt) {
  stateTime += dt;

  // Check prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Spring physics constants
  const k = 20; // spring constant
  const damping = 9; // damping factor

  let arrivedCount = 0;

  // Repelling cursor radius
  const repellantRadius = 95;

  particles.forEach((p) => {
    if (prefersReduced) {
      // Reduced motion: snap immediately to target
      p.x = p.tx;
      p.y = p.ty;
      p.reached = true;
      arrivedCount++;
      return;
    }

    if (animationState === 'denoising') {
      // Noise drifting phase before springing
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      // Bounce off screen boundaries
      if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

      if (stateTime > 0.4) {
        animationState = 'generating';
        stateTime = 0;
      }
    } else if (animationState === 'generating' || animationState === 'done') {
      // Apply spring force towards target once start delay passed
      if (stateTime > p.delay) {
        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 3) p.reached = true;

        // Spring acceleration
        const ax = dx * k - p.vx * damping;
        const ay = dy * k - p.vy * damping;

        p.vx += ax * dt;
        p.vy += ay * dt;

        p.x += p.vx * dt;
        p.y += p.vy * dt;
      } else {
        // Drifting slightly while waiting for delay
        p.x += p.vx * 0.2 * dt;
        p.y += p.vy * 0.2 * dt;
      }

      if (p.reached) arrivedCount++;
    } else if (animationState === 'resetting') {
      // Burst reset phase
      p.x += p.burstVx * dt;
      p.y += p.burstVy * dt;
    }

    // Interactive mouse repulsion
    if (mouse.active) {
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

      if (mdist < repellantRadius && mdist > 0) {
        const force = (repellantRadius - mdist) / repellantRadius * 120;
        p.x += (mdx / mdist) * force * dt;
        p.y += (mdy / mdist) * force * dt;
      }
    }
  });

  // Calculate Progress Percentage
  const progressPercent = Math.min(100, Math.floor((arrivedCount / particles.length) * 100));
  updateProgressBar(progressPercent);

  // State Machine Transitions
  if (animationState === 'generating' && (progressPercent >= 88 || stateTime > 3.0)) {
    animationState = 'done';
    stateTime = 0;
  } else if (animationState === 'done') {
    holdTimer += dt;
    if (holdTimer >= 3.0) { // Hold for ~3 seconds
      triggerResetAndNext();
    }
  } else if (animationState === 'resetting') {
    if (stateTime > 0.6) {
      loadShape((currentShapeIndex + 1) % particleShapes.length);
    }
  }
}

function triggerResetAndNext() {
  animationState = 'resetting';
  stateTime = 0;

  // Give outward burst velocities
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  particles.forEach((p) => {
    const angle = Math.atan2(p.y - cy, p.x - cx) + (Math.random() - 0.5);
    const speed = 300 + Math.random() * 400;
    p.burstVx = Math.cos(angle) * speed;
    p.burstVy = Math.sin(angle) * speed;
  });
}

/* ==========================================================================
   5. Drawing Particles
   ========================================================================== */
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  }
}

/* ==========================================================================
   6. Mouse Interactions & Status Panel Controls
   ========================================================================== */
function setupMouseInteraction() {
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Clicking empty canvas jumps to next shape
  canvas.addEventListener('click', (e) => {
    // Only jump if click is on canvas background and not on top UI
    const target = e.target;
    if (target === canvas) {
      triggerResetAndNext();
    }
  });
}

function setupStatusPanelControls() {
  const btnPrev = document.getElementById('btn-prev-shape');
  const btnNext = document.getElementById('btn-next-shape');
  const btnRegen = document.getElementById('btn-regen-shape');

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      const newIdx = (currentShapeIndex - 1 + particleShapes.length) % particleShapes.length;
      loadShape(newIdx);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      const newIdx = (currentShapeIndex + 1) % particleShapes.length;
      loadShape(newIdx);
    });
  }

  if (btnRegen) {
    btnRegen.addEventListener('click', () => {
      // Re-scatter particles and generate current shape again
      particles.forEach((p) => {
        p.x = Math.random() * window.innerWidth;
        p.y = Math.random() * window.innerHeight;
      });
      loadShape(currentShapeIndex);
    });
  }
}

function updateStatusPanelUI(shape) {
  const promptEl = document.getElementById('gen-prompt');
  const badgeEl = document.getElementById('gen-state-badge');

  if (promptEl) promptEl.textContent = `prompt> ${shape.prompt || shape.name}`;
  if (badgeEl) badgeEl.textContent = animationState;
}

function updateProgressBar(percentage) {
  const barEl = document.getElementById('gen-progress-bar');
  const textEl = document.getElementById('gen-progress-text');
  const badgeEl = document.getElementById('gen-state-badge');

  if (barEl) barEl.style.width = `${percentage}%`;
  if (textEl) textEl.textContent = `${percentage}%`;
  if (badgeEl) badgeEl.textContent = animationState;
}
