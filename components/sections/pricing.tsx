import Link from "next/link";
import { Plane, Ship, Container, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const plans = [
  {
    icon: Plane,
    name: "Air Freight",
    price: "$5.50",
    unit: "/ kg",
    timeline: "5–7 days",
    features: [
      "Door-to-door tracking",
      "Customs clearance included",
      "Ideal for urgent shipments",
    ],
  },
  {
    icon: Ship,
    name: "Sea LCL",
    price: "$70",
    unit: "/ CBM",
    timeline: "28–35 days",
    features: [
      "Shared container space",
      "Most cost-effective",
      "Consolidation available",
    ],
  },
  {
    icon: Container,
    name: "Sea FCL",
    price: "Custom",
    unit: "quote",
    timeline: "25–30 days",
    features: [
      "Full container (20'/40')",
      "Best for high volume",
      "Priority customs handling",
    ],
  },
];

export function Pricing() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4">Simple, transparent pricing.</h2>
          <p className="text-lg text-foreground">
            Choose the shipping method that fits your timeline and budget.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="relative overflow-hidden border-border/50 transition-shadow hover:shadow-xl"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <plan.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-foreground/60">{plan.timeline}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-foreground/60"> {plan.unit}</span>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full">
                  <Link href="#contact">Get quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-foreground/60">
          Rates exclude duties, taxes (7% ITBMS in Panama), and last-mile delivery.
        </p>
      </div>
    </section>
  );
}
