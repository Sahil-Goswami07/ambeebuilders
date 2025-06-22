import React from 'react';
import { FaChartLine, FaDraftingCompass, FaHandshake, FaUserAlt, FaClipboardList, FaHardHat } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Importing framer-motion

const features = [
  {
    icon: <FaChartLine size={40} className="text-amber-600 mx-auto" />,
    title: 'Commitment to Growth',
    description: 'We’re committed to creating a positive and memorable experience for clients — from timely communication to ensuring they get the best value.'
  },
  {
    icon: <FaDraftingCompass size={40} className="text-amber-600 mx-auto" />,
    title: 'Effective Development',
    description: 'Real estate development is effective when thoughtful planning meets flawless execution—resulting in properties that perform and profit.'
  },
  {
    icon: <FaHandshake size={40} className="text-amber-600 mx-auto" />,
    title: 'Trusted Relationship',
    description: 'Strong, lasting relationships are the cornerstone of our success — built on trust and maintained with integrity.'
  },
  {
    icon: <FaUserAlt size={40} className="text-amber-600 mx-auto" />,
    title: 'Customer First Approach',
    description: 'Our philosophy places customer needs first, making satisfaction our top priority while taking a comprehensive approach to the entire experience.'
  },
  {
    icon: <FaClipboardList size={40} className="text-amber-600 mx-auto" />,
    title: 'Quality with Timelines',
    description: 'With a focus on quality and modern design, we execute every project with excellence and deliver within the promised timeline.'
  },
  {
    icon: <FaHardHat size={40} className="text-amber-600 mx-auto" />,
    title: 'Excellence in Execution',
    description: 'Driven by ambition, we measure success through results and embrace continuous improvement as a way of working.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 animated-gradient-background text-center px-6 md:px-16 lg:px-32">
      <h2 className="text-4xl md:text-5xl font-bold text-[#100922] mb-12">
        | Why Choose <span className="text-[#E17202]">Us</span>
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }} // Start from bottom
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 0.6, delay: idx * 0.1 }} // Animation delay based on index
            viewport={{ once: true }} // Animate only once when in view
            className="max-w-md mx-auto"
          >
            {/* Feature Content */}
            {feature.icon}
            <h3 className="text-lg font-bold text-[#100922] mt-4">{feature.title}</h3>
            <p className=" text-[#100922] mt-2  text-justify">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
