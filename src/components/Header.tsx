import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="text-2xl font-bold text-blue-600">Revelro Cars</div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  currentPage === item.id ? 'text-blue-600' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href="tel:+919891111747"
            className="hidden md:flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
          >
            <Phone size={20} />
            +91 989 1111 747
          </a>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 ${
                    currentPage === item.id ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+919891111747"
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold mx-4"
              >
                <Phone size={20} />
                +91 989 1111 747
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
