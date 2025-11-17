import React, { useEffect } from "react";
import { motion } from "motion/react";
import * as THREE from "three";

// CSS Styles - Scoped to card stream scanner only
const styles = `
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap");

.card-stream-scanner-section * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card-stream-scanner-section {
  background: #000000;
  min-height: 100vh;
  overflow: visible;
  font-family: "Arial", sans-serif;
}

.card-stream-scanner-section .controls {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
  z-index: 100;
}

.card-stream-scanner-section .control-btn {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  font-size: 14px;
}

.card-stream-scanner-section .control-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card-stream-scanner-section .speed-indicator {
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  z-index: 100;
}

.card-stream-scanner-section .info {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px 25px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  z-index: 100;
  line-height: 1.4;
}

.card-stream-scanner-section .container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-stream-scanner-section .card-stream {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  width: 100vw;
  height: 250px;
  display: flex;
  align-items: center;
  overflow: visible;
}

.card-stream-scanner-section .card-line {
  display: flex;
  align-items: center;
  gap: 60px;
  white-space: nowrap;
  cursor: grab;
  user-select: none;
  will-change: transform;
}

.card-stream-scanner-section .card-line:active {
  cursor: grabbing;
}

.card-stream-scanner-section .card-line.dragging {
  cursor: grabbing;
}

.card-stream-scanner-section .card-line.css-animated {
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

.card-stream-scanner-section .card-wrapper {
  position: relative;
  width: 400px;
  height: 250px;
  flex-shrink: 0;
}

.card-stream-scanner-section .card {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 250px;
  border-radius: 15px;
  overflow: hidden;
}

.card-stream-scanner-section .card-normal {
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
}

.card-stream-scanner-section .card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: all 0.3s ease;
  filter: brightness(1.1) contrast(1.1);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
}

.card-stream-scanner-section .card-image:hover {
  filter: brightness(1.2) contrast(1.2);
}

.card-stream-scanner-section .card-ascii {
  background: transparent;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 250px;
  border-radius: 15px;
  overflow: hidden;
}

.card-stream-scanner-section .card-chip {
  width: 40px;
  height: 30px;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  border-radius: 5px;
  position: relative;
  margin-bottom: 20px;
}

.card-stream-scanner-section .card-chip::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  background: linear-gradient(45deg, #e6c200, #f4d03f);
  border-radius: 2px;
}

.card-stream-scanner-section .contactless {
  position: absolute;
  top: 60px;
  left: 20px;
  width: 25px;
  height: 25px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
}

.card-stream-scanner-section .contactless::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
}

.card-stream-scanner-section .card-number {
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card-stream-scanner-section .card-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.card-stream-scanner-section .card-holder {
  color: white;
  font-size: 14px;
  text-transform: uppercase;
}

.card-stream-scanner-section .card-expiry {
  color: white;
  font-size: 14px;
}

.card-stream-scanner-section .card-logo {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card-stream-scanner-section .ascii-content {
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
  clip-path: inset(0 calc(100% - var(--clip-left, 0%)) 0 0);
  animation: glitch 0.1s infinite linear alternate-reverse;
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

.card-stream-scanner-section .scanner {
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 300px;
  border-radius: 30px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 255, 255, 0.8),
    rgba(0, 255, 255, 1),
    rgba(0, 255, 255, 0.8),
    transparent
  );
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4);
  animation: scanPulse 2s ease-in-out infinite alternate;
  z-index: 10;
}

@keyframes scanPulse {
  0% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scaleY(1);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scaleY(1.1);
  }
}

.card-stream-scanner-section .scanner-label {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(0, 255, 255, 0.9);
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.card-stream-scanner-section .card-normal {
  clip-path: inset(0 0 0 var(--clip-right, 0%));
}

.card-stream-scanner-section .card-ascii {
  clip-path: inset(0 calc(100% - var(--clip-left, 0%)) 0 0);
}

.card-stream-scanner-section .scan-effect {
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

.card-stream-scanner-section .instructions {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  max-width: 200px;
  text-align: right;
  z-index: 5;
}

.card-stream-scanner-section #particleCanvas {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100vw;
  height: 250px;
  z-index: 0;
  pointer-events: none;
}

.card-stream-scanner-section #scannerCanvas {
  position: absolute;
  top: 50%;
  left: -3px;
  transform: translate3d(0, -50%, 0);
  width: 100vw;
  height: 250px;
  z-index: 15;
  pointer-events: none;
}

.card-stream-scanner-section .inspiration-credit {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Roboto Mono", monospace;
  font-size: 12px;
  font-weight: 900;
  color: #ff9a9c;
  z-index: 1000;
  text-align: center;
}

.card-stream-scanner-section .inspiration-credit a {
  color: #ff9a9c;
  text-decoration: none;
  transition: color 0.3s ease;
}

.card-stream-scanner-section .inspiration-credit a:hover {
  color: #ff7a7c;
}
`;

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
  usedNumbers: Set<number>;

  constructor() {
    this.container = document.getElementById("cardStream") as HTMLElement;
    this.cardLine = document.getElementById("cardLine") as HTMLElement;
    this.speedIndicator = document.getElementById("speedValue");

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
    this.usedNumbers = new Set<number>();

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
    if ('preventDefault' in e) {
      e.preventDefault();
    }

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
    if ('preventDefault' in e) {
      e.preventDefault();
    }

    const deltaX = e.clientX - this.lastMouseX;
    this.position += deltaX;
    this.mouseVelocity = deltaX * 60;
    this.lastMouseX = e.clientX;

    this.cardLine.style.transform = `translate3d(${this.position}px, 0, 0)`;
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

    this.cardLine.style.transform = `translate3d(${this.position}px, 0, 0)`;
    this.updateCardClipping();
  }

  updateSpeedIndicator() {
    // Speed indicator removed
  }

  toggleAnimation() {
    this.isAnimating = !this.isAnimating;
    const btn = document.querySelector(".control-btn");
    if (btn) {
      (btn as HTMLElement).textContent = this.isAnimating ? "⏸️ Pause" : "▶️ Play";
    }

    if (this.isAnimating) {
      this.cardLine.style.animation = "none";
    }
  }

  resetPosition() {
    this.position = this.containerWidth;
    this.velocity = 120;
    this.direction = -1;
    this.isAnimating = true;
    this.isDragging = false;

    this.cardLine.style.animation = "none";
    this.cardLine.style.transform = `translate3d(${this.position}px, 0, 0)`;
    this.cardLine.classList.remove("dragging");

    this.updateSpeedIndicator();

    const btn = document.querySelector(".control-btn");
    if (btn) {
      (btn as HTMLElement).textContent = "⏸️ Pause";
    }
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
    const randInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const pick = (arr: string[]) => arr[randInt(0, arr.length - 1)];

    const header = [
      "// compiled preview • scanner demo",
      "/* generated for visual effect – not executed */",
      "const SCAN_WIDTH = 8;",
      "const FADE_ZONE = 35;",
      "const MAX_PARTICLES = 2500;",
      "const TRANSITION = 0.05;",
    ];

    const helpers = [
      "function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }",
      "function lerp(a, b, t) { return a + (b - a) * t; }",
      "const now = () => performance.now();",
      "function rng(min, max) { return Math.random() * (max - min) + min; }",
    ];

    const particleBlock = (idx: number) => [
      `class Particle${idx} {`,
      "  constructor(x, y, vx, vy, r, a) {",
      "    this.x = x; this.y = y;",
      "    this.vx = vx; this.vy = vy;",
      "    this.r = r; this.a = a;",
      "  }",
      "  step(dt) { this.x += this.vx * dt; this.y += this.vy * dt; }",
      "}",
    ];

    const scannerBlock = [
      "const scanner = {",
      "  x: Math.floor(window.innerWidth / 2),",
      "  width: SCAN_WIDTH,",
      "  glow: 3.5,",
      "};",
      "",
      "function drawParticle(ctx, p) {",
      "  ctx.globalAlpha = clamp(p.a, 0, 1);",
      "  ctx.drawImage(gradient, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);",
      "}",
    ];

    const loopBlock = [
      "function tick(t) {",
      "  // requestAnimationFrame(tick);",
      "  const dt = 0.016;",
      "  // update & render",
      "}",
    ];

    const misc = [
      "const state = { intensity: 1.2, particles: MAX_PARTICLES };",
      "const bounds = { w: window.innerWidth, h: 300 };",
      "const gradient = document.createElement('canvas');",
      "const ctx = gradient.getContext('2d');",
      "ctx.globalCompositeOperation = 'lighter';",
      "// ascii overlay is masked with a 3-phase gradient",
    ];

    const library: string[] = [];
    header.forEach((l) => library.push(l));
    helpers.forEach((l) => library.push(l));
    for (let b = 0; b < 3; b++)
      particleBlock(b).forEach((l) => library.push(l));
    scannerBlock.forEach((l) => library.push(l));
    loopBlock.forEach((l) => library.push(l));
    misc.forEach((l) => library.push(l));

    for (let i = 0; i < 40; i++) {
      const n1 = randInt(1, 9);
      const n2 = randInt(10, 99);
      library.push(`const v${i} = (${n1} + ${n2}) * 0.${randInt(1, 9)};`);
    }
    for (let i = 0; i < 20; i++) {
      library.push(
        `if (state.intensity > ${1 + (i % 3)}) { scanner.glow += 0.01; }`
      );
    }

    let flow = library.join(" ");
    flow = flow.replace(/\s+/g, " ").trim();
    const totalChars = width * height;
    while (flow.length < totalChars + width) {
      const extra = pick(library).replace(/\s+/g, " ").trim();
      flow += " " + extra;
    }

    let out = "";
    let offset = 0;
    for (let row = 0; row < height; row++) {
      let line = flow.slice(offset, offset + width);
      if (line.length < width) line = line + " ".repeat(width - line.length);
      out += line + (row < height - 1 ? "\n" : "");
      offset += width;
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

  generateUniqueNumber(): number {
    let number: number;
    do {
      number = Math.floor(Math.random() * 900000) + 100000; // 6-digit number
    } while (this.usedNumbers.has(number));
    
    this.usedNumbers.add(number);
    
    // Reset if we've used too many numbers
    if (this.usedNumbers.size > 1000) {
      this.usedNumbers.clear();
    }
    
    return number;
  }

  createCardWrapper(index: number) {
    const wrapper = document.createElement("div");
    wrapper.className = "card-wrapper";

    const normalCard = document.createElement("div");
    normalCard.className = "card card-normal";

    const cardImages = [
      "/sTRIPE CREDIT CARD KNEW!.png",
      "/orange credit card.png",
      "/Revolut.png",
      "/Apple (2).png",
      "/Elon Musk Gray-d8c7ae7f-5a53-47ac-8aa2-310399404a08.png",
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

    document.querySelectorAll(".card-stream-scanner-section .card-wrapper, .card-wrapper").forEach((wrapper) => {
      const rect = wrapper.getBoundingClientRect();
      const cardLeft = rect.left;
      const cardRight = rect.right;
      const cardWidth = rect.width;

      const normalCard = wrapper.querySelector(".card-normal") as HTMLElement;
      const asciiCard = wrapper.querySelector(".card-ascii") as HTMLElement;

      if (normalCard && asciiCard && cardLeft < scannerRight && cardRight > scannerLeft) {
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
          }
        } else {
        if (normalCard && asciiCard) {
          if (cardRight < scannerLeft) {
            normalCard.style.setProperty("--clip-right", "100%");
            asciiCard.style.setProperty("--clip-left", "100%");
          } else if (cardLeft > scannerRight) {
            normalCard.style.setProperty("--clip-right", "0%");
            asciiCard.style.setProperty("--clip-left", "0%");
          }
          }
          wrapper.removeAttribute("data-scanned");
      }
    });

    if ((window as any).setScannerScanning) {
      (window as any).setScannerScanning(anyScanningActive);
    }
  }

  updateAsciiContent() {
    document.querySelectorAll(".card-stream-scanner-section .ascii-content, .ascii-content").forEach((content) => {
      if (Math.random() < 0.05) {
        const { width, height } = this.calculateCodeDimensions(400, 250);
        (content as HTMLElement).textContent = this.generateCode(width, height);
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
    setInterval(() => {
      this.updateAsciiContent();
    }, 1000);

    const updateClipping = () => {
      this.updateCardClipping();
      requestAnimationFrame(updateClipping);
    };
    updateClipping();
  }
}

let cardStream: CardStreamController | null = null;

class ParticleSystem {
  scene: THREE.Scene | null;
  camera: THREE.OrthographicCamera | null;
  renderer: THREE.WebGLRenderer | null;
  particles: THREE.Points | null;
  particleCount: number;
  canvas: HTMLCanvasElement;
  velocities: Float32Array | null;
  alphas: Float32Array | null;

  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = null;
    this.particleCount = 400;
    this.canvas = document.getElementById("particleCanvas") as HTMLCanvasElement;
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
    requestAnimationFrame(() => this.animate());

    if (this.particles && this.velocities && this.alphas) {
      const positions = this.particles.geometry.attributes.position.array as Float32Array;
      const alphas = this.alphas;
      const time = Date.now() * 0.001;

      for (let i = 0; i < this.particleCount; i++) {
        positions[i * 3] += this.velocities[i] * 0.016;

        if (positions[i * 3] > window.innerWidth / 2 + 100) {
          positions[i * 3] = -window.innerWidth / 2 - 100;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
        }

        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.5;

        const twinkle = Math.floor(Math.random() * 20);
        if (twinkle === 1 && alphas[i] > 0) {
          alphas[i] -= 0.05;
        } else if (twinkle === 2 && alphas[i] < 1) {
          alphas[i] += 0.05;
        }

        alphas[i] = Math.max(0, Math.min(1, alphas[i]));
      }

      this.particles.geometry.attributes.position.needsUpdate = true;
      if (this.particles.geometry.attributes.alpha) {
      this.particles.geometry.attributes.alpha.needsUpdate = true;
      }
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  onWindowResize() {
    if (this.camera) {
      this.camera.left = -window.innerWidth / 2;
      this.camera.right = window.innerWidth / 2;
      this.camera.updateProjectionMatrix();
    }

    if (this.renderer) {
      this.renderer.setSize(window.innerWidth, 250);
    }
  }

  destroy() {
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.particles) {
      this.scene?.remove(this.particles);
      this.particles.geometry.dispose();
      (this.particles.material as THREE.ShaderMaterial).dispose();
    }
  }
}

let particleSystem: ParticleSystem | null = null;

class ParticleScanner {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  animationId: number | null;
  w: number;
  h: number;
  particles: { [key: number]: any };
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

  constructor() {
    this.canvas = document.getElementById("scannerCanvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d")!;
    this.animationId = null;

    this.w = window.innerWidth;
    this.h = 250; // Match card height
    this.particles = {};
    this.count = 0;
    this.maxParticles = 800;
    this.intensity = 0.8;
    // Will be calculated in setupCanvas based on actual canvas width
    this.lightBarX = 0;
    this.lightBarWidth = 3;
    this.fadeZone = 50; // Adjusted for 250px height

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
    this.w = window.innerWidth;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.canvas.style.width = this.w + "px";
    this.canvas.style.height = this.h + "px";
    this.ctx.clearRect(0, 0, this.w, this.h);
    
    // Calculate center position - account for canvas offset of -3px
    this.lightBarX = this.w / 2 + 3;
  }

  onResize() {
    this.w = window.innerWidth;
    this.lightBarX = this.w / 2 + 3;
    this.setupCanvas();
  }

  createGradientCache() {
    this.gradientCanvas = document.createElement("canvas");
    this.gradientCtx = this.gradientCanvas.getContext("2d")!;
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
    return Math.floor(Math.random() * ((max as number) - min + 1)) + min;
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

    const targetGlowIntensity = this.scanningActive ? 3.2 : 0.8;
    const time = Date.now() * 0.001;
    const pulse = Math.sin(time * 2) * 0.05 + 1; // Very subtle pulsing effect

    if (!this.currentGlowIntensity) this.currentGlowIntensity = 1;

    this.currentGlowIntensity +=
      (targetGlowIntensity - this.currentGlowIntensity) * this.transitionSpeed;

    const glowIntensity = this.currentGlowIntensity * pulse;
    const lineWidth = this.lightBarWidth;
    const glow1Alpha = this.scanningActive ? 0.9 : 0.45;
    const glow2Alpha = this.scanningActive ? 0.7 : 0.3;

    // Core bright white center - Minimal but glowy (brighter when scanning)
    const coreGradient = this.ctx.createLinearGradient(
      this.lightBarX - lineWidth / 2,
      0,
      this.lightBarX + lineWidth / 2,
      0
    );
    const coreIntensity = this.scanningActive ? 0.9 : 0.75;
    coreGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    coreGradient.addColorStop(
      0.3,
      `rgba(255, 255, 255, ${(this.scanningActive ? 0.6 : 0.5) * glowIntensity})`
    );
    coreGradient.addColorStop(0.5, `rgba(255, 255, 255, ${coreIntensity * glowIntensity})`);
    coreGradient.addColorStop(
      0.7,
      `rgba(255, 255, 255, ${(this.scanningActive ? 0.6 : 0.5) * glowIntensity})`
    );
    coreGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    this.ctx.globalAlpha = this.scanningActive ? 0.95 : 0.85;
    this.ctx.fillStyle = coreGradient;

    const radius = 18;
    this.ctx.beginPath();
    (this.ctx as any).roundRect(
      this.lightBarX - lineWidth / 2,
      0,
      lineWidth,
      this.h,
      radius
    );
    this.ctx.fill();

    // Inner glow - Minimal purple (MUCH bigger when scanning)
    const glow1Width = this.scanningActive ? lineWidth * 8 : lineWidth * 2;
    const glow1Gradient = this.ctx.createLinearGradient(
      this.lightBarX - glow1Width,
      0,
      this.lightBarX + glow1Width,
      0
    );
    glow1Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
    glow1Gradient.addColorStop(
      0.4,
      `rgba(167, 139, 250, ${(this.scanningActive ? 0.65 : 0.4) * glowIntensity})`
    );
    glow1Gradient.addColorStop(
      0.5,
      `rgba(196, 181, 253, ${(this.scanningActive ? 0.85 : 0.6) * glowIntensity})`
    );
    glow1Gradient.addColorStop(
      0.6,
      `rgba(167, 139, 250, ${(this.scanningActive ? 0.65 : 0.4) * glowIntensity})`
    );
    glow1Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");

    this.ctx.globalAlpha = glow1Alpha;
    this.ctx.fillStyle = glow1Gradient;

    const glow1Radius = this.scanningActive ? 50 : 22;
    this.ctx.beginPath();
    (this.ctx as any).roundRect(
      this.lightBarX - glow1Width,
      0,
      glow1Width * 2,
      this.h,
      glow1Radius
    );
    this.ctx.fill();

    // Outer glow - Minimal (MUCH bigger when scanning)
    const glow2Width = this.scanningActive ? lineWidth * 15 : lineWidth * 3.5;
    const glow2Gradient = this.ctx.createLinearGradient(
      this.lightBarX - glow2Width,
      0,
      this.lightBarX + glow2Width,
      0
    );
    glow2Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
    glow2Gradient.addColorStop(
      0.45,
      `rgba(139, 92, 246, ${(this.scanningActive ? 0.4 : 0.25) * glowIntensity})`
    );
    glow2Gradient.addColorStop(
      0.5,
      `rgba(139, 92, 246, ${(this.scanningActive ? 0.55 : 0.35) * glowIntensity})`
    );
    glow2Gradient.addColorStop(
      0.55,
      `rgba(139, 92, 246, ${(this.scanningActive ? 0.4 : 0.25) * glowIntensity})`
    );
    glow2Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");

    this.ctx.globalAlpha = glow2Alpha;
    this.ctx.fillStyle = glow2Gradient;

    const glow2Radius = this.scanningActive ? 70 : 28;
    this.ctx.beginPath();
    (this.ctx as any).roundRect(
      this.lightBarX - glow2Width,
      0,
      glow2Width * 2,
      this.h,
      glow2Radius
    );
    this.ctx.fill();

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

  getStats() {
    return {
      intensity: this.intensity,
      maxParticles: this.maxParticles,
      currentParticles: this.count,
      lightBarWidth: this.lightBarWidth,
      fadeZone: this.fadeZone,
      scanningActive: this.scanningActive,
      canvasWidth: this.w,
      canvasHeight: this.h,
    };
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    this.particles = {};
    this.count = 0;
  }
}

let particleScanner: ParticleScanner | null = null;

declare global {
  interface Window {
    setScannerScanning?: (active: boolean) => void;
    getScannerStats?: () => any;
  }
}

export function CardStreamScanner() {
  useEffect(() => {
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

    cardStream = new CardStreamController();
    particleSystem = new ParticleSystem();
    particleScanner = new ParticleScanner();

window.setScannerScanning = (active: boolean) => {
  if (particleScanner) {
    particleScanner.setScanningActive(active);
  }
};

window.getScannerStats = () => {
  if (particleScanner) {
    return particleScanner.getStats();
  }
  return null;
};

    return () => {
      if (particleSystem) {
        particleSystem.destroy();
      }
      if (particleScanner) {
        particleScanner.destroy();
      }
    };
  }, []);

  return (
    <section className="card-stream-scanner-section relative w-full bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <style>{styles}</style>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* 1️⃣ Headline - Security First */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-4"
          style={{
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Your Security, Our Priority
          </h2>
        </motion.div> */}

        {/* 2️⃣ Subtext / Microcopy - Future-Focused Confidence Boost */}
        {/* <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-center text-sm md:text-base text-gray-400 mb-12"
      style={{
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
          Next-Gen Security • AI-Powered Protection • Zero-Knowledge Architecture
        </motion.p> */}

        {/* 3️⃣ Animated Card Section */}
        <div className="relative mb-12" style={{ minHeight: "350px", height: "350px" }}>
      {/* Particle Canvas (Three.js) */}
          <canvas id="particleCanvas" />

      {/* Scanner Canvas */}
          <canvas id="scannerCanvas" />

      {/* Card Stream Container */}
          <div id="cardStream" className="card-stream">
        <div
          id="cardLine"
          className="card-line"
          style={{
            transform: "translate3d(0px, 0, 0)",
          }}
        >
          {/* Cards will be populated by CardStreamController */}
            </div>
        </div>
      </div>

        {/* 4️⃣ Security Badges / Logos - Trust Signals - Future-Focused */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-6"
          style={{
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Encrypted Badge */}
          {/* <div className="flex flex-col items-center group cursor-pointer" title="End-to-End Encryption">
            <div className="w-10 h-10 mb-2 flex items-center justify-center rounded-lg bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-all duration-300">
              <svg className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors font-medium">Encrypted</span>
          </div> */}

          {/* SSL Secured Badge */}
          {/* <div className="flex flex-col items-center group cursor-pointer" title="SSL/TLS Secured Connection">
            <div className="w-10 h-10 mb-2 flex items-center justify-center bg-green-500/20 rounded-lg border border-green-500/30 group-hover:bg-green-500/30 transition-all duration-300">
              <span className="text-xs font-bold text-green-400">SSL</span>
            </div>
            <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors font-medium">SSL Secured</span>
          </div> */}

          {/* PCI Compliant Badge */}
          {/* <div className="flex flex-col items-center group cursor-pointer" title="PCI-DSS Level 1 Compliant">
            <div className="w-10 h-10 mb-2 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-300">
              <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors font-medium">PCI Compliant</span>
          </div> */}
        {/* </motion.div> */}

        {/* 5️⃣ Optional Interactive Tooltip - Extra Reassurance */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <a
            href="#security-section"
            className="inline-block text-xs text-gray-500 hover:text-gray-400 transition-colors underline decoration-gray-600 hover:decoration-gray-500 underline-offset-2"
            title="All card details are encrypted and never stored on our servers"
            style={{
              transform: "translate3d(0, 0, 0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            Learn more about our security
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}

