import { useEffect } from "react";
import Header from "@/components/Header";
import ChecklistSection from "@/components/ChecklistSection";
import Footer from "@/components/Footer";

export default function ChecklistPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <ChecklistSection />
      </main>
      <Footer />
    </div>
  );
}