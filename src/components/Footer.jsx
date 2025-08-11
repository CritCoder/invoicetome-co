import React from "react";
import { Mail, Phone, Twitter, Linkedin, Globe } from "lucide-react";

const footerLinks = [
 {
 title: "Product",
 links: [
 { name: "Features", href: "#features" },
 { name: "Pricing", href: "#pricing" },
 { name: "How It Works", href: "#how" },
 { name: "FAQ", href: "#faq" },
 ]
 },
 {
 title: "Company",
 links: [
 { name: "About", href: "#about" },
 { name: "Contact", href: "#contact" },
 { name: "Careers", href: "#" },
 { name: "Blog", href: "#" },
 ]
 },
 {
 title: "Legal",
 links: [
 { name: "Terms of Service", href: "#" },
 { name: "Privacy Policy", href: "#" },
 ]
 }
];

const socials = [
 { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
 { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
 { icon: <Globe className="w-5 h-5" />, href: "#", label: "Website" },
];

export function Footer() {
 return (
 <footer className="bg-blue-900 text-white pt-16 pb-8">
 <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
 <div className="md:col-span-2 flex flex-col gap-4">
 <a href="#" className="flex items-center gap-2 mb-2">
 <span className="inline-block bg-gradient-to-r from-blue-600 to-yellow-400 rounded-xl p-2">
 <svg width="32" height="32" viewBox="003232" fill="none" aria-hidden="true">
 <rect x="4" y="4" width="24" height="24" rx="6" fill="#2563eb" />
 <path d="M1012h12M1016h12M1020h7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
 </svg>
 </span>
 <span className="ml-2 text-2xl font-extrabold tracking-tight text-white">Invoicetome<span className="text-yellow-400">.co</span></span>
 </a>
 <p className="text-gray-200 text-base max-w-xs">
 Effortless invoicing for modern businesses. Get paid faster with Invoicetome.co.
 </p>
 <div className="flex gap-4 mt-2">
 {socials.map(s => (
 <a key={s.label} href={s.href} aria-label={s.label} className="hover:text-yellow-400 transition-colors">
 {s.icon}
 </a>
 ))}
 </div>
 </div>
 {footerLinks.map(col => (
 <div key={col.title}>
 <div className="text-lg font-semibold mb-4 text-yellow-400">{col.title}</div>
 <ul className="space-y-2">
 {col.links.map(link => (
 <li key={link.name}>
 <a href={link.href} className="text-gray-200 hover:text-yellow-400 transition-colors text-base">
 {link.name}
 </a>
 </li>
 ))}
 </ul>
 </div>
 ))}
 <div className="flex flex-col gap-3">
 <div className="flex items-center gap-2">
 <Mail className="w-5 h-5 text-yellow-400" />
 <span className="text-base text-gray-200">support@invoicetome.co</span>
 </div>
 <div className="flex items-center gap-2">
 <Phone className="w-5 h-5 text-yellow-400" />
 <span className="text-base text-gray-200">+1 (555)123-4567</span>
 </div>
 </div>
 </div>
 <div className="mt-12 border-t border-blue-800 pt-6 text-center text-gray-400 text-sm">
 &copy; {new Date().getFullYear()} Invoicetome.co. All rights reserved.
 </div>
 </footer>
 );
}
