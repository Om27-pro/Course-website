export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Skills {
  Languages: string[];
  "Frontend Development": string[];
  "Backend Development": string[];
  "Mobile Development": string[];
  Databases: string[];
  "AI and Automation": string[];
  "Tools and Practices": string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  stack: string[];
  description: string;
  hasWorkflowDiagram?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  period: string;
}

export interface PortfolioData {
  name: string;
  headline: string;
  location: string;
  contact: ContactInfo;
  summary: string;
  skills: Skills;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  achievements: string[];
}

export const portfolioData: PortfolioData = {
  name: "Om Solanki",
  headline: "Full Stack Developer | AI Automation Engineer",
  location: "Kolhapur, Maharashtra, India",
  contact: {
    phone: "+91 70588 28616",
    email: "solankiom322@gmail.com",
    linkedin: "https://linkedin.com/in/solanki-om27",
    github: "https://github.com/Om27-pro"
  },
  summary: "Results-driven B.Tech Computer Science Engineering graduate (2026) with hands-on experience designing, building, and deploying production-ready web and mobile applications across the full stack. Proficient in React.js, Next.js, Node.js, Express, Flask, and Flutter, with strong command of REST API design, relational and NoSQL database architecture, and secure authentication systems. Delivered 5+ full-cycle projects spanning an AI-powered chatbot, an e-commerce platform, a cross-platform ERP application, and a business messaging automation system, translating business requirements into scalable, maintainable software. Skilled at integrating LLMs and GenAI tooling into engineering workflows to accelerate delivery and improve code quality.",
  skills: {
    Languages: ["Python", "JavaScript (ES6+)", "TypeScript", "Dart", "SQL", "HTML5", "CSS3"],
    "Frontend Development": ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap 5", "Three.js", "GSAP", "Responsive and Component-Based UI Design", "WCAG 2.1 Accessibility"],
    "Backend Development": ["Node.js", "Express.js", "Flask", "Laravel", "REST API Design and Integration", "Session Management", "Secure Authentication (OAuth 2.0, Hashed Passwords)", "Webhooks"],
    "Mobile Development": ["Flutter", "Dart", "Riverpod", "GoRouter", "Dio", "Cross-Platform App Development"],
    Databases: ["MySQL", "MongoDB", "SQLite", "Oracle", "Query Optimization", "Schema Design", "CRUD Operations"],
    "AI and Automation": ["n8n (Webhooks, API Integrations, Workflow Automation)", "Ollama (LLM Deployment)", "Google GenAI", "Jules", "Stitch AI", "Flow AI", "WhatsApp Business API", "Instagram Graph API"],
    "Tools and Practices": ["Git", "GitHub", "VS Code", "XAMPP", "Postman", "Agile/Scrum", "Component Architecture", "Debugging", "Performance Optimization", "Core Web Vitals"]
  },
  experience: [
    {
      role: "Full Stack Developer & AI Automation Intern",
      company: "Crocodile N Creatives",
      location: "Kolhapur, Maharashtra",
      period: "2026",
      highlights: [
        "Built and maintained full-stack web applications end-to-end using React.js, Node.js, and Express, delivering responsive, high-performance interfaces for multiple client projects.",
        "Designed and deployed automated WhatsApp and Instagram DM pipelines with n8n, integrating the WhatsApp Business API and Instagram Graph API using webhook triggers and conditional logic.",
        "Engineered an ERP Companion & AI Assistant (Flutter) for inventory, billing, and attendance management, integrating n8n webhook APIs for real-time data through an AI chatbot, with secure session storage, routing guards, and automated PDF invoice/report generation.",
        "Partnered with cross-functional teams to design and implement REST APIs, enabling seamless, low-latency communication between frontend interfaces and backend services.",
        "Applied version control best practices with Git/GitHub across all deployments, maintaining clean commit history and enabling smooth collaboration."
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Comtranse Technology Pvt. Ltd.",
      location: "Kolhapur, Maharashtra",
      period: "2025",
      highlights: [
        "Developed and shipped responsive, cross-browser user interfaces using React.js, HTML5, and CSS3 across 3 client projects, ensuring pixel-perfect rendering across 5+ screen sizes and devices.",
        "Integrated Jules and Google GenAI tooling into the team's daily coding workflow, improving code quality and review efficiency for a 4-member engineering team.",
        "Refactored 10+ reusable React components using code-splitting and lazy loading, improving page load speed and Core Web Vitals across all client applications."
      ]
    }
  ],
  projects: [
    {
      id: "whatsapp-automation",
      name: "WhatsApp & Instagram DM Automation System",
      stack: ["n8n", "WhatsApp Business API", "Instagram Graph API", "Webhooks", "REST APIs"],
      description: "Architected multi-step n8n automation pipelines with webhook triggers, conditional branching, and error-handling/retry logic to power fault-tolerant, automated business messaging at scale.",
      hasWorkflowDiagram: true
    },
    {
      id: "mindai",
      name: "MindAI - AI-Powered Mental Health Chatbot",
      stack: ["Python", "Flask", "Ollama", "SQLite", "Bootstrap", "Google GenAI"],
      description: "Built a full-stack AI chatbot on Flask and Ollama with sub-2-second LLM response times, secure hashed-password authentication, Speech-to-Text/Text-to-Speech, and session-based mood tracking backed by SQLite."
    },
    {
      id: "ajra-art-house",
      name: "Ajra Art House - Full-Stack Art E-Commerce & Curation Platform",
      stack: ["React", "Node.js", "Express", "MongoDB", "Three.js", "GSAP"],
      description: "Built an immersive 3D landing page at 60 FPS using Three.js, GSAP ScrollTrigger, and Lenis; implemented role-based authentication (Google OAuth 2.0), collector dashboards, and MongoDB-driven search and filtering."
    },
    {
      id: "erp-companion",
      name: "ERP Companion & AI Assistant",
      stack: ["Flutter", "Dart", "Riverpod", "GoRouter", "Dio", "n8n", "REST APIs", "PDF", "fl_chart"],
      description: "Developed a cross-platform Flutter ERP app for inventory, billing, and attendance with real-time n8n chatbot integration, secure auth/session storage, and PDF invoice export."
    }
  ],
  education: [
    { degree: "B.Tech, Computer Science Engineering", institution: "D. Y. Patil Technical Campus, Talsande", score: "CGPA 7.2/10", period: "2022 - 2026" },
    { degree: "HSC (Science - PCM + Electronics)", institution: "Vivekanand College, Kolhapur", score: "66.67%", period: "2022" },
    { degree: "SSC", institution: "Ujalaiwadi High School, Kolhapur", score: "84%", period: "2020" }
  ],
  achievements: [
    "Presented technical research papers at college-level fests to faculty and academic audiences.",
    "Coordinated recruitment logistics for 100+ students at the D.Y. Patil Job Fair; contributed to NAAC A+ accreditation documentation efforts."
  ]
};
