import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Connect with local Store',
      description: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised',
      imageUrl: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imagePosition: 'right'
    },
    {
      number: 2,
      title: 'Analysing their Store',
      description: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised',
      imageUrl: 'https://images.pexels.com/photos/7681079/pexels-photo-7681079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imagePosition: 'left'
    },
    {
      number: 3,
      title: 'Give proper solution for store',
      description: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised',
      imageUrl: 'https://images.pexels.com/photos/2908175/pexels-photo-2908175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imagePosition: 'right'
    },
    {
      number: 4,
      title: 'Customer satisfaction',
      description: 'There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised',
      imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imagePosition: 'left'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">How Our Enterprises Work For It</h2>
        
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Curved arrows connecting steps */}
              {index < steps.length - 1 && (
                <div className={`absolute w-24 h-24 hidden lg:block ${
                  index % 2 === 0 
                    ? 'right-1/3 -translate-x-1/2' 
                    : 'left-1/3 translate-x-1/2'
                } top-full -mt-12 z-10`}>
                  <div className={`w-full h-full border-4 border-primary-500 rounded-full ${
                    index % 2 === 0 
                      ? 'border-l-0 border-t-0' 
                      : 'border-r-0 border-b-0'
                  }`}></div>
                </div>
              )}

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                step.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={`order-2 ${step.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={step.imageUrl} 
                      alt={step.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className={`order-1 ${step.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-2xl font-semibold mb-4">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-dark-600 text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;