import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ComparisonCard = ({ company, colorClass, features }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col">
      <h3 className={`text-lg font-semibold mb-4 flex items-center ${colorClass}`}>
        <span className={`w-4 h-4 rounded-full ${colorClass} mr-2`}></span>
        {company}
      </h3>
      <ul className="space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FaCheck className={`mr-2 ${colorClass}`} size={14} />
            <span className="text-dark-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MarketComparison = () => {
  const features = [
    '10-15 Min Delivery',
    '10 Cities Coverage',
    '97.5% On-Time Rate',
    'AI Route Optimization',
    '₹18 Avg. Delivery Cost'
  ];

  const companies = [
    { name: 'Our Services', color: 'text-blue-500' },
    { name: 'Zepto', color: 'text-yellow-500' },
    { name: 'Instamart', color: 'text-orange-500' },
    { name: 'Blinkit', color: 'text-purple-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-cyan-50">
      <div className="container">
        <h2 className="section-title">Market Comparison</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <ComparisonCard
              key={index}
              company={company.name}
              colorClass={company.color}
              features={features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketComparison;