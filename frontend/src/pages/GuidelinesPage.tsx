import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { guidelines } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GuidelinesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        {/* Hero Banner */}
        <div className="bg-gradient-to-b from-[#F0F4F8] to-white py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-3">
                Retningslinjer for KI og akademisk redelighet
              </h1>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Viktige prinsipper for ansvarlig bruk av kunstig intelligens i
                akademisk sammenheng
              </p>
            </motion.div>
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {guidelines.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.id} variants={cardVariants}>
                  <Card className="h-full border border-gray-200 hover:border-[#1E3A5F]/30 hover:shadow-md transition-all duration-300 group cursor-pointer"
                    onClick={() => navigate(`/retningslinjer/${item.id}`)}
                  >
                    <CardHeader className="pb-3">
                      <div
                        className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg text-[#1A1A2E]">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed text-gray-500 mb-4">
                        {item.description}
                      </CardDescription>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1E3A5F] hover:text-[#163050] transition-colors">
                        Les mer
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}