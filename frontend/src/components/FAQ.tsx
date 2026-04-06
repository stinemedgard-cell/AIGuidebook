import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "Kan jeg bruke KI-verktøy i mine oppgaver?",
    answer:
      "Det avhenger av din institusjons retningslinjer og det spesifikke kurset. Mange institusjoner tillater bruk av KI som et hjelpemiddel, men krever at du oppgir bruken. Sjekk alltid med din foreleser eller veileder før du bruker KI-verktøy i innleveringer.",
  },
  {
    question: "Hvordan refererer jeg til KI-generert innhold?",
    answer:
      "De fleste siteringsstandarder (APA, Chicago, Harvard) har nå retningslinjer for å sitere KI-verktøy. Generelt bør du oppgi verktøyet som ble brukt, datoen for bruk, og en beskrivelse av prompten. Sjekk din institusjons foretrukne siteringsstandard for spesifikke krav.",
  },
  {
    question: "Er det plagiat å bruke KI-generert tekst?",
    answer:
      "Å levere KI-generert tekst som ditt eget arbeid uten å oppgi kilden kan betraktes som plagiat eller akademisk uredelighet. Det er viktig å bearbeide, reflektere over, og tilpasse innholdet med egne ord. Bruk KI som et utgangspunkt, ikke som det endelige produktet.",
  },
  {
    question: "Hvilke KI-verktøy er godkjent for akademisk bruk?",
    answer:
      "Listen over godkjente verktøy varierer mellom institusjoner. Vanlige verktøy inkluderer ChatGPT, Gemini, Claude, og Copilot. Noen institusjoner tilbyr egne KI-verktøy gjennom lisensavtaler. Kontakt din IT-avdeling eller bibliotek for en oppdatert liste.",
  },
  {
    question: "Hva skjer hvis jeg bryter retningslinjene for KI-bruk?",
    answer:
      "Konsekvensene varierer, men kan inkludere advarsel, stryk på oppgaven, eller i alvorlige tilfeller utestengelse. De fleste institusjoner har en prosess for å håndtere brudd på akademisk redelighet. Det er alltid bedre å spørre på forhånd enn å risikere brudd.",
  },
  {
    question:
      "Hvordan kan jeg bruke KI på en måte som faktisk forbedrer læringen min?",
    answer:
      "Bruk KI til å utforske ideer, få tilbakemelding på utkast, forklare vanskelige konsepter, eller som en sparringspartner. Unngå å bruke det som en snarvei. Still kritiske spørsmål til KI-svarene og sammenlign med faglige kilder. Reflekter over hva du lærer i prosessen.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
            Ofte stilte spørsmål
          </h2>
          <p className="text-gray-500">
            Svar på vanlige spørsmål om bruk av KI i akademisk sammenheng
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-sm font-medium text-[#1A1A2E] hover:text-[#1E3A5F] hover:no-underline [&[data-state=open]]:text-[#1E3A5F]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}