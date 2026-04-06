import { useState } from "react";
import {
  Menu,
  X,
  User,
  Globe,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  type: "scroll" | "route";
  path?: string;
}

const navItems: NavItem[] = [
  { id: "chat", label: "KI-Chat", type: "scroll" },
  { id: "retningslinjer", label: "Retningslinjer", type: "route", path: "/retningslinjer" },
  { id: "sjekkliste", label: "Sjekkliste", type: "route", path: "/sjekkliste" },
  { id: "nyheter", label: "Nyheter", type: "scroll" },
  { id: "faq", label: "FAQ", type: "scroll" },
];

export default function Header() {
  const [language, setLanguage] = useState<"NO" | "EN">("NO");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [feideModalOpen, setFeideModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "NO" ? "EN" : "NO"));
  };

  const handleNavClick = (item: NavItem) => {
    setMobileMenuOpen(false);
    if (item.type === "route" && item.path) {
      navigate(item.path);
    } else if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: item.id } });
    } else {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/logo.png"
                alt="Digital Knowledge Gateway"
                className="h-[72px] sm:h-[84px] w-auto max-w-[340px] sm:max-w-[420px] object-contain"
              />
            </button>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-gray-600 hover:text-[#1E3A5F]"
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs font-semibold">{language}</span>
              </Button>

              {/* Profile / Feide Login */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setFeideModalOpen(true)}
                className="text-gray-600 hover:text-[#1E3A5F]"
              >
                <User className="h-5 w-5" />
              </Button>

              {/* Hamburger Menu */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-[#1E3A5F]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-gray-100 bg-white"
            >
              <nav className="flex flex-col px-4 py-3 gap-1 max-w-7xl mx-auto">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1E3A5F] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Feide Login Modal */}
      <Dialog open={feideModalOpen} onOpenChange={setFeideModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-[#1E3A5F] text-xl">
              Logg inn med Feide
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-5 pt-2">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500">
              Bruk din institusjonskonto for å logge inn
            </p>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="feide-email" className="text-sm text-gray-700">
                  E-post eller brukernavn
                </Label>
                <Input
                  id="feide-email"
                  placeholder="ola.nordmann@universitet.no"
                  className="focus-visible:ring-[#1E3A5F]"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="feide-password"
                  className="text-sm text-gray-700"
                >
                  Passord
                </Label>
                <Input
                  id="feide-password"
                  type="password"
                  placeholder="••••••••"
                  className="focus-visible:ring-[#1E3A5F]"
                />
              </div>
            </div>
            <Button
              className="w-full bg-[#1E3A5F] hover:bg-[#163050] text-white"
              onClick={() => setFeideModalOpen(false)}
            >
              Logg inn
            </Button>
            <p className="text-xs text-center text-gray-400">
              Ved å logge inn godtar du vilkårene for bruk av tjenesten.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}