import React from 'react';
import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import DeliveryApp from './components/sections/DeliveryApp';
import MarketComparison from './components/sections/MarketComparison';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import ContactForm from './components/sections/ContactForm';
import LeadFormModal from './components/modals/LeadFormModal';
import ScheduleFormModal from './components/modals/ScheduleFormModal';

function App() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const openLeadForm = () => {
    setIsLeadFormOpen(true);
  };

  const closeLeadForm = () => {
    setIsLeadFormOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero openLeadForm={openLeadForm} />
        <Services />
        <HowItWorks />
        <DeliveryApp />
        <MarketComparison />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      {isLeadFormOpen && <LeadFormModal onClose={closeLeadForm} />}
      {isLeadFormOpen && <ScheduleFormModal onClose={closeLeadForm} />}
    </div>
  );
}

export default App;