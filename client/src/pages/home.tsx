import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import ServiceArea from "@/components/service-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Car, Wrench, Battery, Key } from "lucide-react";

const services = [
  {
    icon: <Car className="h-8 w-8" />,
    title: "Towing Service",
    description: "24/7 towing service for all vehicle types",
  },
  {
    icon: <Battery className="h-8 w-8" />,
    title: "Battery Jump Start",
    description: "Quick battery assistance when you need it",
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Tire Change",
    description: "Flat tire replacement with your spare",
  },
  {
    icon: <Key className="h-8 w-8" />,
    title: "Lockout Service",
    description: "Professional locksmith services",
  },
];

const faqs = [
  {
    question: "How quickly can you reach me?",
    answer: "Our average response time is 15-30 minutes depending on your location and traffic conditions.",
  },
  {
    question: "What areas do you serve?",
    answer: "We currently serve the greater metropolitan area including all five boroughs.",
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we work with most major insurance providers. Please have your policy information ready.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, cash, and digital payments including Apple Pay and Google Pay.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            24/7 Professional Roadside Assistance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Fast, reliable roadside assistance when you need it most. We're here to help you get back on the road safely.
          </p>
          <Link href="/request-service">
            <Button size="lg" className="text-lg">
              Request Service Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title}>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Service Area Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Coverage Area</h2>
        <div className="max-w-2xl mx-auto">
          <ServiceArea />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}