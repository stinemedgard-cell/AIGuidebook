import {
  ShieldCheck,
  Scale,
  BookOpenCheck,
  FileCheck2,
  AlertTriangle,
  GraduationCap,
} from "lucide-react";

export const guidelines = [
  {
    id: "akademisk-integritet",
    icon: ShieldCheck,
    title: "Akademisk integritet",
    description:
      "Sørg for at alt arbeid du leverer er ditt eget. Bruk av KI-verktøy skal alltid oppgis og dokumenteres i henhold til institusjonens retningslinjer.",
    color: "bg-blue-50 text-blue-600",
    fullContent: {
      intro:
        "Akademisk integritet er grunnlaget for all forskning og utdanning. Det handler om ærlighet, tillit og ansvarlighet i akademisk arbeid.",
      sections: [
        {
          heading: "Hva innebærer akademisk integritet?",
          text: "Akademisk integritet betyr at du er ærlig om ditt eget arbeid og bidrag. Når du bruker KI-verktøy, må du være transparent om dette. Det inkluderer å oppgi hvilke verktøy du har brukt, hvordan du har brukt dem, og i hvilken grad de har bidratt til ditt arbeid.",
        },
        {
          heading: "Eksempler på god praksis",
          text: "• Oppgi alltid at du har brukt KI i metode- eller forordsdelen\n• Dokumenter hvilke prompts du har brukt\n• Bearbeid og tilpass KI-generert innhold med egne refleksjoner\n• Verifiser all faktainformasjon fra KI mot pålitelige kilder\n• Bruk KI som et hjelpemiddel, ikke som en erstatning for egen tenkning",
        },
        {
          heading: "Konsekvenser av brudd",
          text: "Brudd på akademisk integritet kan føre til alvorlige konsekvenser, inkludert advarsel, stryk på oppgaven, eller i verste fall utestengelse fra studiet. Det er alltid bedre å spørre om lov enn å risikere brudd.",
        },
      ],
    },
  },
  {
    id: "etisk-ki-bruk",
    icon: Scale,
    title: "Etisk KI-bruk",
    description:
      "Bruk kunstig intelligens som et hjelpemiddel, ikke som en erstatning for kritisk tenkning. Vær bevisst på begrensninger og mulige skjevheter i KI-generert innhold.",
    color: "bg-emerald-50 text-emerald-600",
    fullContent: {
      intro:
        "Etisk bruk av KI handler om å forstå teknologiens begrensninger og bruke den på en ansvarlig måte som respekterer akademiske verdier.",
      sections: [
        {
          heading: "Forstå begrensningene",
          text: "KI-modeller kan generere overbevisende, men feilaktig informasjon. De kan ha skjevheter basert på treningsdataene, og de mangler evnen til genuin forståelse og kritisk tenkning. Det er ditt ansvar å evaluere og verifisere alt KI-generert innhold.",
        },
        {
          heading: "Eksempler på etisk bruk",
          text: "• Bruk KI til brainstorming og idégenerering, men utvikle ideene videre selv\n• Bruk KI til å forklare vanskelige konsepter, men verifiser forklaringene\n• Vær kritisk til KI-svar og sammenlign med faglige kilder\n• Unngå å bruke KI til å generere data eller forskningsresultater\n• Respekter opphavsrett og personvern når du bruker KI",
        },
        {
          heading: "Skjevheter og bias",
          text: "KI-modeller kan reprodusere og forsterke eksisterende skjevheter i samfunnet. Vær oppmerksom på dette, spesielt når du bruker KI til forskning eller analyse som involverer mennesker, kulturer eller sensitive temaer.",
        },
      ],
    },
  },
  {
    id: "kildehenvisning",
    icon: BookOpenCheck,
    title: "Kildehenvisning",
    description:
      "Oppgi alltid når du har brukt KI-verktøy i ditt arbeid. Følg gjeldende siteringsstandarder og vær transparent om hvilke verktøy du har benyttet.",
    color: "bg-amber-50 text-amber-600",
    fullContent: {
      intro:
        "Korrekt kildehenvisning er essensielt for akademisk redelighet. Når du bruker KI-verktøy, må du referere til dem på riktig måte.",
      sections: [
        {
          heading: "Hvordan sitere KI-verktøy",
          text: "De fleste siteringsstandarder har nå retningslinjer for KI-verktøy. Generelt bør du oppgi: verktøyets navn og versjon, datoen for bruk, en beskrivelse av prompten, og hvordan du har brukt resultatet.",
        },
        {
          heading: "Eksempler på sitering",
          text: "• APA 7: OpenAI. (2026). ChatGPT (GPT-4) [Stor språkmodell]. https://chat.openai.com\n• Chicago: Tekst generert av ChatGPT, OpenAI, 6. april 2026\n• Harvard: OpenAI (2026) ChatGPT, versjon GPT-4. Tilgjengelig fra: https://chat.openai.com [Brukt 6. april 2026]\n• Sjekk alltid din institusjons foretrukne standard",
        },
        {
          heading: "Dokumentasjon av bruk",
          text: "I tillegg til formell sitering, bør du dokumentere din bruk av KI i et eget avsnitt i oppgaven. Beskriv hvilke verktøy du brukte, til hvilket formål, og hvordan du bearbeidet resultatet.",
        },
      ],
    },
  },
  {
    id: "institusjonelle-regler",
    icon: FileCheck2,
    title: "Institusjonelle regler",
    description:
      "Gjør deg kjent med din institusjons spesifikke retningslinjer for bruk av KI. Reglene kan variere mellom fag, kurs og oppgavetyper.",
    color: "bg-purple-50 text-purple-600",
    fullContent: {
      intro:
        "Hver utdanningsinstitusjon har sine egne retningslinjer for bruk av KI. Det er ditt ansvar å kjenne til og følge disse.",
      sections: [
        {
          heading: "Variasjon mellom institusjoner",
          text: "Reglene for KI-bruk varierer betydelig mellom universiteter, høyskoler og fagområder. Noen institusjoner har strenge begrensninger, mens andre er mer åpne. Sjekk alltid din institusjons nettsider for oppdaterte retningslinjer.",
        },
        {
          heading: "Eksempler på vanlige regler",
          text: "• KI kan brukes til idégenerering, men ikke til å skrive selve oppgaven\n• KI-bruk må oppgis i en egen erklæring\n• Noen eksamensformer forbyr all bruk av KI\n• Gruppearbeid kan ha egne regler for KI-bruk\n• Veiledere kan sette egne begrensninger for sine kurs",
        },
        {
          heading: "Hold deg oppdatert",
          text: "Retningslinjene for KI-bruk er i stadig utvikling. Sjekk jevnlig for oppdateringer, og ta kontakt med din foreleser eller studieadministrasjon hvis du er usikker.",
        },
      ],
    },
  },
  {
    id: "ansvarlig-deling",
    icon: AlertTriangle,
    title: "Ansvarlig deling",
    description:
      "Del ikke sensitiv eller personlig informasjon med KI-verktøy. Vær bevisst på personvern og datasikkerhet når du bruker KI-tjenester.",
    color: "bg-red-50 text-red-600",
    fullContent: {
      intro:
        "Når du bruker KI-verktøy, er det viktig å tenke på personvern og datasikkerhet. Informasjon du deler med KI kan potensielt lagres og brukes videre.",
      sections: [
        {
          heading: "Hva bør du unngå å dele?",
          text: "Unngå å dele personopplysninger, konfidensiell forskningsdata, upubliserte resultater, pasientinformasjon, eller annen sensitiv informasjon med KI-verktøy. Husk at det du skriver inn kan bli en del av treningsdataene.",
        },
        {
          heading: "Eksempler på god praksis",
          text: "• Anonymiser all data før du bruker den med KI\n• Bruk institusjonens godkjente KI-verktøy når mulig\n• Les personvernerklæringen til KI-tjenesten du bruker\n• Unngå å laste opp konfidensielle dokumenter\n• Vær forsiktig med å dele upublisert forskning",
        },
        {
          heading: "GDPR og personvern",
          text: "I Norge og EU gjelder GDPR for behandling av personopplysninger. Sørg for at din bruk av KI-verktøy er i samsvar med gjeldende personvernlovgivning, spesielt når du arbeider med data som inneholder personopplysninger.",
        },
      ],
    },
  },
  {
    id: "kompetanseutvikling",
    icon: GraduationCap,
    title: "Kompetanseutvikling",
    description:
      "Bruk KI som et læringsverktøy som styrker din kompetanse. Fokuser på å utvikle ferdigheter som komplementerer KI-teknologi.",
    color: "bg-teal-50 text-teal-600",
    fullContent: {
      intro:
        "KI bør brukes som et verktøy for læring og kompetanseutvikling, ikke som en snarvei. Målet er å styrke dine egne ferdigheter.",
      sections: [
        {
          heading: "KI som læringspartner",
          text: "Bruk KI til å utforske nye emner, få tilbakemelding på utkast, og forstå komplekse konsepter. Still oppfølgingsspørsmål og utfordre svarene du får. Dette utvikler din kritiske tenkning og faglige forståelse.",
        },
        {
          heading: "Eksempler på læringsbruk",
          text: "• Be KI forklare vanskelige konsepter på ulike måter\n• Bruk KI til å generere øvingsoppgaver\n• La KI gi tilbakemelding på dine tekster\n• Bruk KI til å utforske ulike perspektiver på et tema\n• Øv på argumentasjon ved å diskutere med KI",
        },
        {
          heading: "Fremtidens kompetanser",
          text: "Evnen til å bruke KI effektivt og ansvarlig er en viktig kompetanse for fremtiden. Ved å lære å samarbeide med KI på en god måte, forbereder du deg på et arbeidsliv der KI-verktøy vil være en naturlig del av hverdagen.",
        },
      ],
    },
  },
];

export const newsItems = [
  {
    id: 1,
    slug: "nye-retningslinjer-ki-hoyere-utdanning",
    title: "Nye retningslinjer for KI i høyere utdanning",
    excerpt:
      "Kunnskapsdepartementet har publisert oppdaterte retningslinjer for bruk av kunstig intelligens i norsk høyere utdanning.",
    date: "2. april 2026",
    category: "Retningslinjer",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-06/97f99b94-7b24-4dd0-b6fd-c9c49fa2c954.png",
    fullContent:
      "Kunnskapsdepartementet har publisert oppdaterte retningslinjer for bruk av kunstig intelligens i norsk høyere utdanning. De nye retningslinjene gir tydelige rammer for hvordan studenter og ansatte kan bruke KI-verktøy i undervisning, forskning og administrasjon.\n\nRetningslinjene understreker viktigheten av transparens og akademisk redelighet ved bruk av KI. Alle institusjoner oppfordres til å utvikle egne, tilpassede retningslinjer basert på de nasjonale anbefalingene.\n\nBlant de viktigste punktene er kravet om at studenter alltid skal oppgi bruk av KI-verktøy i sine innleveringer, og at institusjoner skal tilby opplæring i ansvarlig KI-bruk.\n\nDe nye retningslinjene trer i kraft fra høstsemesteret 2026 og vil bli evaluert etter ett år.",
  },
  {
    id: 2,
    slug: "etiske-utfordringer-ki-forskning",
    title: "Etiske utfordringer med KI i forskning",
    excerpt:
      "En ny rapport belyser de etiske dilemmaene forskere møter når de integrerer KI-verktøy i sin forskning.",
    date: "28. mars 2026",
    category: "Etikk",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-06/4b037a42-01d2-47e3-8891-1c3cc25c618c.png",
    fullContent:
      "En ny rapport fra Forskningsrådet belyser de etiske dilemmaene forskere møter når de integrerer KI-verktøy i sin forskning. Rapporten identifiserer flere nøkkelutfordringer.\n\nBlant de mest presserende utfordringene er spørsmål om forfatterskap og bidrag. Når KI bidrar vesentlig til forskningen, oppstår spørsmål om hvem som skal krediteres og hvordan KI-bidraget skal dokumenteres.\n\nRapporten tar også opp bekymringer rundt reproduserbarhet. KI-modeller kan gi ulike resultater ved gjentatte kjøringer, noe som utfordrer det vitenskapelige idealet om reproduserbare resultater.\n\nForskningsrådet anbefaler at alle forskningsinstitusjoner utvikler klare retningslinjer for KI-bruk i forskning, og at det etableres felles standarder for dokumentasjon av KI-assistert forskning.",
  },
  {
    id: 3,
    slug: "ki-verktoy-revolusjonerer-dataanalyse",
    title: "KI-verktøy revolusjonerer dataanalyse",
    excerpt:
      "Forskere ved norske universiteter bruker nå avanserte KI-modeller for å analysere store datasett raskere enn noensinne.",
    date: "20. mars 2026",
    category: "Forskning",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-06/cd77e43b-8ce7-489a-b427-7c2f5c01eae7.png",
    fullContent:
      "Forskere ved norske universiteter bruker nå avanserte KI-modeller for å analysere store datasett raskere enn noensinne. Denne utviklingen åpner nye muligheter innen en rekke fagfelt.\n\nVed NTNU har forskere brukt KI til å analysere klimadata som tidligere ville tatt måneder å behandle. Med KI-assistert analyse kan de nå identifisere mønstre og trender på dager.\n\nUniversitetet i Bergen rapporterer lignende fremskritt innen medisinsk forskning, der KI brukes til å analysere store mengder pasientdata for å identifisere risikofaktorer for ulike sykdommer.\n\nForskerne understreker at KI ikke erstatter menneskelig ekspertise, men fungerer som et kraftig verktøy som lar dem fokusere på tolkning og kontekstualisering av resultatene.",
  },
  {
    id: 4,
    slug: "studentundersokelse-ki-bruk-akademia",
    title: "Studentundersøkelse: KI-bruk i akademia",
    excerpt:
      "En landsomfattende undersøkelse viser at 78% av norske studenter har brukt KI-verktøy i sine studier det siste året.",
    date: "15. mars 2026",
    category: "Undersøkelse",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-06/97f99b94-7b24-4dd0-b6fd-c9c49fa2c954.png",
    fullContent:
      "En landsomfattende undersøkelse gjennomført av Norsk studentorganisasjon viser at 78% av norske studenter har brukt KI-verktøy i sine studier det siste året.\n\nUndersøkelsen avdekker at de vanligste bruksområdene er tekstbearbeiding (62%), informasjonssøk (54%), og hjelp med programmering (38%). Kun 23% av studentene oppgir at de alltid refererer til KI-bruk i sine innleveringer.\n\nResultatene viser også at det er stor variasjon mellom fagfelt. Studenter innen teknologi og naturvitenskap bruker KI mest, mens studenter innen humaniora er mer tilbakeholdne.\n\n45% av studentene etterlyser bedre opplæring i ansvarlig KI-bruk fra sine institusjoner, og 67% ønsker tydeligere retningslinjer for når og hvordan KI kan brukes.",
  },
  {
    id: 5,
    slug: "ny-ki-policy-universitetet-oslo",
    title: "Ny KI-policy ved Universitetet i Oslo",
    excerpt:
      "UiO innfører nye regler for bruk av KI-verktøy i eksamener og innleveringer fra høstsemesteret 2026.",
    date: "10. mars 2026",
    category: "Policy",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1093238/2026-04-06/4b037a42-01d2-47e3-8891-1c3cc25c618c.png",
    fullContent:
      "Universitetet i Oslo innfører nye regler for bruk av KI-verktøy i eksamener og innleveringer fra høstsemesteret 2026. Policyen er utviklet i samarbeid med studenter, ansatte og eksperter på KI-etikk.\n\nDe nye reglene skiller mellom tre nivåer av KI-bruk: fri bruk (med dokumentasjon), begrenset bruk (kun til spesifikke formål), og ingen bruk (tradisjonelle eksamener). Hvert kurs vil tydelig angi hvilket nivå som gjelder.\n\nStudenter som bryter reglene risikerer sanksjoner i henhold til universitetets regelverk for fusk. UiO vil også tilby obligatoriske kurs i KI-etikk for alle nye studenter.\n\nRektor understreker at målet ikke er å forby KI, men å sikre at bruken er ansvarlig og i tråd med akademiske verdier.",
  },
];

export const staticPages: Record<
  string,
  { title: string; content: string }
> = {
  tilgjengelighet: {
    title: "Tilgjengelighet",
    content:
      "AIGuidebook er forpliktet til å gjøre plattformen tilgjengelig for alle brukere, uavhengig av funksjonsevne.\n\nVi følger retningslinjene i Web Content Accessibility Guidelines (WCAG) 2.1 på nivå AA. Dette innebærer at vi arbeider kontinuerlig med å sikre at alle funksjoner er tilgjengelige via tastatur, at fargekontraster er tilstrekkelige, og at innholdet er kompatibelt med skjermlesere.\n\nHvis du opplever tilgjengelighetsproblemer på vår plattform, ber vi deg ta kontakt med oss slik at vi kan utbedre dette så raskt som mulig.\n\nVi gjennomfører regelmessige tilgjengelighetstester og oppdaterer plattformen i henhold til gjeldende standarder og lovkrav.",
  },
  personvern: {
    title: "Personvern",
    content:
      "AIGuidebook tar personvern på alvor. Denne personvernerklæringen beskriver hvordan vi samler inn, bruker og beskytter dine personopplysninger.\n\nVi samler inn kun nødvendige opplysninger for å levere tjenesten, inkludert innloggingsinformasjon via Feide og bruksdata for å forbedre plattformen.\n\nAlle personopplysninger behandles i samsvar med GDPR og norsk personvernlovgivning. Vi deler ikke dine opplysninger med tredjeparter uten ditt samtykke, med mindre det er påkrevd av lov.\n\nDu har rett til innsyn, retting og sletting av dine personopplysninger. Ta kontakt med oss for å utøve dine rettigheter.\n\nChatlogger med KI-assistenten lagres kryptert og slettes automatisk etter 90 dager med mindre du velger å beholde dem.",
  },
  informasjonskapsler: {
    title: "Informasjonskapsler",
    content:
      "AIGuidebook bruker informasjonskapsler (cookies) for å forbedre din opplevelse på plattformen.\n\nNødvendige informasjonskapsler: Disse er påkrevd for at plattformen skal fungere korrekt, inkludert innlogging og sesjonsadministrasjon.\n\nAnalytiske informasjonskapsler: Vi bruker anonymisert analyse for å forstå hvordan plattformen brukes, slik at vi kan forbedre den.\n\nFunksjonelle informasjonskapsler: Disse husker dine preferanser, som språkvalg og chatinnstillinger.\n\nDu kan administrere dine informasjonskapsler i nettleserinnstillingene. Merk at deaktivering av nødvendige informasjonskapsler kan påvirke funksjonaliteten til plattformen.",
  },
  "vilkar-for-bruk": {
    title: "Vilkår for bruk",
    content:
      "Ved å bruke AIGuidebook godtar du følgende vilkår:\n\nBruk av plattformen: AIGuidebook er ment som et hjelpemiddel for akademisk veiledning om kunstig intelligens. Plattformen skal brukes i samsvar med gjeldende lover og regler.\n\nKI-chat: Svarene fra KI-assistenten er generert av kunstig intelligens og kan inneholde feil. Brukere er selv ansvarlige for å verifisere informasjonen.\n\nInnhold: Alt innhold på plattformen er opphavsrettslig beskyttet. Du kan bruke innholdet til personlig og akademisk bruk, men ikke til kommersiell distribusjon.\n\nAnsvar: AIGuidebook er ikke ansvarlig for konsekvenser av beslutninger tatt basert på informasjon fra plattformen.\n\nEndringer: Vi forbeholder oss retten til å endre disse vilkårene. Vesentlige endringer vil bli varslet via plattformen.",
  },
  "om-plattformen": {
    title: "Om plattformen",
    content:
      "AIGuidebook er en norsk plattform utviklet for å hjelpe studenter, forskere og ansatte i høyere utdanning med å navigere i KI-landskapet.\n\nVår misjon er å fremme ansvarlig og etisk bruk av kunstig intelligens i akademisk sammenheng. Vi tilbyr veiledning, retningslinjer og verktøy som gjør det enklere å bruke KI på en måte som styrker læring og forskning.\n\nPlattformen er utviklet i samarbeid med norske universiteter og høyskoler, og er finansiert av Kunnskapsdepartementet.\n\nVi oppdaterer kontinuerlig innholdet for å reflektere den raske utviklingen innen KI-teknologi og de tilhørende etiske og juridiske rammene.",
  },
  samarbeidspartnere: {
    title: "Samarbeidspartnere",
    content:
      "AIGuidebook er et samarbeidsprosjekt mellom flere norske utdanningsinstitusjoner og organisasjoner.\n\nVåre samarbeidspartnere inkluderer:\n\n• Universitetet i Oslo (UiO)\n• Norges teknisk-naturvitenskapelige universitet (NTNU)\n• Universitetet i Bergen (UiB)\n• UiT Norges arktiske universitet\n• Norsk studentorganisasjon (NSO)\n• Forskningsrådet\n• Direktoratet for høyere utdanning og kompetanse (HK-dir)\n\nSamarbeidet sikrer at plattformen reflekterer behovene til hele den norske utdanningssektoren, og at retningslinjene er forankret i bred faglig ekspertise.",
  },
  karriere: {
    title: "Karriere",
    content:
      "AIGuidebook er et voksende team som jobber med å forme fremtidens akademiske KI-veiledning.\n\nVi ser etter engasjerte mennesker som brenner for utdanning, teknologi og etikk. Våre medarbeidere kommer fra ulike fagfelt, inkludert informatikk, pedagogikk, juss og filosofi.\n\nLedige stillinger:\n\n• Utvikler (frontend/backend) – Oslo\n• KI-etikkrådgiver – Oslo/Bergen\n• Innholdsprodusent (norsk) – Fjernarbeid\n• UX-designer – Oslo\n\nVi tilbyr konkurransedyktige betingelser, fleksibel arbeidstid og muligheten til å jobbe med noe som virkelig betyr noe for norsk utdanning.\n\nSend din søknad til karriere@aiguidebook.no",
  },
};