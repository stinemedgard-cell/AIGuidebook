import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsItems } from "@/lib/data";

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const article = newsItems.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#1A1A2E] mb-4">
            Artikkelen ble ikke funnet
          </h1>
          <p className="text-gray-500 mb-6">
            Beklager, vi fant ikke artikkelen du leter etter.
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
        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 max-w-3xl mx-auto">
            <span className="bg-[#1E3A5F] text-white text-xs font-medium px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 py-10"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="mb-6 text-gray-500 hover:text-[#1E3A5F] -ml-2"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Tilbake
          </Button>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {article.date}
            </div>
            <div className="flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              {article.category}
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            {article.fullContent.split("\n\n").map((paragraph, index) => (
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
        </motion.article>
      </main>
      <Footer />
    </div>
  );
}