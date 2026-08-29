import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'sienvironmental@shaw.ca';

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-brand-light py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            When your environment needs help, reach out directly to SIE Consultants Ltd. for your environmental consulting needs.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
          {/* Main Direct Email Highlight Card */}
          <div className="bg-brand-dark text-white rounded-xl p-8 mb-10 text-center relative overflow-hidden">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-gold/20 text-brand-gold-light rounded-full mb-4">
              <Mail className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-brand-gold-light">Email Us Directly</h2>
            <p className="text-gray-300 text-sm mb-6">
              Click below to copy our email address or open your default mail application.
            </p>

            <div className="bg-white/10 rounded-lg p-4 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/15">
              <span className="font-mono text-xl sm:text-2xl font-semibold tracking-wide text-white break-all">
                {emailAddress}
              </span>
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-brand-gold text-brand-dark font-bold rounded-md hover:bg-brand-gold-light transition-colors text-sm cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-brand-dark" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Email
                  </>
                )}
              </button>
            </div>

            <div className="mt-6">
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center text-sm font-medium text-brand-gold-light hover:underline"
              >
                Open in Email App &rarr;
              </a>
            </div>
          </div>

          {/* Secondary Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="flex items-start bg-brand-light/50 p-6 rounded-xl border border-gray-100">
              <Phone className="w-6 h-6 text-brand-gold mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">Phone</h3>
                <a href="tel:250-812-6614" className="text-gray-700 hover:text-brand-gold font-medium transition-colors">
                  250-812-6614
                </a>
              </div>
            </div>

            <div className="flex items-start bg-brand-light/50 p-6 rounded-xl border border-gray-100">
              <MapPin className="w-6 h-6 text-brand-gold mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">Location</h3>
                <p className="text-gray-700 font-medium">
                  Vancouver Island, BC
                </p>
              </div>
            </div>

            <div className="flex items-start bg-brand-light/50 p-6 rounded-xl border border-gray-100">
              <Clock className="w-6 h-6 text-brand-gold mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">Business Hours</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  Mon – Fri: 9:00 AM – 5:00 PM<br />
                  Sat – Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
