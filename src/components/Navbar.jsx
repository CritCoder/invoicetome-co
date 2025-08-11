import React, { useState } from "react";
import { Button } from "@/components/ui/Button.jsx";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
 { name: "Features", href: "#features" },
 { name: "How It Works", href: "#how" },
 { name: "Pricing", href: "#pricing" },
 { name: "Testimonials", href: "#testimonials" },
 { name: "FAQ", href: "#faq" },
];

export function Navbar() {
 const [open, setOpen] = useState(false);
 return (
 <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-lg shadow-sm transition-all">
 <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
 <a href="#" className="flex items-center gap-2">
 <span className="inline-block bg-gradient-to-r from-blue-600 to-yellow-400 rounded-xl p-2">
 <svg width="32" height="32" viewBox="003232" fill="none" aria-hidden="true">
 <rect x="4" y="4" width="24" height="24" rx="6" fill="#2563eb" />
 <path d="M1012h12M1016h12M1020h7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
 </svg>
 </span>
 <span className="ml-2 text-2xl font-extrabold tracking-tight text-blue-700">Invoicetome<span className="text-yellow-500">.co</span></span>
 </a>
 <div className="hidden md:flex items-center gap-8">
 {navLinks.map(link => (
 <a
 key={link.name}
 href={link.href}
 className="text-base font-medium text-gray-700 hover:text-blue-700 transition-colors"
 >
 {link.name}
 </a>
 ))}
 <Button className="ml-4" size="default" variant="default">
 Start Free
 </Button>
 </div>
 <div className="md:hidden flex items-center">
 <Button
 variant="outline"
 size="sm"
 className="p-2"
 aria-label="Open menu"
 onClick={() => setOpen(true)}
 >
 <Menu className="w-6 h-6" />
 </Button>
 </div>
 {/* Mobile Menu */}
 <div
 className={cn(
 "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden",
 open ? "block" : "hidden"
 )}
 aria-hidden={!open}
 >
 <div className="absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-xl flex flex-col p-6 animate-in slide-in-from-right">
 <div className="flex items-center justify-between mb-8">
 <a href="#" className="flex items-center gap-2">
 <span className="inline-block bg-gradient-to-r from-blue-600 to-yellow-400 rounded-xl p-2">
 <svg width="32" height="32" viewBox="003232" fill="none" aria-hidden="true">
 <rect x="4" y="4" width="24" height="24" rx="6" fill="#2563eb" />
 <path d="M1012h12M1016h12M1020h7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
 </svg>
 </span>
 <span className="ml-2 text-2xl font-extrabold tracking-tight text-blue-700">Invoicetome<span className="text-yellow-500">.co</span></span>
 </a>
 <Button variant="outline" size="sm" className="p-2" aria-label="Close menu" onClick={() => setOpen(false)}>
 <X className="w-6 h-6" />
 </Button>
 </div>
 <div className="flex flex-col gap-6">
 {navLinks.map(link => (
 <a
 key={link.name}
 href={link.href}
 className="text-lg font-medium text-gray-700 hover:text-blue-700 transition-colors"
 onClick={() => setOpen(false)}
 >
 {link.name}
 </a>
 ))}
 <Button className="mt-6 w-full" size="default" variant="default">
 Start Free
 </Button>
 </div>
 </div>
 </div>
 </nav>
 </header>
 );
}
