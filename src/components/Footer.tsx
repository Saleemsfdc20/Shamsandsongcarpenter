import Link from 'next/link';
import { Phone, MapPin, Clock, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-luxury-gold flex items-center justify-center">
                <span className="text-white font-outfit font-bold text-2xl">S</span>
              </div>
              <div>
                <span className="font-outfit font-bold text-xl">SHAMS & SONS</span>
                <span className="font-outfit font-bold text-xl text-luxury-gold"> CO.</span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Mumbai&apos;s premier interior design and carpentry experts. Crafting luxury spaces with precision and passion since 2014.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919819151908"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-luxury-gold rounded-none flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:9819151908"
                className="w-12 h-12 bg-white/10 hover:bg-luxury-gold rounded-none flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-outfit font-semibold text-lg mb-8 text-luxury-gold">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-luxury-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-outfit font-semibold text-lg mb-8 text-luxury-gold">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Modular Kitchen',
                'Custom Furniture',
                'Interior Design',
                'Wardrobe Design',
                'False Ceiling',
                'Home Renovation',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-outfit font-semibold text-lg mb-8 text-luxury-gold">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Shop No. 3, Imraan Apartment,<br />
                  Hall Village Road,<br />
                  Near Rupam Building,<br />
                  Kurla (West), Mumbai – 400070
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <div>
                  <a href="tel:9819151908" className="hover:text-luxury-gold transition-colors">
                    9819151908
                  </a>
                  <span className="text-gray-400"> / </span>
                  <a href="tel:8655740223" className="hover:text-luxury-gold transition-colors">
                    8655740223
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <span className="text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Shams & Sons Co. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
              <span className="text-gray-500 text-sm">Crafted with excellence in Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}