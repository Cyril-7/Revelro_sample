interface EquipmentPageProps {
  onNavigate: (page: string) => void;
}

export default function EquipmentPage({ onNavigate }: EquipmentPageProps) {
  const equipmentList = [
    {
      name: 'Rupes BigFoot Polisher',
      description: 'Professional-grade orbital polisher for perfect paint correction',
      image: 'https://via.placeholder.com/300x200?text=Rupes+Polisher',
    },
    {
      name: 'Ceramic Coating Kit',
      description: 'Premium ceramic coating for long-lasting paint protection',
      image: 'https://via.placeholder.com/300x200?text=Ceramic+Coating',
    },
    {
      name: 'Steam Cleaner',
      description: 'High-temperature steam cleaner for deep interior cleaning',
      image: 'https://via.placeholder.com/300x200?text=Steam+Cleaner',
    },
    {
      name: 'Extractor Machine',
      description: 'Professional carpet and upholstery extractor for deep cleaning',
      image: 'https://via.placeholder.com/300x200?text=Extractor',
    },
    {
      name: 'Air Compressor',
      description: 'High-powered air compressor for detailing tasks',
      image: 'https://via.placeholder.com/300x200?text=Air+Compressor',
    },
    {
      name: 'Professional Lighting',
      description: 'LED lighting setup to reveal every imperfection',
      image: 'https://via.placeholder.com/300x200?text=Lighting',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Equipment</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We use only the best professional-grade equipment to ensure outstanding results for your vehicle.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/300x200?text=Equipment+Image';
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Professional Equipment Matters</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Using professional-grade equipment makes all the difference in car detailing. Our tools are specifically designed for automotive care, ensuring better results, efficiency, and safety for your vehicle's surfaces.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Schedule Your Detailing
          </button>
        </div>
      </div>
    </div>
  );
}
