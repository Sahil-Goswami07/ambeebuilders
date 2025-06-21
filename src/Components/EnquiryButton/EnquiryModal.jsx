import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const EnquiryModal = ({ onClose }) => {
  return (
    <>
      {/* Blur Overlay */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm z-40" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative bg-amber-600 p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
          <button
            className="absolute top-3 right-3 text-2xl text-gray-700 hover:text-gray-900"
            onClick={onClose}
          >
            <IoClose />
          </button>
          <h3 className="text-2xl font-semibold text-center mb-6">Contact Us</h3>
          <div className="flex flex-row justify-around gap-6">
            <a href="tel:7627009506" className="flex flex-col items-center text-white hover:underline hover:text-amber-900 transform translate-x-1/2 transition duration-300 group-hover:scale-110 ">
              <FaPhoneAlt size={40} />
              <span className="mt-2">Call Us</span>
            </a>
            <a href="mailto:example@example.com" className="flex flex-col items-center text-white hover:underline  hover:text-amber-900 ">
              <FaEnvelope size={40} />
              <span className="mt-2">Email Us</span>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white hover:underline  hover:text-amber-900">
              <FaWhatsapp size={40} />
              <span className="mt-2">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryModal;
