import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { BackgroundGradientAnimation } from "../hero/background-gradient-animation";

const CurrentProjects = () => {
  const projects = [
    {
      id: "1",
      title: "SB Heights",
      location: "Mansarovar Ext., Jaipur",
      type: "3, 4 & 5 BHK Apartments",
      totalUnits: "40",
      status: "Ready To Move",
      img: "/PropertyImages/sbheights2/sb_heights.avif",
    },
    {
      id: "2",
      title: "Sukriti Villa",
      location: "Ajmer Road, Jaipur",
      type: "Villas",
      totalUnits: "20",
      status: "Under Construction",
      img: "/PropertyImages/sukritiVilla.png",
    },
    {
      id: "3",
      title: "Apna Ashiyana",
      location: "Tonk Road, Jaipur",
      type: "2 BHK Apartments",
      totalUnits: "32",
      status: "Booking Open",
      img: "/PropertyImages/sukritiVilla.png",
    },
    {
      id: "3",
      title: "Apna Ashiyana",
      location: "Tonk Road, Jaipur",
      type: "2 BHK Apartments",
      totalUnits: "32",
      status: "Booking Open",
      img: "/PropertyImages/sukritiVilla.png",
    },
    {
      id: "3",
      title: "Apna Ashiyana",
      location: "Tonk Road, Jaipur",
      type: "2 BHK Apartments",
      totalUnits: "32",
      status: "Booking Open",
      img: "/PropertyImages/sukritiVilla.png",
    },
    {
      id: "3",
      title: "Apna Ashiyana",
      location: "Tonk Road, Jaipur",
      type: "2 BHK Apartments",
      totalUnits: "32",
      status: "Booking Open",
      img: "/PropertyImages/sukritiVilla.png",
    },
    {
      id: "3",
      title: "Apna Ashiyana",
      location: "Tonk Road, Jaipur",
      type: "2 BHK Apartments",
      totalUnits: "32",
      status: "Booking Open",
      img: "/PropertyImages/sukritiVilla.png",
    },
  ];

  return (
    <Element name="projectsSection">
      <div className="px-0 sm:px-auto md:py-5 sm:py-12 shadow-4xl bg-[#D6EFD8] flex flex-col justify-between items-center ">
         {/* <div className="absolute inset-0 z-10">
                <BackgroundGradientAnimation />
              </div> */}
        <motion.h1
          className="text-2xl sm:text-4xl font-bold text-white text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#1A5319] sm:py-10" >| Our Projects</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 ">
          {projects.map((project, i) => (
            <Link
              key={i}
              to={`/projects/${project.id}`}
              className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-4xl duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-76 object-cover"
              />

              <div className="p-5 flex flex-col ">
                <h2 className="text-xl font-bold text-[#3E2207] mb-1">{project.title}</h2>
                <p className="text-sm text-black mb-3">{project.location}</p>

                <div className="text-sm text-black space-y-1">
                  <p><span className="font-medium text-[#3E2207]">Type:</span> {project.type}</p>
                  <p><span className="font-medium text-[#3E2207]">Total Units:</span> {project.totalUnits}</p>
                  <p><span className="font-medium text-[#3E2207]">Status:</span> {project.status}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="mt-6 sm:mt-10 text-center sm:text-right">
          <Link
            to="/projects"
            className="text-amber-600 font-semibold underline underline-offset-4 hover:text-amber-800 text-base sm:text-xl"
          >
            VIEW ALL PROJECTS →
          </Link>
        </div> */}
      </div>
    </Element>
  );
};

export default CurrentProjects;
