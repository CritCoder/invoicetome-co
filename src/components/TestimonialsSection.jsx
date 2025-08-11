import React from "react";
import { Card } from "@/components/ui/Card.jsx";
import { Avatar } from "@/components/ui/Avatar.jsx";
import { Star } from "lucide-react";

const testimonials = [
 {
 name: "Samantha Lee",
 company: "Freelance Designer",
 avatar: "https://randomuser.me/api/portraits/women/44.jpg",
 quote: "Invoicetome.co has saved me hours every month. My clients love the professional invoices, and I get paid faster than ever!",
 rating:5
 },
 {
 name: "Carlos Martinez",
 company: "CM Tech Solutions",
 avatar: "https://randomuser.me/api/portraits/men/32.jpg",
 quote: "The automated reminders are a game changer. I never have to chase payments anymore. Highly recommended!",
 rating:5
 },
 {
 name: "Priya Patel",
 company: "Startup Founder",
 avatar: "https://randomuser.me/api/portraits/women/68.jpg",
 quote: "Super easy to use and the support team is fantastic. Invoicetome.co is a must-have for any small business.",
 rating:5
 },
];

export function TestimonialsSection() {
 return (
 <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-14">
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
 Loved by Freelancers & Small Businesses
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Join thousands of happy users who trust Invoicetome.co to get paid on time.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {testimonials.map((t, i) => (
 <Card key={t.name} className="flex flex-col items-center gap-4 bg-white hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
 <Avatar src={t.avatar} alt={t.name} className="mb-2 w-16 h-16" />
 <div className="flex gap-1 mb-2">
 {[...Array(t.rating)].map((_, i) => (
 <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
 ))}
 </div>
 <blockquote className="text-gray-700 text-base italic mb-2">“{t.quote}”</blockquote>
 <div className="text-sm font-semibold text-blue-700">{t.name}</div>
 <div className="text-xs text-gray-500">{t.company}</div>
 </Card>
 ))}
 </div>
 </div>
 </section>
 );
}
