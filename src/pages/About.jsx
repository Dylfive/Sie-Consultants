import { CheckCircle2, Award, Briefcase, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-brand-light pb-20">
      {/* Hero */}
      <div className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            High Quality, Eco-Driven Environmental Consulting
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Commitment</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are committed to providing professional results while maintaining the integrity of our environmental values. Located in beautiful Cowichan Valley, we believe our commitment and moral obligation plays an essential role in the improvement of our environment.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SIE has substantial experience in completing Stage 1 and Stage 2 Preliminary Site Investigations (PSIs) and Detailed Site Investigations (DSIs) for a wide range of residential, commercial, and industrial properties.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              An environmental consultant firm specializing in the cleanup of properties contaminated from leaky underground oil tanks and other deleterious substances.
            </p>
          </div>
          <div className="bg-brand-gold p-10 rounded-2xl shadow-xl text-brand-dark">
            <h3 className="text-2xl font-bold mb-6">Eric Gauvin, P.Eng</h3>
            <p className="text-lg mb-6 font-medium">President, SIE Consultants Ltd.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>30+ years in civil and environmental engineering</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>Over 600 projects completed successfully</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>Expertise in large industrial cleanups & complex assessments</span>
              </li>
            </ul>
            <p className="italic">
              "Eric's experience as a site engineer provides his clients the confidence in knowing SIE Consultants Ltd. will maintain quality assurance and control no matter the size of the project."
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100">
            <Briefcase className="w-12 h-12 text-brand-gold mx-auto mb-4" />
            <div className="text-4xl font-bold text-brand-dark mb-2">600+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100">
            <Award className="w-12 h-12 text-brand-gold mx-auto mb-4" />
            <div className="text-4xl font-bold text-brand-dark mb-2">30+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100">
            <Users className="w-12 h-12 text-brand-gold mx-auto mb-4" />
            <div className="text-4xl font-bold text-brand-dark mb-2">100%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
