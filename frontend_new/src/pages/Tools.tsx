import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  MessageSquare,
  Code2,
  BarChart3,
  Image,
  Filter,
  Shield,
  AlertTriangle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Layout, { useLanguage } from '@/components/Layout';

type Category = 'alle' | 'tekst' | 'koding' | 'analyse' | 'multimedia';

interface Tool {
  name: string;
  icon: React.ElementType;
  category: Category[];
  description: { no: string; en: string };
  status: 'gratis' | 'betalt' | 'feide';
  security: 'green' | 'yellow';
  url: string;
}

const tools: Tool[] = [
  {
    name: 'ChatGPT',
    icon: MessageSquare,
    category: ['tekst'],
    description: {
      no: 'Generell tekstgenerering, oppsummering, idémyldring og spørsmål-svar.',
      en: 'General text generation, summarization, brainstorming, and Q&A.',
    },
    status: 'betalt',
    security: 'yellow',
    url: 'https://chat.openai.com',
  },
  {
    name: 'Copilot (Bing Chat)',
    icon: MessageSquare,
    category: ['tekst'],
    description: {
      no: 'KI-assistent med nettsøk, tilgjengelig via Feide for mange institusjoner.',
      en: 'AI assistant with web search, available via Feide for many institutions.',
    },
    status: 'feide',
    security: 'green',
    url: 'https://copilot.microsoft.com',
  },
  {
    name: 'GitHub Copilot',
    icon: Code2,
    category: ['koding'],
    description: {
      no: 'KI-drevet kodehjelp direkte i editoren. Gratis for studenter via GitHub Education.',
      en: 'AI-powered coding assistance directly in the editor. Free for students via GitHub Education.',
    },
    status: 'gratis',
    security: 'green',
    url: 'https://github.com/features/copilot',
  },
  {
    name: 'Claude',
    icon: MessageSquare,
    category: ['tekst', 'analyse'],
    description: {
      no: 'Avansert språkmodell med fokus på sikkerhet og lange dokumenter.',
      en: 'Advanced language model focused on safety and long documents.',
    },
    status: 'betalt',
    security: 'yellow',
    url: 'https://claude.ai',
  },
  {
    name: 'Elicit',
    icon: BarChart3,
    category: ['analyse'],
    description: {
      no: 'KI-verktøy for akademisk litteratursøk og forskningsanalyse.',
      en: 'AI tool for academic literature search and research analysis.',
    },
    status: 'gratis',
    security: 'green',
    url: 'https://elicit.com',
  },
  {
    name: 'DALL·E 3',
    icon: Image,
    category: ['multimedia'],
    description: {
      no: 'Bildegenerering fra tekstbeskrivelser, integrert i ChatGPT.',
      en: 'Image generation from text descriptions, integrated in ChatGPT.',
    },
    status: 'betalt',
    security: 'yellow',
    url: 'https://openai.com/dall-e-3',
  },
  {
    name: 'Notebook LM',
    icon: BarChart3,
    category: ['analyse', 'tekst'],
    description: {
      no: 'Googles KI-verktøy for å analysere og oppsummere egne dokumenter.',
      en: "Google's AI tool for analyzing and summarizing your own documents.",
    },
    status: 'gratis',
    security: 'green',
    url: 'https://notebooklm.google.com',
  },
  {
    name: 'Midjourney',
    icon: Image,
    category: ['multimedia'],
    description: {
      no: 'Avansert bildegenerering med høy kvalitet for kreative prosjekter.',
      en: 'Advanced image generation with high quality for creative projects.',
    },
    status: 'betalt',
    security: 'yellow',
    url: 'https://midjourney.com',
  },
];

const categoryLabels: Record<Category, { no: string; en: string }> = {
  alle: { no: 'Alle', en: 'All' },
  tekst: { no: 'Tekst', en: 'Text' },
  koding: { no: 'Koding', en: 'Coding' },
  analyse: { no: 'Analyse', en: 'Analysis' },
  multimedia: { no: 'Multimedia', en: 'Multimedia' },
};

const statusConfig = {
  gratis: { label: { no: 'Gratis', en: 'Free' }, className: 'bg-green-100 text-green-700 border-green-200' },
  betalt: { label: { no: 'Betalt', en: 'Paid' }, className: 'bg-amber-100 text-amber-700 border-amber-200' },
  feide: { label: { no: 'Feide', en: 'Feide' }, className: 'bg-blue-100 text-blue-700 border-blue-200' },
};

const Tools: React.FC = () => {
  const { lang } = useLanguage();
  const isNo = lang === 'no';
  const [activeFilter, setActiveFilter] = useState<Category>('alle');

  const filteredTools =
    activeFilter === 'alle' ? tools : tools.filter((t) => t.category.includes(activeFilter));

  return (
    <Layout>
      {/* Header */}
      <section className="bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-4 inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {isNo ? 'Tilbake til forsiden' : 'Back to home'}
          </Link>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            {isNo ? 'Anbefalte KI-verktøy' : 'Recommended AI Tools'}
          </h1>
          <p className="mt-2 text-slate-400">
            {isNo
              ? 'Oversikt over KI-verktøy med vurdering av sikkerhet og tilgjengelighet.'
              : 'Overview of AI tools with security and accessibility assessments.'}
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400" />
            {(Object.keys(categoryLabels) as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {categoryLabels[cat][lang]}
              </button>
            ))}
          </div>

          {/* Tools grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map((tool, i) => {
              const Icon = tool.icon;
              const status = statusConfig[tool.status];
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="outline" className={status.className}>
                      {status.label[lang]}
                    </Badge>
                  </div>
                  <h3 className="mb-1 text-base font-bold text-slate-800">{tool.name}</h3>
                  <p className="mb-3 text-sm text-slate-500 leading-relaxed">
                    {tool.description[lang]}
                  </p>

                  {/* Security note */}
                  <div
                    className={`mb-3 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium ${
                      tool.security === 'green'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    {tool.security === 'green' ? (
                      <Shield className="h-3.5 w-3.5" />
                    ) : (
                      <AlertTriangle className="h-3.5 w-3.5" />
                    )}
                    {tool.security === 'green'
                      ? isNo
                        ? 'Grønne data OK'
                        : 'Green data OK'
                      : isNo
                        ? 'Kun gule data med forsiktighet'
                        : 'Yellow data with caution only'}
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {isNo ? 'Åpne verktøy' : 'Open tool'} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;