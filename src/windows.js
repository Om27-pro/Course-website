import {
  personalDetails,
  projects,
  experience,
  education,
  skills,
  aiUsage,
  resumeText,
  themes
} from './data.js';

let windowStack = [];
let topZIndex = 200;
let snakeGameInterval = null;

// Initial positions offset for newly opened windows
let windowOffsetCount = 0;

export function initWindowManager() {
  setupBootSequence();
  setupTopMenu();
  setupClock();
  setupDesktopIcons();
  setupCommandPalette();
  setupGlobalShortcuts();
  loadSavedPreferences();

  // Expose window manager API globally if needed
  window.OM_OS = {
    openWindow,
    closeWindow,
    closeAllWindows,
    setTheme,
    toggleCRT
  };
}

/* ==========================================================================
   1. Preferences & Themes Persistence
   ========================================================================== */
function loadSavedPreferences() {
  const savedTheme = localStorage.getItem('om_os_theme') || 'default';
  setTheme(savedTheme);

  const savedCRT = localStorage.getItem('om_os_crt');
  const crtEl = document.getElementById('crt-overlay');
  if (savedCRT === 'off' && crtEl) {
    crtEl.classList.add('crt-off');
  }
}

function setTheme(themeKey) {
  if (!themes[themeKey]) themeKey = 'default';
  document.body.className = `theme-${themeKey}`;
  localStorage.setItem('om_os_theme', themeKey);
}

function toggleCRT() {
  const crtEl = document.getElementById('crt-overlay');
  if (!crtEl) return;
  crtEl.classList.toggle('crt-off');
  const isOff = crtEl.classList.contains('crt-off');
  localStorage.setItem('om_os_crt', isOff ? 'off' : 'on');
}

/* ==========================================================================
   2. Boot Sequence (2s or Skippable)
   ========================================================================== */
function setupBootSequence() {
  const bootScreen = document.getElementById('boot-screen');
  if (!bootScreen) return;

  let dismissed = false;
  const dismissBoot = () => {
    if (dismissed) return;
    dismissed = true;
    bootScreen.classList.add('fade-out');
    setTimeout(() => {
      bootScreen.style.display = 'none';
      // Auto-open projects window after boot if no windows open
      if (windowStack.length === 0) {
        openWindow('projects.vol');
      }
    }, 500);
  };

  // Skip on click or any keypress
  bootScreen.addEventListener('click', dismissBoot);
  window.addEventListener('keydown', (e) => {
    if (bootScreen.style.display !== 'none') {
      dismissBoot();
    }
  }, { once: true });

  // Auto skip after 2 seconds
  setTimeout(dismissBoot, 2200);
}

/* ==========================================================================
   3. Clock & Top Menu Dropdowns
   ========================================================================== */
function setupClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;

  const update = () => {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  update();
  setInterval(update, 1000);
}

function setupTopMenu() {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((item) => {
    const btn = item.querySelector('.menu-btn');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = item.classList.contains('active');
      closeAllDropdowns();
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    closeAllDropdowns();
  });

  // Menu item actions
  document.querySelectorAll('.menu-dropdown button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      const theme = btn.dataset.theme;

      if (action === 'open-all') {
        ['projects.vol', 'experience.log', 'profile.sys', 'contact.app', 'resume.txt'].forEach(id => openWindow(id));
      } else if (action === 'close-all') {
        closeAllWindows();
      } else if (action === 'reload-system') {
        location.reload();
      } else if (action === 'launch-cmd') {
        toggleCommandPalette(true);
      } else if (action === 'toggle-crt') {
        toggleCRT();
      } else if (action === 'play-snake') {
        openWindow('snake.exe');
      } else if (action === 'theme' && theme) {
        setTheme(theme);
      }

      closeAllDropdowns();
    });
  });
}

function closeAllDropdowns() {
  document.querySelectorAll('.menu-item').forEach((item) => {
    item.classList.remove('active');
    const btn = item.querySelector('.menu-btn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });
}

/* ==========================================================================
   4. Desktop Icons
   ========================================================================== */
function setupDesktopIcons() {
  const icons = document.querySelectorAll('.desktop-icon');
  icons.forEach((icon) => {
    const winId = icon.dataset.window;

    // Single click select, double click or enter key open
    icon.addEventListener('click', () => {
      icons.forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');
      openWindow(winId);
    });

    icon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openWindow(winId);
      }
    });
  });
}

/* ==========================================================================
   5. Window Manager Core (Open, Close, Drag, Focus, Maximize)
   ========================================================================== */
export function openWindow(windowId, customProps = {}) {
  // If window already exists, bring it to front
  let existing = document.getElementById(`win-${windowId}`);
  if (existing) {
    existing.classList.remove('minimized');
    bringToFront(existing);
    return existing;
  }

  const container = document.getElementById('windows-container');
  if (!container) return;

  windowOffsetCount = (windowOffsetCount + 1) % 6;
  const isMobile = window.innerWidth <= 700;

  // Window default specs
  let title = windowId;
  let icon = '📄';
  let width = Math.min(680, window.innerWidth - 40);
  let height = Math.min(520, window.innerHeight - 80);
  let left = Math.max(20, 40 + windowOffsetCount * 24);
  let top = Math.max(10, 20 + windowOffsetCount * 24);

  if (windowId === 'projects.vol') {
    title = 'projects.vol';
    icon = '📁';
    width = Math.min(760, window.innerWidth - 30);
  } else if (windowId === 'experience.log') {
    title = 'experience.log';
    icon = '📜';
    width = Math.min(680, window.innerWidth - 30);
  } else if (windowId === 'profile.sys') {
    title = 'profile.sys';
    icon = '⚙️';
  } else if (windowId === 'contact.app') {
    title = 'contact.app';
    icon = '✉️';
    width = Math.min(600, window.innerWidth - 30);
  } else if (windowId === 'resume.txt') {
    title = 'resume.txt';
    icon = '📄';
  } else if (windowId === 'snake.exe') {
    title = 'snake.exe';
    icon = '🐍';
    width = Math.min(420, window.innerWidth - 30);
    height = Math.min(500, window.innerHeight - 60);
  } else if (windowId.startsWith('case-study-')) {
    title = customProps.title || 'case-study.doc';
    icon = '💡';
    width = Math.min(640, window.innerWidth - 30);
    height = Math.min(540, window.innerHeight - 60);
  }

  topZIndex += 1;

  const winEl = document.createElement('div');
  winEl.id = `win-${windowId}`;
  winEl.className = 'window-frame active-window';
  winEl.style.width = `${width}px`;
  winEl.style.height = `${height}px`;
  winEl.style.left = `${left}px`;
  winEl.style.top = `${top}px`;
  winEl.style.zIndex = topZIndex;

  winEl.innerHTML = `
    <div class="window-header">
      <div class="window-title">
        <span class="window-title-icon">${icon}</span>
        <span>${title}</span>
      </div>
      <div class="window-controls">
        <button class="win-btn minimize-btn" title="Minimize">_</button>
        <button class="win-btn maximize-btn" title="Maximize">□</button>
        <button class="win-btn close-btn" title="Close">✕</button>
      </div>
    </div>
    <div class="window-body">
      ${renderWindowBody(windowId, customProps)}
    </div>
  `;

  container.appendChild(winEl);
  windowStack.push(windowId);

  // Setup interactions for this window
  setupWindowInteractions(winEl, windowId, customProps);
  bringToFront(winEl);

  return winEl;
}

function bringToFront(winEl) {
  topZIndex += 1;
  winEl.style.zIndex = topZIndex;

  document.querySelectorAll('.window-frame').forEach(w => w.classList.remove('active-window'));
  winEl.classList.add('active-window');
}

export function closeWindow(windowId) {
  const winEl = document.getElementById(`win-${windowId}`);
  if (winEl) {
    if (windowId === 'snake.exe' && snakeGameInterval) {
      clearInterval(snakeGameInterval);
      snakeGameInterval = null;
    }
    winEl.remove();
    windowStack = windowStack.filter(id => id !== windowId);
  }
}

export function closeAllWindows() {
  windowStack.slice().forEach(id => closeWindow(id));
}

function setupWindowInteractions(winEl, windowId, customProps) {
  const header = winEl.querySelector('.window-header');
  const minBtn = winEl.querySelector('.minimize-btn');
  const maxBtn = winEl.querySelector('.maximize-btn');
  const closeBtn = winEl.querySelector('.close-btn');

  // Focus on click
  winEl.addEventListener('mousedown', () => bringToFront(winEl));

  // Minimize
  minBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    winEl.classList.add('minimized');
  });

  // Maximize
  maxBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    winEl.classList.toggle('maximized');
  });

  // Close
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeWindow(windowId);
  });

  // Dragging logic
  let isDragging = false;
  let startX, startY, initialLeft, initialTop;

  const onPointerDown = (e) => {
    if (e.target.closest('.window-controls')) return;
    if (winEl.classList.contains('maximized')) return;

    isDragging = true;
    bringToFront(winEl);

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    startX = clientX;
    startY = clientY;
    initialLeft = winEl.offsetLeft;
    initialTop = winEl.offsetTop;

    document.addEventListener('mousemove', onPointerMove);
    document.addEventListener('mouseup', onPointerUp);
    document.addEventListener('touchmove', onPointerMove, { passive: false });
    document.addEventListener('touchend', onPointerUp);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    if (clientX === undefined || clientY === undefined) return;

    const dx = clientX - startX;
    const dy = clientY - startY;

    winEl.style.left = `${Math.max(0, initialLeft + dx)}px`;
    winEl.style.top = `${Math.max(0, initialTop + dy)}px`;
  };

  const onPointerUp = () => {
    isDragging = false;
    document.removeEventListener('mousemove', onPointerMove);
    document.removeEventListener('mouseup', onPointerUp);
    document.removeEventListener('touchmove', onPointerMove);
    document.removeEventListener('touchend', onPointerUp);
  };

  header.addEventListener('mousedown', onPointerDown);
  header.addEventListener('touchstart', onPointerDown, { passive: true });

  // Post-render bindings (for forms, case studies, snake)
  bindWindowSpecificEvents(winEl, windowId, customProps);
}

/* ==========================================================================
   6. Renderers for Window Body Content
   ========================================================================== */
function renderWindowBody(windowId, customProps) {
  if (windowId === 'projects.vol') {
    return `
      <div class="section-title">📁 PROJECT PORTFOLIO</div>
      <p style="margin-bottom: 16px; font-size: 0.85rem;">
        Select any project below to launch its detailed architecture case study and workflow diagram.
      </p>
      <div class="projects-grid">
        ${projects.map(p => `
          <div class="project-card">
            <div>
              <div class="project-name">${p.name}</div>
              <div class="project-type">${p.type || 'Software Solution'}</div>
              <div class="project-tagline">${p.tagline}</div>
              <ul class="project-bullets">
                ${p.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
            </div>
            <div>
              <div style="margin-bottom: 8px;">
                ${p.stack.map(s => `<span class="tech-chip">${s}</span>`).join('')}
              </div>
              <button class="case-study-btn" data-project="${p.id}">View Case Study →</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (windowId.startsWith('case-study-')) {
    const proj = customProps.project;
    if (!proj) return '<p>Case study data not found.</p>';

    return `
      <div class="section-title">💡 CASE STUDY: ${proj.name}</div>
      <div class="retro-box">
        <div style="font-weight: bold; color: var(--accent-color); margin-bottom: 4px;">SYSTEM OVERVIEW</div>
        <p style="font-size: 0.85rem; line-height: 1.6;">${proj.description}</p>
      </div>

      <div class="sub-title">ARCHITECTURE & DATA FLOW DIAGRAM</div>
      <div class="flow-diagram">
        ${proj.flowDiagram.map((s, idx) => `
          <div class="flow-step">
            <div class="flow-step-num">${idx + 1}</div>
            <div>
              <div class="flow-step-title">${s.step}</div>
              <div class="flow-step-detail">${s.detail}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="sub-title">KEY ENGINEERING HIGHLIGHTS</div>
      <div class="retro-box">
        <ul style="list-style: none; padding-left: 0;">
          ${proj.highlights.map(h => `
            <li style="margin-bottom: 6px; font-size: 0.85rem;">
              <span style="color: var(--accent-color); font-weight: bold;">✔</span> ${h}
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="sub-title">TECHNOLOGY STACK</div>
      <div style="margin-top: 8px;">
        ${proj.stack.map(s => `<span class="tech-chip" style="font-size: 0.85rem; padding: 4px 10px;">${s}</span>`).join('')}
      </div>
    `;
  }

  if (windowId === 'experience.log') {
    return `
      <div class="section-title">📜 EXPERIENCE & EDUCATION LOG</div>
      <div class="sub-title">WORK EXPERIENCE</div>
      <div class="git-timeline">
        ${experience.map(exp => `
          <div class="git-commit-node">
            <div class="commit-hash">${exp.hash} (${exp.year})</div>
            <div class="commit-role">${exp.role}</div>
            <div class="commit-company">@ ${exp.company}</div>
            <ul style="list-style: none; padding-left: 0; font-size: 0.85rem;">
              ${exp.details.map(d => `<li style="margin-bottom: 4px;">• ${d}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="sub-title" style="margin-top: 24px;">EDUCATION ACADEMICS</div>
      <div class="git-timeline">
        ${education.map(edu => `
          <div class="git-commit-node">
            <div class="commit-hash">${edu.hash} (${edu.period})</div>
            <div class="commit-role">${edu.degree}</div>
            <div class="commit-company">${edu.institution}</div>
            <div style="font-size: 0.82rem; color: var(--secondary-color); font-weight: bold;">Grade: ${edu.grade}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (windowId === 'profile.sys') {
    return `
      <div class="section-title">⚙️ SYSTEM PROFILE & SKILLS</div>

      <div class="retro-box">
        <div style="font-weight: bold; color: var(--accent-color); font-size: 1.1rem;">${personalDetails.name}</div>
        <div style="font-size: 0.85rem; color: var(--secondary-color);">${personalDetails.title}</div>
        <div style="font-size: 0.85rem; margin-top: 6px;">${personalDetails.summary}</div>
      </div>

      <div class="sub-title">TECHNICAL SKILLS BY CATEGORY</div>

      <div class="skills-group">
        <div class="skills-group-title">Languages</div>
        <div>${skills.languages.map(s => `<span class="tech-chip">${s}</span>`).join('')}</div>
      </div>

      <div class="skills-group">
        <div class="skills-group-title">Frontend Engineering</div>
        <div>${skills.frontend.map(s => `<span class="tech-chip">${s}</span>`).join('')}</div>
      </div>

      <div class="skills-group">
        <div class="skills-group-title">Backend & APIs</div>
        <div>${skills.backend.map(s => `<span class="tech-chip">${s}</span>`).join('')}</div>
      </div>

      <div class="skills-group">
        <div class="skills-group-title">Mobile Engineering</div>
        <div>${skills.mobile.map(s => `<span class="tech-chip">${s}</span>`).join('')}</div>
      </div>

      <div class="skills-group">
        <div class="skills-group-title">Databases</div>
        <div>${skills.databases.map(s => `<span class="tech-chip">${s}</span>`).join('')}</div>
      </div>

      <div class="skills-group">
        <div class="skills-group-title">Automation & AI Workflows</div>
        <div>${skills.automation_and_ai.map(s => `<span class="tech-chip">${s}</span>`).join('')}</div>
      </div>

      <div class="sub-title" style="margin-top: 20px;">${aiUsage.title}</div>
      <div class="retro-box">
        <p style="font-size: 0.85rem; margin-bottom: 8px;">${aiUsage.description}</p>
        <ul style="list-style: none; font-size: 0.82rem;">
          ${aiUsage.bulletPoints.map(b => `<li style="margin-bottom: 6px;">⚡ ${b}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  if (windowId === 'contact.app') {
    return `
      <div class="section-title">✉️ CONTACT & MAIL CLIENT</div>
      <form class="contact-form" id="contact-form" onsubmit="return false;">
        <div class="form-group">
          <label>Your Name</label>
          <input type="text" id="contact-name" placeholder="e.g., Ada Lovelace" required />
        </div>

        <div class="form-group">
          <label>Inquiry Type</label>
          <select id="contact-type">
            <option>Job Opportunity / Role</option>
            <option>Project Consultation</option>
            <option>AI Automation Pipeline</option>
            <option>General Connect</option>
          </select>
        </div>

        <div class="form-group">
          <label>Subject</label>
          <input type="text" id="contact-subject" placeholder="e.g., Software Engineering Role" required />
        </div>

        <div class="form-group">
          <label>Message</label>
          <textarea id="contact-message" rows="4" placeholder="Write your message here..." required></textarea>
        </div>

        <div class="contact-actions">
          <button type="button" class="action-btn" id="btn-copy-msg">📋 Copy Message to Clipboard</button>
          <a class="action-btn" id="btn-mailto" href="mailto:${personalDetails.email}" target="_blank" style="text-decoration:none;">✉ Send Mail directly</a>
        </div>
        <div id="contact-feedback" style="font-size: 0.8rem; color: var(--success-color); height: 18px; margin-top: 4px;"></div>
      </form>

      <div class="sub-title">DIRECT CONTACT DETAILS</div>
      <div class="retro-box contact-details-box">
        <p><strong>Email:</strong> <span id="copy-email-val">${personalDetails.email}</span>
           <button class="tech-chip" id="btn-copy-email" style="cursor:pointer; margin-left:8px;">Copy Email</button>
        </p>
        <p style="margin-top:6px;"><strong>Phone:</strong> ${personalDetails.phone}</p>
        <p style="margin-top:6px;"><strong>LinkedIn:</strong> <a class="contact-link" href="${personalDetails.linkedinUrl}" target="_blank" rel="noopener">${personalDetails.linkedin}</a></p>
        <p style="margin-top:6px;"><strong>GitHub:</strong> <a class="contact-link" href="${personalDetails.githubUrl}" target="_blank" rel="noopener">${personalDetails.github}</a></p>
      </div>
    `;
  }

  if (windowId === 'resume.txt') {
    return `
      <div class="section-title">📄 RESUME.TXT</div>
      <div style="margin-bottom: 12px; display: flex; gap: 8px;">
        <button class="action-btn" id="btn-copy-resume" style="font-size: 0.85rem; padding: 4px 10px;">📋 Copy Full Resume</button>
      </div>
      <pre class="resume-pre" id="resume-text-content">${resumeText}</pre>
    `;
  }

  if (windowId === 'snake.exe') {
    return `
      <div class="section-title">🐍 SNAKE.EXE</div>
      <div class="snake-container">
        <div class="snake-score-bar">
          <div>SCORE: <span id="snake-score">0</span></div>
          <div>HIGH: <span id="snake-highscore">0</span></div>
        </div>
        <canvas id="snake-canvas" width="320" height="320"></canvas>
        <div class="snake-controls-hint">Controls: Arrow Keys / WASD. Space to pause.</div>
        <div class="snake-touch-controls">
          <div></div>
          <button class="touch-btn" id="sbtn-up">▲</button>
          <div></div>
          <button class="touch-btn" id="sbtn-left">◀</button>
          <button class="touch-btn" id="sbtn-down">▼</button>
          <button class="touch-btn" id="sbtn-right">▶</button>
        </div>
      </div>
    `;
  }

  return '<div>Window Content</div>';
}

/* ==========================================================================
   7. Binding Special Window Actions (Case Studies, Forms, Snake)
   ========================================================================== */
function bindWindowSpecificEvents(winEl, windowId, customProps) {
  // Case Study button clicks in projects.vol
  if (windowId === 'projects.vol') {
    winEl.querySelectorAll('.case-study-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const projId = btn.dataset.project;
        const proj = projects.find(p => p.id === projId);
        if (proj) {
          openWindow(`case-study-${projId}`, {
            title: `case-study-${proj.id}.doc`,
            project: proj
          });
        }
      });
    });
  }

  // Contact App actions
  if (windowId === 'contact.app') {
    const copyBtn = winEl.querySelector('#btn-copy-msg');
    const feedback = winEl.querySelector('#contact-feedback');
    const mailtoBtn = winEl.querySelector('#btn-mailto');
    const copyEmailBtn = winEl.querySelector('#btn-copy-email');

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const name = winEl.querySelector('#contact-name').value || 'Visitor';
        const type = winEl.querySelector('#contact-type').value;
        const subject = winEl.querySelector('#contact-subject').value || 'Inquiry';
        const message = winEl.querySelector('#contact-message').value || '';

        const composed = `From: ${name}\nType: ${type}\nSubject: ${subject}\n\nMessage:\n${message}`;

        navigator.clipboard.writeText(composed).then(() => {
          if (feedback) feedback.textContent = '✔ Composed message copied to clipboard!';
          setTimeout(() => { if (feedback) feedback.textContent = ''; }, 3000);
        });
      });
    }

    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(personalDetails.email).then(() => {
          if (feedback) feedback.textContent = '✔ Email address copied!';
          setTimeout(() => { if (feedback) feedback.textContent = ''; }, 3000);
        });
      });
    }

    // Dynamic mailto link update
    const updateMailto = () => {
      const subject = encodeURIComponent(winEl.querySelector('#contact-subject').value || 'Inquiry');
      const body = encodeURIComponent(winEl.querySelector('#contact-message').value || '');
      mailtoBtn.href = `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
    };

    winEl.querySelector('#contact-subject').addEventListener('input', updateMailto);
    winEl.querySelector('#contact-message').addEventListener('input', updateMailto);
  }

  // Resume copy
  if (windowId === 'resume.txt') {
    const copyBtn = winEl.querySelector('#btn-copy-resume');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(resumeText).then(() => {
          copyBtn.textContent = '✔ Copied!';
          setTimeout(() => { copyBtn.textContent = '📋 Copy Full Resume'; }, 2000);
        });
      });
    }
  }

  // Snake Game initialization
  if (windowId === 'snake.exe') {
    initSnakeGame(winEl);
  }
}

/* ==========================================================================
   8. Snake Game Implementation
   ========================================================================== */
function initSnakeGame(winEl) {
  const canvas = winEl.querySelector('#snake-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const scoreEl = winEl.querySelector('#snake-score');
  const highscoreEl = winEl.querySelector('#snake-highscore');

  const gridSize = 16;
  const tileCount = canvas.width / gridSize; // 20

  let snake = [{ x: 10, y: 10 }];
  let dx = 1, dy = 0;
  let food = { x: 5, y: 5 };
  let score = 0;
  let highscore = parseInt(localStorage.getItem('om_os_snake_high') || '0', 10);
  if (highscoreEl) highscoreEl.textContent = highscore;

  function spawnFood() {
    food = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
  }

  function gameLoop() {
    // Update head position
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Wall collision (wrap around or game over)
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      return gameOver();
    }

    // Self collision
    for (let i = 0; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        return gameOver();
      }
    }

    snake.unshift(head);

    // Food collision
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      if (scoreEl) scoreEl.textContent = score;
      if (score > highscore) {
        highscore = score;
        if (highscoreEl) highscoreEl.textContent = highscore;
        localStorage.setItem('om_os_snake_high', highscore);
      }
      spawnFood();
    } else {
      snake.pop();
    }

    // Render Canvas
    ctx.fillStyle = '#050a14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render Food
    ctx.fillStyle = '#ff9ad5';
    ctx.fillRect(food.x * gridSize + 1, food.y * gridSize + 1, gridSize - 2, gridSize - 2);

    // Render Snake
    ctx.fillStyle = '#52e0ff';
    for (let i = 0; i < snake.length; i++) {
      ctx.fillRect(snake[i].x * gridSize + 1, snake[i].y * gridSize + 1, gridSize - 2, gridSize - 2);
    }
  }

  function gameOver() {
    clearInterval(snakeGameInterval);
    snakeGameInterval = null;

    ctx.fillStyle = 'rgba(5, 10, 20, 0.85)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#52e0ff';
    ctx.font = '24px VT323';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = '16px "IBM Plex Mono"';
    ctx.fillText('Press Arrow Key to Restart', canvas.width / 2, canvas.height / 2 + 20);
  }

  function restart() {
    snake = [{ x: 10, y: 10 }];
    dx = 1;
    dy = 0;
    score = 0;
    if (scoreEl) scoreEl.textContent = score;
    spawnFood();
    if (snakeGameInterval) clearInterval(snakeGameInterval);
    snakeGameInterval = setInterval(gameLoop, 110);
  }

  const handleKey = (e) => {
    // Only capture keys if snake window is active
    if (!winEl.classList.contains('active-window')) return;

    if (!snakeGameInterval && ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyS','KeyA','KeyD'].includes(e.code)) {
      restart();
      return;
    }

    if (e.code === 'ArrowUp' || e.code === 'KeyW') {
      if (dy !== 1) { dx = 0; dy = -1; }
    } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
      if (dy !== -1) { dx = 0; dy = 1; }
    } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
      if (dx !== 1) { dx = -1; dy = 0; }
    } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
      if (dx !== -1) { dx = 1; dy = 0; }
    }
  };

  window.addEventListener('keydown', handleKey);

  // Touch controls binding
  const upBtn = winEl.querySelector('#sbtn-up');
  const downBtn = winEl.querySelector('#sbtn-down');
  const leftBtn = winEl.querySelector('#sbtn-left');
  const rightBtn = winEl.querySelector('#sbtn-right');

  if (upBtn) {
    upBtn.onclick = () => { if (!snakeGameInterval) restart(); else if (dy !== 1) { dx = 0; dy = -1; } };
    downBtn.onclick = () => { if (!snakeGameInterval) restart(); else if (dy !== -1) { dx = 0; dy = 1; } };
    leftBtn.onclick = () => { if (!snakeGameInterval) restart(); else if (dx !== 1) { dx = -1; dy = 0; } };
    rightBtn.onclick = () => { if (!snakeGameInterval) restart(); else if (dx !== -1) { dx = 1; dy = 0; } };
  }

  restart();
}

/* ==========================================================================
   9. Command Palette Modal (Ctrl/Cmd+K)
   ========================================================================== */
function setupCommandPalette() {
  const palette = document.getElementById('command-palette');
  const backdrop = document.getElementById('palette-backdrop');
  const input = document.getElementById('palette-input');
  const results = document.getElementById('palette-results');

  if (!palette || !input || !results) return;

  const commands = [
    { title: 'Open projects.vol (Projects)', action: () => openWindow('projects.vol'), shortcut: '1' },
    { title: 'Open experience.log (Experience)', action: () => openWindow('experience.log'), shortcut: '2' },
    { title: 'Open profile.sys (Profile & Skills)', action: () => openWindow('profile.sys'), shortcut: '3' },
    { title: 'Open contact.app (Contact Form)', action: () => openWindow('contact.app'), shortcut: '4' },
    { title: 'Open resume.txt (Resume)', action: () => openWindow('resume.txt'), shortcut: '5' },
    { title: 'Play Snake.exe', action: () => openWindow('snake.exe'), shortcut: 'Snake' },
    { title: 'Theme: Default Dark', action: () => setTheme('default'), shortcut: 'Theme' },
    { title: 'Theme: Phosphor Green', action: () => setTheme('phosphor'), shortcut: 'Theme' },
    { title: 'Theme: Violet', action: () => setTheme('violet'), shortcut: 'Theme' },
    { title: 'Theme: Bubblegum', action: () => setTheme('bubblegum'), shortcut: 'Theme' },
    { title: 'Theme: Papier Light', action: () => setTheme('papier'), shortcut: 'Theme' },
    { title: 'Toggle CRT Scanlines', action: () => toggleCRT(), shortcut: 'CRT' },
    { title: 'Close All Windows', action: () => closeAllWindows(), shortcut: 'Esc' }
  ];

  let selectedIndex = 0;

  function renderResults(filterText = '') {
    const query = filterText.toLowerCase().trim();
    const filtered = commands.filter(c => c.title.toLowerCase().includes(query));

    results.innerHTML = '';
    if (filtered.length === 0) {
      results.innerHTML = '<li style="color: var(--secondary-color);">No matching commands found</li>';
      return;
    }

    filtered.forEach((cmd, idx) => {
      const li = document.createElement('li');
      if (idx === selectedIndex) li.classList.add('selected');
      li.innerHTML = `
        <span>${cmd.title}</span>
        <span class="item-shortcut">${cmd.shortcut}</span>
      `;
      li.addEventListener('click', () => {
        cmd.action();
        toggleCommandPalette(false);
      });
      results.appendChild(li);
    });
  }

  input.addEventListener('input', (e) => {
    selectedIndex = 0;
    renderResults(e.target.value);
  });

  input.addEventListener('keydown', (e) => {
    const items = results.querySelectorAll('li');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      renderResults(input.value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      renderResults(input.value);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selectedEl = items[selectedIndex];
      if (selectedEl) selectedEl.click();
    }
  });

  if (backdrop) backdrop.addEventListener('click', () => toggleCommandPalette(false));
}

function toggleCommandPalette(show) {
  const palette = document.getElementById('command-palette');
  const input = document.getElementById('palette-input');
  if (!palette) return;

  if (show === undefined) show = palette.classList.contains('hidden');

  if (show) {
    palette.classList.remove('hidden');
    if (input) {
      input.value = '';
      input.focus();
    }
    const inputEvent = new Event('input');
    if (input) input.dispatchEvent(inputEvent);
  } else {
    palette.classList.add('hidden');
  }
}

/* ==========================================================================
   10. Global Keyboard Shortcuts
   ========================================================================== */
function setupGlobalShortcuts() {
  window.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      toggleCommandPalette();
      return;
    }

    // Esc closes command palette or top active window
    if (e.key === 'Escape') {
      const palette = document.getElementById('command-palette');
      if (palette && !palette.classList.contains('hidden')) {
        toggleCommandPalette(false);
        return;
      }

      if (windowStack.length > 0) {
        const topWindowId = windowStack[windowStack.length - 1];
        closeWindow(topWindowId);
      }
      return;
    }

    // Don't trigger number shortcuts if user is typing in an input or textarea
    const activeTag = document.activeElement ? document.activeElement.tagName : '';
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag)) return;

    // Keys 1 - 5 open main windows
    if (e.key === '1') openWindow('projects.vol');
    if (e.key === '2') openWindow('experience.log');
    if (e.key === '3') openWindow('profile.sys');
    if (e.key === '4') openWindow('contact.app');
    if (e.key === '5') openWindow('resume.txt');
  });
}
