import heroImage from '../assets/ds-inventory-banner.jpg';
import React from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Premium Car Detailing Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your vehicle with our professional detailing services. We bring back the showroom shine to your car.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Exterior Detailing',
                description: 'Complete exterior cleaning, polishing, and protection.',
                icon: '🚗',
              },
              {
                title: 'Interior Detailing',
                description: 'Deep cleaning and conditioning of your car\'s interior.',
                icon: '🧽',
              },
              {
                title: 'Ceramic Coating',
                description: 'Long-lasting protection for your car\'s paint.',
                icon: '✨',
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="text-orange-500 font-semibold hover:underline"
            >
              View All Services →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
