import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function EmergencyButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a href="tel:1-800-ROADHELP">
        <Button size="lg" className="rounded-full shadow-lg">
          <Phone className="mr-2 h-4 w-4" />
          Emergency Call
        </Button>
      </a>
    </div>
  );
}
