import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  History,
  X,
  Plus,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  role: "user" | "ai";
  content: string;
}

interface ChatSession {
  id: number;
  title: string;
  messages: Message[];
}

const MOCK_AI_RESPONSES = [
  "Kunstig intelligens (KI) er et bredt fagfelt innen informatikk som handler om å utvikle systemer som kan utføre oppgaver som normalt krever menneskelig intelligens.",
  "Akademisk redelighet innebærer at du alltid oppgir kildene dine, inkludert når du bruker KI-verktøy. Det er viktig å være transparent om hvordan du har brukt KI i ditt arbeid.",
  "For å bruke KI på en ansvarlig måte i akademisk arbeid, bør du alltid dobbeltsjekke informasjonen KI gir deg, og bruke den som et hjelpemiddel – ikke som en erstatning for egen tenkning.",
  "Ja, du kan bruke KI-verktøy til å hjelpe med skriving, men du må oppgi at du har brukt det. Sjekk alltid retningslinjene til din institusjon.",
  "Plagiatkontroll er viktig fordi det sikrer akademisk integritet. KI-generert tekst bør alltid bearbeides og tilpasses med egne ord og refleksjoner.",
];

const suggestedQuestions = [
  { icon: Sparkles, text: "Hva er kunstig intelligens?" },
  { icon: MessageSquare, text: "Hvordan bruke KI i oppgaver?" },
  { icon: Bot, text: "Regler for KI-bruk" },
];

export default function HeroChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [chatSessions] = useState<ChatSession[]>([
    { id: 1, title: "Hva er kunstig intelligens?", messages: [] },
    { id: 2, title: "KI i akademisk skriving", messages: [] },
    { id: 3, title: "Retningslinjer for KI-bruk", messages: [] },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const responseIndex = useRef(0);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text?: string) => {
    const value = text || inputValue.trim();
    if (!value || isTyping) return;
    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: value,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        role: "ai",
        content:
          MOCK_AI_RESPONSES[responseIndex.current % MOCK_AI_RESPONSES.length],
      };
      responseIndex.current += 1;
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <section
      id="chat"
      className="relative bg-gradient-to-b from-[#F0F4F8] to-white"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1E3A5F]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden my-8 sm:my-12"
        >
          <div className="flex">
            {/* Chat History Sidebar */}
            <AnimatePresence>
              {historyOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 260, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="border-r border-gray-200 bg-[#F8F9FA] overflow-hidden flex-shrink-0"
                >
                  <div className="p-4 w-[260px]">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-[#1A1A2E]">
                        Chathistorikk
                      </h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-gray-400 hover:text-gray-600"
                        onClick={() => setHistoryOpen(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mb-4 text-xs border-dashed border-gray-300 hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
                      onClick={() => {
                        setMessages([]);
                        responseIndex.current = 0;
                      }}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Ny samtale
                    </Button>
                    <div className="space-y-1">
                      {chatSessions.map((session) => (
                        <button
                          key={session.id}
                          className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-white hover:text-[#1E3A5F] transition-colors truncate"
                        >
                          {session.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Minimal Top Bar */}
              <div className="flex items-center px-4 py-3 border-b border-gray-100">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500 hover:text-[#1E3A5F]"
                  onClick={() => setHistoryOpen(!historyOpen)}
                >
                  <History className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium text-gray-700 ml-2">
                  KI-Chat
                </span>
              </div>

              {/* Chat Content Area */}
              {!hasMessages ? (
                /* Welcome Screen - Gemini/ChatGPT style */
                <div className="flex flex-col items-center justify-center py-12 sm:py-16 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8E] flex items-center justify-center mx-auto mb-5 shadow-lg">
                      <Sparkles className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-2">
                      Hei, hva kan jeg hjelpe deg med?
                    </h2>
                    <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
                      Still spørsmål om kunstig intelligens og akademisk
                      redelighet
                    </p>
                  </motion.div>

                  {/* Suggestion Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg"
                  >
                    {suggestedQuestions.map((q) => {
                      const Icon = q.icon;
                      return (
                        <button
                          key={q.text}
                          onClick={() => handleSend(q.text)}
                          className="flex flex-col items-start gap-2 p-4 rounded-xl border border-gray-200 text-left hover:border-[#1E3A5F]/40 hover:bg-[#F0F4F8] transition-all duration-200 group"
                        >
                          <Icon className="h-4 w-4 text-[#1E3A5F] group-hover:scale-110 transition-transform" />
                          <span className="text-sm text-gray-700 leading-snug">
                            {q.text}
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                </div>
              ) : (
                /* Messages Area */
                <ScrollArea className="h-[380px] sm:h-[420px]">
                  <div className="p-5 space-y-5">
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex gap-3 ${
                          msg.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        {msg.role === "ai" && (
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8E] flex items-center justify-center shadow-sm">
                            <Sparkles className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                            msg.role === "user"
                              ? "bg-[#1E3A5F] text-white rounded-2xl rounded-br-md"
                              : "bg-transparent text-gray-800"
                          }`}
                        >
                          {msg.content}
                        </div>
                        {msg.role === "user" && (
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3 items-start"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8E] flex items-center justify-center shadow-sm">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                        <div className="px-4 py-3">
                          <div className="flex gap-1.5">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                            <span
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.15s" }}
                            />
                            <span
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.3s" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              )}

              {/* Input Bar - ChatGPT/Gemini style */}
              <div className="border-t border-gray-100 p-4">
                <div className="relative flex items-center bg-[#F1F5F9] rounded-2xl px-4 py-1">
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Spør om KI og akademisk redelighet..."
                    className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 py-3 outline-none"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={() => handleSend()}
                    disabled={!inputValue.trim() || isTyping}
                    size="icon"
                    className="h-9 w-9 rounded-xl bg-[#1E3A5F] hover:bg-[#163050] text-white disabled:opacity-30 disabled:bg-gray-300 flex-shrink-0 ml-2"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-[11px] text-gray-400 mt-2 text-center">
                  KI kan gjøre feil. Verifiser alltid viktig informasjon.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}