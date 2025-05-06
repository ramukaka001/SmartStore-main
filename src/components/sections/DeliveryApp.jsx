import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const DeliveryApp = () => {
  return (
    <section className="py-20 bg-primary-100">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-10 md:mb-0 md:mr-8">
            <img 
              src="https://images.pexels.com/photos/6169051/pexels-photo-6169051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Delivery App" 
              className="w-40 h-auto"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-dark-800 mb-4">We Also Provide The Delivery App</h2>
            <p className="text-dark-600 mb-8 max-w-2xl mx-auto md:mx-0">
              There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition-colors">
                <FaGooglePlay className="mr-2" size={24} />
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
              
              <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition-colors">
                <FaApple className="mr-2" size={24} />
                <div>
                  <div className="text-xs">DOWNLOAD ON THE</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block md:ml-8">
            <img 
              src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Mobile App" 
              className="w-40 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryApp;