import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScheduleVisitButton from '../ScheduleVisit/ScheduleVisitButton';
import { BackgroundGradientAnimation } from './background-gradient-animation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from '@emailjs/browser';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const targetValues = {
    projectsCompleted: 10,
    happyFamilies: 500,
    yearsExperience: 12,
  };

  const [counts, setCounts] = useState({
    projectsCompleted: 0,
    happyFamilies: 0,
    yearsExperience: 0,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      setCounts({
        projectsCompleted: Math.floor(percent * targetValues.projectsCompleted),
        happyFamilies: Math.floor(percent * targetValues.happyFamilies),
        yearsExperience: Math.floor(percent * targetValues.yearsExperience),
      });

      if (percent < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center bg-transparent text-white sm:p-8 overflow-hidden"
      >
      {/* Background Gradient Animation */}
    
      
      {/* <BackgroundGradientAnimation /> */}
      <div className="absolute inset-0 z-0">
        <BackgroundGradientAnimation />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center mx-auto
  mt-[-40px] pt-4
  sm:mt-0 sm:pt-12
  pb-20
">
        <DotLottieReact
          className="w-50 h-34 pb-10 "
          src="https://lottie.host/0b7f3201-9835-40d2-abbc-debfbc8335dd/uyIrJh3guQ.lottie"
          loop
          autoplay
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold mb-6 leading-tight text-left sm:text-center"
            style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          lineHeight: '1.1',
            }}
          >
            Own <span className="text-amber-400">More than </span> Just walls
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-lg text-center"
            style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            }}
          >
            AMBEE Builders brings you premium real estate developments in Jaipur,
            combining luxury living with timeless elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col  gap-4 mb-8  justify-center"
          >
            <ScheduleVisitButton />
          </motion.div>

          {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center gap-6 justify-center w-full"
        >
          <StatBlock label="Projects Completed" value={counts.projectsCompleted} suffix="+" />
          <StatBlock label="Happy Families" value={counts.happyFamilies} suffix="+" />
          <StatBlock label="Years Experience" value={counts.yearsExperience} suffix="+" />
        </motion.div>
      </div>
    </section>
  );
};

const StatBlock = ({ label, value, suffix }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl font-bold">{value}{suffix}</span>
    <span className="text-sm">{label}</span>
  </div>
);

export default Hero;
