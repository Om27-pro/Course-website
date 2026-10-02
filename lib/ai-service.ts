import { portfolioData } from "@/data/portfolio";

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export const SUGGESTED_PROMPTS = [
  "What does Om build?",
  "Show his AI projects",
  "How can I contact him?",
  "What is Om's tech stack?",
];

/**
 * Isolated AI Service logic.
 * Currently client-side keyword/intent matcher, easily replaceable with a real LLM endpoint (e.g. fetch('/api/chat')).
 */
export async function queryOmAI(userPrompt: string): Promise<string> {
  // Simulate network latency for realistic streaming feel
  await new Promise((resolve) => setTimeout(resolve, 400));

  const prompt = userPrompt.toLowerCase();

  if (prompt.includes("who") || prompt.includes("about") || prompt.includes("summary") || prompt.includes("build")) {
    return `Om Solanki is a B.Tech Computer Science Engineer (2026) specializing in full-stack web/mobile development and AI automation. He has built 5+ full-cycle applications including MindAI (mental health LLM chatbot), WhatsApp/Instagram DM Automation pipelines (n8n), Ajra Art House (3D E-Commerce), and Flutter ERP Systems.`;
  }

  if (prompt.includes("ai") || prompt.includes("project") || prompt.includes("n8n") || prompt.includes("ollama")) {
    const projList = portfolioData.projects
      .map((p) => `• **${p.name}**: ${p.description}`)
      .join("\n\n");
    return `Here are Om's featured AI & Automation projects:\n\n${projList}`;
  }

  if (prompt.includes("contact") || prompt.includes("email") || prompt.includes("reach") || prompt.includes("hire") || prompt.includes("phone")) {
    return `You can reach Om directly:\n• Email: ${portfolioData.contact.email}\n• Phone: ${portfolioData.contact.phone}\n• LinkedIn: ${portfolioData.contact.linkedin}\n• GitHub: ${portfolioData.contact.github}\nLocation: ${portfolioData.location}`;
  }

  if (prompt.includes("stack") || prompt.includes("skill") || prompt.includes("python") || prompt.includes("react") || prompt.includes("tech")) {
    return `Om's core technology stack includes:\n• **Languages**: ${portfolioData.skills.Languages.join(", ")}\n• **Frontend**: React, Next.js, Tailwind, Three.js, GSAP\n• **Backend**: Node.js, Express, Flask, REST APIs\n• **Mobile**: Flutter, Dart, Riverpod\n• **AI & Automation**: n8n, Ollama, Google GenAI, Webhooks`;
  }

  if (prompt.includes("education") || prompt.includes("degree") || prompt.includes("college") || prompt.includes("cgpa")) {
    const edu = portfolioData.education
      .map((e) => `• **${e.degree}** @ ${e.institution} (${e.period}) - ${e.score}`)
      .join("\n");
    return `Om's Academic Qualifications:\n\n${edu}`;
  }

  if (prompt.includes("experience") || prompt.includes("intern") || prompt.includes("work")) {
    const exp = portfolioData.experience
      .map((e) => `• **${e.role}** at ${e.company} (${e.period})`)
      .join("\n");
    return `Om's Industry Experience:\n\n${exp}`;
  }

  // Default fallback response
  return `System Query Result: Om Solanki is a Full Stack & AI Automation Engineer skilled in Next.js, Flask, Flutter, Ollama, and n8n pipelines. Ask me about his projects, skills, contact info, or background!`;
}
