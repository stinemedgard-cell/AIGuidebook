import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

export default function Footer() {
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactOpen(false);
    }, 2000);
  };

  const juridiskLinks = [
    { label: "Tilgjengelighet", path: "/side/tilgjengelighet" },
    { label: "Personvern", path: "/side/personvern" },
    { label: "Informasjonskapsler", path: "/side/informasjonskapsler" },
    { label: "Vilkår for bruk", path: "/side/vilkar-for-bruk" },
  ];

  const omOssLinks = [
    { label: "Om plattformen", path: "/side/om-plattformen" },
    { label: "Kontakt", path: null },
    { label: "Samarbeidspartnere", path: "/side/samarbeidspartnere" },
  ];

  return (
    <>
      <footer className="bg-[#1A1A2E] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo & Description */}
            <div>
              <button
                onClick={() => {
                  navigate("/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/assets/logo.png"
                  alt="Digital Knowledge Gateway"
                  className="h-[62px] sm:h-[72px] w-auto max-w-[340px] object-contain brightness-0 invert"
                />
              </button>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Din guide til ansvarlig bruk av kunstig intelligens i akademisk
                sammenheng. Vi hjelper studenter og forskere med å navigere i
                KI-landskapet.
              </p>
              <p className="text-gray-500 text-xs">© 2026 AIGuidebook</p>
            </div>

            {/* Juridisk */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                Juridisk
              </h4>
              <ul className="space-y-3">
                {juridiskLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Om oss */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                Om oss
              </h4>
              <ul className="space-y-3">
                {omOssLinks.map((link) => (
                  <li key={link.label}>
                    {link.path ? (
                      <button
                        onClick={() => navigate(link.path)}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <button
                        onClick={() => setContactOpen(true)}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-gray-500">
              Utviklet for norsk høyere utdanning
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Status
              </a>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                API
              </a>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Dokumentasjon
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-[#1E3A5F] text-xl flex items-center justify-center gap-2">
              <Mail className="h-5 w-5" />
              Kontakt oss
            </DialogTitle>
          </DialogHeader>

          {contactSent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Send className="h-7 w-7 text-green-600" />
              </div>
              <p className="text-lg font-semibold text-[#1A1A2E]">
                Melding sendt!
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Vi svarer deg så snart som mulig.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name" className="text-sm text-gray-700">
                  Navn
                </Label>
                <Input
                  id="contact-name"
                  placeholder="Ola Nordmann"
                  required
                  className="focus-visible:ring-[#1E3A5F]"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-email"
                  className="text-sm text-gray-700"
                >
                  E-post
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="ola@universitet.no"
                  required
                  className="focus-visible:ring-[#1E3A5F]"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-message"
                  className="text-sm text-gray-700"
                >
                  Melding
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="Skriv din melding her..."
                  rows={4}
                  required
                  className="focus-visible:ring-[#1E3A5F] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#1E3A5F] hover:bg-[#163050] text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Send melding
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}