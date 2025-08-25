import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaDribbble, FaProductHunt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand and description */}
          <div className="lg:col-span-2">
            <a href="/" className="text-xl font-bold flex items-center mb-4">
              <span className="text-white">KIRANEST</span>
              <span className="text-accent-500">GROCERY</span>
            </a>
            <p className="text-gray-400 mb-4">
              Design amazing digital experiences that create more happy in the world.
            </p>
            <div className="flex flex-col w-full gap-0.5 text-gray-500 mb-4">
                <p><strong>Founder & Ceo:</strong> kamal kishore saini</p>
                <p><strong>Adress:</strong> 402, 4th floor shri ganesh darshan building , mandvi lane versova village mumbai, 400061</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Overview</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  Solutions
                  <span className="ml-2 px-2 py-0.5 bg-primary-700 text-white text-xs rounded-full">New</span>
                </a>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Releases</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Media kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help centre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Licenses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Settings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2077 Untitled UI. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaProductHunt size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaDribbble size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
