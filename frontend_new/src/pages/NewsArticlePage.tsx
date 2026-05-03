import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/components/Layout';
import { newsArticles } from '@/lib/newsData';

const NewsArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const isNo = lang === 'no';

  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-slate-800">
            {isNo ? 'Artikkelen ble ikke funnet' : 'Article not found'}
          </h1>
          <Link to="/" className="text-blue-600 hover:underline">
            {isNo ? '← Tilbake til forsiden' : '← Back to home'}
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero image */}
      <div className="h-64 w-full overflow-hidden sm:h-80 lg:h-96">
        <img
          src={article.img}
          alt={article.title[lang]}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Article content */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link
          to="/#nyheter"
          className="mb-8 inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          {isNo ? 'Tilbake til nyheter' : 'Back to news'}
        </Link>

        <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
          <Calendar className="h-4 w-4" />
          {article.date}
        </div>

        <h1 className="mb-8 text-3xl font-bold leading-snug text-slate-800 sm:text-4xl">
          {article.title[lang]}
        </h1>

        <div className="prose prose-slate max-w-none">
          {article.body[lang].split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-5 text-base leading-relaxed text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsArticlePage;
