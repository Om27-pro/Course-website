import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Fuel,
  Gauge,
  Zap,
  Users,
  CheckCircle2,
  ArrowLeft,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  X,
  Check
} from 'lucide-react';
import { cars } from '../data/cars';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((c) => c.id === id);

  const [activeImage, setActiveImage] = useState(car ? car.image : '');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dealerFormSubmitted, setDealerFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!car) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center p-6">
        <div className="bg-[#181818] border border-gray-800 rounded-2xl p-10 text-center max-w-md space-y-4">
          <h2 className="text-2xl font-bold">Vehicle Not Found</h2>
          <p className="text-gray-400 text-sm">
            The car model you are looking for does not exist or has been moved from our inventory.
          </p>
          <Link
            to="/cars"
            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-2.5 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Cars</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDealerFormSubmitted(true);
    setTimeout(() => {
      setDealerFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2500);
  };

  const galleryImages = car.images && car.images.length > 0 ? car.images : [car.image];

  return (
    <div className="min-h-screen bg-[#111111] text-white py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Inventory</span>
        </button>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Image */}
            <div className="relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 h-[320px] sm:h-[480px] shadow-2xl">
              <img
                src={activeImage || car.image}
                alt={car.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#111111]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent border border-accent/20">
                {car.brand}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {galleryImages.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {galleryImages.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative rounded-xl overflow-hidden w-24 h-20 shrink-0 border-2 transition-all ${
                      (activeImage || car.image) === imgUrl
                        ? 'border-accent scale-95 shadow-lg shadow-accent/20'
                        : 'border-gray-800 hover:border-gray-600 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`${car.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>


          {/* Right Column: Car Details & CTAs */}
          <div className="lg:col-span-5 space-y-6">

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                {car.brand} Luxury
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                {car.name}
              </h1>
              <p className="text-sm text-gray-400 mt-1 italic">{car.tagline}</p>
            </div>

            {/* Price Tag */}
            <div className="bg-[#181818] border border-gray-800 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Ex-Showroom Price</p>
                <p className="text-3xl font-black text-white mt-0.5">{car.price}</p>
              </div>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-semibold">
                In Stock
              </span>
            </div>

            {/* Key Specifications Grid */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Key Specifications</h3>
              <div className="grid grid-cols-2 gap-3">

                <div className="bg-[#181818] border border-gray-800 p-3.5 rounded-xl flex items-center space-x-3">
                  <Fuel className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <p className="text-[11px] text-gray-400">Fuel Type</p>
                    <p className="text-sm font-semibold text-white">{car.fuel}</p>
                  </div>
                </div>

                <div className="bg-[#181818] border border-gray-800 p-3.5 rounded-xl flex items-center space-x-3">
                  <Gauge className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <p className="text-[11px] text-gray-400">Transmission</p>
                    <p className="text-sm font-semibold text-white">{car.transmission}</p>
                  </div>
                </div>

                <div className="bg-[#181818] border border-gray-800 p-3.5 rounded-xl flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <p className="text-[11px] text-gray-400">Mileage / Range</p>
                    <p className="text-sm font-semibold text-white">{car.mileage}</p>
                  </div>
                </div>

                <div className="bg-[#181818] border border-gray-800 p-3.5 rounded-xl flex items-center space-x-3">
                  <Users className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <p className="text-[11px] text-gray-400">Seating Capacity</p>
                    <p className="text-sm font-semibold text-white">{car.seatingCapacity}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Engine Specs */}
            <div className="bg-[#181818] border border-gray-800 p-4 rounded-xl flex items-center justify-between text-sm">
              <span className="text-gray-400">Engine Displacement:</span>
              <span className="font-bold text-white">{car.engine}</span>
            </div>

            {/* Contact Dealer CTA */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-white text-base font-semibold py-4 px-6 rounded-xl shadow-xl shadow-accent/25 transition-all transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Contact Dealer</span>
              </button>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium py-3 px-6 rounded-xl border border-gray-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Schedule Test Drive</span>
              </Link>
            </div>

            {/* Trust badge */}
            <div className="flex items-center space-x-2 text-xs text-gray-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Includes 3-Year APEX Warranty & 24/7 Roadside Assistance</span>
            </div>

          </div>

        </div>


        {/* Lower Section: Vehicle Description & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-gray-800">

          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-bold text-white">About {car.name}</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              {car.description}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl font-bold text-white">Standard Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {car.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-sm text-gray-300 bg-[#181818] p-3 rounded-xl border border-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>


      {/* Contact Dealer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#181818] border border-gray-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </button>

            {dealerFormSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Sent!</h3>
                <p className="text-gray-300 text-sm">
                  Thank you for your interest in the <strong className="text-white">{car.name}</strong>. Our senior luxury advisor will contact you within 30 minutes.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">Inquire Dealer</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Contact Dealership</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Request price breakups, test drive slots, or financing options for <strong>{car.name}</strong>.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111111] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#111111] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#111111] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Message / Requirements</label>
                    <textarea
                      rows={3}
                      placeholder={`I am interested in buying or test driving the ${car.name}. Please share details.`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#111111] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-accent/20"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default CarDetails;
