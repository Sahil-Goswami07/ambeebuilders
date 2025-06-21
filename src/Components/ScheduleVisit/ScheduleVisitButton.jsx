import React, { useState } from 'react';
import ScheduleVisitModal from './ScheduleVisitModal';
import { FiSmartphone } from 'react-icons/fi';

const ScheduleVisitButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition duration-300"
      >
        <FiSmartphone className="mr-2" />
        Schedule a Site Visit
      </button>
      <ScheduleVisitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ScheduleVisitButton;
