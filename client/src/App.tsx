import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "./components/navigation";
import EmergencyButton from "./components/emergency-button";
import Home from "@/pages/home";
import RequestService from "@/pages/request-service";
import Pricing from "@/pages/pricing";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/request-service" component={RequestService} />
      <Route path="/pricing" component={Pricing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Router />
        </main>
        <EmergencyButton />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
