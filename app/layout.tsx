import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Om Solanki | AI Platform Portfolio & Full Stack Engineer",
  description:
    "Futuristic AI-platform-themed portfolio for Om Solanki. Full Stack Developer, AI Automation Engineer, and n8n Workflow Architect.",
  keywords: [
    "Om Solanki",
    "Full Stack Developer",
    "AI Automation Engineer",
    "n8n Workflow Architect",
    "Flutter Developer",
    "Next.js",
    "React",
    "Ollama",
    "Flask",
  ],
  authors: [{ name: "Om Solanki" }],
  openGraph: {
    title: "Om Solanki | System Online",
    description: portfolioData.summary,
    url: "https://om-solanki.vercel.app",
    siteName: "Om Solanki AI Platform",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Solanki | Full Stack & AI Automation Engineer",
    description: portfolioData.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: portfolioData.headline,
    address: portfolioData.location,
    email: portfolioData.contact.email,
    telephone: portfolioData.contact.phone,
    sameAs: [portfolioData.contact.linkedin, portfolioData.contact.github],
    knowsAbout: Object.values(portfolioData.skills).flat(),
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text antialiased selection:bg-primary-cyan selection:text-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-primary-cyan text-black font-mono font-bold px-4 py-2 rounded-lg"
        >
          Skip to main content
        </a>
        <div className="scanlines" />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
