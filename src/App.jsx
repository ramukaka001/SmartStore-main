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
  const [modalType, setModalType] = useState(null);

  const openLeadForm = () => setModalType('lead');
  const openScheduleForm = () => setModalType('schedule');
  const closeModal = () => setModalType(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero openLeadForm={openLeadForm} openScheduleForm={openScheduleForm} />
        <Services />
        <HowItWorks />
        <DeliveryApp />
        <MarketComparison />
{/*         <Testimonials /> */}
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      {modalType === 'lead' && <LeadFormModal onClose={closeModal} />}
      {modalType === 'schedule' && <ScheduleFormModal onClose={closeModal} />}
    </div>
  );
}

export default App;
