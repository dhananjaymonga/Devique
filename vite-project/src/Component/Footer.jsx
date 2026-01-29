import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            &lt;/&gt; devique
          </h3>
          <p className="text-sm leading-relaxed mb-6">
            Empowering businesses with innovative IT solutions and
            training the next generation of tech professionals.
          </p>

          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["About", "Services", "Courses", "Training", "Blog", "Contact"].map(
              (item, i) => (

                <li key={i} className="hover:text-white cursor-pointer">
                  <Link to={`/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              "Web Development",
              "Mobile Apps",
              "Custom Software",
              "IT Consulting",
              "Business Automation",
              "Training Programs"
            ].map((service, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                <Link to="/services">     
                {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <Mail size={18} /> info@devique.com
            </li>
            <li className="flex gap-3 items-start">
              <Phone size={18} /> +91 74003-77777
            </li>
          
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-16">
        © {new Date().getFullYear()} Devique. All rights reserved.
      </div>
    </footer>
  );
}
