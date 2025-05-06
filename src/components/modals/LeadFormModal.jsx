import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const LeadFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    amount: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/[^0-9]/g, ''))) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    
    if (!formData.amount.trim()) {
      newErrors.amount = 'Amount is required';
    } else if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be a positive number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:3000/api/investmentRoute', formData);
        console.log('Backend Response:', response.data);
        alert('Thank you for your interest! Our team will contact you soon.');
        onClose();
      } catch (error) {
        console.log('Error submitting form:', error);
        alert('There was an error submitting your request. Please try again later.');
      }
    }
  };
  
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-fadeIn">
        <button 
          className="absolute top-4 right-4 text-dark-400 hover:text-dark-600"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        
        <div className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-dark-800 mb-2">Investment Inquiry</h2>
            <p className="text-dark-600">
              Fill out the form below and our team will get in touch with you shortly.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-dark-700 mb-1 font-medium">Full Name*</label>
              <input 
                type="text" 
                id="username" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.username ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary-300'
                }`}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-dark-700 mb-1 font-medium">Email*</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="mobile" className="block text-dark-700 mb-1 font-medium">Mobile Number*</label>
              <input 
                type="tel" 
                id="mobile" 
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="9876543210"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.mobile ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary-300'
                }`}
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>
            
            <div>
              <label htmlFor="amount" className="block text-dark-700 mb-1 font-medium">Investment Amount*</label>
              <input 
                type="text" 
                id="amount" 
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="50000"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.amount ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary-300'
                }`}
              />
              {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-dark-700 mb-1 font-medium">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3" 
                placeholder="Tell us about your requirements"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full btn btn-primary py-3"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadFormModal;