import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="faq-item">
      <button 
        className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="font-medium text-lg text-dark-800">{question}</span>
        <span className="text-primary-500 ml-4">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-dark-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
    },
    {
      question: 'How does billing work?',
      answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
    },
    {
      question: 'How do I change my account email?',
      answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
    }
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="container">
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="text-dark-600 text-center max-w-3xl mx-auto mb-12">
          Everything you need to know about the product and billing.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-10 mt-16 max-w-3xl mx-auto text-center">
          <div className="w-24 h-12 flex items-center justify-center mx-auto mb-6">
            <img 
              src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Support Team" 
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <img 
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Support Team" 
              className="w-12 h-12 rounded-full object-cover border-2 border-white -ml-4"
            />
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Support Team" 
              className="w-12 h-12 rounded-full object-cover border-2 border-white -ml-4"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-dark-600 mb-6">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <button className="btn btn-primary inline-block">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;