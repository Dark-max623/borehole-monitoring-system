import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WaterLevel from "./pages/WaterLevel";
import PumpStatus from "./pages/PumpStatus";
import UsageTrends from "./pages/UsageTrends";
import Alerts from "./pages/Alerts";
import Forecast from "./pages/Forecast";
import Maintenance from "./pages/Maintenance";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/water-level" element={<WaterLevel />} />
          <Route path="/pump-status" element={<PumpStatus />} />
          <Route path="/usage-trends" element={<UsageTrends />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
