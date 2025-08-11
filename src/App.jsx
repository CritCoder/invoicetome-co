import React from "react";
import { Navbar } from "@/components/Navbar.jsx";
import { HeroSection } from "@/components/HeroSection.jsx";
import { FeaturesSection } from "@/components/FeaturesSection.jsx";
import { HowItWorksSection } from "@/components/HowItWorksSection.jsx";
import { ProductShowcaseSection } from "@/components/ProductShowcaseSection.jsx";
import { TestimonialsSection } from "@/components/TestimonialsSection.jsx";
import { PricingSection } from "@/components/PricingSection.jsx";
import { AboutSection } from "@/components/AboutSection.jsx";
import { UseCasesSection } from "@/components/UseCasesSection.jsx";
import { FAQSection } from "@/components/FAQSection.jsx";
import { ContactSection } from "@/components/ContactSection.jsx";
import { Footer } from "@/components/Footer.jsx";

export default function App() {
 React.useEffect(() => {
 // Simple fade-in animation for sections
 const observer = new window.IntersectionObserver(
 entries => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.classList.add("opacity-100", "translate-y-0");
 entry.target.classList.remove("opacity-0", "translate-y-8");
 }
 });
 },
 { threshold:0.1 }
 );
 document.querySelectorAll(".animate-fade-in-up").forEach(el => {
 el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700");
 observer.observe(el);
 });
 document.querySelectorAll(".animate-fade-in").forEach(el => {
 el.classList.add("opacity-0", "transition-all", "duration-700");
 observer.observe(el);
 });
 return () => observer.disconnect();
 }, []);

 return (
 <div className="bg-background min-h-screen font-body">
 <Navbar />
 <main className="pt-24">
 <HeroSection />
 <FeaturesSection />
 <HowItWorksSection />
 <ProductShowcaseSection />
 <TestimonialsSection />
 <PricingSection />
 <AboutSection />
 <UseCasesSection />
 <FAQSection />
 <ContactSection />
 </main>
 <Footer />
 </div>
 );
}
