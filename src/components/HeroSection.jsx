import React from "react";
import { Button } from "@/components/ui/Button.jsx";
import { Check } from "lucide-react";

export function HeroSection() {
 return (
 <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-yellow-200">
 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-500/60 to-yellow-200/60" aria-hidden="true"></div>
 <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
 <div className="flex-1 text-center md:text-left">
 <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl">
 Effortless Invoicing for Modern Businesses
 </h1>
 <p className="text-xl md:text-2xl text-blue-100 font-medium mb-8 max-w-xl">
 Create, send, and manage professional invoices in seconds. Get paid faster with Invoicetome.co — the simplest invoice maker for freelancers, startups, and small businesses.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
 <Button size="lg" variant="default" className="shadow-xl hover:scale-105">
 Start Free
 </Button>
 <Button size="lg" variant="outline" className="hover:scale-105">
 See How It Works
 </Button>
 </div>
 <ul className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
 <li className="flex items-center gap-2 text-white/90 text-base">
 <Check className="w-5 h-5 text-yellow-300" /> No credit card required
 </li>
 <li className="flex items-center gap-2 text-white/90 text-base">
 <Check className="w-5 h-5 text-yellow-300" /> Unlimited invoices
 </li>
 </ul>
 </div>
 <div className="flex-1 flex justify-center md:justify-end">
 <img
 src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
 alt="Invoice dashboard preview"
 className="rounded-2xl shadow-2xl border-4 border-white w-[400px] md:w-[480px] lg:w-[520px] animate-fade-in"
 loading="eager"
 />
 </div>
 </div>
 </section>
 );
}
