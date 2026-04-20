import React, { createContext, useContext, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Menu,
  X,
  Globe,
  Mail,
  Send,
  BookOpen,
  Wrench,
  Newspaper,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/* ─── i18n ─── */
type Lang = 'no' | 'en';

const translations = {
  no: {
    nav: {
      guidelines: 'Retningslinjer',
      tools: 'Verktøy',
      news: 'Nyheter',
      faq: 'FAQ',
      contact: 'Kontakt oss',
    },
    footer: {
      copyright: '© 2026 KI i Akademia. Alle rettigheter reservert.',
      privacy: 'Personvern',
      terms: 'Vilkår',
      about: 'Om oss',
      contactUs: 'Kontakt',
      legal: 'Juridisk',
      aboutSite: 'Om nettstedet',
    },
    contactModal: {
      title: 'Kontakt oss',
      name: 'Navn',
      email: 'E-post',
      category: 'Kategori',
      categoryOptions: ['Generell henvendelse', 'Teknisk støtte', 'Tilbakemelding', 'Annet'],
      message: 'Melding',
      send: 'Send melding',
      success: 'Meldingen din er sendt!',
    },
  },
  en: {
    nav: {
      guidelines: 'Guidelines',
      tools: 'Tools',
      news: 'News',
      faq: 'FAQ',
      contact: 'Contact Us',
    },
    footer: {
      copyright: '© 2026 AI in Academia. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      about: 'About Us',
      contactUs: 'Contact',
      legal: 'Legal',
      aboutSite: 'About the site',
    },
    contactModal: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      category: 'Category',
      categoryOptions: ['General Inquiry', 'Technical Support', 'Feedback', 'Other'],
      message: 'Message',
      send: 'Send Message',
      success: 'Your message has been sent!',
    },
  },
} as const;

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)['no'];
}

const LanguageContext = createContext<LangCtx>({
  lang: 'no',
  setLang: () => {},
  t: translations.no,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('no');
  const t = translations[lang];
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

/* ─── Contact Modal ─── */
const ContactModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">{t.contactModal.title}</h2>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 py-8 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Send className="h-6 w-6" />
                </div>
                <p className="text-lg font-semibold text-slate-700">{t.contactModal.success}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    {t.contactModal.name}
                  </label>
                  <Input required placeholder={t.contactModal.name} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    {t.contactModal.email}
                  </label>
                  <Input required type="email" placeholder={t.contactModal.email} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    {t.contactModal.category}
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t.contactModal.category} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.contactModal.categoryOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    {t.contactModal.message}
                  </label>
                  <Textarea required rows={4} placeholder={t.contactModal.message} />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  {t.contactModal.send}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─── Header ─── */
const Header: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: t.nav.guidelines, to: '/#retningslinjer', icon: BookOpen },
    { label: t.nav.tools, to: '/verktoy', icon: Wrench },
    { label: t.nav.news, to: '/#nyheter', icon: Newspaper },
    { label: t.nav.faq, to: '/#faq', icon: HelpCircle },
  ];

  const handleNavClick = useCallback(
    (to: string) => {
      setMobileOpen(false);
      if (to.startsWith('/#')) {
        const id = to.slice(2);
        if (location.pathname === '/') {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = to;
        }
      }
    },
    [location.pathname]
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="KI i Akademia" className="h-9 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.to.startsWith('/#') ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.to)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'no' ? 'en' : 'no')}
            className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
          >
            <Globe className="h-4 w-4" />
            {lang === 'no' ? 'NO' : 'EN'}
          </button>
          <Button
            onClick={onOpenContact}
            size="sm"
            className="hidden bg-blue-600 text-white hover:bg-blue-700 sm:inline-flex"
          >
            {t.nav.contact}
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navLinks.map((link) =>
                link.to.startsWith('/#') ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.to)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                )
              )}
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenContact();
                }}
                className="mt-2 w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                {t.nav.contact}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ─── Footer ─── */
const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Col 1: Logo & copyright */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src="/assets/logo.png" alt="KI i Akademia" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-slate-400">{t.footer.copyright}</p>
          </div>

          {/* Col 2: Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/juridisk/personvern" className="transition-colors hover:text-white">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link to="/juridisk/vilkar" className="transition-colors hover:text-white">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: About */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              {t.footer.aboutSite}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/juridisk/om-oss" className="transition-colors hover:text-white">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link to="/juridisk/om-oss" className="transition-colors hover:text-white">
                  {t.footer.contactUs}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ─── Layout ─── */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header onOpenContact={() => setContactOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default Layout;