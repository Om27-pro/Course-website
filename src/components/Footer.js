import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, ChevronRight, Globe, Share2, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-wider text-white uppercase">
                APEX <span className="text-accent">MOTORS</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover the pinnacle of automotive engineering and luxury. APEX MOTORS brings you curated premium cars with exceptional service and seamless dealership experience.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#website" aria-label="Website" className="w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-accent text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#social" aria-label="Social Share" className="w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-accent text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#chat" aria-label="Community Chat" className="w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-accent text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Browse Cars', path: '/cars' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Dealer', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center space-x-1 hover:text-accent transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>100 Luxury Boulevard, Auto District, Sector 42, Cyber City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+91 (800) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@apexmotors.com</span>
              </li>
            </ul>
          </div>

          {/* Showroom Hours */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider">Showroom Hours</h3>
            <div className="text-sm space-y-2">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Monday - Friday:</span>
                <span className="text-white font-medium">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday:</span>
                <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-accent font-medium">By Appointment</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© APEX MOTORS. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
