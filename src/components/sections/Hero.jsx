import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = ({ openLeadForm }) => {
  return (
    <section className="pt-24 lg:pt-32 pb-20 bg-primary-50 relative" id="home">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-800 mb-6">
              Shift Your Store<br />In To Smart<br />Store
            </h1>
            <p className="text-dark-600 mb-8 max-w-lg">
              There Are Many Variations Of Passages Of Lorem Ipsum Available, 
              But The Majority Have Suffered Alteration In Some Form, By Injected 
              Humour, Or Randomised
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={openLeadForm}
                className="btn btn-primary uppercase"
              >
                INVESTMENT
              </button>
              <button
                onClick={openLeadForm}
                className="btn btn-outline uppercase">
                SCHEDULE MEETING
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all">
                <FaFacebook className="text-dark-600" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all">
                <FaInstagram className="text-dark-600" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all">
                <FaTwitter className="text-dark-600" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all">
                <FaEnvelope className="text-dark-600" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg" 
                alt="Shop owner in store" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 z-20 w-full max-w-md rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn-ilbbcin.nitrocdn.com/kGDEjZILxuOVezdVfWNQgddUsvRbwyiW/assets/images/optimized/rev-1744621/hrfinservices.com/wp-content/uploads/2024/07/business-loan-images.jpg" 
                alt="Smart store technology" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;