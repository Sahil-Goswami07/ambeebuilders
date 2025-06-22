import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import React, { useState } from 'react';
import Hero from "./hero/Hero"
import AboutUs from "./AboutUs/AboutUs"
import ProjectSection from "./ProjectSection/ProjectSection"
import FloatingButton from "./FloatingButton/FloatingButton"
import Testimonial from "./Testimonials/Testimonial"
// import ContactForm from "./ContactForm/ContactForm"
import WhyChooseUs from "./whyChooseUs/whyChooseUs"
// import EnquiryModal from "../EnquiryButton/EnquiryButton.jsx"
import EnquiryModal from "./EnquiryButton/EnquiryModal"
import TeamSection from "./TeamSection/TeamSection";
import LeadPopup from "./LeacPopup";
import SmoothCursor from "./SmoothCursor/SmoothCursor";


function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  return (
    <>
  <div className="h-full">
    <SmoothCursor/>
  <Navbar onEnquiryClick={toggleModal} />
      {showModal && <EnquiryModal onClose={toggleModal} />}
      <LeadPopup/>
    <Hero/>
    <FloatingButton/>
    {/* <ContactForm/> */}
    <AboutUs/>
    <ProjectSection/>
    <Testimonial/>
    <WhyChooseUs/>
    <TeamSection/>
    <Footer/>
</div>
    </>
  )
}

export default Home