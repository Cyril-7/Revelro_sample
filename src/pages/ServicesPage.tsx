interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      id: 'exterior',
      title: 'Exterior Detailing',
      description: 'Complete exterior cleaning, polishing, and protection to restore your car\'s showroom shine.',
      price: 'From ₹3,999',
      features: [
        'Hand wash and dry',
        'Clay bar treatment',
        'Paint correction',
        'Wax application',
        'Tire and wheel detailing',
        'Window cleaning',
      ],
    },
    {
      id: 'interior',
      title: 'Interior Detailing',
      description: 'Deep cleaning and conditioning of your car\'s interior for a fresh, like-new feel.',
      price: 'From ₹4,999',
      features: [
        'Vacuum and shampoo',
        'Leather/vinyl cleaning',
        'Dashboard and console cleaning',
        'Door panel cleaning',
        'Window cleaning from inside',
        'Odor elimination',
      ],
    },
    {
      id: 'ceramic',
      title: 'Ceramic Coating',
      description: 'Long-lasting protection for your car\'s paint with advanced ceramic technology.',
      price: 'From ₹14,999',
      features: [
        'Paint correction',
        'Surface preparation',
        'Ceramic coating application',
        'Up to 2 years protection',
        'Enhanced gloss and shine',
        'Easier maintenance',
      ],
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We offer professional car detailing services to keep your vehicle looking its best.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-orange-500 text-xl font-bold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-gray-600 mb-6">Contact us for a free consultation and we'll help you choose the right package.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
