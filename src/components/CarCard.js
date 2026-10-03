import React from 'react';
import { Link } from 'react-router-dom';
import { Fuel, Gauge, ArrowRight } from 'lucide-react';

const CarCard = ({ car }) => {
  return (
    <div className="group bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 flex flex-col h-full transform hover:-translate-y-1.5">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-900">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-[#111111]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/20">
          {car.fuel}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
              {car.brand}
            </span>
            <span className="text-xs text-gray-500 font-medium">{car.seatingCapacity}</span>
          </div>

          <h3 className="text-xl font-bold text-white mt-1 group-hover:text-accent transition-colors">
            {car.name}
          </h3>

          <div className="mt-3 text-2xl font-extrabold text-white">
            {car.price}
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-2 py-3 border-y border-gray-800/80 text-xs text-gray-400">
          <div className="flex items-center space-x-2">
            <Fuel className="w-4 h-4 text-accent" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="w-4 h-4 text-accent" />
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          to={`/cars/${car.id}`}
          className="inline-flex items-center justify-center space-x-2 w-full bg-gray-800 hover:bg-accent text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 group-hover:bg-accent shadow-md"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
