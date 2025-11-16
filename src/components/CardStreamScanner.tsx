import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const codeChars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]<>;:,._-+=!@#$%^&*|\\/\"'`~?";

class CardStreamController {
  container: HTMLElement;
  cardLine: HTMLElement;
  speedIndicator: HTMLElement | null;
  position: number;
  velocity: number;
  direction: number;
  isAnimating: boolean;
  isDragging: boolean;
  lastTime: number;
  lastMouseX: number;
  mouseVelocity: number;
  friction: number;
  minVelocity: number;
  containerWidth: number;
  cardLineWidth: number;

  constructor(container: HTMLElement, cardLine: HTMLElement, speedIndicator: HTMLElement | null) {
    this.container = container;
    this.cardLine = cardLine;
    this.speedIndicator = speedIndicator;
    this.position = 0;
    this.velocity = 120;
    this.direction = -1;
    this.isAnimating = true;
    this.isDragging = false;
    this.lastTime = 0;
    this.lastMouseX = 0;
    this.mouseVelocity = 0;
    this.friction = 0.95;
    this.minVelocity = 30;
    this.containerWidth = 0;
    this.cardLineWidth = 0;
    this.init();
  }

  init() {
    this.populateCardLine();
    this.calculateDimensions();
    this.setupEventListeners();
    this.updateCardPosition();
    this.animate();
    this.startPeriodicUpdates();
  }

  calculateDimensions() {
    this.containerWidth = this.container.offsetWidth;
    const cardWidth = 400;
    const cardGap = 60;
    const cardCount = this.cardLine.children.length;
    this.cardLineWidth = (cardWidth + cardGap) * cardCount;
  }

  setupEventListeners() {
    this.cardLine.addEventListener("mousedown", (e) => this.startDrag(e));
    document.addEventListener("mousemove", (e) => this.onDrag(e));
    document.addEventListener("mouseup", () => this.endDrag());

    this.cardLine.addEventListener(
      "touchstart",
      (e) => this.startDrag(e.touches[0]),
      { passive: false }
    );
    document.addEventListener("touchmove", (e) => this.onDrag(e.touches[0]), {
      passive: false,
    });
    document.addEventListener("touchend", () => this.endDrag());

    this.cardLine.addEventListener("wheel", (e) => this.onWheel(e));
    this.cardLine.addEventListener("selectstart", (e) => e.preventDefault());
    this.cardLine.addEventListener("dragstart", (e) => e.preventDefault());

    window.addEventListener("resize", () => this.calculateDimensions());
  }

  startDrag(e: MouseEvent | Touch) {
    e.preventDefault();

    this.isDragging = true;
    this.isAnimating = false;
    this.lastMouseX = e.clientX;
    this.mouseVelocity = 0;

    const transform = window.getComputedStyle(this.cardLine).transform;
    if (transform !== "none") {
      const matrix = new DOMMatrix(transform);
      this.position = matrix.m41;
    }

    this.cardLine.style.animation = "none";
    this.cardLine.classList.add("dragging");

    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  }

  onDrag(e: MouseEvent | Touch) {
    if (!this.isDragging) return;
    e.preventDefault();

    const deltaX = e.clientX - this.lastMouseX;
    this.position += deltaX;
    this.mouseVelocity = deltaX * 60;
    this.lastMouseX = e.clientX;

    this.cardLine.style.transform = `translateX(${this.position}px)`;
    this.updateCardClipping();
  }

  endDrag() {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.cardLine.classList.remove("dragging");

    if (Math.abs(this.mouseVelocity) > this.minVelocity) {
      this.velocity = Math.abs(this.mouseVelocity);
      this.direction = this.mouseVelocity > 0 ? 1 : -1;
    } else {
      this.velocity = 120;
    }

    this.isAnimating = true;
    this.updateSpeedIndicator();

    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  }

  animate() {
    const currentTime = performance.now();
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    if (this.isAnimating && !this.isDragging) {
      if (this.velocity > this.minVelocity) {
        this.velocity *= this.friction;
      } else {
        this.velocity = Math.max(this.minVelocity, this.velocity);
      }

      this.position += this.velocity * this.direction * deltaTime;
      this.updateCardPosition();
      this.updateSpeedIndicator();
    }

    requestAnimationFrame(() => this.animate());
  }

  updateCardPosition() {
    const containerWidth = this.containerWidth;
    const cardLineWidth = this.cardLineWidth;

    if (this.position < -cardLineWidth) {
      this.position = containerWidth;
    } else if (this.position > containerWidth) {
      this.position = -cardLineWidth;
    }

    this.cardLine.style.transform = `translateX(${this.position}px)`;
    this.updateCardClipping();
  }

  updateSpeedIndicator() {
    if (this.speedIndicator) {
      this.speedIndicator.textContent = Math.round(this.velocity).toString();
    }
  }

  toggleAnimation() {
    this.isAnimating = !this.isAnimating;
  }

  resetPosition() {
    this.position = this.containerWidth;
    this.velocity = 120;
    this.direction = -1;
    this.isAnimating = true;
    this.isDragging = false;

    this.cardLine.style.animation = "none";
    this.cardLine.style.transform = `translateX(${this.position}px)`;
    this.cardLine.classList.remove("dragging");

    this.updateSpeedIndicator();
  }

  changeDirection() {
    this.direction *= -1;
    this.updateSpeedIndicator();
  }

  onWheel(e: WheelEvent) {
    e.preventDefault();

    const scrollSpeed = 20;
    const delta = e.deltaY > 0 ? scrollSpeed : -scrollSpeed;

    this.position += delta;
    this.updateCardPosition();
    this.updateCardClipping();
  }

  generateCode(width: number, height: number) {
    // Random animated characters - numbers, letters, symbols
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    const randInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomChar = () => chars[randInt(0, chars.length - 1)];

    // Generate random animated text with mixed characters
    let out = "";
    for (let row = 0; row < height; row++) {
      let line = "";
      for (let col = 0; col < width; col++) {
        // Mix of random characters - more numbers and symbols for that "data stream" look
        if (Math.random() < 0.3) {
          // Sometimes add spaces for readability
          line += " ";
        } else if (Math.random() < 0.6) {
          // Mostly numbers
          line += randInt(0, 9).toString();
        } else if (Math.random() < 0.8) {
          // Some letters
          line += getRandomChar();
        } else {
          // Symbols
          line += "!@#$%^&*()_+-=[]{}|;:,.<>?/~`"[randInt(0, 31)];
        }
      }
      out += line + (row < height - 1 ? "\n" : "");
    }
    return out;
  }

  calculateCodeDimensions(cardWidth: number, cardHeight: number) {
    const fontSize = 11;
    const lineHeight = 13;
    const charWidth = 6;
    const width = Math.floor(cardWidth / charWidth);
    const height = Math.floor(cardHeight / lineHeight);
    return { width, height, fontSize, lineHeight };
  }

  createCardWrapper(index: number) {
    const wrapper = document.createElement("div");
    wrapper.className = "card-wrapper";

    const normalCard = document.createElement("div");
    normalCard.className = "card card-normal";

    const cardImages = [
      "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b55e654d1341fb06f8_4.1.png",
      "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5a080a31ee7154b19_1.png",
      "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5c1e4919fd69672b8_3.png",
      "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5f6a5e232e7beb4be_2.png",
      "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5bea2f1b07392d936_4.png",
    ];

    const cardImage = document.createElement("img");
    cardImage.className = "card-image";
    cardImage.src = cardImages[index % cardImages.length];
    cardImage.alt = "Credit Card";

    cardImage.onerror = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 400;
      canvas.height = 250;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 400, 250);
        gradient.addColorStop(0, "#667eea");
        gradient.addColorStop(1, "#764ba2");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 400, 250);
        cardImage.src = canvas.toDataURL();
      }
    };

    normalCard.appendChild(cardImage);

    const asciiCard = document.createElement("div");
    asciiCard.className = "card card-ascii";

    const asciiContent = document.createElement("div");
    asciiContent.className = "ascii-content";

    const { width, height, fontSize, lineHeight } =
      this.calculateCodeDimensions(400, 250);
    asciiContent.style.fontSize = fontSize + "px";
    asciiContent.style.lineHeight = lineHeight + "px";
    asciiContent.textContent = this.generateCode(width, height);

    asciiCard.appendChild(asciiContent);
    wrapper.appendChild(normalCard);
    wrapper.appendChild(asciiCard);

    return wrapper;
  }

  updateCardClipping() {
    const scannerX = window.innerWidth / 2;
    const scannerWidth = 8;
    const scannerLeft = scannerX - scannerWidth / 2;
    const scannerRight = scannerX + scannerWidth / 2;
    let anyScanningActive = false;

    document.querySelectorAll(".card-wrapper").forEach((wrapper) => {
      const rect = wrapper.getBoundingClientRect();
      const cardLeft = rect.left;
      const cardRight = rect.right;
      const cardWidth = rect.width;

      const normalCard = wrapper.querySelector(".card-normal") as HTMLElement;
      const asciiCard = wrapper.querySelector(".card-ascii") as HTMLElement;

      if (normalCard && asciiCard) {
        if (cardLeft < scannerRight && cardRight > scannerLeft) {
          anyScanningActive = true;
          const scannerIntersectLeft = Math.max(scannerLeft - cardLeft, 0);
          const scannerIntersectRight = Math.min(
            scannerRight - cardLeft,
            cardWidth
          );

          const normalClipRight = (scannerIntersectLeft / cardWidth) * 100;
          const asciiClipLeft = (scannerIntersectRight / cardWidth) * 100;

          normalCard.style.setProperty("--clip-right", `${normalClipRight}%`);
          asciiCard.style.setProperty("--clip-left", `${asciiClipLeft}%`);

          if (!wrapper.hasAttribute("data-scanned") && scannerIntersectLeft > 0) {
            wrapper.setAttribute("data-scanned", "true");
            const scanEffect = document.createElement("div");
            scanEffect.className = "scan-effect";
            wrapper.appendChild(scanEffect);
            setTimeout(() => {
              if (scanEffect.parentNode) {
                scanEffect.parentNode.removeChild(scanEffect);
              }
            }, 600);
          }
        } else {
          if (cardRight < scannerLeft) {
            normalCard.style.setProperty("--clip-right", "100%");
            asciiCard.style.setProperty("--clip-left", "100%");
          } else if (cardLeft > scannerRight) {
            normalCard.style.setProperty("--clip-right", "0%");
            asciiCard.style.setProperty("--clip-left", "0%");
          }
          wrapper.removeAttribute("data-scanned");
        }
      }
    });

    if ((window as any).setScannerScanning) {
      (window as any).setScannerScanning(anyScanningActive);
    }
  }

  updateAsciiContent() {
    document.querySelectorAll(".ascii-content").forEach((content) => {
      // Update more frequently for animation effect
      if (Math.random() < 0.4) {
        const { width, height } = this.calculateCodeDimensions(400, 250);
        content.textContent = this.generateCode(width, height);
      } else {
        // Partial update - scramble some characters for continuous animation
        const currentText = content.textContent || "";
        if (currentText.length > 0) {
          const chars = currentText.split("");
          // Randomly change 5-15% of characters
          const changeCount = Math.floor(chars.length * (0.05 + Math.random() * 0.1));
          const charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
          
          for (let i = 0; i < changeCount; i++) {
            const index = Math.floor(Math.random() * chars.length);
            if (chars[index] !== "\n" && chars[index] !== " ") {
              chars[index] = charSet[Math.floor(Math.random() * charSet.length)];
            }
          }
          content.textContent = chars.join("");
        }
      }
    });
  }

  populateCardLine() {
    this.cardLine.innerHTML = "";
    const cardsCount = 30;
    for (let i = 0; i < cardsCount; i++) {
      const cardWrapper = this.createCardWrapper(i);
      this.cardLine.appendChild(cardWrapper);
    }
  }

  startPeriodicUpdates() {
    // Update ASCII content more frequently for smoother animation
    setInterval(() => {
      this.updateAsciiContent();
    }, 100); // Changed from 200ms to 100ms for faster animation

    const updateClipping = () => {
      this.updateCardClipping();
      requestAnimationFrame(updateClipping);
    };
    updateClipping();
  }
}

class ParticleSystem {
  scene: THREE.Scene | null;
  camera: THREE.OrthographicCamera | null;
  renderer: THREE.WebGLRenderer | null;
  particles: THREE.Points | null;
  particleCount: number;
  canvas: HTMLCanvasElement;
  velocities: Float32Array | null;
  alphas: Float32Array | null;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = null;
    this.particleCount = 400;
    this.canvas = canvas;
    this.velocities = null;
    this.alphas = null;
    this.init();
  }

  init() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.OrthographicCamera(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      125,
      -125,
      1,
      1000
    );
    this.camera.position.z = 100;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, 250);
    this.renderer.setClearColor(0x000000, 0);

    this.createParticles();

    this.animate();

    window.addEventListener("resize", () => this.onWindowResize());
  }

  createParticles() {
    if (!this.scene) return;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    const velocities = new Float32Array(this.particleCount);

    const canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const half = canvas.width / 2;
    const hue = 217;

    const gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
    gradient.addColorStop(0.025, "#fff");
    gradient.addColorStop(0.1, `hsl(${hue}, 61%, 33%)`);
    gradient.addColorStop(0.25, `hsl(${hue}, 64%, 6%)`);
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(half, half, half, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);

    for (let i = 0; i < this.particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * window.innerWidth * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
      positions[i * 3 + 2] = 0;

      colors[i * 3] = 1;
      colors[i * 3 + 1] = 1;
      colors[i * 3 + 2] = 1;

      const orbitRadius = Math.random() * 200 + 100;
      sizes[i] = (Math.random() * (orbitRadius - 60) + 60) / 8;

      velocities[i] = Math.random() * 60 + 30;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    this.velocities = velocities;

    const alphas = new Float32Array(this.particleCount);
    for (let i = 0; i < this.particleCount; i++) {
      alphas[i] = (Math.random() * 8 + 2) / 10;
    }
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
    this.alphas = alphas;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: texture },
        size: { value: 15.0 },
      },
      vertexShader: `
        attribute float alpha;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float size;
        
        void main() {
          vAlpha = alpha;
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying float vAlpha;
        varying vec3 vColor;
        
        void main() {
          gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  animate() {
    if (!this.renderer || !this.scene || !this.camera || !this.particles) return;

    requestAnimationFrame(() => this.animate());

    if (this.particles && this.velocities && this.alphas) {
      const positions = this.particles.geometry.attributes.position.array as Float32Array;
      const alphas = this.particles.geometry.attributes.alpha.array as Float32Array;
      const time = Date.now() * 0.001;

      for (let i = 0; i < this.particleCount; i++) {
        positions[i * 3] += this.velocities[i] * 0.016;

        if (positions[i * 3] > window.innerWidth / 2 + 100) {
          positions[i * 3] = -window.innerWidth / 2 - 100;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
        }

        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.5;

        const twinkle = Math.floor(Math.random() * 10);
        if (twinkle === 1 && alphas[i] > 0) {
          alphas[i] -= 0.05;
        } else if (twinkle === 2 && alphas[i] < 1) {
          alphas[i] += 0.05;
        }

        alphas[i] = Math.max(0, Math.min(1, alphas[i]));
      }

      this.particles.geometry.attributes.position.needsUpdate = true;
      this.particles.geometry.attributes.alpha.needsUpdate = true;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  onWindowResize() {
    if (!this.camera || !this.renderer) return;

    this.camera.left = -window.innerWidth / 2;
    this.camera.right = window.innerWidth / 2;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, 250);
  }

  destroy() {
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.particles && this.scene) {
      this.scene.remove(this.particles);
      this.particles.geometry.dispose();
      this.particles.material.dispose();
    }
  }
}

class ParticleScanner {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  animationId: number | null;
  w: number;
  h: number;
  particles: any[];
  count: number;
  maxParticles: number;
  intensity: number;
  lightBarX: number;
  lightBarWidth: number;
  fadeZone: number;
  scanTargetIntensity: number;
  scanTargetParticles: number;
  scanTargetFadeZone: number;
  scanningActive: boolean;
  baseIntensity: number;
  baseMaxParticles: number;
  baseFadeZone: number;
  currentIntensity: number;
  currentMaxParticles: number;
  currentFadeZone: number;
  transitionSpeed: number;
  gradientCanvas: HTMLCanvasElement | null;
  gradientCtx: CanvasRenderingContext2D | null;
  currentGlowIntensity: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Could not get 2d context");
    this.ctx = ctx;
    this.animationId = null;

    this.w = window.innerWidth;
    this.h = 300;
    this.particles = [];
    this.count = 0;
    this.maxParticles = 800;
    this.intensity = 0.8;
    this.lightBarX = this.w / 2;
    this.lightBarWidth = 3;
    this.fadeZone = 60;

    this.scanTargetIntensity = 1.8;
    this.scanTargetParticles = 2500;
    this.scanTargetFadeZone = 35;

    this.scanningActive = false;

    this.baseIntensity = this.intensity;
    this.baseMaxParticles = this.maxParticles;
    this.baseFadeZone = this.fadeZone;

    this.currentIntensity = this.intensity;
    this.currentMaxParticles = this.maxParticles;
    this.currentFadeZone = this.fadeZone;
    this.transitionSpeed = 0.05;
    this.gradientCanvas = null;
    this.gradientCtx = null;
    this.currentGlowIntensity = 1;

    this.setupCanvas();
    this.createGradientCache();
    this.initParticles();
    this.animate();

    window.addEventListener("resize", () => this.onResize());
  }

  setupCanvas() {
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.canvas.style.width = this.w + "px";
    this.canvas.style.height = this.h + "px";
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  onResize() {
    this.w = window.innerWidth;
    this.lightBarX = this.w / 2;
    this.setupCanvas();
  }

  createGradientCache() {
    this.gradientCanvas = document.createElement("canvas");
    this.gradientCtx = this.gradientCanvas.getContext("2d");
    if (!this.gradientCtx) return;

    this.gradientCanvas.width = 16;
    this.gradientCanvas.height = 16;

    const half = this.gradientCanvas.width / 2;
    const gradient = this.gradientCtx.createRadialGradient(
      half,
      half,
      0,
      half,
      half,
      half
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, "rgba(196, 181, 253, 0.8)");
    gradient.addColorStop(0.7, "rgba(139, 92, 246, 0.4)");
    gradient.addColorStop(1, "transparent");

    this.gradientCtx.fillStyle = gradient;
    this.gradientCtx.beginPath();
    this.gradientCtx.arc(half, half, half, 0, Math.PI * 2);
    this.gradientCtx.fill();
  }

  random(min: number, max?: number) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }
    return Math.floor(Math.random() * (max! - min + 1)) + min;
  }

  randomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  createParticle() {
    const intensityRatio = this.intensity / this.baseIntensity;
    const speedMultiplier = 1 + (intensityRatio - 1) * 1.2;
    const sizeMultiplier = 1 + (intensityRatio - 1) * 0.7;

    return {
      x:
        this.lightBarX +
        this.randomFloat(-this.lightBarWidth / 2, this.lightBarWidth / 2),
      y: this.randomFloat(0, this.h),

      vx: this.randomFloat(0.2, 1.0) * speedMultiplier,
      vy: this.randomFloat(-0.15, 0.15) * speedMultiplier,

      radius: this.randomFloat(0.4, 1) * sizeMultiplier,
      alpha: this.randomFloat(0.6, 1),
      decay: this.randomFloat(0.005, 0.025) * (2 - intensityRatio * 0.5),
      originalAlpha: 0,
      life: 1.0,
      time: 0,
      startX: 0,

      twinkleSpeed: this.randomFloat(0.02, 0.08) * speedMultiplier,
      twinkleAmount: this.randomFloat(0.1, 0.25),
    };
  }

  initParticles() {
    for (let i = 0; i < this.maxParticles; i++) {
      const particle = this.createParticle();
      particle.originalAlpha = particle.alpha;
      particle.startX = particle.x;
      this.count++;
      this.particles[this.count] = particle;
    }
  }

  updateParticle(particle: any) {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.time++;

    particle.alpha =
      particle.originalAlpha * particle.life +
      Math.sin(particle.time * particle.twinkleSpeed) * particle.twinkleAmount;

    particle.life -= particle.decay;

    if (particle.x > this.w + 10 || particle.life <= 0) {
      this.resetParticle(particle);
    }
  }

  resetParticle(particle: any) {
    particle.x =
      this.lightBarX +
      this.randomFloat(-this.lightBarWidth / 2, this.lightBarWidth / 2);
    particle.y = this.randomFloat(0, this.h);
    particle.vx = this.randomFloat(0.2, 1.0);
    particle.vy = this.randomFloat(-0.15, 0.15);
    particle.alpha = this.randomFloat(0.6, 1);
    particle.originalAlpha = particle.alpha;
    particle.life = 1.0;
    particle.time = 0;
    particle.startX = particle.x;
  }

  drawParticle(particle: any) {
    if (particle.life <= 0 || !this.gradientCanvas) return;

    let fadeAlpha = 1;

    if (particle.y < this.fadeZone) {
      fadeAlpha = particle.y / this.fadeZone;
    } else if (particle.y > this.h - this.fadeZone) {
      fadeAlpha = (this.h - particle.y) / this.fadeZone;
    }

    fadeAlpha = Math.max(0, Math.min(1, fadeAlpha));

    this.ctx.globalAlpha = particle.alpha * fadeAlpha;
    this.ctx.drawImage(
      this.gradientCanvas,
      particle.x - particle.radius,
      particle.y - particle.radius,
      particle.radius * 2,
      particle.radius * 2
    );
  }

  drawLightBar() {
    const verticalGradient = this.ctx.createLinearGradient(0, 0, 0, this.h);
    verticalGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    verticalGradient.addColorStop(
      this.fadeZone / this.h,
      "rgba(255, 255, 255, 1)"
    );
    verticalGradient.addColorStop(
      1 - this.fadeZone / this.h,
      "rgba(255, 255, 255, 1)"
    );
    verticalGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    this.ctx.globalCompositeOperation = "lighter";

    const targetGlowIntensity = this.scanningActive ? 3.5 : 1;

    this.currentGlowIntensity +=
      (targetGlowIntensity - this.currentGlowIntensity) * this.transitionSpeed;

    const glowIntensity = this.currentGlowIntensity;
    const lineWidth = this.lightBarWidth;
    const glow1Alpha = this.scanningActive ? 1.0 : 0.8;
    const glow2Alpha = this.scanningActive ? 0.8 : 0.6;
    const glow3Alpha = this.scanningActive ? 0.6 : 0.4;

    const coreGradient = this.ctx.createLinearGradient(
      this.lightBarX - lineWidth / 2,
      0,
      this.lightBarX + lineWidth / 2,
      0
    );
    coreGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    coreGradient.addColorStop(
      0.3,
      `rgba(255, 255, 255, ${0.9 * glowIntensity})`
    );
    coreGradient.addColorStop(0.5, `rgba(255, 255, 255, ${1 * glowIntensity})`);
    coreGradient.addColorStop(
      0.7,
      `rgba(255, 255, 255, ${0.9 * glowIntensity})`
    );
    coreGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = coreGradient;

    const radius = 15;
    this.ctx.beginPath();
    (this.ctx as any).roundRect(
      this.lightBarX - lineWidth / 2,
      0,
      lineWidth,
      this.h,
      radius
    );
    this.ctx.fill();

    const glow1Gradient = this.ctx.createLinearGradient(
      this.lightBarX - lineWidth * 2,
      0,
      this.lightBarX + lineWidth * 2,
      0
    );
    glow1Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
    glow1Gradient.addColorStop(
      0.5,
      `rgba(196, 181, 253, ${0.8 * glowIntensity})`
    );
    glow1Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");

    this.ctx.globalAlpha = glow1Alpha;
    this.ctx.fillStyle = glow1Gradient;

    const glow1Radius = 25;
    this.ctx.beginPath();
    (this.ctx as any).roundRect(
      this.lightBarX - lineWidth * 2,
      0,
      lineWidth * 4,
      this.h,
      glow1Radius
    );
    this.ctx.fill();

    const glow2Gradient = this.ctx.createLinearGradient(
      this.lightBarX - lineWidth * 4,
      0,
      this.lightBarX + lineWidth * 4,
      0
    );
    glow2Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
    glow2Gradient.addColorStop(
      0.5,
      `rgba(139, 92, 246, ${0.4 * glowIntensity})`
    );
    glow2Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");

    this.ctx.globalAlpha = glow2Alpha;
    this.ctx.fillStyle = glow2Gradient;

    const glow2Radius = 35;
    this.ctx.beginPath();
    (this.ctx as any).roundRect(
      this.lightBarX - lineWidth * 4,
      0,
      lineWidth * 8,
      this.h,
      glow2Radius
    );
    this.ctx.fill();

    if (this.scanningActive) {
      const glow3Gradient = this.ctx.createLinearGradient(
        this.lightBarX - lineWidth * 8,
        0,
        this.lightBarX + lineWidth * 8,
        0
      );
      glow3Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
      glow3Gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.2)");
      glow3Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");

      this.ctx.globalAlpha = glow3Alpha;
      this.ctx.fillStyle = glow3Gradient;

      const glow3Radius = 45;
      this.ctx.beginPath();
      (this.ctx as any).roundRect(
        this.lightBarX - lineWidth * 8,
        0,
        lineWidth * 16,
        this.h,
        glow3Radius
      );
      this.ctx.fill();
    }

    this.ctx.globalCompositeOperation = "destination-in";
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = verticalGradient;
    this.ctx.fillRect(0, 0, this.w, this.h);
  }

  render() {
    const targetIntensity = this.scanningActive
      ? this.scanTargetIntensity
      : this.baseIntensity;
    const targetMaxParticles = this.scanningActive
      ? this.scanTargetParticles
      : this.baseMaxParticles;
    const targetFadeZone = this.scanningActive
      ? this.scanTargetFadeZone
      : this.baseFadeZone;

    this.currentIntensity +=
      (targetIntensity - this.currentIntensity) * this.transitionSpeed;
    this.currentMaxParticles +=
      (targetMaxParticles - this.currentMaxParticles) * this.transitionSpeed;
    this.currentFadeZone +=
      (targetFadeZone - this.currentFadeZone) * this.transitionSpeed;

    this.intensity = this.currentIntensity;
    this.maxParticles = Math.floor(this.currentMaxParticles);
    this.fadeZone = this.currentFadeZone;

    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.clearRect(0, 0, this.w, this.h);

    this.drawLightBar();

    this.ctx.globalCompositeOperation = "lighter";
    for (let i = 1; i <= this.count; i++) {
      if (this.particles[i]) {
        this.updateParticle(this.particles[i]);
        this.drawParticle(this.particles[i]);
      }
    }

    const currentIntensity = this.intensity;
    const currentMaxParticles = this.maxParticles;

    if (Math.random() < currentIntensity && this.count < currentMaxParticles) {
      const particle = this.createParticle();
      particle.originalAlpha = particle.alpha;
      particle.startX = particle.x;
      this.count++;
      this.particles[this.count] = particle;
    }

    const intensityRatio = this.intensity / this.baseIntensity;

    if (intensityRatio > 1.1 && Math.random() < (intensityRatio - 1.0) * 1.2) {
      const particle = this.createParticle();
      particle.originalAlpha = particle.alpha;
      particle.startX = particle.x;
      this.count++;
      this.particles[this.count] = particle;
    }

    if (intensityRatio > 1.3 && Math.random() < (intensityRatio - 1.3) * 1.4) {
      const particle = this.createParticle();
      particle.originalAlpha = particle.alpha;
      particle.startX = particle.x;
      this.count++;
      this.particles[this.count] = particle;
    }

    if (intensityRatio > 1.5 && Math.random() < (intensityRatio - 1.5) * 1.8) {
      const particle = this.createParticle();
      particle.originalAlpha = particle.alpha;
      particle.startX = particle.x;
      this.count++;
      this.particles[this.count] = particle;
    }

    if (intensityRatio > 2.0 && Math.random() < (intensityRatio - 2.0) * 2.0) {
      const particle = this.createParticle();
      particle.originalAlpha = particle.alpha;
      particle.startX = particle.x;
      this.count++;
      this.particles[this.count] = particle;
    }

    if (this.count > currentMaxParticles + 200) {
      const excessCount = Math.min(15, this.count - currentMaxParticles);
      for (let i = 0; i < excessCount; i++) {
        delete this.particles[this.count - i];
      }
      this.count -= excessCount;
    }
  }

  animate() {
    this.render();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  setScanningActive(active: boolean) {
    this.scanningActive = active;
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.particles = [];
    this.count = 0;
  }
}

export function CardStreamScanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardLineRef = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const scannerCanvasRef = useRef<HTMLCanvasElement>(null);
  const cardStreamRef = useRef<CardStreamController | null>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);
  const particleScannerRef = useRef<ParticleScanner | null>(null);

  useEffect(() => {
    if (!containerRef.current || !cardLineRef.current || !particleCanvasRef.current || !scannerCanvasRef.current) return;

    // Add roundRect polyfill for older browsers
    if (!(CanvasRenderingContext2D.prototype as any).roundRect) {
      (CanvasRenderingContext2D.prototype as any).roundRect = function(x: number, y: number, w: number, h: number, r: number) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        this.beginPath();
        this.moveTo(x + r, y);
        this.arcTo(x + w, y, x + w, y + h, r);
        this.arcTo(x + w, y + h, x, y + h, r);
        this.arcTo(x, y + h, x, y, r);
        this.arcTo(x, y, x + w, y, r);
        this.closePath();
        return this;
      };
    }

    // Initialize controllers
    const speedIndicator = document.getElementById("speedValue");
    cardStreamRef.current = new CardStreamController(
      containerRef.current,
      cardLineRef.current,
      speedIndicator
    );

    particleSystemRef.current = new ParticleSystem(particleCanvasRef.current);
    particleScannerRef.current = new ParticleScanner(scannerCanvasRef.current);

    // Set up global scanner function
    (window as any).setScannerScanning = (active: boolean) => {
      if (particleScannerRef.current) {
        particleScannerRef.current.setScanningActive(active);
      }
    };

    return () => {
      if (cardStreamRef.current) {
        // Cleanup will be handled by component unmount
      }
      if (particleSystemRef.current) {
        particleSystemRef.current.destroy();
      }
      if (particleScannerRef.current) {
        particleScannerRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="relative w-full bg-black overflow-visible" style={{ height: "350px", minHeight: "350px", paddingTop: "50px", paddingBottom: "50px" }}>
      {/* Particle Canvas (Three.js) */}
      <canvas
        ref={particleCanvasRef}
        id="particleCanvas"
      />

      {/* Scanner Canvas */}
      <canvas
        ref={scannerCanvasRef}
        id="scannerCanvas"
      />

      {/* Card Stream Container */}
      <div
        ref={containerRef}
        id="cardStream"
        className="card-stream"
      >
        <div
          ref={cardLineRef}
          id="cardLine"
          className="card-line"
          style={{
            transform: "translateX(0px)",
          }}
        >
          {/* Cards will be populated by CardStreamController */}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap");

        .card-stream {
          position: absolute;
          width: 100vw;
          height: 300px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          overflow: visible;
        }

        .card-line {
          display: flex;
          align-items: center;
          gap: 60px;
          white-space: nowrap;
          cursor: grab;
          user-select: none;
          will-change: transform;
        }

        .card-line:active {
          cursor: grabbing;
        }

        .card-line.dragging {
          cursor: grabbing;
        }

        .card-line.css-animated {
          animation: scrollCards 40s linear infinite;
        }

        @keyframes scrollCards {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        .card-wrapper {
          position: relative;
          width: 400px;
          height: 250px;
          flex-shrink: 0;
        }

        .card {
          position: absolute;
          top: 0;
          left: 0;
          width: 400px;
          height: 250px;
          border-radius: 15px;
          overflow: hidden;
        }

        .card-normal {
          background: transparent;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0;
          color: white;
          z-index: 2;
          position: relative;
          overflow: hidden;
          clip-path: inset(0 0 0 var(--clip-right, 0%));
          transition: clip-path 0.1s ease-out;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
          transition: all 0.3s ease;
          filter: brightness(1.1) contrast(1.1);
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .card-image:hover {
          filter: brightness(1.2) contrast(1.2);
        }

        .card-ascii {
          background: transparent;
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
          width: 400px;
          height: 250px;
          border-radius: 15px;
          overflow: hidden;
          clip-path: inset(0 calc(100% - var(--clip-left, 0%)) 0 0);
          transition: clip-path 0.1s ease-out;
        }

        .ascii-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: rgba(220, 210, 255, 0.6);
          font-family: "Courier New", monospace;
          font-size: 11px;
          line-height: 13px;
          overflow: hidden;
          white-space: pre;
          margin: 0;
          padding: 0;
          text-align: left;
          vertical-align: top;
          box-sizing: border-box;
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 30%,
            rgba(0, 0, 0, 0.6) 50%,
            rgba(0, 0, 0, 0.4) 80%,
            rgba(0, 0, 0, 0.2) 100%
          );
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 30%,
            rgba(0, 0, 0, 0.6) 50%,
            rgba(0, 0, 0, 0.4) 80%,
            rgba(0, 0, 0, 0.2) 100%
          );
          animation: glitch 0.1s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% {
            opacity: 1;
          }
          15% {
            opacity: 0.9;
          }
          16% {
            opacity: 1;
          }
          49% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          99% {
            opacity: 0.9;
          }
          100% {
            opacity: 1;
          }
        }

        .scan-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 255, 0.4),
            transparent
          );
          animation: scanEffect 0.6s ease-out;
          pointer-events: none;
          z-index: 5;
        }

        @keyframes scanEffect {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        #particleCanvas {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100vw;
          height: 300px;
          z-index: 0;
          pointer-events: none;
        }

        #scannerCanvas {
          position: absolute;
          top: 50%;
          left: -3px;
          transform: translateY(-50%);
          width: 100vw;
          height: 350px;
          z-index: 15;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}

