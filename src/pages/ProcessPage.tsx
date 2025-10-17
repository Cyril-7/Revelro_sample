import { CheckCircle } from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: string) => void;
}

export default function ProcessPage({ onNavigate }: ProcessPageProps) {
  const processSteps = [
    {
      title: 'Inspection & Consultation',
      description: 'We start with a thorough inspection of your vehicle to understand its condition and discuss your specific needs and expectations.',
      icon: '🔍',
    },
    {
      title: 'Exterior Wash & Decontamination',
      description: 'Your car receives a thorough hand wash, followed by clay bar treatment to remove embedded contaminants from the paint surface.',
      icon: '🚿',
    },
    {
      title: 'Paint Correction',
      description: 'Using professional-grade polishers and compounds, we remove swirl marks, light scratches, and oxidation to restore your paint\'s clarity and depth.',
      icon: '✨',
    },
    {
      title: 'Interior Detailing',
      description: 'We deep clean all interior surfaces, including vacuuming, shampooing carpets, cleaning and conditioning leather, and treating all plastic and vinyl surfaces.',
      icon: '🧽',
    },
    {
      title: 'Protection & Finishing',
      description: 'We apply high-quality wax, sealant, or ceramic coating to protect your vehicle\'s surfaces and enhance its shine.',
      icon: '🛡️',
    },
    {
      title: 'Final Inspection',
      description: 'We perform a meticulous final inspection to ensure every inch of your vehicle meets our high standards of excellence.',
      icon: '✅',
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Detailing Process</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a meticulous process to ensure your vehicle receives the best care possible.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gray-200 -translate-x-1/2"></div>
          
          {/* Process steps */}
          <div className="space-y-12 md:space-y-24">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Step content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{step.icon}</div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {/* Step number (mobile) */}
                <div className="md:hidden flex items-center justify-center my-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                
                {/* Step number (desktop) */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-xl mx-4 flex-shrink-0">
                  {index + 1}
                </div>
                
                {/* Empty div for spacing on desktop */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our professional detailing process will leave your car looking better than the day you bought it.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Your Detailing Now
          </button>
        </div>
      </div>
    </div>
  );
}
