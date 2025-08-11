import React from "react";
import { Badge } from "@/components/ui/Badge.jsx";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
 {
 q: "Is Invoicetome.co really free?",
 a: "Yes! Our Free plan lets you create unlimited invoices with no credit card required. Upgrade for advanced features."
 },
 {
 q: "Can I customize my invoices?",
 a: "Absolutely. Add your logo, colors, and custom notes to every invoice."
 },
 {
 q: "How do I get paid?",
 a: "Clients can pay you online via credit card, PayPal, or bank transfer. Funds go directly to your account."
 },
 {
 q: "Is my data secure?",
 a: "We use industry-standard encryption and never share your data. Your privacy and security are our top priorities."
 },
 {
 q: "Can I invite my team?",
 a: "Yes! Our Business plan supports team accounts and collaboration."
 },
];

export function FAQSection() {
 const [open, setOpen] = React.useState(0);
 return (
 <section id="faq" className="py-20 bg-background">
 <div className="max-w-4xl mx-auto px-6">
 <div className="text-center mb-14">
 <Badge variant="accent" className="mb-4">FAQ</Badge>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
 Frequently Asked Questions
 </h2>
 </div>
 <div className="space-y-6">
 {faqs.map((faq, i) => (
 <div key={faq.q} className="bg-white rounded-xl shadow-md p-6">
 <button
 className="flex items-center justify-between w-full text-left text-lg font-semibold text-blue-700 focus:outline-none"
 onClick={() => setOpen(open === i ? -1 : i)}
 aria-expanded={open === i}
 aria-controls={`faq-panel-${i}`}
 >
 <span>{faq.q}</span>
 {open === i ? (
 <ChevronUp className="w-6 h-6 text-blue-600" />
 ) : (
 <ChevronDown className="w-6 h-6 text-blue-600" />
 )}
 </button>
 <div
 id={`faq-panel-${i}`}
 className={`mt-3 text-gray-700 text-base transition-all duration-300 ${open === i ? 'block' : 'hidden'}`}
 >
 {faq.a}
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
