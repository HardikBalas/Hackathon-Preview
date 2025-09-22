import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import YieldPrediction from "./pages/YieldPrediction";
import SoilWeather from "./pages/SoilWeather";
import CropRecommendations from "./pages/CropRecommendations";
import Optimization from "./pages/Optimization";
import Dashboard from "./pages/Dashboard";
import ResourceManagement from "./pages/ResourceManagement";
import MarketInsights from "./pages/MarketInsights";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/prediction" element={<YieldPrediction />} />
            <Route path="/soil-weather" element={<SoilWeather />} />
            <Route path="/recommendations" element={<CropRecommendations />} />
            <Route path="/optimization" element={<Optimization />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<ResourceManagement />} />
            <Route path="/market" element={<MarketInsights />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
