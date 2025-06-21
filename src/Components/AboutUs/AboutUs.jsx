import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Element } from 'react-scroll';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const targetValues = {
    projectsCompleted: 28,
    happyFamilies: 650,
    yearsExperience: 12,
    sqftDeveloped: 4.2,
  };

  const [counts, setCounts] = useState({
    projectsCompleted: 0,
    happyFamilies: 0,
    yearsExperience: 0,
    sqftDeveloped: 0,
  });

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    const duration = 3000;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      setCounts({
        projectsCompleted: Math.floor(percentage * targetValues.projectsCompleted),
        happyFamilies: Math.floor(percentage * targetValues.happyFamilies),
        yearsExperience: Math.floor(percentage * targetValues.yearsExperience),
        sqftDeveloped: +(percentage * targetValues.sqftDeveloped).toFixed(1),
      });

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <Element name="aboutUsSection">
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="container mx-auto px-2 -mt-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our <span className='text-amber-600'>Legacy</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              MB Builders has been shaping Jaipur's skyline with premium developments that redefine luxury living.
            </motion.p>
          </div>

          {/* Stats Cards */}
          <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              value={counts.projectsCompleted}
              suffix="+"
              title="Projects Completed"
              description="Landmark residential and commercial developments"
              delay={0.2}
            />
            <StatCard
              value={counts.happyFamilies.toLocaleString()}
              suffix="+"
              title="Happy Families"
              description="Trusting us with their dream homes"
              delay={0.3}
            />
            <StatCard
              value={counts.yearsExperience}
              suffix="+"
              title="Years Experience"
              description="Crafting exceptional living spaces"
              delay={0.4}
            />
            <StatCard
              value={counts.sqftDeveloped}
              suffix="M+"
              title="Sq. Ft. Developed"
              description="Premium real estate across Jaipur"
              delay={0.5}
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

const StatCard = ({ value, suffix, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-orange-200"
  >
    <div className="text-5xl font-bold text-amber-600 mb-2">
      {value}
      {suffix}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default AboutUs;
