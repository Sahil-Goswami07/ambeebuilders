import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { BackgroundGradientAnimation } from "../hero/background-gradient-animation";

const CurrentProjects = () => {
  const projects = [
    {
      id: "1",
      title: "Ved Heights-20",
      location: "Mohanpura, Jaipur",
      type: "2 & 3 BHK Apartments",
      totalUnits: "42",
      status: "Booking Open",
      img: "/PropertyImages/vedheights20/vedheights20.jpg",
    },
    {
      id: "2",
      title: "Sukriti Villa-II",
      location: "Patrakar colony, Jaipur",
      type: "Villas",
      totalUnits: "7",
      status: "Sold Out",
      img: "/PropertyImages/sukritivilla2/sukritiVilla.png",
    },
    {
      id: "3",
      title: "Apna Ashiyana",
      location: "Near Urbana Jewels, Jaipur",
      type: "independent Villas",
      totalUnits: "107",
      status: "sold Out",
      img: "/PropertyImages/apnaashiyana/aa.png",
    },
    {
      id: "4",
      title: "Aarohi Dreams",
      location: "St. Willfered's College, Jaipur",
      type: "2 & 3 BHK Apartments",
      totalUnits: "30",
      status: "sold Out",
      img: "/PropertyImages/arohidreams/arohidreams.jpg",
    },
    {
      id: "5",
      title: "MB heights-I",
      location: "Swarn Vihar, Jaipur",
      type: "3 bhk appartments",
      totalUnits: "3",
      status: "Sold Out",
      img: "/PropertyImages/mbheighst1/mh1.jpg",
    },
    {
      id: "6",
      title: "Ved-heights-18",
      location: "Tonk Road, Jaipur",
      type: "2 BHK Apartments",
      totalUnits: "32",
      status: "Sold Out",
      img: "/PropertyImages/vedheights18/vedheights18.png",
    },
    {
      id: "7",
      title: "Sukriti villa-I",
      location: "Kia Homes, Jaipur",
      type: "3BHK Villas",
      totalUnits: "4",
      status: "Sold Out",
      img: "/PropertyImages/sukritivilla1/sukritivilla.jpg",
    },
    {
      id: "8",
      title: "Ved-heights-19",
      location: ", Jaipur",
      type: "3BHK Villas",
      totalUnits: "4",
      status: "Sold Out",
        img: "/PropertyImages/vedheights19/vedheights19.png",
    },
    {
      id: "9",
      title: "SB Heights-II",
      location: "Mansarovar Ext., Jaipur",
      type: "3, 4 & 5 BHK Apartments",
      totalUnits: "49",
      status: "Sold Out",
      img: "/PropertyImages/sbheights2/sb_heights.avif",
    },
  ];

  return (
    <Element name="projectsSection">
      <div className="px-0 sm:px-auto py-10 sm:py-12 shadow-4xl bg-[#e9c28c] flex flex-col justify-between items-center ">
         {/* <div className="absolute inset-0 z-10">
                <BackgroundGradientAnimation />
              </div> */}
        <motion.h1
          className="text-4xl font-bold text-white text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-[#000000] sm:py-10 sm:mt-5" >| Our <span className="text-amber-600">Projects</span></span>
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
