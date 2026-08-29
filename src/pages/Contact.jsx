import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error as user types
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus('submitting');

    // Simulate API submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-brand-light py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            When your environment needs help, contact SIE Consultants Ltd. for all your environmental site assessments, heating oil tank removals and remediation concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="bg-brand-dark p-10 text-white">
            <h2 className="text-2xl font-bold mb-8 text-brand-gold-light">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-brand-gold-light mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-300 mt-1">250-812-6614</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-gold-light mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:sienvironmental@shaw.ca" className="text-gray-300 hover:text-brand-gold-light transition-colors mt-1 block">
                    sienvironmental@shaw.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-gold-light mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-300 mt-1">
                    Vancouver Island, BC
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-brand-gold-light mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <p className="text-gray-300 mt-1">
                    Monday - Friday: 9:00 AM - 5:00 PM<br/>
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="p-10 flex flex-col justify-center">
            {submitStatus === 'success' ? (
              <div className="text-center py-12 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-brand-gold mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-brand-dark mb-2">Message Sent!</h2>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                  Thank you for reaching out to SIE Consultants Ltd. We have received your message and will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="inline-block bg-brand-dark text-white font-bold py-3 px-8 rounded-md hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Send Us A Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={submitStatus === 'submitting'}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors ${
                          errors.firstName ? 'border-red-500 bg-red-50/10' : 'border-gray-300'
                        }`}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={submitStatus === 'submitting'}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={submitStatus === 'submitting'}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/10' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={submitStatus === 'submitting'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={submitStatus === 'submitting'}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors ${
                        errors.message ? 'border-red-500 bg-red-50/10' : 'border-gray-300'
                      }`}
                      placeholder="Your message here..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-4 rounded-md hover:bg-brand-dark hover:text-white transition-colors duration-300 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {submitStatus === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin text-brand-dark" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
