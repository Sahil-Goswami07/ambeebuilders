import React from 'react';
import ParticlesComponent from './ParticlesComponent';

const director = {
  name: 'Mr. Manish Bhardwaj',
  role: 'Founder & CEO, Ambee Builders',
  image: '/public/ceo.jpg',
  vision: `At Ambee Builders, our mission is not just to construct buildings,
  but to build lasting trust. We aim to redefine urban living by delivering
  premium-quality homes that combine elegance, innovation, and sustainability.
  Our vision is to make Ambee Builders a name synonymous with architectural excellence
  and client satisfaction across Jaipur and beyond. We believe in creating spaces that
  inspire, uplift, and enhance the quality of life for our residents.`,
};

const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative py-16 sm:h-[700px] max-w-screen h-fit mx-auto bg-black/30 shadow-2xl rounded-lg overflow-hidden "
    >
      
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/ceo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(20px)', 
        }}
      />

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 flex justify-center ">
          <img
            src={director.image}
            alt={director.name}
            className="w-130 h-140 object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3">
          <h2 className="sm:text-5xl text-4xl font-bold mb-15 text-amber-400">| From the Director's Desk</h2>
          <h3 className="text-4xl text-white font-semibold mb-2">{director.name}</h3>
          <p className="text-xl text-amber-400 mb-6">{director.role}</p>
          <p className="text-lg leading-relaxed text-white">{director.vision}</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
