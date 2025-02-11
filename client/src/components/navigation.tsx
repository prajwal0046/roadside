import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [location] = useLocation();
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <>
      <Link href="/">
        <a className={`text-lg font-medium ${location === "/" ? "text-primary" : "text-foreground"}`}>
          Home
        </a>
      </Link>
      <Link href="/request-service">
        <a className={`text-lg font-medium ${location === "/request-service" ? "text-primary" : "text-foreground"}`}>
          Request Service
        </a>
      </Link>
      <Link href="/pricing">
        <a className={`text-lg font-medium ${location === "/pricing" ? "text-primary" : "text-foreground"}`}>
          Pricing
        </a>
      </Link>
    </>
  );

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">RoadGuard</a>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
}