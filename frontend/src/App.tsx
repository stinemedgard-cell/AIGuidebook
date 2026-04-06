import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewsArticle from "./pages/NewsArticle";
import GuidelinesPage from "./pages/GuidelinesPage";
import GuidelineDetail from "./pages/GuidelineDetail";
import ChecklistPage from "./pages/ChecklistPage";
import StaticPage from "./pages/StaticPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/retningslinjer" element={<GuidelinesPage />} />
          <Route path="/retningslinjer/:id" element={<GuidelineDetail />} />
          <Route path="/sjekkliste" element={<ChecklistPage />} />
          <Route path="/nyheter/:slug" element={<NewsArticle />} />
          <Route path="/side/:slug" element={<StaticPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;