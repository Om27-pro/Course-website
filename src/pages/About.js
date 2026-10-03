import React from 'react';
import { Target, Compass, Award, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Award className="w-7 h-7 text-accent" />,
      title: 'Uncompromised Quality',
      description: 'Every vehicle in our collection undergoes a comprehensive 200-point mechanical and aesthetic inspection before entering our showroom.'
    },
    {
      icon: <Shield className="w-7 h-7 text-accent" />,
      title: 'Absolute Transparency',
      description: 'Zero hidden dealer markups, clear history documentation, and straightforward pricing designed to foster long-term client trust.'
    },
    {
      icon: <Users className="w-7 h-7 text-accent" />,
      title: 'Personalized Concierge',
      description: 'Our automotive advisors provide tailored recommendations, seamless door-to-door delivery, and dedicated post-purchase support.'
    }
  ];

  const statistics = [
    { label: 'Years of Automotive Excellence', value: '15+' },
    { label: 'Curated Premium Vehicles Sold', value: '2,500+' },
    { label: 'Client Satisfaction Rating', value: '99.8%' },
    { label: 'Nationwide Service Networks', value: '45+' }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            About APEX MOTORS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Setting the Gold Standard in Luxury Mobility
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            APEX MOTORS is a premier automotive dealership dedicated to curating finest high-performance, executive, and luxury cars for discerning drivers.
          </p>
        </div>


        {/* Introduction Section with Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">Our Heritage</span>
            <h2 className="text-3xl font-bold text-white">
              Passion for Performance, Excellence in Every Detail
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded with a vision to redefine the luxury car buying journey, APEX MOTORS bridges the gap between automotive passion and effortless acquisition. We believe that purchasing a dream car should be as thrilling as driving it.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our showroom features a meticulously curated selection of legendary brands including BMW, Mercedes-Benz, Audi, Porsche, and Land Rover. Every automobile is certified, reconditioned to factory precision, and backed by robust warranty coverage.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Multi-point certified inspection on all inventory',
                'Comprehensive warranty and roadside assistance',
                'Flexible tailor-made luxury financing solutions',
                'Hassle-free trade-in and door-to-door delivery'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm text-gray-200">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Dealership Showroom"
                className="w-full h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
            </div>
          </div>

        </div>


        {/* Stats Strip */}
        <div className="bg-[#181818] border border-gray-800 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl sm:text-5xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-[#181818] border border-gray-800 p-8 sm:p-10 rounded-3xl space-y-4 hover:border-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              To empower automotive enthusiasts and luxury buyers with an uncompromising selection of world-class vehicles, delivered through transparent guidance, technological convenience, and outstanding service.
            </p>
          </div>

          <div className="bg-[#181818] border border-gray-800 p-8 sm:p-10 rounded-3xl space-y-4 hover:border-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              To remain the premier trusted automotive destination globally, setting new standards for premium vehicle curation, digital sales innovation, and customer satisfaction across every touchpoint.
            </p>
          </div>

        </div>


        {/* Values Cards Section */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl font-extrabold text-white">Core Pillars of Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#181818] border border-gray-800 p-8 rounded-2xl space-y-4 hover:border-accent/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#111111] border border-gray-700 flex items-center justify-center">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{val.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-[#181818] via-[#221315] to-[#181818] border border-gray-800 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Experience the APEX Difference?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Schedule a visit to our flagship showroom or explore our live digital inventory today.
          </p>
          <div>
            <Link
              to="/cars"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-accent/25 transition-all"
            >
              <span>Explore Fleet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
