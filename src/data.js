export const personalDetails = {
  name: "Om Solanki",
  title: "Full Stack Developer & AI Automation Engineer",
  summary: "B.Tech Computer Science Engineering graduate (2026), Kolhapur, Maharashtra, India.",
  email: "solankiom322@gmail.com",
  phone: "+91 70588 28616",
  linkedin: "linkedin.com/in/solanki-om27",
  linkedinUrl: "https://linkedin.com/in/solanki-om27",
  github: "github.com/Om27-pro",
  githubUrl: "https://github.com/Om27-pro",
  location: "Kolhapur, Maharashtra, India",
  status: "OPEN TO OPPORTUNITIES"
};

export const projects = [
  {
    id: "mindai",
    name: "MindAI",
    type: "AI mental health chatbot",
    tagline: "Real-time AI emotional support chatbot with mood analytics",
    stack: ["Python", "Flask", "Ollama", "Google GenAI", "SQLite", "Bootstrap"],
    highlights: [
      "LLM replies under 2 seconds",
      "Hashed-password auth",
      "Speech-to-text and text-to-speech",
      "Session-based mood tracking"
    ],
    description: "MindAI is an intelligent mental health assistance application engineered to provide rapid, empathetic conversational AI support. It integrates local Ollama and Google GenAI models to deliver sub-2-second responses, backed by secure session auth and historical mood analytics.",
    flowDiagram: [
      { step: "User Input", detail: "Voice / Speech-to-Text or typed prompt" },
      { step: "Flask Backend", detail: "Session auth, rate limiting & input sanitization" },
      { step: "LLM Pipeline", detail: "Ollama / Google GenAI stream generation (<2s latency)" },
      { step: "Database & Voice", detail: "SQLite mood log & Text-To-Speech audio synthesizer" },
      { step: "UI Render", detail: "Bootstrap responsive dashboard & real-time audio playback" }
    ]
  },
  {
    id: "dm-automation",
    name: "WhatsApp & Instagram DM Automation System",
    type: "Meta messaging workflow automation",
    tagline: "Enterprise workflow engine for automated multi-channel customer engagement",
    stack: ["n8n", "WhatsApp Business API", "Instagram Graph API", "webhooks"],
    highlights: [
      "Multi-step pipelines with conditional branching",
      "Error-handling and retry logic"
    ],
    description: "An automated workflow pipeline built on n8n that processes incoming webhooks from WhatsApp Business API and Instagram Graph API. It handles multi-branch customer inquiry trees, dynamic context routing, and resilient failover logic.",
    flowDiagram: [
      { step: "Meta Webhook", detail: "Incoming WhatsApp / Instagram DM events" },
      { step: "n8n Core", detail: "Webhook parsing & payload validation" },
      { step: "Conditional Router", detail: "Multi-branch decision tree based on intent" },
      { step: "Retry Engine", detail: "Exponential backoff & error recovery handlers" },
      { step: "Meta API Response", detail: "Automated responses delivered back to user" }
    ]
  },
  {
    id: "erp-companion",
    name: "ERP Companion & AI Assistant",
    type: "Mobile ERP platform",
    tagline: "Cross-platform enterprise companion with embedded AI assistant",
    stack: ["Flutter", "Dart", "Riverpod", "GoRouter", "Dio", "n8n", "fl_chart"],
    highlights: [
      "Inventory, billing and attendance",
      "AI chatbot over n8n webhooks",
      "Secure session storage",
      "Routing guards",
      "PDF invoice export"
    ],
    description: "A comprehensive Flutter mobile suite designed for enterprise inventory tracking, employee attendance, dynamic PDF invoice generation, and financial charting. Features an embedded AI chatbot connected via n8n webhooks.",
    flowDiagram: [
      { step: "Flutter UI", detail: "Riverpod state tree & GoRouter navigation guards" },
      { step: "Secure Storage", detail: "Encrypted token store & session management" },
      { step: "n8n AI Webhook", detail: "Natural language query processing over Dio" },
      { step: "Data Visualization", detail: "fl_chart analytics & PDF generation engine" }
    ]
  },
  {
    id: "ajra-art-house",
    name: "Ajra Art House",
    type: "Art e-commerce platform",
    tagline: "Interactive 3D gallery & marketplace for original physical art",
    stack: ["React", "Node.js", "Express", "MongoDB", "Three.js", "GSAP"],
    highlights: [
      "3D landing page at 60 FPS",
      "Google OAuth 2.0 role-based auth",
      "Collector dashboards",
      "MongoDB search and filtering"
    ],
    description: "An immersive e-commerce portal for art collectors and galleries featuring high-performance 3D canvas visualizations running smoothly at 60 FPS. Includes role-based access control with Google OAuth 2.0 and artwork filtering.",
    flowDiagram: [
      { step: "3D Viewport", detail: "Three.js canvas + GSAP interactive animations (60 FPS)" },
      { step: "OAuth 2.0 Auth", detail: "Google single sign-on & role-based permissions" },
      { step: "Express REST API", detail: "Product catalog, cart state & search endpoint" },
      { step: "MongoDB Store", detail: "Indexed search queries for artwork filtering" }
    ]
  }
];

export const experience = [
  {
    role: "Full Stack Developer & AI Automation Intern",
    company: "Crocodile N Creatives, Kolhapur",
    year: "2026",
    period: "2026",
    hash: "commit e92f81a",
    details: [
      "React/Node/Express apps",
      "n8n WhatsApp and Instagram DM pipelines",
      "The Flutter ERP assistant",
      "REST APIs"
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Comtranse Technology Pvt. Ltd., Kolhapur",
    year: "2025",
    period: "2025",
    hash: "commit b41c0d2",
    details: [
      "React/HTML/CSS interfaces for 3 client projects",
      "10+ reusable components refactored with code-splitting and lazy loading",
      "Jules and Google GenAI added to the team workflow"
    ]
  }
];

export const education = [
  {
    degree: "B.Tech Computer Science Engineering",
    institution: "D. Y. Patil Technical Campus, Talsande",
    period: "2022 to 2026",
    grade: "CGPA 7.2 / 10",
    hash: "commit 7f3a19e"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    period: "2022",
    grade: "66.67%",
    hash: "commit 4a82c11"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    period: "2020",
    grade: "84.00%",
    hash: "commit 21b0e99"
  }
];

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "Dart", "SQL"],
  frontend: ["React", "Next.js", "Redux", "Tailwind", "Three.js", "GSAP"],
  backend: ["Node", "Express", "Flask", "Laravel", "REST", "OAuth 2.0"],
  mobile: ["Flutter", "Riverpod"],
  databases: ["MySQL", "MongoDB", "SQLite"],
  automation_and_ai: ["n8n", "Ollama", "Google GenAI", "WhatsApp Business API", "Instagram Graph API"]
};

export const aiUsage = {
  title: "How I Leverage AI in Engineering",
  description: "I integrate LLMs and automation engines directly into development pipelines to amplify velocity and solve complex problems.",
  bulletPoints: [
    "Workflow Automation: Architected n8n agentic workflows connected to Meta messaging APIs.",
    "Local & Cloud LLMs: Integrated Ollama (local private inference) and Google GenAI for voice-enabled chatbots with sub-2s responses.",
    "AI-Augmented Dev Workflows: Utilized Jules and LLM agents during team sprints for rapid code refactoring and test coverage.",
    "Mobile & Backend Integrations: Connected Flutter apps to n8n webhooks for context-aware natural language query processing."
  ]
};

export const resumeText = `================================================================================
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
================================================================================`;

export const particleShapes = [
  {
    id: "om-monogram",
    name: "Bold 'OM' Monogram",
    prompt: "A bold minimalist OM initial mark rendered in glowing particle nodes.",
    type: "monogram"
  },
  {
    id: "code-brackets",
    name: "Code Brackets </>",
    prompt: "Clean retro programming brackets representing clean web software code.",
    type: "brackets"
  },
  {
    id: "neural-network",
    name: "3-Layer Neural Network",
    prompt: "Connected multi-layer artificial neural network nodes & activation weights.",
    type: "network"
  },
  {
    id: "phone-ui",
    name: "Phone UI Outline",
    prompt: "Sleek mobile app interface wireframe showing clean layout structure.",
    type: "phone"
  },
  {
    id: "isometric-cube",
    name: "Isometric Wireframe Cube",
    prompt: "3D isometric geometric cube projection rendered in vector grid lines.",
    type: "cube"
  }
];

export const themes = {
  default: {
    name: "Default Dark",
    bg: "#050a14",
    accent: "#52e0ff",
    secondary: "#ff9ad5",
    text: "#e8f1ff"
  },
  phosphor: {
    name: "Phosphor Green",
    bg: "#0a140a",
    accent: "#39ff14",
    secondary: "#88ff88",
    text: "#d0ffd0"
  },
  violet: {
    name: "Violet",
    bg: "#100a1c",
    accent: "#b388ff",
    secondary: "#ff79c6",
    text: "#f8f8f2"
  },
  bubblegum: {
    name: "Bubblegum",
    bg: "#180814",
    accent: "#ff70a6",
    secondary: "#70d6ff",
    text: "#ffe5ec"
  },
  papier: {
    name: "Papier Light",
    bg: "#f4f1ea",
    accent: "#1a5b8c",
    secondary: "#8e24aa",
    text: "#2b2b2b"
  }
};
