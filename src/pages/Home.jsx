import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img src={`${import.meta.env.BASE_URL}images/slide-13.jpg`} alt="Environmental Consulting on Vancouver Island" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            SIE Consultants Ltd.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-200">
            Providing professional environmental consulting services on Vancouver Island.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-dark bg-brand-gold hover:bg-brand-gold-light transition-colors">
              Get Started
            </Link>
            <Link to="/services" className="inline-flex justify-center items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-brand-dark transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">No Project Too Big Or Too Small</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For the past 30 years, Eric Gauvin, P.Eng (SIE President) has been involved in the civil and environmental fields in consulting engineering.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Eric's experience as a site engineer provides his clients the confidence in knowing SIE Consultants Ltd. will maintain quality assurance and control no matter the size of the project.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When it comes to large civil and environmental projects, including industrial environmental cleanups, complex environmental assessments, and remediation projects, Eric Gauvin is the one you can trust to get the job done. With over 600 projects under his belt, he brings proven experience to every job.
            </p>
            <Link to="/about-us" className="inline-flex items-center text-brand-gold font-semibold hover:text-brand-dark transition-colors text-lg">
              Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Full-Service Environmental Consulting</h3>
            <ul className="space-y-4">
              {[
                'Soil sampling and disposal management',
                'Heating oil tank removal and remediation',
                'Environmental Site Assessments',
                'Due Diligence Report Reviews'
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-100">
               <Link to="/services" className="inline-block w-full text-center px-6 py-3 bg-brand-dark text-white rounded-md hover:bg-brand-gold hover:text-brand-dark transition-colors font-medium">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-dark py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-gold-light">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                "Just want to thank you for your excellent professional handling and the fast turn around time in doing the job. You will certainly be on my list of recommended personnel for this kind of work."
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                "SIE was very professional to work with and they answered all our questions. Eric, his crew and our project manager worked well together. I would recommend SIE to anyone."
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                "Over the past few months, Eric has with great professionalism helped us through the environmental due diligence inspection for our two properties. Job well done!"
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Partner Logos */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by industry leaders across Vancouver Island</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <img src={`${import.meta.env.BASE_URL}images/don-mann-logo2.jpg`} alt="Don Mann" className="h-12 object-contain" />
            <img src={`${import.meta.env.BASE_URL}images/ALS_logo.jpg`} alt="ALS" className="h-12 object-contain" />
            <img src={`${import.meta.env.BASE_URL}images/copcan-logo2.jpg`} alt="Copcan" className="h-12 object-contain" />
            <img src={`${import.meta.env.BASE_URL}images/scansa-logo2.jpg`} alt="Scansa" className="h-12 object-contain" />
            <img src={`${import.meta.env.BASE_URL}images/QM-Logo.jpg`} alt="QM" className="h-12 object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
