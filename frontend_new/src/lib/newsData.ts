export type NewsArticle = {
  slug: string;
  title: { no: string; en: string };
  date: string;
  img: string;
  body: { no: string; en: string };
};

const NEWS_IMG = 'https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-20/m7yaehiaafga/news-ai-research.png';
const ETHICS_IMG = 'https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-20/m7x77yiaafiq/ethics-academic.png';
const SECURITY_IMG = 'https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-20/m7yagvyaafgq/security-data.png';
const RELIABILITY_IMG = 'https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-20/m7x775qaafha/reliability-ai.png';

export const newsArticles: NewsArticle[] = [
  {
    slug: 'nye-retningslinjer-ki-hoyere-utdanning',
    title: { no: 'Nye retningslinjer for KI i høyere utdanning', en: 'New Guidelines for AI in Higher Education' },
    date: '15. april 2026',
    img: NEWS_IMG,
    body: {
      no: `Universiteter og høyskoler over hele landet innfører nye retningslinjer for bruk av kunstig intelligens i undervisning og forskning. De nye reglene legger vekt på akademisk integritet og ansvarlig bruk av KI-verktøy.

Retningslinjene presiserer at studenter alltid skal oppgi når de har benyttet KI-verktøy i arbeidet sitt, og at slikt verktøy aldri kan erstatte studentens eget faglige bidrag. Institusjonene oppfordres til å integrere KI-kompetanse som en del av studieprogrammene.

Ekspertgruppen som har utarbeidet retningslinjene understreker at KI er et verktøy som kan styrke læringen dersom det brukes riktig. Målet er ikke å forby verktøyene, men å sikre at studenter og ansatte har den kompetansen som trengs for å bruke dem forsvarlig.`,
      en: `Universities and colleges across the country are implementing new guidelines for the use of artificial intelligence in teaching and research. The new rules emphasize academic integrity and responsible use of AI tools.

The guidelines clarify that students must always disclose when they have used AI tools in their work, and that such tools can never replace the student's own academic contribution. Institutions are encouraged to integrate AI competence as part of their study programs.

The expert group that drafted the guidelines emphasizes that AI is a tool that can strengthen learning when used correctly. The goal is not to ban the tools, but to ensure that students and staff have the competence needed to use them responsibly.`,
    },
  },
  {
    slug: 'slik-bruker-studenter-ki-ansvarlig',
    title: { no: 'Slik bruker studenter KI ansvarlig', en: 'How Students Use AI Responsibly' },
    date: '10. april 2026',
    img: ETHICS_IMG,
    body: {
      no: `En ny undersøkelse viser at stadig flere studenter bruker KI-verktøy som ChatGPT og Copilot i sine studier. Det viktigste funnet er at studenter som har fått opplæring i ansvarlig KI-bruk, presterer bedre og opplever mindre etisk stress knyttet til verktøybruken.

Undersøkelsen anbefaler at alle studieprogrammer inkluderer en modul om KI-etikk og praktisk bruk tidlig i studieløpet. Studenter som forstår begrensningene til KI-verktøy – som hallusinasjoner og skjevheter – er bedre rustet til å bruke dem kritisk.

Rapporten peker også på viktigheten av åpen kommunikasjon mellom studenter og undervisere om KI-bruk, slik at det etableres en felles forståelse av hva som er akseptabelt i ulike sammenhenger.`,
      en: `A new survey shows that more and more students are using AI tools like ChatGPT and Copilot in their studies. The most important finding is that students who have received training in responsible AI use perform better and experience less ethical stress related to tool use.

The survey recommends that all study programs include a module on AI ethics and practical use early in the program. Students who understand the limitations of AI tools – such as hallucinations and biases – are better equipped to use them critically.

The report also points to the importance of open communication between students and educators about AI use, to establish a shared understanding of what is acceptable in different contexts.`,
    },
  },
  {
    slug: 'personvern-og-ki',
    title: { no: 'Personvern og KI: Hva du bør vite', en: 'Privacy and AI: What You Should Know' },
    date: '5. april 2026',
    img: SECURITY_IMG,
    body: {
      no: `Når du bruker KI-verktøy til akademisk arbeid, er det viktig å være bevisst på hvilke data du deler. Mange populære KI-tjenester lagrer samtaler og kan bruke dem til videre trening av modellene sine.

GDPR stiller klare krav til behandling av personopplysninger, og dette gjelder også for KI-verktøy. Studenter og ansatte bør unngå å legge inn sensitive personopplysninger – om seg selv eller andre – i KI-chatboter.

Datatilsynet anbefaler at institusjoner lager klare retningslinjer for hvilke KI-tjenester som er godkjent for bruk, og at disse tjenestene er GDPR-konforme. Verktøy som tilbyr databehandleravtaler og lagrer data innenfor EØS, er å foretrekke i akademisk sammenheng.`,
      en: `When using AI tools for academic work, it is important to be aware of what data you share. Many popular AI services store conversations and may use them for further training of their models.

GDPR sets clear requirements for the processing of personal data, and this also applies to AI tools. Students and staff should avoid entering sensitive personal information – about themselves or others – into AI chatbots.

The Norwegian Data Protection Authority recommends that institutions create clear guidelines for which AI services are approved for use, and that these services are GDPR compliant. Tools that offer data processing agreements and store data within the EEA are preferable in an academic context.`,
    },
  },
  {
    slug: 'ki-verktoy-akademisk-forskning-2026',
    title: { no: 'KI-verktøy i akademisk forskning 2026', en: 'AI Tools in Academic Research 2026' },
    date: '1. april 2026',
    img: RELIABILITY_IMG,
    body: {
      no: `Bruken av KI-verktøy i akademisk forskning har eksplodert det siste året. Fra litteraturgjennomgang til dataanalyse og skriveassistanse – forskere over hele verden integrerer KI i sine arbeidsflyter.

Tidsskrifter og konferanser arbeider nå med retningslinjer for hvordan KI-bidrag skal oppgis i vitenskapelige publikasjoner. De fleste er enige om at KI ikke kan stå som forfatter, men at det bør redegjøres tydelig for hvilken rolle KI-verktøy har spilt i prosessen.

En viktig advarsel fra forskermiljøet er at KI-verktøy kan introdusere skjevheter og feil som er vanskelige å oppdage. Kritisk gjennomgang av KI-generert innhold er derfor avgjørende, særlig i forskning der nøyaktighet og etterprøvbarhet er grunnleggende krav.`,
      en: `The use of AI tools in academic research has exploded in the past year. From literature review to data analysis and writing assistance – researchers around the world are integrating AI into their workflows.

Journals and conferences are now working on guidelines for how AI contributions should be disclosed in scientific publications. Most agree that AI cannot be listed as an author, but that the role AI tools have played in the process should be clearly described.

An important warning from the research community is that AI tools can introduce biases and errors that are difficult to detect. Critical review of AI-generated content is therefore crucial, especially in research where accuracy and reproducibility are fundamental requirements.`,
    },
  },
];
