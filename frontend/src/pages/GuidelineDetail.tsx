import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { guidelines } from "@/lib/data";

export default function GuidelineDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const guideline = guidelines.find((g) => g.id === id);

  if (!guideline) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#1A1A2E] mb-4">
            Retningslinjen ble ikke funnet
          </h1>
          <p className="text-gray-500 mb-6">
            Beklager, vi fant ikke retningslinjen du leter etter.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-[#1E3A5F] hover:bg-[#163050] text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tilbake til forsiden
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = guideline.icon;

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        {/* Hero Banner */}
        <div className="bg-gradient-to-b from-[#F0F4F8] to-white py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="mb-6 text-gray-500 hover:text-[#1E3A5F] -ml-2"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Tilbake
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div
                className={`w-14 h-14 rounded-xl ${guideline.color} flex items-center justify-center flex-shrink-0`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-2">
                  {guideline.title}
                </h1>
                <p className="text-gray-500">{guideline.description}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 py-10"
        >
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {guideline.fullContent.intro}
          </p>

          <div className="space-y-8">
            {guideline.fullContent.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-[#1A1A2E] mb-3">
                  {section.heading}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tilbake til forsiden
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}