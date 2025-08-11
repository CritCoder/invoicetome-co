import React from "react";
import { Badge } from "@/components/ui/Badge.jsx";
import { Briefcase, Code, Users, Building } from "lucide-react";

const useCases = [
 {
 icon: <Briefcase className="w-7 h-7 text-blue-600" />,
 title: "Freelancers",
 desc: "Designers, writers, consultants, and more. Send invoices in seconds."
 },
 {
 icon: <Code className="w-7 h-7 text-yellow-500" />,
 title: "Agencies",
 desc: "Manage multiple clients and projects with ease."
 },
 {
 icon: <Users className="w-7 h-7 text-blue-600" />,
 title: "Startups",
 desc: "Scale your business with professional, branded invoices."
 },
 {
 icon: <Building className="w-7 h-7 text-yellow-500" />,
 title: "Small Businesses",
 desc: "Automate your invoicing and get paid faster."
 },
];

export function UseCasesSection() {
 return (
 <section id="usecases" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-14">
 <Badge variant="default" className="mb-4">Who It's For</Badge>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
 Built for Every Business
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Whether you're a solo entrepreneur or a growing team, Invoicetome.co adapts to your workflow.
 </p>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
 {useCases.map((u, i) => (
 <div key={u.title} className="flex flex-col items-center gap-3 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all animate-fade-in-up">
 <div className="bg-blue-50 rounded-xl p-3 mb-2">
 {u.icon}
 </div>
 <h3 className="text-lg font-semibold text-gray-900 mb-1">{u.title}</h3>
 <p className="text-gray-600 text-base text-center">{u.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
