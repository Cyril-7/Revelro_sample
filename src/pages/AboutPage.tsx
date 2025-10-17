import { Check } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const stats = [
    { value: '500+', label: 'Cars Detailed' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '5', label: 'Star Average Rating' },
    { value: '24/7', label: 'Customer Support' },
  ];

  const features = [
    'Certified Detailers',
    'Eco-Friendly Products',
    'Satisfaction Guaranteed',
    'Mobile Service Available',
    'Competitive Pricing',
    'Premium Materials',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Revelro Cars</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional car detailing services with a passion for perfection
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023, Revelro Cars started with a simple mission: to provide exceptional car detailing services that exceed our customers' expectations. What began as a small mobile detailing service has grown into a full-service auto detailing center known for quality, attention to detail, and outstanding customer service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of certified detailers brings years of experience and a passion for cars to every job. We understand that your vehicle is more than just transportation—it's an investment and a reflection of your personality. That's why we treat every car as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Revelro Cars?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                <p className="text-gray-600 mb-6">
                  We believe in using only the highest quality products and techniques to achieve showroom-quality results. Our attention to detail sets us apart from the competition.
                </p>
                <p className="text-gray-600">
                  Every vehicle receives our undivided attention, and we're not satisfied until you're completely happy with the results.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and see why our customers keep coming back.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
