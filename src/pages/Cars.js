import React, { useState, useMemo } from 'react';
import { Search, Filter, RotateCcw, Car as CarIcon } from 'lucide-react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const Cars = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('All');
  const [selectedTransmission, setSelectedTransmission] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const fuelTypes = ['All', 'Petrol', 'Diesel', 'Electric'];
  const transmissionTypes = ['All', 'Automatic', 'Manual'];
  const priceRanges = [
    { label: 'All Prices', value: 'All' },
    { label: 'Under ₹50 Lakh', value: 'under-50' },
    { label: '₹50 Lakh - ₹1 Crore', value: '50-100' },
    { label: 'Above ₹1 Crore', value: 'above-100' },
  ];

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      // Search match
      const matchesSearch =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase());

      // Fuel match
      const matchesFuel = selectedFuel === 'All' || car.fuel.toLowerCase() === selectedFuel.toLowerCase();

      // Transmission match
      const matchesTransmission =
        selectedTransmission === 'All' || car.transmission.toLowerCase() === selectedTransmission.toLowerCase();

      // Price match
      let matchesPrice = true;
      if (selectedPriceRange === 'under-50') {
        matchesPrice = car.numericPrice < 5000000;
      } else if (selectedPriceRange === '50-100') {
        matchesPrice = car.numericPrice >= 5000000 && car.numericPrice <= 10000000;
      } else if (selectedPriceRange === 'above-100') {
        matchesPrice = car.numericPrice > 10000000;
      }

      return matchesSearch && matchesFuel && matchesTransmission && matchesPrice;
    });
  }, [searchQuery, selectedFuel, selectedTransmission, selectedPriceRange]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedFuel('All');
    setSelectedTransmission('All');
    setSelectedPriceRange('All');
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
            Showroom Collection
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Explore Luxury Fleet
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Browse our full inventory of premium luxury automobiles. Filter by brand, price, fuel, or transmission to find your perfect vehicle.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#181818] border border-gray-800 rounded-2xl p-6 shadow-xl space-y-6">

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by car model or brand (e.g., BMW, Mercedes, Audi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111111] border border-gray-700/80 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-gray-800">

            {/* Fuel Type Filter */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">Fuel Type</label>
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full bg-[#111111] border border-gray-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors cursor-pointer"
              >
                {fuelTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'All' ? 'All Fuel Types' : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Transmission Filter */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">Transmission</label>
              <select
                value={selectedTransmission}
                onChange={(e) => setSelectedTransmission(e.target.value)}
                className="w-full bg-[#111111] border border-gray-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors cursor-pointer"
              >
                {transmissionTypes.map((trans) => (
                  <option key={trans} value={trans}>
                    {trans === 'All' ? 'All Transmissions' : trans}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">Price Range</label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full bg-[#111111] border border-gray-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors cursor-pointer"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Active Filter Indicator & Reset */}
          <div className="flex items-center justify-between pt-2 text-xs text-gray-400">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-accent" />
              <span>
                Showing <strong className="text-white">{filteredCars.length}</strong> of{' '}
                <strong className="text-white">{cars.length}</strong> vehicles
              </span>
            </div>

            {(searchQuery || selectedFuel !== 'All' || selectedTransmission !== 'All' || selectedPriceRange !== 'All') && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center space-x-1.5 text-accent hover:text-accent-light font-medium transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="bg-[#181818] border border-gray-800 rounded-2xl p-12 text-center space-y-4 my-8">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto text-accent">
              <CarIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">No Vehicles Found</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              We couldn't find any vehicles matching your current filter criteria. Try adjusting your search query or reset filters.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-2.5 rounded-xl transition-colors shadow-lg shadow-accent/20"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Cars;
