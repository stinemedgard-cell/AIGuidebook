import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Users, ShieldCheck } from 'lucide-react';
import Layout, { useLanguage } from '@/components/Layout';

interface LegalPage {
  title: { no: string; en: string };
  icon: React.ElementType;
  content: { no: string[]; en: string[] };
}

const legalPages: Record<string, LegalPage> = {
  personvern: {
    title: { no: 'Personvernerklæring', en: 'Privacy Policy' },
    icon: ShieldCheck,
    content: {
      no: [
        'KI i Akademia tar personvern på alvor. Denne personvernerklæringen beskriver hvordan vi samler inn, bruker og beskytter informasjonen din.',
        'Datainnsamling: Vi samler kun inn data som er nødvendig for å levere tjenestene våre. Dette inkluderer informasjon du oppgir frivillig gjennom kontaktskjemaet (navn, e-post, melding).',
        'Bruk av data: Informasjonen brukes utelukkende til å besvare henvendelser og forbedre tjenestene våre. Vi deler ikke data med tredjeparter uten ditt samtykke.',
        'Informasjonskapsler: Nettstedet bruker kun nødvendige informasjonskapsler for å sikre funksjonalitet. Vi bruker ikke sporings- eller analyseverktøy som samler personopplysninger.',
        'Dine rettigheter: I henhold til GDPR har du rett til innsyn, retting, sletting og dataportabilitet. Kontakt oss for å utøve dine rettigheter.',
        'Lagring: Data lagres kun lokalt i nettleseren din (f.eks. sjekkliste-fremgang via LocalStorage). Ingen persondata sendes til eksterne servere.',
        'Sist oppdatert: 20. april 2026',
      ],
      en: [
        'AI in Academia takes privacy seriously. This privacy policy describes how we collect, use, and protect your information.',
        'Data Collection: We only collect data necessary to deliver our services. This includes information you voluntarily provide through the contact form (name, email, message).',
        'Use of Data: Information is used solely to respond to inquiries and improve our services. We do not share data with third parties without your consent.',
        'Cookies: The website only uses necessary cookies to ensure functionality. We do not use tracking or analytics tools that collect personal data.',
        'Your Rights: Under GDPR, you have the right to access, rectification, deletion, and data portability. Contact us to exercise your rights.',
        'Storage: Data is stored only locally in your browser (e.g., checklist progress via LocalStorage). No personal data is sent to external servers.',
        'Last updated: April 20, 2026',
      ],
    },
  },
  vilkar: {
    title: { no: 'Vilkår for bruk', en: 'Terms of Use' },
    icon: FileText,
    content: {
      no: [
        'Ved å bruke KI i Akademia-plattformen godtar du følgende vilkår.',
        'Formål: Denne plattformen er et informasjonsverktøy for studenter og ansatte i høyere utdanning. Innholdet er ment som veiledning og erstatter ikke institusjonens egne retningslinjer.',
        'Innhold: Vi bestreber oss på å holde informasjonen oppdatert og korrekt, men kan ikke garantere at alt innhold til enhver tid er fullstendig eller feilfritt.',
        'Ansvar: Brukeren er selv ansvarlig for å følge sin institusjons regler og retningslinjer. KI i Akademia er ikke ansvarlig for konsekvenser av beslutninger tatt basert på informasjonen på denne plattformen.',
        'Chat-funksjonen: Den simulerte chat-assistenten gir generelle svar basert på forhåndsdefinerte data. Svarene skal ikke betraktes som juridisk eller akademisk rådgivning.',
        'Opphavsrett: Alt innhold på plattformen er beskyttet av opphavsrett. Innholdet kan deles med kildeangivelse for ikke-kommersielle formål.',
        'Sist oppdatert: 20. april 2026',
      ],
      en: [
        'By using the AI in Academia platform, you agree to the following terms.',
        'Purpose: This platform is an information tool for students and staff in higher education. The content is intended as guidance and does not replace your institution\'s own guidelines.',
        'Content: We strive to keep information up-to-date and accurate, but cannot guarantee that all content is complete or error-free at all times.',
        'Responsibility: The user is responsible for following their institution\'s rules and guidelines. AI in Academia is not liable for consequences of decisions made based on information on this platform.',
        'Chat Function: The simulated chat assistant provides general answers based on predefined data. Responses should not be considered legal or academic advice.',
        'Copyright: All content on the platform is protected by copyright. Content may be shared with attribution for non-commercial purposes.',
        'Last updated: April 20, 2026',
      ],
    },
  },
  'om-oss': {
    title: { no: 'Om oss', en: 'About Us' },
    icon: Users,
    content: {
      no: [
        'KI i Akademia er en informasjonsplattform utviklet for å hjelpe studenter og ansatte i norsk høyere utdanning med å navigere den nye virkeligheten med kunstig intelligens.',
        'Vår misjon: Vi ønsker å fremme ansvarlig, transparent og etisk bruk av KI-verktøy i akademisk arbeid. Vi tror at KI kan være et verdifullt hjelpemiddel når det brukes riktig.',
        'Hva vi tilbyr: Oppdaterte retningslinjer for KI-bruk, oversikt over godkjente verktøy, siteringsguider, interaktive sjekklister og nyheter om KI i utdanningssektoren.',
        'Hvem vi er: Plattformen er utviklet av et tverrfaglig team med bakgrunn innen informatikk, pedagogikk og bibliotekvitenskap, i samarbeid med norske utdanningsinstitusjoner.',
        'Kontakt: Har du spørsmål, tilbakemeldinger eller forslag? Bruk kontaktskjemaet vårt eller send en e-post til kontakt@ki-akademia.no.',
        'Vi oppdaterer plattformen jevnlig for å reflektere de nyeste retningslinjene og beste praksisene innen KI i akademia.',
      ],
      en: [
        'AI in Academia is an information platform developed to help students and staff in Norwegian higher education navigate the new reality of artificial intelligence.',
        'Our Mission: We aim to promote responsible, transparent, and ethical use of AI tools in academic work. We believe AI can be a valuable aid when used correctly.',
        'What We Offer: Updated guidelines for AI use, overview of approved tools, citation guides, interactive checklists, and news about AI in the education sector.',
        'Who We Are: The platform is developed by an interdisciplinary team with backgrounds in computer science, pedagogy, and library science, in collaboration with Norwegian educational institutions.',
        'Contact: Have questions, feedback, or suggestions? Use our contact form or send an email to contact@ai-academia.no.',
        'We regularly update the platform to reflect the latest guidelines and best practices in AI in academia.',
      ],
    },
  },
};

const Legal: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const { lang } = useLanguage();
  const data = legalPages[type || 'personvern'];

  if (!data) {
    return (
      <Layout>
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-slate-500">Page not found</p>
        </div>
      </Layout>
    );
  }

  const Icon = data.icon;

  return (
    <Layout>
      <section className="bg-slate-900 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-4 inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === 'no' ? 'Tilbake til forsiden' : 'Back to home'}
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">{data.title[lang]}</h1>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {data.content[lang].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`text-base leading-relaxed text-slate-600 ${
                  i < data.content[lang].length - 1 ? 'mb-5' : ''
                } ${paragraph.startsWith('Sist oppdatert') || paragraph.startsWith('Last updated') ? 'text-sm text-slate-400 italic' : ''}`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;