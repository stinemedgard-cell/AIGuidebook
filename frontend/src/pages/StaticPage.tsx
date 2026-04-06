import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { staticPages } from "@/lib/data";

export default function StaticPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const page = slug ? staticPages[slug] : undefined;

  if (!page) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#1A1A2E] mb-4">
            Siden ble ikke funnet
          </h1>
          <p className="text-gray-500 mb-6">
            Beklager, vi fant ikke siden du leter etter.
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

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
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

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-[#1A1A2E]"
            >
              {page.title}
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 py-10"
        >
          <div className="prose prose-gray max-w-none">
            {page.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
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