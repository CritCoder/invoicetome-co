import React from "react";
import { Card } from "@/components/ui/Card.jsx";
import { Badge } from "@/components/ui/Badge.jsx";
import { Check, Clock, DollarSign, Users, Download, ShieldCheck } from "lucide-react";

const features = [
 {
 icon: <Check className="w-8 h-8 text-blue-600" />,
 title: "Instant Invoice Creation",
 desc: "Generate beautiful, branded invoices in under60 seconds."
 },
 {
 icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
 title: "Multiple Payment Options",
 desc: "Accept payments via credit card, PayPal, or bank transfer."
 },
 {
 icon: <Clock className="w-8 h-8 text-blue-600" />,
 title: "Automated Reminders",
 desc: "Send friendly reminders and get paid on time, every time."
 },
 {
 icon: <Users className="w-8 h-8 text-yellow-500" />,
 title: "Client Management",
 desc: "Store client info and track invoice history with ease."
 },
 {
 icon: <Download className="w-8 h-8 text-blue-600" />,
 title: "PDF & Email Delivery",
 desc: "Download invoices as PDF or send directly to your clients."
 },
 {
 icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
 title: "Secure & Private",
 desc: "Your data is encrypted and protected with industry best practices."
 },
];

export function FeaturesSection() {
 return (
 <section id="features" className="bg-background py-20">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-14">
 <Badge variant="accent" className="mb-4">Why Invoicetome.co?</Badge>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
 Everything You Need to Get Paid Faster
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Invoicetome.co is packed with powerful features designed to save you time and help you grow your business.
 </p>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
 {features.map((feature, i) => (
 <Card key={feature.title} className="flex flex-col items-start gap-4 bg-white hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
 <div className="bg-blue-50 rounded-xl p-3 mb-2">
 {feature.icon}
 </div>
 <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
 <p className="text-gray-600 text-base">{feature.desc}</p>
 </Card>
 ))}
 </div>
 </div>
 </section>
 );
}
