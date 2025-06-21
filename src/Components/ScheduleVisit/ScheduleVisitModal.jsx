import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import emailjs from '@emailjs/browser';
process.env.NODE_ENV === 'production' ? emailjs.default : emailjs;

const ScheduleVisitModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    property: '',
    date: '',
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        alert('Your visit has been scheduled!');
        setFormData({ name: '', phone: '', property: '', date: '' });
        onClose();
      })
      .catch((error) => {
        alert('Something went wrong. Please try again.');
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="text-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          <IoClose />
        </button>
        <h2 className="text-xl font-bold mb-4">Schedule a Site Visit</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Select Property</label>
            <select
              name="property"
              value={formData.property}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            >
              <option value="">-- Choose a property --</option>
              <option value="SB Heights-II">SB Heights-II</option>
              <option value="Sukriti Villa">Sukriti Villa</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Select Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-600 text-white font-bold py-2 rounded hover:bg-amber-700"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleVisitModal;
