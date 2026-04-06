import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, animate } from "framer-motion";
import { newsItems } from "@/lib/data";

export default function NewsCarousel() {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 340;
  const gap = 24;
  const maxIndex = newsItems.length - 1;

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    animate(x, -(clamped * (cardWidth + gap)), {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  return (
    <section id="nyheter" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-3">
            Siste nytt
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hold deg oppdatert på det siste innen KI og akademia
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border-gray-200 hover:bg-gray-50 hidden sm:flex"
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border-gray-200 hover:bg-gray-50 hidden sm:flex"
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="overflow-hidden">
            <motion.div
              style={{ x }}
              drag="x"
              dragConstraints={{
                left: -(maxIndex * (cardWidth + gap)),
                right: 0,
              }}
              onDragEnd={(_, info) => {
                const threshold = cardWidth / 3;
                if (info.offset.x < -threshold) {
                  goTo(currentIndex + 1);
                } else if (info.offset.x > threshold) {
                  goTo(currentIndex - 1);
                } else {
                  goTo(currentIndex);
                }
              }}
              className="flex gap-6 cursor-grab active:cursor-grabbing"
            >
              {newsItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex-shrink-0"
                  style={{ width: cardWidth }}
                >
                  <Card className="h-full border border-gray-200 hover:border-[#1E3A5F]/30 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        draggable={false}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#1E3A5F] text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                      <h3 className="text-base font-semibold text-[#1A1A2E] mb-2 line-clamp-2 group-hover:text-[#1E3A5F] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <button
                        onClick={() => navigate(`/nyheter/${item.slug}`)}
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#1E3A5F] hover:text-[#163050] transition-colors"
                      >
                        Les mer
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#1E3A5F] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}