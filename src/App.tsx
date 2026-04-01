import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { isVoiceSubdomain } from "./hooks/use-subdomain";
import { pageview } from "@/lib/gtag";
import { useEffect } from "react";
import Hub from "./pages/Hub.tsx";
import VoiceHome from "./pages/VoiceHome.tsx";
import Pricing from "./pages/Pricing.tsx";
import Demos from "./pages/Demos.tsx";
import DemoPage from "./pages/DemoPage.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Training from "./pages/Training.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

/** Track GA4 pageviews on route changes. */
function RouteTracker() {
  const location = useLocation();
  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);
  return null;
}

const VoiceRoutes = () => (
  <Routes>
    <Route path="/" element={<VoiceHome />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/demos" element={<Demos />} />
    <Route path="/demos/:niche" element={<DemoPage />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const HubRoutes = () => (
  <Routes>
    <Route path="/" element={<Hub />} />
    <Route path="/training" element={<Training />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTracker />
        {isVoiceSubdomain() ? <VoiceRoutes /> : <HubRoutes />}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
