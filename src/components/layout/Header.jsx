import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold flex items-center">
            <span className="text-dark-800">KIRANEST</span>
            <span className="text-accent-500">GROCERY</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="header-link">Home</a>
          <a href="#about" className="header-link">About Us</a>
          <a href="#services" className="header-link">Services</a>
          <a href="#products" className="header-link">Products</a>
          <a href="#blog" className="header-link">Blog</a>
          <a href="#contact" className="btn btn-primary flex items-center">
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark-800 p-2 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg">
          <nav className="container py-4 flex flex-col space-y-4">
            <a href="#home" className="header-link py-2" onClick={toggleMenu}>Home</a>
            <a href="#about" className="header-link py-2" onClick={toggleMenu}>About Us</a>
            <a href="#services" className="header-link py-2" onClick={toggleMenu}>Services</a>
            <a href="#products" className="header-link py-2" onClick={toggleMenu}>Products</a>
            <a href="#blog" className="header-link py-2" onClick={toggleMenu}>Blog</a>
            <a href="#contact" className="btn btn-primary my-2 inline-block text-center" onClick={toggleMenu}>Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
