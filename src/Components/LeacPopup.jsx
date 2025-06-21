import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500000); // Show after 30 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 h-full z-50 transform transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className=" text-black w-full sm:w-[100vw] md:w-[30vw] h-full shadow-lg p-6 relative bg-amber-50">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          <IoClose />
        </button>

        <h2 className="text-xl font-bold mb-4">Schedule a Site Visit</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Select Property</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option value="">-- Choose a property --</option>
              <option value="sb-heights">SB Heights-II</option>
              <option value="sukriti-villa">Sukriti Villa</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Select Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white font-bold py-2 rounded hover:bg-amber-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
