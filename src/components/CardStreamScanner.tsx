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
  will-change: contents;
  contain: layout style paint;
  isolation: isolate;
}

.card-stream-scanner-section .card-line {
  display: flex;
  align-items: center;
  gap: 60px;
  white-space: nowrap;
  cursor: grab;
  user-select: none;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  contain: layout style paint;
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
  transform: translate3d(0, 0, 0);
  will-change: transform;
  backface-visibility: hidden;
  contain: layout style paint;
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
  transform: translate3d(0, 0, 0);
  will-change: clip-path;
  backface-visibility: hidden;
  contain: layout style paint;
}

.card-stream-scanner-section .card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: none;
  filter: brightness(1.1) contrast(1.1);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, 0, 0);
  will-change: transform;
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.card-stream-scanner-section .card-image:hover {
  filter: brightness(1.2) contrast(1.2);
  transition: filter 0.2s ease;
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
  transform: translate3d(0, 0, 0);
  will-change: clip-path;
  backface-visibility: hidden;
  contain: layout style paint;
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
  margin: 0;
  padding: 0;
  text-align: left;
  vertical-align: top;
  box-sizing: border-box;
  transform: translate3d(0, 0, 0);
  will-change: clip-path, contents;
  backface-visibility: hidden;
  contain: layout style paint;
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
  z-index: 25;
  pointer-events: none;
  will-change: contents;
  contain: layout style paint;
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

.card-stream-scanner-section .security-section {
  padding: 60px 20px 80px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  background: transparent;
}

.card-stream-scanner-section .security-headline {
  font-size: 3.5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.card-stream-scanner-section .security-subheadline {
  font-size: 1.25rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 4rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  font-weight: 400;
}

.card-stream-scanner-section .security-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-bottom: 0;
}

.card-stream-scanner-section .security-feature {
  padding: 2rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  will-change: transform;
  backface-visibility: hidden;
}

.card-stream-scanner-section .security-feature:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(168, 85, 247, 0.4);
  transform: translate3d(0, -6px, 0);
  box-shadow: 0 20px 40px rgba(168, 85, 247, 0.1);
}

.card-stream-scanner-section .security-feature-icon {
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 1.25rem;
  color: #a855f7;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.card-stream-scanner-section .security-feature-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.card-stream-scanner-section .security-feature-desc {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
}

.card-stream-scanner-section .scanner-intro {
  text-align: center;
  z-index: 10;
  position: absolute;
  top: 3%;
  left: 27%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 900px;
  padding: 0 2rem;
  pointer-events: none;
}

.card-stream-scanner-section .scanner-intro-heading {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #ffffff;
  letter-spacing: -0.01em;
  line-height: 1.2;
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.card-stream-scanner-section .scanner-intro-text {
  font-size: 1.125rem;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  width: 100%;
}

@media (max-width: 768px) {
  .card-stream-scanner-section .scanner-intro-heading {
    font-size: 1.875rem;
  }
  .card-stream-scanner-section .scanner-intro-text {
    font-size: 1rem;
  }
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
  cachedWrappers: HTMLElement[] | null;

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
    this.cachedWrappers = null;

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
    // Use fixed timestep for consistent animation (Apple/Tesla-level smoothness)
    const fixedDeltaTime = 0.016; // ~60fps fixed timestep for consistent animation

    if (this.isAnimating && !this.isDragging) {
      if (this.velocity > this.minVelocity) {
        this.velocity *= this.friction;
      } else {
        this.velocity = Math.max(this.minVelocity, this.velocity);
      }

      this.position += this.velocity * this.direction * fixedDeltaTime;
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

    // Use transform directly for hardware acceleration - round for pixel-perfect rendering
    this.cardLine.style.transform = `translate3d(${Math.round(this.position)}px, 0, 0)`;
    // Clipping is handled separately in startPeriodicUpdates for better performance
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
    
    const hexChars = "0123456789ABCDEF";
    const generateHex = (length: number) => {
      let result = "";
      for (let i = 0; i < length; i++) {
        result += hexChars[randInt(0, hexChars.length - 1)];
      }
      return result;
    };
    
    const generateHexCode = () => {
      return `${generateHex(4)}-${generateHex(4)}-${generateHex(4)}-${generateHex(4)}`;
    };
    
    const generateHexValue = (prefix: string = "0x") => {
      return `${prefix}${generateHex(randInt(4, 12))}`;
    };
    
    const techTerms = ["AUTH_PIPE", "SCAN", "STREAM", "VERIFY", "ENCODE", "CIPHER", "SESSION", "PACKET", "NOISE", "ENTROPY", "INTEGRITY", "CHANNEL", "SECTOR", "BLOCK", "HASH", "SALT", "IV", "SIG", "BIAS", "JITTER", "FLOW", "LOCK", "READ", "WRITE", "ROTATE", "EMIT", "STEP"];
    const techStatus = ["OK", "PASS", "FAIL", "PENDING", "ACTIVE", "STABLE", "UNSTABLE", "LOCKED", "UNLOCKED"];
    const techModes = ["TLS-A1", "TLS-A2", "TLS-A3", "AES-256", "SHA-256", "RSA-2048", "ECDSA", "HMAC"];
    
    const generateHeader = () => {
      return `${generateHexCode()}  `;
    };
    
    const generateHelper = () => {
      return `${generateHexCode()} ${generateHexCode()}   `;
    };
    
    const generateParticleLine = () => {
      const templates = [
        `  ${generateHexValue()} • ${pick(techTerms)}[${pick(techStatus)}] • seq=${randInt(1000, 9999)} • hash:${generateHex(randInt(8, 16))}`,
        `    stream(pkt) => { id:${randInt(100, 999)}, sig:'${generateHexValue()}', t:${(randInt(1, 99) / 10).toFixed(2)}ms }`,
        `   verify::channel(${randInt(1, 8)}) • salt=${generateHex(6)} • len=${randInt(512, 4096)}`,
        `    SCAN >> block:${randInt(100, 999)} • entropy:${(Math.random() * 0.5 + 0.5).toFixed(3)} • flow:${pick(techStatus).toLowerCase()}`,
        `  rand_v(${randInt(16, 64)}) = ${generateHex(randInt(20, 32))}`,
        `  ${generateHexCode()} • ${pick(techTerms)}:${generateHexValue()} • ${pick(techStatus)}`,
      ];
      return pick(templates);
    };
    
    const generateScannerLine = () => {
      const templates = [
        `  cipher.step(Δ) • mode:${pick(techModes)} • noise:${(Math.random() * 0.1).toFixed(3)}`,
        `  mem://sector/${generateHex(3)} • read: ${pick(["true", "false"])} • lock:${pick(["true", "false"])}`,
        `  encode(b) => sha256(${generateHexValue()})`,
        `  ${pick(techTerms)}::${pick(techTerms).toLowerCase()}(${randInt(1, 8)}) • cost=${randInt(1024, 4096)} • ${pick(techStatus)}`,
        `  ${generateHexValue()} • ${pick(techTerms)}[${randInt(0, 255)}] • ${pick(techStatus)}`,
      ];
      return pick(templates);
    };
    
    const generateLoopLine = () => {
      const templates = [
        `packet#${randInt(1000, 9999)} • src:${pick(["LOCAL", "REMOTE", "PROXY", "CACHE"])} • iv=${generateHexValue()}`,
        ` session_key.rotate() • cost=${randInt(1024, 4096)} • ${pick(techStatus)}`,
        `  EMIT ›› stamp: ${(randInt(100, 9999) / 10).toFixed(2)} • jitter: ${(Math.random() * 5).toFixed(1)}%`,
        `  const Ω = ${generateHexValue()} • integrity:${pick(techStatus)}`,
        `  ${pick(techTerms)} >> ${pick(techTerms).toLowerCase()}:${randInt(1, 999)} • ${pick(techStatus)}`,
      ];
      return pick(templates);
    };
    
    const generateMiscLine = () => {
      const templates = [
        `bitmask[${randInt(0, 255)}] = ${randInt(10000000000000000000, 99999999999999999999)}`,
        `NOISE_FRAME • index=${randInt(100, 9999)} • bias: ${(Math.random() > 0.5 ? "+" : "-")}${(Math.random() * 0.01).toFixed(3)}`,
        `${generateHexCode()} • ${pick(techTerms)}:${randInt(1, 999)} • ${pick(techStatus)}`,
        `${pick(techTerms)}::${pick(techTerms).toLowerCase()}() • ${generateHexValue()} • ${pick(techStatus)}`,
        `hash:${generateHex(randInt(8, 16))} • salt:${generateHex(6)} • len:${randInt(128, 2048)}`,
        `${pick(techModes)} • entropy:${(Math.random()).toFixed(3)} • flow:${pick(techStatus).toLowerCase()}`,
      ];
      return pick(templates);
    };

    const header: string[] = [];
    for (let i = 0; i < 6; i++) {
      header.push(generateHeader());
    }

    const helpers: string[] = [];
    for (let i = 0; i < 4; i++) {
      helpers.push(generateHelper());
    }

    const particleBlock = (idx: number) => {
      const lines: string[] = [];
      lines.push(`${generateHexCode()}  `);
      for (let i = 0; i < 6; i++) {
        lines.push(generateParticleLine());
      }
      return lines;
    };

    const scannerBlock: string[] = [];
    for (let i = 0; i < 8; i++) {
      scannerBlock.push(generateScannerLine());
    }

    const loopBlock: string[] = [];
    for (let i = 0; i < 5; i++) {
      loopBlock.push(generateLoopLine());
    }

    const misc: string[] = [];
    for (let i = 0; i < 6; i++) {
      misc.push(generateMiscLine());
    }

    const library: string[] = [];
    header.forEach((l) => library.push(l));
    helpers.forEach((l) => library.push(l));
    for (let b = 0; b < 3; b++)
      particleBlock(b).forEach((l) => library.push(l));
    scannerBlock.forEach((l) => library.push(l));
    loopBlock.forEach((l) => library.push(l));
    misc.forEach((l) => library.push(l));

    for (let i = 0; i < 40; i++) {
      library.push(`${generateHexCode()} • ${pick(techTerms)}:${randInt(1, 9999)} • ${pick(techStatus)}`);
    }
    for (let i = 0; i < 20; i++) {
      library.push(`${pick(techTerms)}[${randInt(0, 255)}] = ${generateHexValue()} • ${pick(techStatus)}`);
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
    // Cache calculations for Apple/Tesla-level smoothness
    const scannerX = window.innerWidth / 2;
    const scannerWidth = 8;
    const scannerLeft = scannerX - scannerWidth / 2;
    const scannerRight = scannerX + scannerWidth / 2;
    let anyScanningActive = false;

    // Cache card wrappers to avoid repeated DOM queries
    if (!this.cachedWrappers) {
      this.cachedWrappers = Array.from(
        document.querySelectorAll(".card-stream-scanner-section .card-wrapper, .card-wrapper")
      ) as HTMLElement[];
    }

    // Batch DOM reads first (Apple/Tesla optimization pattern)
    const cardData = this.cachedWrappers.map((wrapper) => {
      const rect = wrapper.getBoundingClientRect();
      return {
        wrapper,
        cardLeft: rect.left,
        cardRight: rect.right,
        cardWidth: rect.width,
        normalCard: (wrapper as any).__normalCard || wrapper.querySelector(".card-normal") as HTMLElement,
        asciiCard: (wrapper as any).__asciiCard || wrapper.querySelector(".card-ascii") as HTMLElement,
      };
    });

    // Cache card elements
    cardData.forEach((data) => {
      if (!(data.wrapper as any).__normalCard) {
        (data.wrapper as any).__normalCard = data.normalCard;
        (data.wrapper as any).__asciiCard = data.asciiCard;
      }
    });

    // Batch DOM writes (Apple/Tesla optimization pattern)
    const styleUpdates: Array<{element: HTMLElement, property: string, value: string}> = [];

    cardData.forEach(({ wrapper, cardLeft, cardRight, cardWidth, normalCard, asciiCard }) => {
      if (normalCard && asciiCard && cardLeft < scannerRight && cardRight > scannerLeft) {
          anyScanningActive = true;
          const scannerIntersectLeft = Math.max(scannerLeft - cardLeft, 0);
        const scannerIntersectRight = Math.min(scannerRight - cardLeft, cardWidth);

          const normalClipRight = (scannerIntersectLeft / cardWidth) * 100;
          const asciiClipLeft = (scannerIntersectRight / cardWidth) * 100;

        styleUpdates.push(
          { element: normalCard, property: "--clip-right", value: `${normalClipRight.toFixed(2)}%` },
          { element: asciiCard, property: "--clip-left", value: `${asciiClipLeft.toFixed(2)}%` }
        );

          if (!wrapper.hasAttribute("data-scanned") && scannerIntersectLeft > 0) {
            wrapper.setAttribute("data-scanned", "true");
          }
        } else {
        if (normalCard && asciiCard) {
          if (cardRight < scannerLeft) {
            styleUpdates.push(
              { element: normalCard, property: "--clip-right", value: "100%" },
              { element: asciiCard, property: "--clip-left", value: "100%" }
            );
          } else if (cardLeft > scannerRight) {
            styleUpdates.push(
              { element: normalCard, property: "--clip-right", value: "0%" },
              { element: asciiCard, property: "--clip-left", value: "0%" }
            );
          }
          }
          wrapper.removeAttribute("data-scanned");
      }
    });

    // Apply all style updates in one batch (reduces reflows)
    styleUpdates.forEach(({ element, property, value }) => {
      element.style.setProperty(property, value);
    });

    if ((window as any).setScannerScanning) {
      (window as any).setScannerScanning(anyScanningActive);
    }
  }

  updateAsciiContent() {
    document.querySelectorAll(".card-stream-scanner-section .ascii-content, .ascii-content").forEach((content) => {
      // Always update - constantly changing, never reverting
      const { width, height } = this.calculateCodeDimensions(400, 250);
      (content as HTMLElement).textContent = this.generateCode(width, height);
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
    }, 2000); // Each word transforms every 2 seconds

    // Use requestAnimationFrame with frame skipping for ultra-smooth performance
    let frameCount = 0;
    const updateClipping = () => {
      // Only update clipping every 2 frames (30fps) for smoothness
      if (frameCount % 2 === 0) {
      this.updateCardClipping();
      }
      frameCount++;
      requestAnimationFrame(updateClipping);
    };
    requestAnimationFrame(updateClipping);
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
      // Use fixed timestep for consistent animation (Apple/Tesla-level smoothness)
      const fixedDeltaTime = 0.016;
      const time = Date.now() * 0.001;

      for (let i = 0; i < this.particleCount; i++) {
        positions[i * 3] += this.velocities[i] * fixedDeltaTime;

        if (positions[i * 3] > window.innerWidth / 2 + 100) {
          positions[i * 3] = -window.innerWidth / 2 - 100;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
        }

        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.5;

        // Reduce twinkle frequency for better performance
        const twinkle = Math.floor(Math.random() * 30);
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
    this.h = 300;
    this.particles = {};
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

    const targetGlowIntensity = this.scanningActive ? 3.5 : 1;

    if (!this.currentGlowIntensity) this.currentGlowIntensity = 1;

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
    // Use requestAnimationFrame for smooth 60fps rendering
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
    <section className="card-stream-scanner-section relative w-full bg-black overflow-hidden" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <style>{styles}</style>
      
      {/* Scanner Intro Heading - Absolutely positioned, centered on page */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="scanner-intro"
      >
        <h2 className="scanner-intro-heading">Security is Always Our Priority</h2>
        <p className="scanner-intro-text">All card data is encrypted and streamed securely — your information never touches our servers.</p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Animated Card Section */}
        <div className="relative" style={{ minHeight: "350px", height: "350px", marginTop: "40px", position: "relative", zIndex: 20, isolation: "isolate" }}>
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
      </div>
    </section>
  );
}

