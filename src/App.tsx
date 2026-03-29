import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Tools from "./pages/Tools.tsx";
import ServiceTester from "./pages/ServiceTester.tsx";
import TestRunner from "./pages/TestRunner.tsx";
import AIServices from "./pages/AIServices.tsx";
import VoiceAccess from "./pages/VoiceAccess.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/service-tester" element={<ServiceTester />} />
          <Route path="/tools/test-runner" element={<TestRunner />} />
          <Route path="/tools/ai-services" element={<AIServices />} />
          <Route path="/tools/voice-access" element={<VoiceAccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
