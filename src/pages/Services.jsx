import { FileText, Map, ShieldAlert, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: "soil-management",
      title: "Soil Sampling and Disposal Management",
      icon: <Sprout className="w-8 h-8 text-brand-gold" />,
      description: "Strategic planning for soil sampling, disposal, and relocation.",
      details: "Proper soil management is critical for large civil projects. We provide the necessary testing and planning to handle soils safely and legally."
    },
    {
      id: "tank-removals",
      title: "Heating Oil Tank Removal and Remediation",
      icon: <ShieldAlert className="w-8 h-8 text-brand-gold" />,
      description: "Expert removal of underground heating oil tanks and remediation of contaminated soils.",
      details: "Leaking oil tanks pose significant environmental and financial risks. We handle the entire process from assessment and removal to soil cleanup and final reporting."
    },
    {
      id: "environmental-assessments",
      title: "Environmental Site Assessments",
      icon: <Map className="w-8 h-8 text-brand-gold" />,
      description: "Comprehensive Stage 1 and Stage 2 Preliminary Site Investigations (PSIs) and Detailed Site Investigations (DSIs) for residential, commercial, and industrial properties.",
      details: "We ensure compliance with all environmental regulations, identifying potential liabilities and ensuring safe property transactions or development."
    },
    {
      id: "due-diligence",
      title: "Due Diligence Report Reviews",
      icon: <FileText className="w-8 h-8 text-brand-gold" />,
      description: "Professional review of third-party environmental reports.",
      details: "Before purchasing property or finalizing developments, we offer expert reviews of existing environmental documentation to protect your interests."
    }
  ];

  return (
    <div className="bg-brand-light pb-20">
      <div className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional environmental consulting and civil engineering services tailored for Vancouver Island.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="mb-6 bg-brand-light w-16 h-16 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-4 font-medium">{service.description}</p>
              <p className="text-gray-600 mb-8 flex-grow">{service.details}</p>
              <Link to="/contact" className="text-brand-gold font-semibold hover:text-brand-dark transition-colors mt-auto inline-flex items-center">
                Request Service &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
