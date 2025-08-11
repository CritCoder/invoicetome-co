import React from "react";
import { Card } from "@/components/ui/Card.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Badge } from "@/components/ui/Badge.jsx";
import { Check } from "lucide-react";

const plans = [
 {
 name: "Free",
 price: "$0",
 period: "/mo",
 features: [
 "Unlimited invoices",
 "PDF download",
 "Email delivery",
 "Client management",
 "Basic support"
 ],
 cta: "Get Started",
 highlight: false
 },
 {
 name: "Pro",
 price: "$12",
 period: "/mo",
 features: [
 "All Free features",
 "Custom branding",
 "Online payments",
 "Automated reminders",
 "Priority support"
 ],
 cta: "Start Free Trial",
 highlight: true
 },
 {
 name: "Business",
 price: "$29",
 period: "/mo",
 features: [
 "All Pro features",
 "Team accounts",
 "Advanced analytics",
 "API access",
 "Dedicated manager"
 ],
 cta: "Contact Sales",
 highlight: false
 }
];

export function PricingSection() {
 return (
 <section id="pricing" className="py-20 bg-background">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-14">
 <Badge variant="default" className="mb-4">Pricing</Badge>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
 Simple, Transparent Pricing
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 No hidden fees. Choose the plan that fits your business and upgrade anytime.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {plans.map((plan, i) => (
 <Card
 key={plan.name}
 className={
 plan.highlight
 ? "border-2 border-blue-600 bg-blue-50 scale-105 shadow-2xl animate-fade-in-up"
 : "bg-white animate-fade-in-up"
 }
 >
 {plan.highlight && (
 <Badge variant="accent" className="mb-4">Most Popular</Badge>
 )}
 <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
 <div className="flex items-end mb-4">
 <span className="text-4xl font-extrabold text-blue-700">{plan.price}</span>
 <span className="text-base text-gray-500 ml-1">{plan.period}</span>
 </div>
 <ul className="mb-6 space-y-2">
 {plan.features.map(f => (
 <li key={f} className="flex items-center gap-2 text-gray-700">
 <Check className="w-5 h-5 text-blue-600" /> {f}
 </li>
 ))}
 </ul>
 <Button
 size="lg"
 variant={plan.highlight ? "default" : "outline"}
 className="w-full mt-2"
 >
 {plan.cta}
 </Button>
 </Card>
 ))}
 </div>
 </div>
 </section>
 );
}
