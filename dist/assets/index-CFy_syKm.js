(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const k={name:"Om Solanki",title:"Full Stack Developer & AI Automation Engineer",summary:"B.Tech Computer Science Engineering graduate (2026), Kolhapur, Maharashtra, India.",email:"solankiom322@gmail.com",phone:"+91 70588 28616",linkedin:"linkedin.com/in/solanki-om27",linkedinUrl:"https://linkedin.com/in/solanki-om27",github:"github.com/Om27-pro",githubUrl:"https://github.com/Om27-pro"},J=[{id:"mindai",name:"MindAI",type:"AI mental health chatbot",tagline:"Real-time AI emotional support chatbot with mood analytics",stack:["Python","Flask","Ollama","Google GenAI","SQLite","Bootstrap"],highlights:["LLM replies under 2 seconds","Hashed-password auth","Speech-to-text and text-to-speech","Session-based mood tracking"],description:"MindAI is an intelligent mental health assistance application engineered to provide rapid, empathetic conversational AI support. It integrates local Ollama and Google GenAI models to deliver sub-2-second responses, backed by secure session auth and historical mood analytics.",flowDiagram:[{step:"User Input",detail:"Voice / Speech-to-Text or typed prompt"},{step:"Flask Backend",detail:"Session auth, rate limiting & input sanitization"},{step:"LLM Pipeline",detail:"Ollama / Google GenAI stream generation (<2s latency)"},{step:"Database & Voice",detail:"SQLite mood log & Text-To-Speech audio synthesizer"},{step:"UI Render",detail:"Bootstrap responsive dashboard & real-time audio playback"}]},{id:"dm-automation",name:"WhatsApp & Instagram DM Automation System",type:"Meta messaging workflow automation",tagline:"Enterprise workflow engine for automated multi-channel customer engagement",stack:["n8n","WhatsApp Business API","Instagram Graph API","webhooks"],highlights:["Multi-step pipelines with conditional branching","Error-handling and retry logic"],description:"An automated workflow pipeline built on n8n that processes incoming webhooks from WhatsApp Business API and Instagram Graph API. It handles multi-branch customer inquiry trees, dynamic context routing, and resilient failover logic.",flowDiagram:[{step:"Meta Webhook",detail:"Incoming WhatsApp / Instagram DM events"},{step:"n8n Core",detail:"Webhook parsing & payload validation"},{step:"Conditional Router",detail:"Multi-branch decision tree based on intent"},{step:"Retry Engine",detail:"Exponential backoff & error recovery handlers"},{step:"Meta API Response",detail:"Automated responses delivered back to user"}]},{id:"erp-companion",name:"ERP Companion & AI Assistant",type:"Mobile ERP platform",tagline:"Cross-platform enterprise companion with embedded AI assistant",stack:["Flutter","Dart","Riverpod","GoRouter","Dio","n8n","fl_chart"],highlights:["Inventory, billing and attendance","AI chatbot over n8n webhooks","Secure session storage","Routing guards","PDF invoice export"],description:"A comprehensive Flutter mobile suite designed for enterprise inventory tracking, employee attendance, dynamic PDF invoice generation, and financial charting. Features an embedded AI chatbot connected via n8n webhooks.",flowDiagram:[{step:"Flutter UI",detail:"Riverpod state tree & GoRouter navigation guards"},{step:"Secure Storage",detail:"Encrypted token store & session management"},{step:"n8n AI Webhook",detail:"Natural language query processing over Dio"},{step:"Data Visualization",detail:"fl_chart analytics & PDF generation engine"}]},{id:"ajra-art-house",name:"Ajra Art House",type:"Art e-commerce platform",tagline:"Interactive 3D gallery & marketplace for original physical art",stack:["React","Node.js","Express","MongoDB","Three.js","GSAP"],highlights:["3D landing page at 60 FPS","Google OAuth 2.0 role-based auth","Collector dashboards","MongoDB search and filtering"],description:"An immersive e-commerce portal for art collectors and galleries featuring high-performance 3D canvas visualizations running smoothly at 60 FPS. Includes role-based access control with Google OAuth 2.0 and artwork filtering.",flowDiagram:[{step:"3D Viewport",detail:"Three.js canvas + GSAP interactive animations (60 FPS)"},{step:"OAuth 2.0 Auth",detail:"Google single sign-on & role-based permissions"},{step:"Express REST API",detail:"Product catalog, cart state & search endpoint"},{step:"MongoDB Store",detail:"Indexed search queries for artwork filtering"}]}],re=[{role:"Full Stack Developer & AI Automation Intern",company:"Crocodile N Creatives, Kolhapur",year:"2026",period:"2026",hash:"commit e92f81a",details:["React/Node/Express apps","n8n WhatsApp and Instagram DM pipelines","The Flutter ERP assistant","REST APIs"]},{role:"Frontend Developer Intern",company:"Comtranse Technology Pvt. Ltd., Kolhapur",year:"2025",period:"2025",hash:"commit b41c0d2",details:["React/HTML/CSS interfaces for 3 client projects","10+ reusable components refactored with code-splitting and lazy loading","Jules and Google GenAI added to the team workflow"]}],ce=[{degree:"B.Tech Computer Science Engineering",institution:"D. Y. Patil Technical Campus, Talsande",period:"2022 to 2026",grade:"CGPA 7.2 / 10",hash:"commit 7f3a19e"},{degree:"Higher Secondary Certificate (HSC)",institution:"Maharashtra State Board",period:"2022",grade:"66.67%",hash:"commit 4a82c11"},{degree:"Secondary School Certificate (SSC)",institution:"Maharashtra State Board",period:"2020",grade:"84.00%",hash:"commit 21b0e99"}],P={languages:["Python","JavaScript","TypeScript","Dart","SQL"],frontend:["React","Next.js","Redux","Tailwind","Three.js","GSAP"],backend:["Node","Express","Flask","Laravel","REST","OAuth 2.0"],mobile:["Flutter","Riverpod"],databases:["MySQL","MongoDB","SQLite"],automation_and_ai:["n8n","Ollama","Google GenAI","WhatsApp Business API","Instagram Graph API"]},_={title:"How I Leverage AI in Engineering",description:"I integrate LLMs and automation engines directly into development pipelines to amplify velocity and solve complex problems.",bulletPoints:["Workflow Automation: Architected n8n agentic workflows connected to Meta messaging APIs.","Local & Cloud LLMs: Integrated Ollama (local private inference) and Google GenAI for voice-enabled chatbots with sub-2s responses.","AI-Augmented Dev Workflows: Utilized Jules and LLM agents during team sprints for rapid code refactoring and test coverage.","Mobile & Backend Integrations: Connected Flutter apps to n8n webhooks for context-aware natural language query processing."]},Z=`================================================================================
                         OM SOLANKI - RESUME
================================================================================
Location: Kolhapur, Maharashtra, India
Email: solankiom322@gmail.com | Phone: +91 70588 28616
LinkedIn: https://linkedin.com/in/solanki-om27
GitHub: https://github.com/Om27-pro

--------------------------------------------------------------------------------
SUMMARY
--------------------------------------------------------------------------------
B.Tech Computer Science Engineering graduate (2026) with expertise in Full
Stack web development, Flutter cross-platform mobile engineering, and AI
automation workflows (n8n, Ollama, Google GenAI). Proven experience building
sub-2s latency conversational AI systems, enterprise DM automation, and
responsive frontend applications.

--------------------------------------------------------------------------------
WORK EXPERIENCE
--------------------------------------------------------------------------------
Full Stack Developer & AI Automation Intern
Crocodile N Creatives, Kolhapur | 2026
  * Built production React / Node / Express full-stack web applications.
  * Designed and deployed multi-step n8n messaging pipelines for WhatsApp
    and Instagram DM webhooks with error-handling logic.
  * Developed Flutter ERP companion app with Riverpod and GoRouter.
  * Designed RESTful APIs and database schemas.

Frontend Developer Intern
Comtranse Technology Pvt. Ltd., Kolhapur | 2025
  * Built modular React/HTML/CSS interfaces across 3 client projects.
  * Refactored 10+ reusable UI components, optimizing load times with code-splitting.
  * Integrated Jules and Google GenAI into standard development workflow.

--------------------------------------------------------------------------------
PROJECTS
--------------------------------------------------------------------------------
MindAI - AI Mental Health Chatbot
  Stack: Python, Flask, Ollama, Google GenAI, SQLite, Bootstrap
  * Achieved sub-2-second LLM response times using streaming endpoints.
  * Integrated speech-to-text and text-to-speech audio pipelines.
  * Built hashed-password authentication and session mood-tracking dashboard.

WhatsApp & Instagram DM Automation System
  Stack: n8n, WhatsApp Business API, Instagram Graph API, Webhooks
  * Designed multi-step workflow pipelines with conditional intent branching.
  * Implemented retry logic and failure notifications for meta webhooks.

ERP Companion & AI Assistant
  Stack: Flutter, Dart, Riverpod, GoRouter, Dio, n8n, fl_chart
  * Created full mobile suite for inventory, billing, attendance, and charting.
  * Built AI assistant connected to n8n webhooks over secure Dio HTTP client.
  * Implemented routing guards, secure token storage, and PDF invoice exports.

Ajra Art House - Art E-Commerce Platform
  Stack: React, Node.js, Express, MongoDB, Three.js, GSAP
  * Built interactive 3D landing page running smoothly at 60 FPS.
  * Implemented Google OAuth 2.0 role-based authorization for collectors and admins.
  * Developed MongoDB catalog search with dynamic property filters.

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
  * Languages:      Python, JavaScript, TypeScript, Dart, SQL
  * Frontend:       React, Next.js, Redux, Tailwind, Three.js, GSAP
  * Backend:        Node.js, Express, Flask, Laravel, REST APIs, OAuth 2.0
  * Mobile:         Flutter, Riverpod
  * Databases:      MySQL, MongoDB, SQLite
  * Automation/AI:  n8n, Ollama, Google GenAI, Meta APIs (WhatsApp / Instagram)

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
  * B.Tech Computer Science Engineering (2022 - 2026)
    D. Y. Patil Technical Campus, Talsande | CGPA: 7.2 / 10
  * Higher Secondary Certificate - HSC (2022) | 66.67%
  * Secondary School Certificate - SSC (2020) | 84.00%
================================================================================`,B=[{id:"om-monogram",name:"Bold 'OM' Monogram",prompt:"A bold minimalist OM initial mark rendered in glowing particle nodes.",type:"monogram"},{id:"code-brackets",name:"Code Brackets </>",prompt:"Clean retro programming brackets representing clean web software code.",type:"brackets"},{id:"neural-network",name:"3-Layer Neural Network",prompt:"Connected multi-layer artificial neural network nodes & activation weights.",type:"network"},{id:"phone-ui",name:"Phone UI Outline",prompt:"Sleek mobile app interface wireframe showing clean layout structure.",type:"phone"},{id:"isometric-cube",name:"Isometric Wireframe Cube",prompt:"3D isometric geometric cube projection rendered in vector grid lines.",type:"cube"}],le={default:{name:"Default Dark",bg:"#050a14",accent:"#52e0ff",secondary:"#ff9ad5",text:"#e8f1ff"},phosphor:{name:"Phosphor Green",bg:"#0a140a",accent:"#39ff14",secondary:"#88ff88",text:"#d0ffd0"},violet:{name:"Violet",bg:"#100a1c",accent:"#b388ff",secondary:"#ff79c6",text:"#f8f8f2"},bubblegum:{name:"Bubblegum",bg:"#180814",accent:"#ff70a6",secondary:"#70d6ff",text:"#ffe5ec"},papier:{name:"Papier Light",bg:"#f4f1ea",accent:"#1a5b8c",secondary:"#8e24aa",text:"#2b2b2b"}};let M=[],z=200,b=null,q=0;function de(){me(),fe(),pe(),he(),xe(),ke(),ue(),window.OM_OS={openWindow:g,closeWindow:K,closeAllWindows:X,setTheme:C,toggleCRT:Y}}function ue(){const e=localStorage.getItem("om_os_theme")||"default";C(e);const n=localStorage.getItem("om_os_crt"),t=document.getElementById("crt-overlay");n==="off"&&t&&t.classList.add("crt-off")}function C(e){le[e]||(e="default"),document.body.className=`theme-${e}`,localStorage.setItem("om_os_theme",e)}function Y(){const e=document.getElementById("crt-overlay");if(!e)return;e.classList.toggle("crt-off");const n=e.classList.contains("crt-off");localStorage.setItem("om_os_crt",n?"off":"on")}function me(){const e=document.getElementById("boot-screen");if(!e)return;let n=!1;const t=()=>{n||(n=!0,e.classList.add("fade-out"),setTimeout(()=>{e.style.display="none",M.length===0&&g("projects.vol")},500))};e.addEventListener("click",t),window.addEventListener("keydown",o=>{e.style.display!=="none"&&t()},{once:!0}),setTimeout(t,2200)}function pe(){const e=document.getElementById("clock");if(!e)return;const n=()=>{const t=new Date;e.textContent=t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})};n(),setInterval(n,1e3)}function fe(){document.querySelectorAll(".menu-item").forEach(n=>{const t=n.querySelector(".menu-btn");t.addEventListener("click",o=>{o.stopPropagation();const i=n.classList.contains("active");V(),i||(n.classList.add("active"),t.setAttribute("aria-expanded","true"))})}),document.addEventListener("click",()=>{V()}),document.querySelectorAll(".menu-dropdown button").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const o=n.dataset.action,i=n.dataset.theme;o==="open-all"?["projects.vol","experience.log","profile.sys","contact.app","resume.txt"].forEach(s=>g(s)):o==="close-all"?X():o==="reload-system"?location.reload():o==="launch-cmd"?G(!0):o==="toggle-crt"?Y():o==="play-snake"?g("snake.exe"):o==="theme"&&i&&C(i),V()})})}function V(){document.querySelectorAll(".menu-item").forEach(e=>{e.classList.remove("active");const n=e.querySelector(".menu-btn");n&&n.setAttribute("aria-expanded","false")})}function he(){const e=document.querySelectorAll(".desktop-icon");e.forEach(n=>{const t=n.dataset.window;n.addEventListener("click",()=>{e.forEach(o=>o.classList.remove("selected")),n.classList.add("selected"),g(t)}),n.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),g(t))})})}function g(e,n={}){let t=document.getElementById(`win-${e}`);if(t)return t.classList.remove("minimized"),H(t),t;const o=document.getElementById("windows-container");if(!o)return;q=(q+1)%6;let i=e,s="📄",u=Math.min(680,window.innerWidth-40),a=Math.min(520,window.innerHeight-80),c=Math.max(20,40+q*24),d=Math.max(10,20+q*24);e==="projects.vol"?(i="projects.vol",s="📁",u=Math.min(760,window.innerWidth-30)):e==="experience.log"?(i="experience.log",s="📜",u=Math.min(680,window.innerWidth-30)):e==="profile.sys"?(i="profile.sys",s="⚙️"):e==="contact.app"?(i="contact.app",s="✉️",u=Math.min(600,window.innerWidth-30)):e==="resume.txt"?(i="resume.txt",s="📄"):e==="snake.exe"?(i="snake.exe",s="🐍",u=Math.min(420,window.innerWidth-30),a=Math.min(500,window.innerHeight-60)):e.startsWith("case-study-")&&(i=n.title||"case-study.doc",s="💡",u=Math.min(640,window.innerWidth-30),a=Math.min(540,window.innerHeight-60)),z+=1;const l=document.createElement("div");return l.id=`win-${e}`,l.className="window-frame active-window",l.style.width=`${u}px`,l.style.height=`${a}px`,l.style.left=`${c}px`,l.style.top=`${d}px`,l.style.zIndex=z,l.innerHTML=`
    <div class="window-header">
      <div class="window-title">
        <span class="window-title-icon">${s}</span>
        <span>${i}</span>
      </div>
      <div class="window-controls">
        <button class="win-btn minimize-btn" title="Minimize">_</button>
        <button class="win-btn maximize-btn" title="Maximize">□</button>
        <button class="win-btn close-btn" title="Close">✕</button>
      </div>
    </div>
    <div class="window-body">
      ${ve(e,n)}
    </div>
  `,o.appendChild(l),M.push(e),ge(l,e),H(l),l}function H(e){z+=1,e.style.zIndex=z,document.querySelectorAll(".window-frame").forEach(n=>n.classList.remove("active-window")),e.classList.add("active-window")}function K(e){const n=document.getElementById(`win-${e}`);n&&(e==="snake.exe"&&b&&(clearInterval(b),b=null),n.remove(),M=M.filter(t=>t!==e))}function X(){M.slice().forEach(e=>K(e))}function ge(e,n,t){const o=e.querySelector(".window-header"),i=e.querySelector(".minimize-btn"),s=e.querySelector(".maximize-btn"),u=e.querySelector(".close-btn");e.addEventListener("mousedown",()=>H(e)),i.addEventListener("click",m=>{m.stopPropagation(),e.classList.add("minimized")}),s.addEventListener("click",m=>{m.stopPropagation(),e.classList.toggle("maximized")}),u.addEventListener("click",m=>{m.stopPropagation(),K(n)});let a=!1,c,d,l,f;const p=m=>{if(m.target.closest(".window-controls")||e.classList.contains("maximized"))return;a=!0,H(e);const v=m.clientX||m.touches&&m.touches[0].clientX,A=m.clientY||m.touches&&m.touches[0].clientY;c=v,d=A,l=e.offsetLeft,f=e.offsetTop,document.addEventListener("mousemove",x),document.addEventListener("mouseup",w),document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",w)},x=m=>{if(!a)return;const v=m.clientX||m.touches&&m.touches[0].clientX,A=m.clientY||m.touches&&m.touches[0].clientY;if(v===void 0||A===void 0)return;const $=v-c,D=A-d;e.style.left=`${Math.max(0,l+$)}px`,e.style.top=`${Math.max(0,f+D)}px`},w=()=>{a=!1,document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",w)};o.addEventListener("mousedown",p),o.addEventListener("touchstart",p,{passive:!0}),ye(e,n)}function ve(e,n){if(e==="projects.vol")return`
      <div class="section-title">📁 PROJECT PORTFOLIO</div>
      <p style="margin-bottom: 16px; font-size: 0.85rem;">
        Select any project below to launch its detailed architecture case study and workflow diagram.
      </p>
      <div class="projects-grid">
        ${J.map(t=>`
          <div class="project-card">
            <div>
              <div class="project-name">${t.name}</div>
              <div class="project-type">${t.type||"Software Solution"}</div>
              <div class="project-tagline">${t.tagline}</div>
              <ul class="project-bullets">
                ${t.highlights.map(o=>`<li>${o}</li>`).join("")}
              </ul>
            </div>
            <div>
              <div style="margin-bottom: 8px;">
                ${t.stack.map(o=>`<span class="tech-chip">${o}</span>`).join("")}
              </div>
              <button class="case-study-btn" data-project="${t.id}">View Case Study →</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;if(e.startsWith("case-study-")){const t=n.project;return t?`
      <div class="section-title">💡 CASE STUDY: ${t.name}</div>
      <div class="retro-box">
        <div style="font-weight: bold; color: var(--accent-color); margin-bottom: 4px;">SYSTEM OVERVIEW</div>
        <p style="font-size: 0.85rem; line-height: 1.6;">${t.description}</p>
      </div>

      <div class="sub-title">ARCHITECTURE & DATA FLOW DIAGRAM</div>
      <div class="flow-diagram">
        ${t.flowDiagram.map((o,i)=>`
          <div class="flow-step">
            <div class="flow-step-num">${i+1}</div>
            <div>
              <div class="flow-step-title">${o.step}</div>
              <div class="flow-step-detail">${o.detail}</div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="sub-title">KEY ENGINEERING HIGHLIGHTS</div>
      <div class="retro-box">
        <ul style="list-style: none; padding-left: 0;">
          ${t.highlights.map(o=>`
            <li style="margin-bottom: 6px; font-size: 0.85rem;">
              <span style="color: var(--accent-color); font-weight: bold;">✔</span> ${o}
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="sub-title">TECHNOLOGY STACK</div>
      <div style="margin-top: 8px;">
        ${t.stack.map(o=>`<span class="tech-chip" style="font-size: 0.85rem; padding: 4px 10px;">${o}</span>`).join("")}
      </div>
    `:"<p>Case study data not found.</p>"}return e==="experience.log"?`
      <div class="section-title">📜 EXPERIENCE & EDUCATION LOG</div>
      <div class="sub-title">WORK EXPERIENCE</div>
      <div class="git-timeline">
        ${re.map(t=>`
          <div class="git-commit-node">
            <div class="commit-hash">${t.hash} (${t.year})</div>
            <div class="commit-role">${t.role}</div>
            <div class="commit-company">@ ${t.company}</div>
            <ul style="list-style: none; padding-left: 0; font-size: 0.85rem;">
              ${t.details.map(o=>`<li style="margin-bottom: 4px;">• ${o}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>

      <div class="sub-title" style="margin-top: 24px;">EDUCATION ACADEMICS</div>
      <div class="git-timeline">
        ${ce.map(t=>`
          <div class="git-commit-node">
            <div class="commit-hash">${t.hash} (${t.period})</div>
            <div class="commit-role">${t.degree}</div>
            <div class="commit-company">${t.institution}</div>
            <div style="font-size: 0.82rem; color: var(--secondary-color); font-weight: bold;">Grade: ${t.grade}</div>
          </div>
        `).join("")}
      </div>
    `:e==="profile.sys"?`
      <div class="section-title">⚙️ SYSTEM PROFILE & SKILLS</div>

      <div class="retro-box">
        <div style="font-weight: bold; color: var(--accent-color); font-size: 1.1rem;">${k.name}</div>
        <div style="font-size: 0.85rem; color: var(--secondary-color);">${k.title}</div>
        <div style="font-size: 0.85rem; margin-top: 6px;">${k.summary}</div>
      </div>

      <div class="sub-title">TECHNICAL SKILLS BY CATEGORY</div>

      <div class="skills-group">
        <div class="skills-group-title">Languages</div>
        <div>${P.languages.map(t=>`<span class="tech-chip">${t}</span>`).join("")}</div>
      </div>

      <div class="skills-group">
        <div class="skills-group-title">Frontend Engineering</div>
        <div>${P.frontend.map(t=>`<span class="tech-chip">${t}</span>`).join("")}</div>
      </div>

      <div class="skills-group">
        <div class="skills-group-title">Backend & APIs</div>
        <div>${P.backend.map(t=>`<span class="tech-chip">${t}</span>`).join("")}</div>
      </div>

      <div class="skills-group">
        <div class="skills-group-title">Mobile Engineering</div>
        <div>${P.mobile.map(t=>`<span class="tech-chip">${t}</span>`).join("")}</div>
      </div>

      <div class="skills-group">
        <div class="skills-group-title">Databases</div>
        <div>${P.databases.map(t=>`<span class="tech-chip">${t}</span>`).join("")}</div>
      </div>

      <div class="skills-group">
        <div class="skills-group-title">Automation & AI Workflows</div>
        <div>${P.automation_and_ai.map(t=>`<span class="tech-chip">${t}</span>`).join("")}</div>
      </div>

      <div class="sub-title" style="margin-top: 20px;">${_.title}</div>
      <div class="retro-box">
        <p style="font-size: 0.85rem; margin-bottom: 8px;">${_.description}</p>
        <ul style="list-style: none; font-size: 0.82rem;">
          ${_.bulletPoints.map(t=>`<li style="margin-bottom: 6px;">⚡ ${t}</li>`).join("")}
        </ul>
      </div>
    `:e==="contact.app"?`
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
          <a class="action-btn" id="btn-mailto" href="mailto:${k.email}" target="_blank" style="text-decoration:none;">✉ Send Mail directly</a>
        </div>
        <div id="contact-feedback" style="font-size: 0.8rem; color: var(--success-color); height: 18px; margin-top: 4px;"></div>
      </form>

      <div class="sub-title">DIRECT CONTACT DETAILS</div>
      <div class="retro-box contact-details-box">
        <p><strong>Email:</strong> <span id="copy-email-val">${k.email}</span>
           <button class="tech-chip" id="btn-copy-email" style="cursor:pointer; margin-left:8px;">Copy Email</button>
        </p>
        <p style="margin-top:6px;"><strong>Phone:</strong> ${k.phone}</p>
        <p style="margin-top:6px;"><strong>LinkedIn:</strong> <a class="contact-link" href="${k.linkedinUrl}" target="_blank" rel="noopener">${k.linkedin}</a></p>
        <p style="margin-top:6px;"><strong>GitHub:</strong> <a class="contact-link" href="${k.githubUrl}" target="_blank" rel="noopener">${k.github}</a></p>
      </div>
    `:e==="resume.txt"?`
      <div class="section-title">📄 RESUME.TXT</div>
      <div style="margin-bottom: 12px; display: flex; gap: 8px;">
        <button class="action-btn" id="btn-copy-resume" style="font-size: 0.85rem; padding: 4px 10px;">📋 Copy Full Resume</button>
      </div>
      <pre class="resume-pre" id="resume-text-content">${Z}</pre>
    `:e==="snake.exe"?`
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
    `:"<div>Window Content</div>"}function ye(e,n,t){if(n==="projects.vol"&&e.querySelectorAll(".case-study-btn").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.project,s=J.find(u=>u.id===i);s&&g(`case-study-${i}`,{title:`case-study-${s.id}.doc`,project:s})})}),n==="contact.app"){const o=e.querySelector("#btn-copy-msg"),i=e.querySelector("#contact-feedback"),s=e.querySelector("#btn-mailto"),u=e.querySelector("#btn-copy-email");o&&o.addEventListener("click",()=>{const c=e.querySelector("#contact-name").value||"Visitor",d=e.querySelector("#contact-type").value,l=e.querySelector("#contact-subject").value||"Inquiry",f=e.querySelector("#contact-message").value||"",p=`From: ${c}
Type: ${d}
Subject: ${l}

Message:
${f}`;navigator.clipboard.writeText(p).then(()=>{i&&(i.textContent="✔ Composed message copied to clipboard!"),setTimeout(()=>{i&&(i.textContent="")},3e3)})}),u&&u.addEventListener("click",()=>{navigator.clipboard.writeText(k.email).then(()=>{i&&(i.textContent="✔ Email address copied!"),setTimeout(()=>{i&&(i.textContent="")},3e3)})});const a=()=>{const c=encodeURIComponent(e.querySelector("#contact-subject").value||"Inquiry"),d=encodeURIComponent(e.querySelector("#contact-message").value||"");s.href=`mailto:${k.email}?subject=${c}&body=${d}`};e.querySelector("#contact-subject").addEventListener("input",a),e.querySelector("#contact-message").addEventListener("input",a)}if(n==="resume.txt"){const o=e.querySelector("#btn-copy-resume");o&&o.addEventListener("click",()=>{navigator.clipboard.writeText(Z).then(()=>{o.textContent="✔ Copied!",setTimeout(()=>{o.textContent="📋 Copy Full Resume"},2e3)})})}n==="snake.exe"&&be(e)}function be(e){const n=e.querySelector("#snake-canvas");if(!n)return;const t=n.getContext("2d"),o=e.querySelector("#snake-score"),i=e.querySelector("#snake-highscore"),s=16,u=n.width/s;let a=[{x:10,y:10}],c=1,d=0,l={x:5,y:5},f=0,p=parseInt(localStorage.getItem("om_os_snake_high")||"0",10);i&&(i.textContent=p);function x(){l={x:Math.floor(Math.random()*u),y:Math.floor(Math.random()*u)}}function w(){const h={x:a[0].x+c,y:a[0].y+d};if(h.x<0||h.x>=u||h.y<0||h.y>=u)return m();for(let L=0;L<a.length;L++)if(a[L].x===h.x&&a[L].y===h.y)return m();a.unshift(h),h.x===l.x&&h.y===l.y?(f+=10,o&&(o.textContent=f),f>p&&(p=f,i&&(i.textContent=p),localStorage.setItem("om_os_snake_high",p)),x()):a.pop(),t.fillStyle="#050a14",t.fillRect(0,0,n.width,n.height),t.fillStyle="#ff9ad5",t.fillRect(l.x*s+1,l.y*s+1,s-2,s-2),t.fillStyle="#52e0ff";for(let L=0;L<a.length;L++)t.fillRect(a[L].x*s+1,a[L].y*s+1,s-2,s-2)}function m(){clearInterval(b),b=null,t.fillStyle="rgba(5, 10, 20, 0.85)",t.fillRect(0,0,n.width,n.height),t.fillStyle="#52e0ff",t.font="24px VT323",t.textAlign="center",t.fillText("GAME OVER",n.width/2,n.height/2-10),t.font='16px "IBM Plex Mono"',t.fillText("Press Arrow Key to Restart",n.width/2,n.height/2+20)}function v(){a=[{x:10,y:10}],c=1,d=0,f=0,o&&(o.textContent=f),x(),b&&clearInterval(b),b=setInterval(w,110)}const A=h=>{if(e.classList.contains("active-window")){if(!b&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyS","KeyA","KeyD"].includes(h.code)){v();return}h.code==="ArrowUp"||h.code==="KeyW"?d!==1&&(c=0,d=-1):h.code==="ArrowDown"||h.code==="KeyS"?d!==-1&&(c=0,d=1):h.code==="ArrowLeft"||h.code==="KeyA"?c!==1&&(c=-1,d=0):(h.code==="ArrowRight"||h.code==="KeyD")&&c!==-1&&(c=1,d=0)}};window.addEventListener("keydown",A);const $=e.querySelector("#sbtn-up"),D=e.querySelector("#sbtn-down"),ae=e.querySelector("#sbtn-left"),se=e.querySelector("#sbtn-right");$&&($.onclick=()=>{b?d!==1&&(c=0,d=-1):v()},D.onclick=()=>{b?d!==-1&&(c=0,d=1):v()},ae.onclick=()=>{b?c!==1&&(c=-1,d=0):v()},se.onclick=()=>{b?c!==-1&&(c=1,d=0):v()}),v()}function xe(){const e=document.getElementById("command-palette"),n=document.getElementById("palette-backdrop"),t=document.getElementById("palette-input"),o=document.getElementById("palette-results");if(!e||!t||!o)return;const i=[{title:"Open projects.vol (Projects)",action:()=>g("projects.vol"),shortcut:"1"},{title:"Open experience.log (Experience)",action:()=>g("experience.log"),shortcut:"2"},{title:"Open profile.sys (Profile & Skills)",action:()=>g("profile.sys"),shortcut:"3"},{title:"Open contact.app (Contact Form)",action:()=>g("contact.app"),shortcut:"4"},{title:"Open resume.txt (Resume)",action:()=>g("resume.txt"),shortcut:"5"},{title:"Play Snake.exe",action:()=>g("snake.exe"),shortcut:"Snake"},{title:"Theme: Default Dark",action:()=>C("default"),shortcut:"Theme"},{title:"Theme: Phosphor Green",action:()=>C("phosphor"),shortcut:"Theme"},{title:"Theme: Violet",action:()=>C("violet"),shortcut:"Theme"},{title:"Theme: Bubblegum",action:()=>C("bubblegum"),shortcut:"Theme"},{title:"Theme: Papier Light",action:()=>C("papier"),shortcut:"Theme"},{title:"Toggle CRT Scanlines",action:()=>Y(),shortcut:"CRT"},{title:"Close All Windows",action:()=>X(),shortcut:"Esc"}];let s=0;function u(a=""){const c=a.toLowerCase().trim(),d=i.filter(l=>l.title.toLowerCase().includes(c));if(o.innerHTML="",d.length===0){o.innerHTML='<li style="color: var(--secondary-color);">No matching commands found</li>';return}d.forEach((l,f)=>{const p=document.createElement("li");f===s&&p.classList.add("selected"),p.innerHTML=`
        <span>${l.title}</span>
        <span class="item-shortcut">${l.shortcut}</span>
      `,p.addEventListener("click",()=>{l.action(),G(!1)}),o.appendChild(p)})}t.addEventListener("input",a=>{s=0,u(a.target.value)}),t.addEventListener("keydown",a=>{const c=o.querySelectorAll("li");if(a.key==="ArrowDown")a.preventDefault(),s=(s+1)%c.length,u(t.value);else if(a.key==="ArrowUp")a.preventDefault(),s=(s-1+c.length)%c.length,u(t.value);else if(a.key==="Enter"){a.preventDefault();const d=c[s];d&&d.click()}}),n&&n.addEventListener("click",()=>G(!1))}function G(e){const n=document.getElementById("command-palette"),t=document.getElementById("palette-input");if(n)if(e===void 0&&(e=n.classList.contains("hidden")),e){n.classList.remove("hidden"),t&&(t.value="",t.focus());const o=new Event("input");t&&t.dispatchEvent(o)}else n.classList.add("hidden")}function ke(){window.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault(),G();return}if(e.key==="Escape"){const t=document.getElementById("command-palette");if(t&&!t.classList.contains("hidden")){G(!1);return}if(M.length>0){const o=M[M.length-1];K(o)}return}const n=document.activeElement?document.activeElement.tagName:"";["INPUT","TEXTAREA","SELECT"].includes(n)||(e.key==="1"&&g("projects.vol"),e.key==="2"&&g("experience.log"),e.key==="3"&&g("profile.sys"),e.key==="4"&&g("contact.app"),e.key==="5"&&g("resume.txt"))})}let S,j,E=[],R=[],O=0,y="denoising",I=0,U=0,T={x:-1e3,y:-1e3,active:!1},F,r;function we(){if(S=document.getElementById("particle-canvas"),!S)return;j=S.getContext("2d"),F=document.createElement("canvas"),F.width=400,F.height=400,r=F.getContext("2d"),Q(),window.addEventListener("resize",Q),Me(),Te(),Ee(),ee(),W(0);let e=performance.now();function n(t){let o=(t-e)/1e3;e=t,o>.05&&(o=.05),Le(o),Ce(),requestAnimationFrame(n)}requestAnimationFrame(n)}function Q(){const e=window.devicePixelRatio||1;S.width=window.innerWidth*e,S.height=window.innerHeight*e,S.style.width=`${window.innerWidth}px`,S.style.height=`${window.innerHeight}px`,j.scale(e,e);const t=window.innerWidth<=700?1500:3200;E.length!==t&&ee(t)}function ee(e){const n=window.innerWidth<=700,t=e||(n?1500:3200);E=[];for(let o=0;o<t;o++)E.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*40,vy:(Math.random()-.5)*40,tx:Math.random()*window.innerWidth,ty:Math.random()*window.innerHeight,color:te(),delay:Math.random()*1.2,size:Math.random()>.8?2.5:2,reached:!1,burstVx:0,burstVy:0})}function te(){const e=getComputedStyle(document.body),n=e.getPropertyValue("--accent-color").trim()||"#52e0ff",t=e.getPropertyValue("--secondary-color").trim()||"#ff9ad5",o=e.getPropertyValue("--text-color").trim()||"#e8f1ff",i=Math.random();return i<.6?n:i<.85?t:o}function W(e){O=e;const n=B[e];Se(n.type),Ie(),ne(),y="denoising",I=0,U=0,ie(n)}function Se(e){if(r.clearRect(0,0,400,400),r.fillStyle="#ffffff",r.strokeStyle="#ffffff",r.lineWidth=12,r.textAlign="center",r.textBaseline="middle",e==="monogram")r.font='900 160px "IBM Plex Mono", VT323, monospace',r.fillText("OM",200,200);else if(e==="brackets")r.font="900 130px VT323, monospace",r.fillText("</>",200,200);else if(e==="network"){const n=[[{x:80,y:120},{x:80,y:200},{x:80,y:280}],[{x:200,y:80},{x:200,y:160},{x:200,y:240},{x:200,y:320}],[{x:320,y:140},{x:320,y:260}]];r.lineWidth=6;for(let t=0;t<n.length-1;t++)for(const o of n[t])for(const i of n[t+1])r.beginPath(),r.moveTo(o.x,o.y),r.lineTo(i.x,i.y),r.stroke();for(const t of n)for(const o of t)r.beginPath(),r.arc(o.x,o.y,22,0,Math.PI*2),r.fill()}else if(e==="phone")r.lineWidth=10,N(r,110,40,180,320,24),r.stroke(),r.fillRect(160,52,80,8),r.fillRect(160,342,80,6),N(r,130,80,140,70,8),r.stroke(),N(r,130,165,140,70,8),r.stroke(),N(r,130,250,140,70,8),r.stroke();else if(e==="cube"){const i=[];for(let s=0;s<6;s++){const u=s*Math.PI/3-Math.PI/6;i.push({x:200+120*Math.cos(u),y:200+120*Math.sin(u)})}r.lineWidth=8,r.beginPath(),r.moveTo(i[0].x,i[0].y);for(let s=1;s<6;s++)r.lineTo(i[s].x,i[s].y);r.closePath(),r.stroke(),r.beginPath(),r.moveTo(200,200),r.lineTo(i[1].x,i[1].y),r.moveTo(200,200),r.lineTo(i[3].x,i[3].y),r.moveTo(200,200),r.lineTo(i[5].x,i[5].y),r.stroke()}}function N(e,n,t,o,i,s){e.beginPath(),e.moveTo(n+s,t),e.arcTo(n+o,t,n+o,t+i,s),e.arcTo(n+o,t+i,n,t+i,s),e.arcTo(n,t+i,n,t,s),e.arcTo(n,t,n+o,t,s),e.closePath()}function Ie(){const n=r.getImageData(0,0,400,400).data;R=[];const t=4;for(let o=0;o<400;o+=t)for(let i=0;i<400;i+=t){const s=(o*400+i)*4;n[s+3]>128&&R.push({x:i,y:o,color:null})}}function ne(){if(R.length===0)return;const e=window.innerWidth,n=window.innerHeight,t=(e-400)/2,o=(n-400)/2,i=[...R].sort(()=>Math.random()-.5);E.forEach((s,u)=>{const a=i[u%i.length];s.tx=a.x+t,s.ty=a.y+o,s.delay=Math.random()*1,s.reached=!1,a.color?s.color=a.color:s.color=te()})}function Ee(){const e=document.getElementById("photo-input"),n=document.getElementById("btn-upload-photo");n&&e&&(n.addEventListener("click",()=>e.click()),e.addEventListener("change",t=>{const o=t.target.files&&t.target.files[0];if(!o)return;const i=new Image;i.onload=()=>{Ae(i),URL.revokeObjectURL(i.src)},i.src=URL.createObjectURL(o)}))}function Ae(e){r.clearRect(0,0,400,400);const n=120,t=e.width/e.height;let o=e.width,i=e.height,s=0,u=0;t>1?(o=e.height,s=(e.width-e.height)/2):(i=e.width,u=(e.height-e.width)/2);const a=document.createElement("canvas");a.width=n,a.height=n;const c=a.getContext("2d");c.drawImage(e,s,u,o,i,0,0,n,n);const l=c.getImageData(0,0,n,n).data;R=[];const f=3.2;for(let p=0;p<n;p++)for(let x=0;x<n;x++){const w=(p*n+x)*4,m=l[w],v=l[w+1],A=l[w+2];if(l[w+3]<50)continue;const D=(m+v+A)/3;Math.random()<.75+D/255*.25&&R.push({x:x*f,y:p*f,color:`rgb(${m},${v},${A})`})}ne(),y="denoising",I=0,U=0,ie({name:"Custom Portrait Photo",prompt:"Local portrait image processed into full-color particle lattice."})}function Le(e){I+=e;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=20,o=9;let i=0;const s=95;E.forEach(a=>{if(n){a.x=a.tx,a.y=a.ty,a.reached=!0,i++;return}if(y==="denoising")a.x+=a.vx*e,a.y+=a.vy*e,(a.x<0||a.x>window.innerWidth)&&(a.vx*=-1),(a.y<0||a.y>window.innerHeight)&&(a.vy*=-1),I>.4&&(y="generating",I=0);else if(y==="generating"||y==="done"){if(I>a.delay){const c=a.tx-a.x,d=a.ty-a.y;Math.sqrt(c*c+d*d)<3&&(a.reached=!0);const f=c*t-a.vx*o,p=d*t-a.vy*o;a.vx+=f*e,a.vy+=p*e,a.x+=a.vx*e,a.y+=a.vy*e}else a.x+=a.vx*.2*e,a.y+=a.vy*.2*e;a.reached&&i++}else y==="resetting"&&(a.x+=a.burstVx*e,a.y+=a.burstVy*e);if(T.active){const c=a.x-T.x,d=a.y-T.y,l=Math.sqrt(c*c+d*d);if(l<s&&l>0){const f=(s-l)/s*120;a.x+=c/l*f*e,a.y+=d/l*f*e}}});const u=Math.min(100,Math.floor(i/E.length*100));Pe(u),y==="generating"&&(u>=88||I>3)?(y="done",I=0):y==="done"?(U+=e,U>=3&&oe()):y==="resetting"&&I>.6&&W((O+1)%B.length)}function oe(){y="resetting",I=0;const e=window.innerWidth/2,n=window.innerHeight/2;E.forEach(t=>{const o=Math.atan2(t.y-n,t.x-e)+(Math.random()-.5),i=300+Math.random()*400;t.burstVx=Math.cos(o)*i,t.burstVy=Math.sin(o)*i})}function Ce(){j.clearRect(0,0,S.width,S.height);for(let e=0;e<E.length;e++){const n=E[e];j.fillStyle=n.color,j.fillRect(n.x,n.y,n.size,n.size)}}function Me(){window.addEventListener("mousemove",e=>{T.x=e.clientX,T.y=e.clientY,T.active=!0}),window.addEventListener("mouseleave",()=>{T.active=!1}),S.addEventListener("click",e=>{e.target===S&&oe()})}function Te(){const e=document.getElementById("btn-prev-shape"),n=document.getElementById("btn-next-shape"),t=document.getElementById("btn-regen-shape");e&&e.addEventListener("click",()=>{const o=(O-1+B.length)%B.length;W(o)}),n&&n.addEventListener("click",()=>{const o=(O+1)%B.length;W(o)}),t&&t.addEventListener("click",()=>{E.forEach(o=>{o.x=Math.random()*window.innerWidth,o.y=Math.random()*window.innerHeight}),W(O)})}function ie(e){const n=document.getElementById("gen-prompt"),t=document.getElementById("gen-state-badge");n&&(n.textContent=`prompt> ${e.prompt||e.name}`),t&&(t.textContent=y)}function Pe(e){const n=document.getElementById("gen-progress-bar"),t=document.getElementById("gen-progress-text"),o=document.getElementById("gen-state-badge");n&&(n.style.width=`${e}%`),t&&(t.textContent=`${e}%`),o&&(o.textContent=y)}document.addEventListener("DOMContentLoaded",()=>{console.log("OM-OS v2.6 Operating System Loaded."),de(),we()});
