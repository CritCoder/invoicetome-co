import React from "react";
import { Badge } from "@/components/ui/Badge.jsx";
import { Avatar } from "@/components/ui/Avatar.jsx";

const team = [
 {
 name: "Alex Kim",
 role: "Founder & CEO",
 avatar: "https://randomuser.me/api/portraits/men/45.jpg"
 },
 {
 name: "Maya Chen",
 role: "Lead Developer",
 avatar: "https://randomuser.me/api/portraits/women/65.jpg"
 },
 {
 name: "Jordan Smith",
 role: "Customer Success",
 avatar: "https://randomuser.me/api/portraits/men/36.jpg"
 }
];

export function AboutSection() {
 return (
 <section id="about" className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-14">
 <Badge variant="accent" className="mb-4">About Us</Badge>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
 Our Mission
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Invoicetome.co was founded to empower freelancers and small businesses with simple, powerful invoicing tools. We're passionate about helping you get paid faster and focus on what you do best.
 </p>
 </div>
 <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
 {team.map(member => (
 <div key={member.name} className="flex flex-col items-center gap-2">
 <Avatar src={member.avatar} alt={member.name} className="w-20 h-20 mb-2" />
 <div className="text-lg font-semibold text-blue-700">{member.name}</div>
 <div className="text-sm text-gray-500">{member.role}</div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
