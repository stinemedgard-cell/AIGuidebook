import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroChat from "@/components/HeroChat";
import FAQ from "@/components/FAQ";
import NewsCarousel from "@/components/NewsCarousel";
import Footer from "@/components/Footer";

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(state.scrollTo!);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div id="hero" className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <HeroChat />
        <NewsCarousel />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}