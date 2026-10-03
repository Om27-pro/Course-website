import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Map } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interestedCar: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    if (!formData.message.trim()) errs.message = 'Message cannot be empty.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interestedCar: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact APEX MOTORS
          </h1>
          <p className="text-gray-300 text-base">
            Have questions about a specific model, financing, or scheduling a private showroom consultation? Our team is here to assist you.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#181818] border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
              <p className="text-xs text-gray-400 mt-1">Fill out the form below and our advisor will get back to you promptly.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-3 animate-fade-in my-8">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Delivered Successfully!</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to APEX MOTORS. A dedicated luxury auto specialist will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs text-accent hover:underline font-semibold"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-[#111111] border ${
                        errors.name ? 'border-accent' : 'border-gray-700/80'
                      } rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors`}
                    />
                    {errors.name && <p className="text-xs text-accent mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#111111] border ${
                        errors.email ? 'border-accent' : 'border-gray-700/80'
                      } rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors`}
                    />
                    {errors.email && <p className="text-xs text-accent mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Model Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-[#111111] border ${
                        errors.phone ? 'border-accent' : 'border-gray-700/80'
                      } rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors`}
                    />
                    {errors.phone && <p className="text-xs text-accent mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Interested Car Model (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. BMW 3 Series, Audi A4"
                      value={formData.interestedCar}
                      onChange={(e) => setFormData({ ...formData, interestedCar: e.target.value })}
                      className="w-full bg-[#111111] border border-gray-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help you (e.g. test drive request, trade-in valuation, price quotes)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-[#111111] border ${
                      errors.message ? 'border-accent' : 'border-gray-700/80'
                    } rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors`}
                  />
                  {errors.message && <p className="text-xs text-accent mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-6 rounded-xl shadow-xl shadow-accent/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>

              </form>
            )}

          </div>


          {/* Right Column: Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-8">

            {/* Contact Details Card */}
            <div className="bg-[#181818] border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-white">Showroom Contact Information</h2>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Showroom Address</h3>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      100 Luxury Boulevard, Auto District, Sector 42, Cyber City, Gurgaon, Haryana 122002
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Direct Line</h3>
                    <p className="text-xs text-gray-400 mt-1">+91 (800) 456-7890 / +91 (800) 456-7891</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Email Address</h3>
                    <p className="text-xs text-gray-400 mt-1">inquiries@apexmotors.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Showroom Hours</h3>
                    <p className="text-xs text-gray-400 mt-1">Mon - Sat: 9:00 AM - 8:00 PM | Sun: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Visual Container */}
            <div className="bg-[#181818] border border-gray-800 rounded-3xl overflow-hidden p-2 space-y-2">
              <div className="flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-gray-300">
                <Map className="w-4 h-4 text-accent" />
                <span>Showroom Location Map</span>
              </div>

              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
                <iframe
                  title="APEX MOTORS Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.288226938927!2d77.0878!3d28.4718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI4JzE4LjUiTiA3N8KwMDUnMTYuMSJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
