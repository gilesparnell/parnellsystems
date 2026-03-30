import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { isVoiceSubdomain } from "./hooks/use-subdomain";
import Hub from "./pages/Hub.tsx";
import VoiceHome from "./pages/VoiceHome.tsx";
import Pricing from "./pages/Pricing.tsx";
import DemoPage from "./pages/DemoPage.tsx";
import Training from "./pages/Training.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const VoiceRoutes = () => (
  <Routes>
    <Route path="/" element={<VoiceHome />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/demos/:niche" element={<DemoPage />} />
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
        {isVoiceSubdomain() ? <VoiceRoutes /> : <HubRoutes />}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
