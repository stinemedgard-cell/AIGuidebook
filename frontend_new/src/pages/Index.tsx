import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Send,
  Scale,
  Shield,
  SearchCheck,
  Wrench,
  BookOpenCheck,
  ClipboardCheck,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Bot,
  User,
  FileText,
  GraduationCap,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';
import { useLanguage } from '@/components/Layout';
import { newsArticles } from '@/lib/newsData';

const ETHICS_IMG = 'https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-20/m7x77yiaafiq/ethics-academic.png';
const SECURITY_IMG = 'https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-20/m7yagvyaafgq/security-data.png';
const RELIABILITY_IMG = 'https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-20/m7x775qaafha/reliability-ai.png';

/* ─── Data ─── */
const chatResponses: Record<string, { no: string; en: string }> = {
  'Hvordan sitere ChatGPT?': {
    no: 'Ifølge APA 7 siterer du ChatGPT slik: I teksten: (OpenAI, 2026). I referanselisten: OpenAI. (2026). ChatGPT (versjon GPT-4) [Stor språkmodell]. https://chat.openai.com',
    en: 'According to APA 7, cite ChatGPT as: In text: (OpenAI, 2026). In reference list: OpenAI. (2026). ChatGPT (GPT-4 version) [Large language model]. https://chat.openai.com',
  },
  'Er det lov å bruke KI på eksamen?': {
    no: 'Det avhenger av eksamensreglementet ved din institusjon. Generelt er KI-verktøy ikke tillatt på skriftlige eksamener med mindre det er eksplisitt godkjent. Sjekk alltid med din emneansvarlige.',
    en: 'It depends on your institution\'s exam regulations. Generally, AI tools are not allowed on written exams unless explicitly approved. Always check with your course coordinator.',
  },
  'Hva er KI-hallusinasjoner?': {
    no: 'KI-hallusinasjoner er når en språkmodell genererer informasjon som virker troverdig, men som er faktisk feil. Dette kan inkludere oppdiktede referanser, feilaktige fakta eller misvisende statistikk. Alltid verifiser KI-generert innhold mot pålitelige kilder.',
    en: 'AI hallucinations occur when a language model generates information that appears credible but is factually incorrect. This can include fabricated references, wrong facts, or misleading statistics. Always verify AI-generated content against reliable sources.',
  },
};

const exampleQuestions = [
  { q: 'Hvordan sitere ChatGPT?', icon: FileText },
  { q: 'Er det lov å bruke KI på eksamen?', icon: GraduationCap },
  { q: 'Hva er KI-hallusinasjoner?', icon: AlertCircle },
];

const faqItems = [
  {
    q: { no: 'Kan jeg bruke ChatGPT til oppgaveskriving?', en: 'Can I use ChatGPT for assignments?' },
    a: {
      no: 'Ja, men du må alltid oppgi at du har brukt KI-verktøy, og du er ansvarlig for å verifisere alt innhold. Sjekk emnebeskrivelsen for spesifikke regler.',
      en: 'Yes, but you must always disclose AI tool usage, and you are responsible for verifying all content. Check your course description for specific rules.',
    },
  },
  {
    q: { no: 'Hva regnes som fusk med KI?', en: 'What counts as cheating with AI?' },
    a: {
      no: 'Å levere KI-generert tekst som ditt eget arbeid uten redegjørelse regnes som fusk. Det samme gjelder bruk av KI på eksamener der det ikke er tillatt.',
      en: 'Submitting AI-generated text as your own work without disclosure is considered cheating. The same applies to using AI on exams where it is not allowed.',
    },
  },
  {
    q: { no: 'Hvilke KI-verktøy er godkjent?', en: 'Which AI tools are approved?' },
    a: {
      no: 'Det varierer mellom institusjoner. Generelt anbefales verktøy som tilbyr Feide-innlogging og overholder GDPR. Se vår verktøyoversikt for anbefalinger.',
      en: 'It varies between institutions. Generally, tools offering Feide login and GDPR compliance are recommended. See our tools overview for recommendations.',
    },
  },
  {
    q: { no: 'Hvordan redegjør jeg for KI-bruk?', en: 'How do I disclose AI usage?' },
    a: {
      no: 'Inkluder en redegjørelse i oppgaven som beskriver hvilke verktøy du brukte, til hvilket formål, og i hvilken grad. Se vår kildehenviser for maler.',
      en: 'Include a disclosure in your assignment describing which tools you used, for what purpose, and to what extent. See our reference guide for templates.',
    },
  },
  {
    q: { no: 'Er KI-genererte kilder pålitelige?', en: 'Are AI-generated sources reliable?' },
    a: {
      no: 'Nei, KI kan "hallusinere" og oppgi kilder som ikke eksisterer. Du må alltid verifisere alle referanser manuelt mot faktiske databaser og publikasjoner.',
      en: 'No, AI can "hallucinate" and cite sources that don\'t exist. You must always manually verify all references against actual databases and publications.',
    },
  },
];

/* ─── Components ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const ChatSimulator: React.FC = () => {
  const { lang } = useLanguage();
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = (question: string) => {
    const q = question.trim();
    if (!q || typing) return;
    setMessages((prev) => [...prev, { role: 'user', text: q }]);
    setInput('');
    setTyping(true);

    const response = chatResponses[q];
    const answer = response
      ? response[lang]
      : lang === 'no'
        ? 'Beklager, jeg har ikke et svar på det akkurat nå. Prøv et av eksempelspørsmålene nedenfor.'
        : "Sorry, I don't have an answer for that right now. Try one of the example questions below.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
      setTyping(false);
    }, 1200);
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
        {/* Chat header */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3">
          <MessageSquare className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-semibold text-slate-700">
            {lang === 'no' ? 'KI-Assistent' : 'AI Assistant'}
          </span>
          <span className="ml-auto text-xs text-slate-600">
            {lang === 'no' ? 'Simulert RAG-system' : 'Simulated RAG system'}
          </span>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-3">
          {messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-2">
              <p className="text-xs text-slate-600">
                {lang === 'no' ? 'Prøv et eksempelspørsmål:' : 'Try an example question:'}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {exampleQuestions.map(({ q, icon: Icon }) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100 hover:border-blue-300"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'bot' && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Bot className="h-4 w-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {msg.text}
              </div>
              {msg.role === 'user' && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                  <User className="h-4 w-4" />
                </div>
              )}
            </motion.div>
          ))}
          {typing && (
            <div className="flex gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Bot className="h-4 w-4" />
              </div>
              <div className="rounded-2xl bg-slate-100 px-4 py-2.5 text-sm text-slate-400">
                <span className="animate-pulse">● ● ●</span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-slate-100 p-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === 'no' ? 'Still et spørsmål om KI i akademia...' : 'Ask a question about AI in academia...'}
              className="flex-1"
            />
            <Button type="submit" size="icon" className="bg-blue-600 text-white hover:bg-blue-700" disabled={typing} aria-label={lang === 'no' ? 'Send melding' : 'Send message'}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

const FAQItem: React.FC<{ q: string; a: string; index: number }> = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-xl border border-slate-200 bg-white overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="pr-4 text-sm font-semibold text-slate-800 sm:text-base">{q}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-slate-400" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-slate-400" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100 px-6 py-4 text-sm leading-relaxed text-slate-600">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── Page ─── */
const Index: React.FC = () => {
  const { lang } = useLanguage();
  const isNo = lang === 'no';
  const [newsStart, setNewsStart] = useState(0);

  const perPage = 3;
  const canPrev = newsStart > 0;
  const canNext = newsStart + perPage < newsArticles.length;
  const visibleArticles = newsArticles.slice(newsStart, newsStart + perPage);

  const guidelineCards = [
    {
      icon: Scale,
      title: isNo ? 'Etikk' : 'Ethics',
      desc: isNo
        ? 'Akademisk integritet og ansvarlig bruk av KI i studiene.'
        : 'Academic integrity and responsible use of AI in studies.',
      to: '/retningslinjer/etikk',
      img: ETHICS_IMG,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Shield,
      title: isNo ? 'Sikkerhet' : 'Security',
      desc: isNo
        ? 'Personvern og databehandling ved bruk av KI-verktøy.'
        : 'Privacy and data handling when using AI tools.',
      to: '/retningslinjer/sikkerhet',
      img: SECURITY_IMG,
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: SearchCheck,
      title: isNo ? 'Pålitelighet' : 'Reliability',
      desc: isNo
        ? 'Hallusinasjoner, skjevheter og verifisering av KI-output.'
        : 'Hallucinations, biases, and verification of AI output.',
      to: '/retningslinjer/palitelighet',
      img: RELIABILITY_IMG,
      color: 'bg-amber-100 text-amber-600',
    },
  ];

  const toolModules = [
    {
      icon: Wrench,
      title: isNo ? 'Anbefalte verktøy' : 'Recommended Tools',
      desc: isNo ? 'Oversikt over godkjente KI-verktøy.' : 'Overview of approved AI tools.',
      to: '/verktoy',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: BookOpenCheck,
      title: isNo ? 'Kildehenviser' : 'Reference Guide',
      desc: isNo ? 'Siter KI riktig i oppgaven din.' : 'Cite AI correctly in your assignment.',
      to: '/kildehenviser',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: ClipboardCheck,
      title: isNo ? 'Sjekkliste' : 'Checklist',
      desc: isNo ? 'Interaktiv sjekkliste for KI-bruk.' : 'Interactive checklist for AI use.',
      to: '/sjekkliste',
      color: 'bg-teal-100 text-teal-600',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50 py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h1 className="mb-4 text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">
              {isNo ? 'Kunstig intelligens i akademia' : 'Artificial Intelligence in Academia'}
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">
              {isNo
                ? 'Din komplette guide til ansvarlig bruk av KI-verktøy i studiene. Lær om retningslinjer, verktøy og beste praksis.'
                : 'Your complete guide to responsible use of AI tools in studies. Learn about guidelines, tools, and best practices.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ChatSimulator />
          </motion.div>
        </div>
      </section>

      {/* Guidelines Cards */}
      <section id="retningslinjer" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-2xl font-bold text-slate-800 sm:text-3xl">
              {isNo ? 'Retningslinjer' : 'Guidelines'}
            </h2>
            <p className="text-slate-500">
              {isNo
                ? 'Tre sentrale områder du bør kjenne til.'
                : 'Three key areas you should know about.'}
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guidelineCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  to={card.to}
                  className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`mb-4 inline-flex rounded-xl p-3 ${card.color}`}>
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-800">{card.title}</h3>
                  <p className="mb-4 text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    {isNo ? 'Les mer' : 'Read more'} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tools Grid */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-2xl font-bold text-slate-800 sm:text-3xl">
              {isNo ? 'Praktiske verktøy' : 'Practical Tools'}
            </h2>
            <p className="text-slate-500">
              {isNo ? 'Ressurser for din akademiske hverdag.' : 'Resources for your academic life.'}
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {toolModules.map((mod, i) => (
              <motion.div
                key={mod.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  to={mod.to}
                  className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-white"
                >
                  <div className={`mb-4 inline-flex rounded-2xl p-4 ${mod.color}`}>
                    <mod.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-800">{mod.title}</h3>
                  <p className="mb-4 text-sm text-slate-500">{mod.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    {isNo ? 'Gå til' : 'Go to'} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Carousel */}
      <section id="nyheter" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-2xl font-bold text-slate-800 sm:text-3xl">
              {isNo ? 'Nyheter' : 'News'}
            </h2>
            <p className="text-slate-500">
              {isNo ? 'Siste nytt om KI i akademia.' : 'Latest news about AI in academia.'}
            </p>
          </motion.div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setNewsStart((s) => Math.max(0, s - 1))}
              disabled={!canPrev}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label={isNo ? 'Forrige' : 'Previous'}
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>

            <div className="flex-1 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {visibleArticles.map((article, i) => (
                <motion.div
                  key={article.slug}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link to={`/nyheter/${article.slug}`} className="block">
                    <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={article.img}
                          alt={article.title[lang]}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <div className="mb-2 flex items-center gap-1 text-xs text-slate-400">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </div>
                        <h3 className="mb-3 text-sm font-bold text-slate-800 leading-snug">
                          {article.title[lang]}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                          {isNo ? 'Les mer' : 'Read more'} <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setNewsStart((s) => Math.min(newsArticles.length - perPage, s + 1))}
              disabled={!canNext}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label={isNo ? 'Neste' : 'Next'}
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-2xl font-bold text-slate-800 sm:text-3xl">
              {isNo ? 'Ofte stilte spørsmål' : 'Frequently Asked Questions'}
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQItem key={i} q={item.q[lang]} a={item.a[lang]} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
