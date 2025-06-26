import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AffliatePartners from "./pages/affiliate-partners";
import ServicePartnerForm from "./pages/service-partners";
import NotFound from "./pages/NotFound";

// Declare global gtag type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// GA tracking wrapper
const AppRoutesWithGA = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-GEXN3H3TEC", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/affiliate-partners" element={<AffliatePartners />} />
      <Route path="/service-partners" element={<ServicePartnerForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutesWithGA />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
