import React from "react";
import { Badge } from "@/components/ui/Badge.jsx";

export function ProductShowcaseSection() {
 return (
 <section id="product" className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
 <div className="flex-1">
 <Badge variant="accent" className="mb-4">Product Demo</Badge>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
 Professional Invoices, Instantly
 </h2>
 <p className="text-lg text-gray-600 mb-6">
 Our invoice editor is designed for speed and simplicity. Customize your logo, colors, and details. Preview your invoice in real time and send it with a single click.
 </p>
 <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
 <li>Drag-and-drop line items</li>
 <li>Automatic tax & discount calculations</li>
 <li>Custom branding and notes</li>
 <li>One-click PDF download or email</li>
 </ul>
 </div>
 <div className="flex-1 flex justify-center">
 <img
 src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
 alt="Invoice editor screenshot"
 className="rounded-2xl shadow-xl border-4 border-blue-100 w-[400px] md:w-[480px] lg:w-[520px] animate-fade-in"
 loading="lazy"
 />
 </div>
 </div>
 </section>
 );
}
