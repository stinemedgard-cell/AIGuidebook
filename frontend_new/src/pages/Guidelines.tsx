import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Shield, SearchCheck, CheckCircle2, XCircle } from 'lucide-react';
import Layout, { useLanguage } from '@/components/Layout';

const ETHICS_IMG = 'https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-20/m7x77yiaafiq/ethics-academic.png';
const SECURITY_IMG = 'https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-20/m7yagvyaafgq/security-data.png';
const RELIABILITY_IMG = 'https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-20/m7x775qaafha/reliability-ai.png';

interface GuidelineData {
  title: { no: string; en: string };
  icon: React.ElementType;
  img: string;
  intro: { no: string; en: string };
  sections: { heading: { no: string; en: string }; content: { no: string; en: string } }[];
  allowed: { no: string; en: string }[];
  notAllowed: { no: string; en: string }[];
  caseStudy: { title: { no: string; en: string }; content: { no: string; en: string } };
}

const guidelinesData: Record<string, GuidelineData> = {
  etikk: {
    title: { no: 'Etikk – Akademisk integritet', en: 'Ethics – Academic Integrity' },
    icon: Scale,
    img: ETHICS_IMG,
    intro: {
      no: 'Akademisk integritet er grunnlaget for all forskning og utdanning. Med fremveksten av KI-verktøy er det viktigere enn noen gang å forstå grensene mellom lovlig bruk og akademisk uredelighet.',
      en: 'Academic integrity is the foundation of all research and education. With the rise of AI tools, it is more important than ever to understand the boundaries between legitimate use and academic dishonesty.',
    },
    sections: [
      {
        heading: { no: 'Hva betyr akademisk integritet i KI-alderen?', en: 'What does academic integrity mean in the AI age?' },
        content: {
          no: 'Akademisk integritet handler om ærlighet, tillit og ansvarlighet i akademisk arbeid. Når du bruker KI-verktøy, må du være transparent om hvordan og i hvilken grad du har brukt dem. Dette inkluderer å oppgi verktøyet i en redegjørelse og sikre at det endelige arbeidet reflekterer din egen forståelse.',
          en: 'Academic integrity is about honesty, trust, and accountability in academic work. When using AI tools, you must be transparent about how and to what extent you used them. This includes disclosing the tool in a statement and ensuring the final work reflects your own understanding.',
        },
      },
      {
        heading: { no: 'Redegjørelsesplikt', en: 'Disclosure obligation' },
        content: {
          no: 'De fleste norske universiteter krever nå at studenter redegjør for sin bruk av KI-verktøy i innleveringer. Dette betyr at du må beskrive hvilke verktøy du brukte, til hvilket formål, og hvordan du kvalitetssikret resultatet. En god redegjørelse viser at du har brukt KI som et hjelpemiddel, ikke som en erstatning for egen tenkning.',
          en: 'Most Norwegian universities now require students to disclose their use of AI tools in submissions. This means you must describe which tools you used, for what purpose, and how you quality-assured the result. A good disclosure shows you used AI as an aid, not a replacement for your own thinking.',
        },
      },
    ],
    allowed: [
      { no: 'Bruke KI til idémyldring og brainstorming', en: 'Using AI for brainstorming and ideation' },
      { no: 'Få hjelp til å forbedre språk og grammatikk', en: 'Getting help to improve language and grammar' },
      { no: 'Bruke KI som oppslagsverk (med verifisering)', en: 'Using AI as a reference tool (with verification)' },
      { no: 'Generere kode-eksempler for læringsformål', en: 'Generating code examples for learning purposes' },
    ],
    notAllowed: [
      { no: 'Levere KI-generert tekst som eget arbeid', en: 'Submitting AI-generated text as your own work' },
      { no: 'Bruke KI på eksamen uten tillatelse', en: 'Using AI on exams without permission' },
      { no: 'Kopiere KI-output uten redegjørelse', en: 'Copying AI output without disclosure' },
      { no: 'La KI gjøre hele analysen for deg', en: 'Letting AI do the entire analysis for you' },
    ],
    caseStudy: {
      title: { no: 'Case: Studenten som brukte ChatGPT riktig', en: 'Case: The student who used ChatGPT correctly' },
      content: {
        no: 'Maria brukte ChatGPT til å generere en disposisjon for sin bacheloroppgave. Hun tok utgangspunkt i forslagene, men omskrev og utvidet alle punkter basert på pensumlitteraturen. I redegjørelsen beskrev hun nøyaktig hvordan hun brukte verktøyet. Sensor vurderte dette som god og transparent bruk av KI.',
        en: 'Maria used ChatGPT to generate an outline for her bachelor thesis. She used the suggestions as a starting point but rewrote and expanded all points based on the course literature. In her disclosure, she described exactly how she used the tool. The examiner assessed this as good and transparent use of AI.',
      },
    },
  },
  sikkerhet: {
    title: { no: 'Sikkerhet – Personvern og databehandling', en: 'Security – Privacy and Data Handling' },
    icon: Shield,
    img: SECURITY_IMG,
    intro: {
      no: 'Når du bruker KI-verktøy, deler du ofte data med tredjeparter. Det er avgjørende å forstå hvilke data som er trygge å dele, og hvilke som krever ekstra forsiktighet for å beskytte personvern og sensitiv informasjon.',
      en: 'When using AI tools, you often share data with third parties. It is crucial to understand which data is safe to share and which requires extra caution to protect privacy and sensitive information.',
    },
    sections: [
      {
        heading: { no: 'Dataklassifisering: Grønne og gule data', en: 'Data classification: Green and yellow data' },
        content: {
          no: 'Norske institusjoner klassifiserer data i kategorier. Grønne data (offentlig informasjon, generelle spørsmål) kan trygt brukes med de fleste KI-verktøy. Gule data (intern informasjon, upublisert forskning) krever verktøy med databehandleravtale. Røde data (personopplysninger, helseinformasjon) skal aldri deles med KI-verktøy uten godkjent avtale.',
          en: 'Norwegian institutions classify data into categories. Green data (public information, general questions) can safely be used with most AI tools. Yellow data (internal information, unpublished research) requires tools with data processing agreements. Red data (personal information, health data) should never be shared with AI tools without an approved agreement.',
        },
      },
      {
        heading: { no: 'GDPR og KI-verktøy', en: 'GDPR and AI tools' },
        content: {
          no: 'Under GDPR har du rett til å vite hvordan dataene dine behandles. Mange KI-verktøy bruker inndata til å trene modellene sine, noe som kan være problematisk for sensitive data. Velg alltid verktøy som tilbyr muligheten til å deaktivere datainnsamling, og foretrekk verktøy med Feide-innlogging som har avtale med din institusjon.',
          en: 'Under GDPR, you have the right to know how your data is processed. Many AI tools use input data to train their models, which can be problematic for sensitive data. Always choose tools that offer the option to disable data collection, and prefer tools with Feide login that have agreements with your institution.',
        },
      },
    ],
    allowed: [
      { no: 'Bruke KI med offentlig tilgjengelig informasjon', en: 'Using AI with publicly available information' },
      { no: 'Stille generelle faglige spørsmål', en: 'Asking general academic questions' },
      { no: 'Bruke institusjons-godkjente verktøy med Feide', en: 'Using institution-approved tools with Feide' },
      { no: 'Anonymisere data før bruk med KI', en: 'Anonymizing data before using with AI' },
    ],
    notAllowed: [
      { no: 'Dele personopplysninger med KI-verktøy', en: 'Sharing personal data with AI tools' },
      { no: 'Laste opp konfidensiell forskning', en: 'Uploading confidential research' },
      { no: 'Bruke ikke-godkjente verktøy for sensitive data', en: 'Using unapproved tools for sensitive data' },
      { no: 'Ignorere institusjonens databehandlingsregler', en: 'Ignoring institution data processing rules' },
    ],
    caseStudy: {
      title: { no: 'Case: Databehandlingsfeil med KI', en: 'Case: Data handling error with AI' },
      content: {
        no: 'En forskergruppe lastet opp upubliserte forskningsdata til et gratis KI-verktøy for analyse. Dataene ble brukt til å trene modellen, og deler av forskningen dukket opp i andre brukeres resultater. Dette førte til en alvorlig personvernhendelse og forsinkelse av publiseringen.',
        en: 'A research group uploaded unpublished research data to a free AI tool for analysis. The data was used to train the model, and parts of the research appeared in other users\' results. This led to a serious privacy incident and delayed publication.',
      },
    },
  },
  palitelighet: {
    title: { no: 'Pålitelighet – Hallusinasjoner og skjevheter', en: 'Reliability – Hallucinations and Biases' },
    icon: SearchCheck,
    img: RELIABILITY_IMG,
    intro: {
      no: 'KI-modeller kan generere overbevisende, men feilaktig informasjon. Å forstå begrensningene til KI er essensielt for å bruke verktøyene på en akademisk forsvarlig måte.',
      en: 'AI models can generate convincing but incorrect information. Understanding the limitations of AI is essential for using the tools in an academically sound manner.',
    },
    sections: [
      {
        heading: { no: 'Hva er KI-hallusinasjoner?', en: 'What are AI hallucinations?' },
        content: {
          no: 'KI-hallusinasjoner oppstår når en språkmodell genererer informasjon som ser troverdig ut, men som er helt eller delvis feil. Dette kan inkludere oppdiktede referanser med realistiske forfatternavn og tidsskrifttitler, feilaktige fakta presentert med stor sikkerhet, og misvisende statistikk. Modellen "hallusinerer" fordi den predikerer sannsynlige ord, ikke verifiserer fakta.',
          en: 'AI hallucinations occur when a language model generates information that appears credible but is wholly or partially incorrect. This can include fabricated references with realistic author names and journal titles, incorrect facts presented with high confidence, and misleading statistics. The model "hallucinates" because it predicts likely words, not verifies facts.',
        },
      },
      {
        heading: { no: 'Skjevheter i KI-modeller', en: 'Biases in AI models' },
        content: {
          no: 'KI-modeller trenes på store datamengder fra internett, som inneholder eksisterende skjevheter i samfunnet. Dette kan føre til at modellene reproduserer stereotypier, underrepresenterer visse perspektiver, eller gir ubalanserte svar. Vær spesielt oppmerksom på dette i forskning som omhandler kjønn, etnisitet, kultur eller politikk.',
          en: 'AI models are trained on large amounts of internet data, which contains existing societal biases. This can lead to models reproducing stereotypes, underrepresenting certain perspectives, or giving unbalanced answers. Be especially aware of this in research involving gender, ethnicity, culture, or politics.',
        },
      },
    ],
    allowed: [
      { no: 'Bruke KI som utgangspunkt for videre forskning', en: 'Using AI as a starting point for further research' },
      { no: 'Verifisere all KI-generert informasjon', en: 'Verifying all AI-generated information' },
      { no: 'Kryssjekke referanser mot faktiske databaser', en: 'Cross-checking references against actual databases' },
      { no: 'Bruke KI for å oppsummere kjente konsepter', en: 'Using AI to summarize known concepts' },
    ],
    notAllowed: [
      { no: 'Stole blindt på KI-genererte referanser', en: 'Blindly trusting AI-generated references' },
      { no: 'Bruke KI-output uten kildekritikk', en: 'Using AI output without source criticism' },
      { no: 'Presentere KI-generert statistikk som fakta', en: 'Presenting AI-generated statistics as facts' },
      { no: 'Ignorere potensielle skjevheter i resultatene', en: 'Ignoring potential biases in results' },
    ],
    caseStudy: {
      title: { no: 'Case: Den oppdiktede kilden', en: 'Case: The fabricated source' },
      content: {
        no: 'En student ba ChatGPT om å finne kilder til en oppgave om klimaendringer. Modellen genererte fem referanser med realistiske forfatternavn og tidsskrifttitler. Ved nærmere sjekk viste det seg at tre av referansene ikke eksisterte. Studenten oppdaget dette fordi hen verifiserte alle kilder i Google Scholar og Oria.',
        en: 'A student asked ChatGPT to find sources for an assignment on climate change. The model generated five references with realistic author names and journal titles. Upon closer inspection, three of the references did not exist. The student discovered this because they verified all sources in Google Scholar and Oria.',
      },
    },
  },
};

const Guidelines: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const { lang } = useLanguage();
  const data = guidelinesData[type || 'etikk'];

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
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.img})` }}
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === 'no' ? 'Tilbake til forsiden' : 'Back to home'}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {data.title[lang]}
            </h1>
          </div>
          <p className="text-sm text-slate-400">
            {lang === 'no' ? 'Sist oppdatert: 20. april 2026' : 'Last updated: April 20, 2026'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-lg leading-relaxed text-slate-600"
          >
            {data.intro[lang]}
          </motion.p>

          {/* Sections */}
          {data.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="mb-3 text-xl font-bold text-slate-800">{section.heading[lang]}</h2>
              <p className="text-base leading-relaxed text-slate-600">{section.content[lang]}</p>
            </motion.div>
          ))}

          {/* Allowed / Not Allowed Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 grid gap-6 sm:grid-cols-2"
          >
            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800">
                <CheckCircle2 className="h-5 w-5" />
                {lang === 'no' ? 'Tillatt' : 'Allowed'}
              </h3>
              <ul className="space-y-2">
                {data.allowed.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-red-800">
                <XCircle className="h-5 w-5" />
                {lang === 'no' ? 'Ikke tillatt' : 'Not Allowed'}
              </h3>
              <ul className="space-y-2">
                {data.notAllowed.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-200 bg-blue-50 p-6"
          >
            <h3 className="mb-3 text-lg font-bold text-blue-800">{data.caseStudy.title[lang]}</h3>
            <p className="text-sm leading-relaxed text-blue-700">{data.caseStudy.content[lang]}</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Guidelines;