import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Tag, CreditCard, Award, ArrowRight, ChevronRight, Star } from 'lucide-react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const Home = () => {
  // Get featured cars (3 sample cars)
  const featuredCars = cars.filter(car => car.featured).slice(0, 3);

  const features = [
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Quality Cars",
      description: "Rigorous 200-point inspection ensuring all luxury vehicles meet uncompromised quality standards."
    },
    {
      icon: <Tag className="w-8 h-8 text-accent" />,
      title: "Affordable Prices",
      description: "Transparent pricing without hidden dealership fees and unbeatable competitive luxury value."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-accent" />,
      title: "Easy Financing",
      description: "Custom tailored low-interest payment plans and instant pre-approvals for hassle-free ownership."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Trusted Service",
      description: "Dedicated account managers, certified service support, and comprehensive roadside warranty coverage."
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#181818] via-[#111111] to-[#0d0d0d] pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-xs font-semibold text-accent uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-accent" />
                <span>The Premier Luxury Auto Dealer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Drive Your <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-accent">
                  Dream Car
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover an exclusive collection of high-performance luxury automobiles. Unmatched quality, transparent pricing, and world-class customer excellence.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Link
                  to="/cars"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-accent/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore Cars</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gray-800/80 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl border border-gray-700 transition-all hover:border-gray-600"
                >
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Stats pill */}
              <div className="pt-8 border-t border-gray-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="text-2xl font-extrabold text-white">500+</p>
                  <p className="text-xs text-gray-400">Luxury Cars Sold</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">99%</p>
                  <p className="text-xs text-gray-400">Satisfied Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">100%</p>
                  <p className="text-xs text-gray-400">Verified Quality</p>
                </div>
              </div>

            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none rounded-3xl overflow-hidden border border-gray-800 shadow-2xl shadow-black/80 group">
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200"
                  alt="BMW Luxury Car Hero"
                  className="w-full h-[380px] sm:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#181818]/90 backdrop-blur-md p-4 rounded-2xl border border-gray-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-accent font-semibold uppercase tracking-wider">Featured Vehicle</p>
                    <p className="text-lg font-bold text-white">BMW 3 Series</p>
                  </div>
                  <Link
                    to="/cars/bmw-3-series"
                    className="p-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. FEATURED CARS SECTION */}
      <section className="py-16 sm:py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Handpicked Fleet</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Featured Vehicles
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-lg">
                Explore our top-performing premium vehicles engineered for elegance, power, and prestige.
              </p>
            </div>

            <Link
              to="/cars"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
            >
              <span>View All Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

        </div>
      </section>


      {/* 3. WHY CHOOSE US SECTION */}
      <section className="py-16 sm:py-24 bg-[#181818] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Commitment</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Why Choose APEX MOTORS
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              We provide an unparalleled dealership experience built on transparency, passion, and uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 4. CALL TO ACTION SECTION */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#181818] via-[#221315] to-[#181818]">
        {/* Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Find Your Perfect Car Today
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Browse through our wide selection of luxury sedans, sport coupes, and electric tourers. Schedule a personalized test drive with our expert advisors today.
          </p>

          <div className="pt-4">
            <Link
              to="/cars"
              className="inline-flex items-center space-x-3 bg-accent hover:bg-accent-hover text-white text-base font-semibold px-9 py-4 rounded-xl shadow-xl shadow-accent/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Browse Cars</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
