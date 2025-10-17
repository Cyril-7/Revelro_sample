import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Revelro Cars</h3>
            <p className="text-sm mb-4">
              Expert Solutions for Your Needs - Quality, Efficiency, Reliability and Satisfaction
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-500 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-blue-500 transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('equipment')}
                  className="hover:text-blue-500 transition-colors text-sm"
                >
                  Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-blue-500 transition-colors text-sm"
                >
                  Process
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Light Package</li>
              <li>Elite Package</li>
              <li>Ultimate Package</li>
              <li>Supreme Package</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>311, 3rd Floor, Downtown Mall, Sarojini Nagar, New Delhi - 110023</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={18} />
                <a href="tel:+919891111747" className="hover:text-blue-500 transition-colors">
                  +91 989 1111 747
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={18} />
                <a href="mailto:rohan@revelro.in" className="hover:text-blue-500 transition-colors">
                  rohan@revelro.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Revelro Cars Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
