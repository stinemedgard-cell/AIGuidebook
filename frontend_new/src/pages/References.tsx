import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Check, BookOpen, CheckCircle2, XCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout, { useLanguage } from '@/components/Layout';

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-green-600" />
          {lang === 'no' ? 'Kopiert!' : 'Copied!'}
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          {lang === 'no' ? 'Kopier' : 'Copy'}
        </>
      )}
    </button>
  );
};

const citationData = {
  apa7: {
    label: 'APA 7',
    inText: {
      no: '(OpenAI, 2026)',
      en: '(OpenAI, 2026)',
    },
    reference: {
      no: 'OpenAI. (2026). ChatGPT (versjon GPT-4) [Stor språkmodell]. https://chat.openai.com',
      en: 'OpenAI. (2026). ChatGPT (GPT-4 version) [Large language model]. https://chat.openai.com',
    },
    note: {
      no: 'I APA 7 behandles KI-verktøy som programvare. Oppgi utvikler, år, navn, versjon og URL.',
      en: 'In APA 7, AI tools are treated as software. Provide developer, year, name, version, and URL.',
    },
  },
  harvard: {
    label: 'Harvard',
    inText: {
      no: '(OpenAI 2026)',
      en: '(OpenAI 2026)',
    },
    reference: {
      no: 'OpenAI (2026) ChatGPT (versjon GPT-4) [Stor språkmodell]. Tilgjengelig fra: https://chat.openai.com (Hentet: 20. april 2026).',
      en: 'OpenAI (2026) ChatGPT (GPT-4 version) [Large language model]. Available at: https://chat.openai.com (Accessed: 20 April 2026).',
    },
    note: {
      no: 'Harvard-stilen krever dato for tilgang. Inkluder alltid når du hentet informasjonen.',
      en: 'Harvard style requires access date. Always include when you retrieved the information.',
    },
  },
  vancouver: {
    label: 'Vancouver',
    inText: {
      no: '(1)',
      en: '(1)',
    },
    reference: {
      no: '1. OpenAI. ChatGPT (versjon GPT-4) [Stor språkmodell]. 2026. Tilgjengelig fra: https://chat.openai.com',
      en: '1. OpenAI. ChatGPT (GPT-4 version) [Large language model]. 2026. Available from: https://chat.openai.com',
    },
    note: {
      no: 'Vancouver bruker nummererte referanser. Nummeret i teksten tilsvarer oppføringen i referanselisten.',
      en: 'Vancouver uses numbered references. The number in text corresponds to the entry in the reference list.',
    },
  },
};

const disclosureTemplates = [
  {
    level: { no: 'Nivå 1: Minimal bruk', en: 'Level 1: Minimal use' },
    text: {
      no: 'I denne oppgaven har jeg brukt ChatGPT (OpenAI, versjon GPT-4) som et hjelpemiddel for å forbedre språklig kvalitet og grammatikk i den ferdige teksten. Alt faglig innhold er mitt eget arbeid basert på pensumlitteraturen.',
      en: 'In this assignment, I used ChatGPT (OpenAI, GPT-4 version) as an aid to improve language quality and grammar in the final text. All academic content is my own work based on the course literature.',
    },
  },
  {
    level: { no: 'Nivå 2: Moderat bruk', en: 'Level 2: Moderate use' },
    text: {
      no: 'I arbeidet med denne oppgaven har jeg brukt ChatGPT (OpenAI, versjon GPT-4) til å generere en innledende disposisjon og til idémyldring rundt sentrale temaer. Jeg har deretter omskrevet, utvidet og verifisert alt innhold mot pensumlitteraturen og andre akademiske kilder. KI-verktøyet ble også brukt til å forbedre tekstens struktur og flyt.',
      en: 'In working on this assignment, I used ChatGPT (OpenAI, GPT-4 version) to generate an initial outline and for brainstorming around key themes. I then rewrote, expanded, and verified all content against course literature and other academic sources. The AI tool was also used to improve the text\'s structure and flow.',
    },
  },
  {
    level: { no: 'Nivå 3: Omfattende bruk', en: 'Level 3: Extensive use' },
    text: {
      no: 'Denne oppgaven er utarbeidet med omfattende bruk av KI-verktøy. ChatGPT (OpenAI, versjon GPT-4) ble brukt til å generere utkast, analysere data, og foreslå strukturer. Alle KI-genererte bidrag er kritisk vurdert, verifisert mot primærkilder, og tilpasset oppgavens krav. Vedlagt finnes en logg over alle KI-interaksjoner som dokumenterer prosessen.',
      en: 'This assignment was prepared with extensive use of AI tools. ChatGPT (OpenAI, GPT-4 version) was used to generate drafts, analyze data, and suggest structures. All AI-generated contributions have been critically evaluated, verified against primary sources, and adapted to the assignment requirements. Attached is a log of all AI interactions documenting the process.',
    },
  },
];

const References: React.FC = () => {
  const { lang } = useLanguage();
  const isNo = lang === 'no';

  return (
    <Layout>
      {/* Header */}
      <section className="bg-slate-900 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-4 inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {isNo ? 'Tilbake til forsiden' : 'Back to home'}
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                {isNo ? 'Kildehenviser & Redegjørelse' : 'Reference Guide & Disclosure'}
              </h1>
              <p className="mt-1 text-slate-400">
                {isNo
                  ? 'Slik siterer du KI-verktøy korrekt.'
                  : 'How to cite AI tools correctly.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Tabs */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xl font-bold text-slate-800">
            {isNo ? 'Siteringsformater' : 'Citation Formats'}
          </h2>

          <Tabs defaultValue="apa7" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              {Object.entries(citationData).map(([key, val]) => (
                <TabsTrigger key={key} value={key}>
                  {val.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(citationData).map(([key, val]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* In text */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-700">
                        {isNo ? 'I teksten' : 'In text'}
                      </h3>
                      <CopyButton text={val.inText[lang]} />
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4 font-mono text-sm text-slate-700">
                      {val.inText[lang]}
                    </div>
                  </div>

                  {/* In reference list */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-700">
                        {isNo ? 'I litteraturlisten' : 'In reference list'}
                      </h3>
                      <CopyButton text={val.reference[lang]} />
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4 font-mono text-sm text-slate-700 break-all">
                      {val.reference[lang]}
                    </div>
                  </div>

                  {/* Note */}
                  <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 text-sm text-blue-700">
                    💡 {val.note[lang]}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Disclosure Templates */}
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-bold text-slate-800">
              {isNo ? 'Redegjørelsesmaler' : 'Disclosure Templates'}
            </h2>
            <div className="space-y-4">
              {disclosureTemplates.map((tmpl, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-700">{tmpl.level[lang]}</h3>
                    <CopyButton text={tmpl.text[lang]} />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{tmpl.text[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fusk vs Godkjent */}
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-bold text-slate-800">
              {isNo ? 'Fusk vs. Godkjent bruk' : 'Cheating vs. Approved Use'}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Fusk */}
              <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-red-800">
                  <XCircle className="h-5 w-5" />
                  {isNo ? 'Fusk' : 'Cheating'}
                </h3>
                <ul className="space-y-3 text-sm text-red-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {isNo
                      ? 'Kopiere KI-generert tekst direkte inn i oppgaven uten endringer eller redegjørelse.'
                      : 'Copying AI-generated text directly into the assignment without changes or disclosure.'}
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {isNo
                      ? 'Bruke KI-genererte referanser uten å verifisere at de eksisterer.'
                      : 'Using AI-generated references without verifying they exist.'}
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {isNo
                      ? 'Presentere KI-generert analyse som din egen uten å forstå innholdet.'
                      : 'Presenting AI-generated analysis as your own without understanding the content.'}
                  </li>
                </ul>
              </div>

              {/* Godkjent */}
              <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800">
                  <CheckCircle2 className="h-5 w-5" />
                  {isNo ? 'Godkjent' : 'Approved'}
                </h3>
                <ul className="space-y-3 text-sm text-green-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    {isNo
                      ? 'Bruke KI som inspirasjon, deretter omskrive med egne ord og inkludere redegjørelse.'
                      : 'Using AI as inspiration, then rewriting in your own words and including disclosure.'}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    {isNo
                      ? 'Verifisere alle KI-foreslåtte kilder i akademiske databaser.'
                      : 'Verifying all AI-suggested sources in academic databases.'}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    {isNo
                      ? 'Dokumentere KI-bruk med detaljert redegjørelse og sitere verktøyet korrekt.'
                      : 'Documenting AI use with detailed disclosure and citing the tool correctly.'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default References;