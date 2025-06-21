import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ onEnquiryClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', target: 'homeSection' },
    { label: 'Projects', target: 'projectsSection' },
    { label: 'Testimonials', target: 'testimonialsSection' },
    { label: 'About Us', target: 'aboutUsSection' },
  ];

  return (
    <nav className="bg-white/30 shadow-md sticky top-0 z-50 backdrop-blur-md ">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#100922]">  
            <span className="text-amber-600">AMBEE</span> Builders
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.target}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-[#100922] hover:shadow-xl md:p-2 rounded-sm cursor-pointer text-lg transition"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={onEnquiryClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded shadow transition"
            >
              Enquiry Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.target}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-amber-600 cursor-pointer text-base transition"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                onEnquiryClick();
                setIsOpen(false);
              }}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded shadow transition"
            >
              Enquiry Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
