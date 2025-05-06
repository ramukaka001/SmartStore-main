import axios from 'axios';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/requestRoute', formData);
      console.log('Response:', response.data);
      alert('Request submitted successfully!');
      setFormData({
        name: '',
        surname: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Submission failed. Please try again later.');
    }
  };


  return (
    <section className="py-20 bg-primary-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-dark-800 mb-6">Connect With Our Team</h2>
            <p className="text-dark-600 mb-12">
              Schedule A Meeting With Our Executive Team To Discuss Investment
              Opportunities And Learn More About Our Growth Strategy.
            </p>

            <div className="space-y-6">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Vikas Sharma</h4>
                    <p className="text-dark-500 text-sm">Founder & CEO</p>
                    <p className="text-primary-600 text-sm">vikas@nikkismart.com</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-dark-800 mb-6">Request More Information</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-dark-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>

              <div>
                <label htmlFor="surname" className="block text-dark-700 mb-2">Surname</label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-dark-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-dark-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;