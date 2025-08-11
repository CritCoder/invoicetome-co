import React from "react";
import { Card } from "@/components/ui/Card.jsx";
import { Badge } from "@/components/ui/Badge.jsx";
import { Edit, Users, Send } from "lucide-react";

const steps = [
 {
 icon: <Edit className="w-8 h-8 text-blue-600" />,
 title: "1. Create",
 desc: "Fill in your invoice details with our intuitive editor."
 },
 {
 icon: <Users className="w-8 h-8 text-yellow-500" />,
 title: "2. Send",
 desc: "Email your invoice or download as PDF instantly."
 },
 {
 icon: <Send className="w-8 h-8 text-blue-600" />,
 title: "3. Get Paid",
 desc: "Accept payments online and track status in real time."
 },
];

export function HowItWorksSection() {
 return (
 <section id="how" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-14">
 <Badge variant="default" className="mb-4">How It Works</Badge>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
3 Simple Steps to Get Paid
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Invoicetome.co makes invoicing effortless. No learning curve, no hassle.
 </p>
 </div>
 <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
 {steps.map((step, i) => (
 <Card key={step.title} className="flex-1 flex flex-col items-center gap-4 bg-white hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
 <div className="bg-blue-50 rounded-xl p-3 mb-2">
 {step.icon}
 </div>
 <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
 <p className="text-gray-600 text-base text-center">{step.desc}</p>
 </Card>
 ))}
 </div>
 </div>
 </section>
 );
}
