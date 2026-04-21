import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/components/Layout';
import Index from './pages/Index';
import Guidelines from './pages/Guidelines';
import Tools from './pages/Tools';
import References from './pages/References';
import Checklist from './pages/Checklist';
import Legal from './pages/Legal';
import AuthCallback from './pages/AuthCallback';
import AuthError from './pages/AuthError';
import NewsArticlePage from './pages/NewsArticlePage';

const queryClient = new QueryClient();

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/retningslinjer/:type" element={<Guidelines />} />
    <Route path="/verktoy" element={<Tools />} />
    <Route path="/kildehenviser" element={<References />} />
    <Route path="/sjekkliste" element={<Checklist />} />
    <Route path="/juridisk/:type" element={<Legal />} />
    <Route path="/nyheter/:slug" element={<NewsArticlePage />} />
    <Route path="/auth/callback" element={<AuthCallback />} />
    <Route path="/auth/error" element={<AuthError />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <LanguageProvider>
          <AppRoutes />
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
export { AppRoutes };