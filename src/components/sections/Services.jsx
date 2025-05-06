import React from 'react';
import { FaBoxOpen, FaStore, FaMobileAlt, FaTruck } from 'react-icons/fa';

const ServiceCard = ({ icon, title, imageUrl }) => {
  return (
    <div className="service-card flex flex-col">
      <div className="overflow-hidden rounded-lg mb-6 h-48">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
      </div>
      <div className="flex items-center mt-4">
        <div className="w-10 h-10 flex items-center justify-center text-accent-500 bg-accent-50 rounded-md">
          {icon}
        </div>
        <h3 className="text-xl font-semibold ml-3 text-dark-800">{title}</h3>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Inventory Management',
      icon: <FaBoxOpen size={20} />,
      imageUrl: 'https://images.pexels.com/photos/4481531/pexels-photo-4481531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Smart Store',
      icon: <FaStore size={20} />,
      imageUrl: 'https://media.istockphoto.com/id/1367617022/photo/smart-retail-management-system.jpg?s=612x612&w=0&k=20&c=mOL4OxbLpCTFmMhX_SFC7K_68LvK22H0ddzc4EqqbiM='
    },
    {
      title: 'Application Management',
      icon: <FaMobileAlt size={20} />,
      imageUrl: 'https://images.pexels.com/photos/6893859/pexels-photo-6893859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Delivery Services',
      icon: <FaTruck size={20} />,
      imageUrl: 'https://images.pexels.com/photos/5025412/pexels-photo-5025412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;