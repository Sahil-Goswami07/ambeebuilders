import React, { useState } from 'react';
import { FaWhatsapp, FaWpforms } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
const emailjs = await import('@emailjs/browser').then(mod => mod.default || mod);
const FloatingButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_eqd7klw',       // Replace with your actual service ID
        'template_f33qe6p',      // Replace with your actual template ID
        formData,
        '_GBiTNXU1dwcIs4br'        // Replace with your actual public key
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', contact: '', message: '' });
        setShowForm(false);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Something went wrong: ' + (error.text || 'Check your EmailJS config'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={`relative font-sans transition-all duration-300 ${showForm ? 'min-h-screen overflow-hidden h-screen' : ''}`}>
      {/* Floating Buttons */}
      <div className="fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
        <a
          href="https://wa.me/+919351222583"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
        >
          <FaWhatsapp size={24} />
        </a>
        <button
          onClick={handleFormToggle}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          <FaWpforms size={24} />
        </button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative bg-white p-8 rounded-lg shadow-xl w-full max-w-xl mx-4">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-700 hover:text-gray-900"
              onClick={handleFormToggle}
              disabled={loading}
            >
              <IoClose />
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Schedule A Visit</h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm mb-1 text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 rounded border bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  required
                  className="w-full p-3 rounded border bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any message..."
                  className="w-full p-3 rounded border bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`bg-red-500 text-white py-3 rounded font-semibold hover:bg-red-600 transition ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : 'SUBMIT'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
