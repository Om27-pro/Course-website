"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, Terminal, Minimize2 } from "lucide-react";
import { queryOmAI, SUGGESTED_PROMPTS, ChatMessage } from "@/lib/ai-service";

export default function AIAssistantWidget({ isOpen, setIsOpen }: { isOpen?: boolean; setIsOpen?: (val: boolean) => void }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isOpen !== undefined ? isOpen : internalOpen;
  const toggleOpen = (val: boolean) => {
    if (setIsOpen) setIsOpen(val);
    else setInternalOpen(val);
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "ai",
      text: "System initialized. I am Ask Om AI — an assistant connected to Om Solanki's profile data. How can I assist your query?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const queryText = textToSend || input;
    if (!queryText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const replyText = await queryOmAI(queryText);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => toggleOpen(true)}
            className="group relative p-4 rounded-full bg-gradient-to-r from-primary-cyan to-secondary-violet shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] transition-all"
            aria-label="Open Ask Om AI"
          >
            <Bot className="w-6 h-6 text-black" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-success-green rounded-full border-2 border-black animate-pulse" />
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:block bg-black/80 border border-primary-cyan/30 backdrop-blur-md px-3 py-1 rounded text-xs text-primary-cyan whitespace-nowrap font-mono">
              Ask Om AI [Online]
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[90vw] sm:w-[380px] h-[520px] glass-panel rounded-2xl flex flex-col border border-primary-cyan/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded-lg bg-primary-cyan/20 border border-primary-cyan/40">
                  <Sparkles className="w-4 h-4 text-primary-cyan" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold font-heading text-text flex items-center gap-2">
                    Ask Om AI <span className="text-[10px] bg-primary-cyan/10 text-primary-cyan px-1.5 py-0.5 rounded font-mono border border-primary-cyan/20">v1.0</span>
                  </h3>
                  <p className="text-[11px] font-mono text-muted-text flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-success-green rounded-full animate-ping" />
                    Inference engine ready
                  </p>
                </div>
              </div>
              <button
                onClick={() => toggleOpen(false)}
                className="text-muted-text hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Close Ask Om AI"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-mono">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl p-3 ${
                      msg.sender === "user"
                        ? "bg-secondary-violet/20 border border-secondary-violet/40 text-text"
                        : "bg-white/5 border border-primary-cyan/20 text-text/90"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1 text-[10px] text-muted-text/80">
                      <span>{msg.sender === "user" ? "QUERY" : "ASK_OM_AI"}</span>
                      <span>{msg.timestamp}</span>
                    </div>
                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-primary-cyan/20 rounded-xl p-3 flex items-center space-x-2 text-primary-cyan text-xs">
                    <Terminal className="w-3.5 h-3.5 animate-spin" />
                    <span>Processing inference stream...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggested Chips */}
            <div className="p-2 border-t border-white/5 bg-black/20 flex gap-1.5 overflow-x-auto no-scrollbar">
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap text-[10px] font-mono bg-white/5 hover:bg-primary-cyan/10 border border-white/10 hover:border-primary-cyan/40 text-muted-text hover:text-primary-cyan px-2.5 py-1 rounded-full transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-white/10 bg-black/40 flex items-center space-x-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask query (e.g. skills, projects)..."
                className="flex-1 bg-surface border border-white/10 focus:border-primary-cyan/50 rounded-lg px-3 py-2 text-xs text-text placeholder-muted-text focus:outline-none transition-colors font-mono"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 bg-primary-cyan hover:bg-primary-cyan/80 disabled:opacity-40 text-black rounded-lg transition-colors"
                aria-label="Send query"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
