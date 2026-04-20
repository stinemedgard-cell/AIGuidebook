import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ClipboardCheck, Download, RotateCcw } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import Layout, { useLanguage } from '@/components/Layout';

interface CheckItem {
  id: string;
  label: { no: string; en: string };
}

interface CheckCategory {
  title: { no: string; en: string };
  items: CheckItem[];
}

const categories: CheckCategory[] = [
  {
    title: { no: 'Før du bruker KI', en: 'Before using AI' },
    items: [
      { id: 'b1', label: { no: 'Sjekket emnebeskrivelsen for regler om KI-bruk', en: 'Checked course description for AI usage rules' } },
      { id: 'b2', label: { no: 'Valgt et godkjent/sikkert KI-verktøy', en: 'Selected an approved/secure AI tool' } },
      { id: 'b3', label: { no: 'Vurdert om dataene mine er trygge å dele (grønn/gul/rød)', en: 'Assessed whether my data is safe to share (green/yellow/red)' } },
      { id: 'b4', label: { no: 'Forstått forskjellen mellom tillatt og ikke-tillatt bruk', en: 'Understood the difference between allowed and disallowed use' } },
    ],
  },
  {
    title: { no: 'Under arbeidet', en: 'During the work' },
    items: [
      { id: 'd1', label: { no: 'Dokumentert alle KI-interaksjoner (prompts og svar)', en: 'Documented all AI interactions (prompts and responses)' } },
      { id: 'd2', label: { no: 'Verifisert alle KI-genererte fakta og referanser', en: 'Verified all AI-generated facts and references' } },
      { id: 'd3', label: { no: 'Omskrevet KI-generert tekst med egne ord', en: 'Rewritten AI-generated text in my own words' } },
      { id: 'd4', label: { no: 'Kryssjekket referanser i akademiske databaser', en: 'Cross-checked references in academic databases' } },
    ],
  },
  {
    title: { no: 'Før innlevering', en: 'Before submission' },
    items: [
      { id: 'a1', label: { no: 'Skrevet en redegjørelse for KI-bruk', en: 'Written a disclosure statement for AI use' } },
      { id: 'a2', label: { no: 'Sitert KI-verktøyet korrekt i referanselisten', en: 'Cited the AI tool correctly in the reference list' } },
      { id: 'a3', label: { no: 'Kontrollert at oppgaven reflekterer min egen forståelse', en: 'Verified that the assignment reflects my own understanding' } },
      { id: 'a4', label: { no: 'Gjennomgått oppgaven for potensielle KI-hallusinasjoner', en: 'Reviewed the assignment for potential AI hallucinations' } },
    ],
  },
];

const STORAGE_KEY = 'ki-akademia-checklist';

const allIds = categories.flatMap((c) => c.items.map((item) => item.id));

const Checklist: React.FC = () => {
  const { lang } = useLanguage();
  const isNo = lang === 'no';

  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggleItem = useCallback((id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const resetAll = useCallback(() => {
    setChecked({});
  }, []);

  const completedCount = allIds.filter((id) => checked[id]).length;
  const totalCount = allIds.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);
  const isComplete = completedCount === totalCount;

  const handleDownloadPDF = () => {
    const lines = [
      isNo ? 'KI-BRUK SJEKKLISTE – FULLFØRT' : 'AI USAGE CHECKLIST – COMPLETED',
      `${isNo ? 'Dato' : 'Date'}: ${new Date().toLocaleDateString(isNo ? 'nb-NO' : 'en-US')}`,
      '',
    ];
    categories.forEach((cat) => {
      lines.push(`--- ${cat.title[lang]} ---`);
      cat.items.forEach((item) => {
        const mark = checked[item.id] ? '✅' : '❌';
        lines.push(`${mark} ${item.label[lang]}`);
      });
      lines.push('');
    });
    lines.push(`${isNo ? 'Fullført' : 'Completed'}: ${completedCount}/${totalCount} (${progressPercent}%)`);

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = isNo ? 'ki-sjekkliste.txt' : 'ai-checklist.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-slate-900 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-4 inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {isNo ? 'Tilbake til forsiden' : 'Back to home'}
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                {isNo ? 'Interaktiv sjekkliste' : 'Interactive Checklist'}
              </h1>
              <p className="mt-1 text-slate-400">
                {isNo
                  ? 'Sjekk at du har gjort alt riktig før innlevering.'
                  : 'Verify you\'ve done everything right before submission.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress + Checklist */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Progress bar */}
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">
                {isNo ? 'Fremgang' : 'Progress'}: {completedCount}/{totalCount}
              </span>
              <span
                className={`text-sm font-bold ${isComplete ? 'text-green-600' : 'text-blue-600'}`}
              >
                {progressPercent}%
              </span>
            </div>
            <Progress value={progressPercent} className="h-3" />
            {isComplete && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-sm font-semibold text-green-600"
              >
                🎉 {isNo ? 'Gratulerer! Alle punkter er fullført.' : 'Congratulations! All items completed.'}
              </motion.p>
            )}
          </div>

          {/* Categories */}
          <div className="space-y-6">
            {categories.map((cat, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="mb-4 text-lg font-bold text-slate-800">{cat.title[lang]}</h2>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <label
                      key={item.id}
                      className="flex cursor-pointer items-start gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50"
                    >
                      <Checkbox
                        checked={!!checked[item.id]}
                        onCheckedChange={() => toggleItem(item.id)}
                        className="mt-0.5"
                      />
                      <span
                        className={`text-sm leading-relaxed transition-colors ${
                          checked[item.id] ? 'text-slate-400 line-through' : 'text-slate-700'
                        }`}
                      >
                        {item.label[lang]}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              onClick={handleDownloadPDF}
              disabled={!isComplete}
              className="bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              <Download className="mr-2 h-4 w-4" />
              {isNo ? 'Last ned sjekkliste' : 'Download checklist'}
            </Button>
            <Button variant="outline" onClick={resetAll}>
              <RotateCcw className="mr-2 h-4 w-4" />
              {isNo ? 'Nullstill' : 'Reset'}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checklist;