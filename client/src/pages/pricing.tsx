import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    description: "Pay per service",
    features: [
      "Towing up to 5 km",
      "Battery jump start",
      "Tire change",
      "Fuel delivery (fuel cost extra)",
    ],
  },
  {
    name: "Premium",
    price: "₹2,999/year",
    description: "Best value for frequent drivers",
    features: [
      "Towing up to 25 km",
      "Unlimited battery jump starts",
      "Tire changes",
      "Fuel delivery (including fuel)",
      "Lockout service",
      "Priority dispatch",
    ],
  },
  {
    name: "Business",
    price: "Custom",
    description: "For fleet management",
    features: [
      "Unlimited towing",
      "24/7 dedicated support",
      "Fleet management portal",
      "Multiple vehicle coverage",
      "Custom dispatch rules",
      "Monthly reporting",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground">
          Choose the plan that works best for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/request-service">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}