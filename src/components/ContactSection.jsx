import React from "react";
import { Button } from "@/components/ui/Button.jsx";
import { Input } from "@/components/ui/Input.jsx";
import { Textarea } from "@/components/ui/Textarea.jsx";
import { Label } from "@/components/ui/Label.jsx";
import { Badge } from "@/components/ui/Badge.jsx";
import { Mail, Phone } from "lucide-react";

export function ContactSection() {
 return (
 <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
 <div className="max-w-4xl mx-auto px-6">
 <div className="text-center mb-14">
 <Badge variant="default" className="mb-4">Contact</Badge>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
 Get in Touch
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Have questions or want a demo? Reach out and our team will respond within24 hours.
 </p>
 </div>
 <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
 <form className="flex-1 space-y-6">
 <div>
 <Label htmlFor="name">Name</Label>
 <Input id="name" name="name" type="text" placeholder="Your name" required />
 </div>
 <div>
 <Label htmlFor="email">Email</Label>
 <Input id="email" name="email" type="email" placeholder="you@email.com" required />
 </div>
 <div>
 <Label htmlFor="message">Message</Label>
 <Textarea id="message" name="message" rows={4} placeholder="How can we help you?" required />
 </div>
 <Button type="submit" size="lg" className="w-full">Send Message</Button>
 </form>
 <div className="flex-1 flex flex-col gap-6 justify-center">
 <div className="flex items-center gap-3">
 <Mail className="w-6 h-6 text-blue-600" />
 <span className="text-base text-gray-700">support@invoicetome.co</span>
 </div>
 <div className="flex items-center gap-3">
 <Phone className="w-6 h-6 text-blue-600" />
 <span className="text-base text-gray-700">+1 (555)123-4567</span>
 </div>
 <div className="text-gray-500 text-sm mt-4">
 Our team is available Monday to Friday,9am–6pm EST.
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
