import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, ClipboardCheck, RotateCcw, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChecklistItem {
  id: string;
  text: string;
  description: string;
}

const checklistItems: ChecklistItem[] = [
  {
    id: "1",
    text: "Sjekk institusjonens retningslinjer",
    description:
      "Har du lest og forstått din institusjons regler for bruk av KI-verktøy i akademisk arbeid?",
  },
  {
    id: "2",
    text: "Dokumenter KI-bruken",
    description:
      "Har du notert hvilke KI-verktøy du har brukt, hvilke spørsmål/instruksjoner du ga, og hvordan du brukte resultatene?",
  },
  {
    id: "3",
    text: "Oppgi KI som kilde",
    description:
      "Har du referert til KI-verktøyet i kildelisten og i teksten der det er relevant, i henhold til gjeldende referansestil?",
  },
  {
    id: "4",
    text: "Verifiser fakta og innhold",
    description:
      "Har du dobbeltsjekket all faktainformasjon fra KI mot pålitelige akademiske kilder?",
  },
  {
    id: "5",
    text: "Bearbeid med egne ord",
    description:
      "Har du omskrevet og tilpasset KI-generert tekst med dine egne refleksjoner og akademisk stemme?",
  },
  {
    id: "6",
    text: "Kjør plagiatkontroll",
    description:
      "Har du kjørt oppgaven gjennom plagiatverktøy (f.eks. Turnitin) for å sikre originalitet?",
  },
  {
    id: "7",
    text: "Reflekter over læringsutbytte",
    description:
      "Kan du forklare og forsvare alt innholdet i oppgaven din? Har du faktisk lært det du skulle?",
  },
  {
    id: "8",
    text: "Les korrektur og kvalitetssikre",
    description:
      "Har du lest gjennom hele oppgaven for å sikre sammenheng, kvalitet og at den oppfyller oppgavekravene?",
  },
];

export default function ChecklistSection() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const resetAll = () => setChecked(new Set());

  const progress = Math.round((checked.size / checklistItems.length) * 100);
  const allChecked = checked.size === checklistItems.length;

  const handleDownload = () => {
    let text = "SJEKKLISTE FOR KI-BRUK FØR INNLEVERING\n";
    text += "==========================================\n\n";
    checklistItems.forEach((item, i) => {
      const mark = checked.has(item.id) ? "✅" : "⬜";
      text += `${mark} ${i + 1}. ${item.text}\n`;
      text += `   ${item.description}\n\n`;
    });
    text += `\nFullført: ${checked.size}/${checklistItems.length} (${progress}%)\n`;
    text += `Dato: ${new Date().toLocaleDateString("nb-NO")}\n`;

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ki-sjekkliste.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="checklist" className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#F0F4F8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/10 text-[#1E3A5F] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <ClipboardCheck className="h-4 w-4" />
            Før innlevering
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
            Sjekkliste for KI-bruk
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Gå gjennom denne sjekklisten før du leverer oppgave eller eksamen for å sikre ansvarlig og transparent bruk av KI-verktøy.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Fremgang: {checked.size}/{checklistItems.length}
            </span>
            <span className="text-sm font-bold text-[#1E3A5F]">{progress}%</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full transition-colors duration-300 ${
                allChecked
                  ? "bg-gradient-to-r from-green-400 to-emerald-500"
                  : "bg-gradient-to-r from-[#1E3A5F] to-[#2D5A8E]"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Checklist Items */}
        <div className="space-y-3 mb-8">
          {checklistItems.map((item, index) => {
            const isChecked = checked.has(item.id);
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => toggleItem(item.id)}
                className={`w-full text-left flex items-start gap-4 p-4 sm:p-5 rounded-xl border transition-all duration-200 group ${
                  isChecked
                    ? "bg-green-50 border-green-200 shadow-sm"
                    : "bg-white border-gray-200 hover:border-[#1E3A5F]/30 hover:shadow-md"
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {isChecked ? (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-300 group-hover:text-[#1E3A5F]/50 transition-colors" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-sm sm:text-base font-semibold mb-1 transition-colors ${
                      isChecked ? "text-green-700 line-through" : "text-[#1A1A2E]"
                    }`}
                  >
                    {index + 1}. {item.text}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                      isChecked ? "text-green-600/70" : "text-gray-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Completion Message */}
        {allChecked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center mb-6"
          >
            <Sparkles className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-green-700 mb-1">
              Flott! Du er klar til å levere!
            </h3>
            <p className="text-sm text-green-600">
              Du har gått gjennom alle punktene. Husk at ansvarlig KI-bruk er en kontinuerlig prosess.
            </p>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={resetAll}
            className="text-gray-500 hover:text-[#1E3A5F] border-gray-300 hover:border-[#1E3A5F]/30"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Nullstill sjekkliste
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="text-gray-500 hover:text-[#1E3A5F] border-gray-300 hover:border-[#1E3A5F]/30"
          >
            <Download className="h-4 w-4 mr-2" />
            Last ned sjekkliste
          </Button>
        </div>
      </div>
    </section>
  );
}