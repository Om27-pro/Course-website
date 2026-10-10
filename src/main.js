import './style.css';
import { initWindowManager } from './windows.js';
import { initParticleEngine } from './particles.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('OM-OS v2.6 Operating System Loaded.');
  initWindowManager();
  initParticleEngine();
});
