import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const TestimonialCard = ({ image, name, role, company }) => {
  return (
    <div className="bg-dark-900 rounded-2xl overflow-hidden text-white relative group">
      <div className="relative">
        <img src={image} alt={name} className="w-full object-cover aspect-[3/4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-300">{role} of {company}</p>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors">
            <FaPlay className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Albert Flores',
      role: 'Founder',
      company: 'Geartap'
    },
    {
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Leslie Alexander',
      role: 'Co-Founder',
      company: 'Womenfit'
    },
    {
      image: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Courtney Henry',
      role: 'Founder',
      company: 'Chi Beauty'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Over 1000+ people trust us</h2>
        <p className="text-dark-600 text-center max-w-2xl mx-auto mb-12">
          There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have 
          Suffered Alteration In Some Form, By Injected Humour, Or Randomised
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="text-accent-600 inline-flex items-center hover:text-accent-700 font-medium">
            See all reviews by our customers
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;