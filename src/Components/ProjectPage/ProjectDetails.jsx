import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data";
import { FaMapMarkerAlt, FaSwimmingPool, FaDumbbell, FaParking, FaWifi, FaShieldAlt } from "react-icons/fa";
import { GiElevator, GiSecurityGate } from "react-icons/gi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { PiFlowerTulipBold } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";
import { IoIosCloudDownload } from "react-icons/io";
import Footer from "../footer/footer";
import FloatingButton from "../FloatingButton/FloatingButton";
import emailjs from '@emailjs/browser';

const Details = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // Schedule Visit Modal State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    property: '',
    date: '',
  });
  const [loading, setLoading] = useState(false);

  // Enquiry Form State
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [enquiryLoading, setEnquiryLoading] = useState(false);

  if (!project) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-semibold">Project Not Found</h1>
        <p>The requested project could not be found.</p>
      </div>
    );
  }

  const sections = [
    "Overview",
    "Amenities",
    "Location",
    "Layout Plans",
    "Image Gallery",
    "Video Tour",
    "Enquiry & Brochure"
  ];

  const icons = {
    "Swimming Pool": <FaSwimmingPool size={36} className="text-amber-600 mx-auto" />,
    "Gymnasium": <FaDumbbell size={36} className="text-amber-600 mx-auto" />,
    "Basement Parking": <FaParking size={36} className="text-amber-600 mx-auto" />,
    "Wi-Fi Enabled Campus": <FaWifi size={36} className="text-amber-600 mx-auto" />,
    "Power Backup": <FaShieldAlt size={36} className="text-amber-600 mx-auto" />,
    "Elevator": <GiElevator size={36} className="text-amber-600 mx-auto" />,
    "Security Guard": <GiSecurityGate size={36} className="text-amber-600 mx-auto" />,
    "Laundry": <MdOutlineLocalLaundryService size={36} className="text-amber-600 mx-auto" />,
    "Landscaped Garden": <PiFlowerTulipBold size={36} className="text-amber-600 mx-auto" />,
    "library": <span className="text-amber-600 mx-auto text-3xl">📚</span>
  };

  // Schedule Visit Handlers
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
        'service_eqd7klw', // Replace with your EmailJS service ID
        'template_gzvbqgd', // Replace with your EmailJS template ID
        formData,
        '_GBiTNXU1dwcIs4br' // Replace with your EmailJS public key
      )
      .then(() => {
        alert('Your visit has been scheduled!');
        setFormData({ name: '', phone: '', property: '', date: '' });
      })
      .catch((error) => {
        alert('Something went wrong. Please try again.');
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  // Enquiry Form Handlers
  const handleEnquiryChange = (e) => {
    setEnquiryForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquiryLoading(true);

    emailjs
      .send(
        'service_eqd7klw', // Replace with your EmailJS service ID
        'template_gzvbqgd', // Replace with your EmailJS template ID
        enquiryForm,
        '_GBiTNXU1dwcIs4br' // Replace with your EmailJS public key
      )
      .then(() => {
        alert('Thank you! We will contact you soon.');
        setEnquiryForm({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        alert('Something went wrong. Please try again.');
        console.error(error);
      })
      .finally(() => setEnquiryLoading(false));
  };

  // Download Brochure handler
  const handleDownloadBrochure = () => {
    if (project.brochure) {
      const link = document.createElement("a");
      link.href = project.brochure;
      link.download = project.brochure.split("/").pop() || "brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Brochure not available.");
    }
  };

  return (
    <>
      {/* Hero Section with Image and Overlay Title & Schedule Visit Form */}
      <div className="relative flex items-center justify-center">
        <img
          src={project.image || project.gallery?.[0] || "/path/to/fallback.jpg"}
          alt={project.name}
          className="w-screen h-[100vh] object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
          <h1 className="text-white text-5xl md:text-6xl font-serif font-semibold text-center px-4 mb-8">
            {project.name}
          </h1>
          <div className="bg-white/90 rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center text-amber-600">Schedule a Site Visit</h2>
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
      </div>

      <FloatingButton />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Sticky Tab Navigation */}
        <div className="sticky top-0 z-10 bg-white py-2 shadow-xl overflow-x-auto mb-10 scroll-smooth duration-300">
          <div className="flex space-x-4 justify-between whitespace-nowrap px-2 scroll-smooth duration-300">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(/ /g, "-")}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-600 hover:shadow-md transition"
              >
                {section}
              </a>
            ))}
          </div>
        </div>

        {/* Overview */}
        <section id="overview" className="py-6 border-b mt-6 mb-6 scroll-mt-24">
          <h2 className="text-4xl font-semibold mb-12 text-center">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Left: Image Card */}
            <div>
              <img
                src={project.image || project.gallery?.[0]}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
            </div>
            {/* Center: Description */}
            <div>
              <p className="text-gray-500">{project.overview}</p>
            </div>
            {/* Right: Key Points */}
            <div className="space-x-15">
              <ul className="list-disc list-inside text-gray-500 space-y-4 space-x-4">
                {Object.entries(project.stats).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium text-gray-600">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="py-6 border-b scroll-mt-24">
          <h2 className="text-4xl font-semibold mb-10 text-center">Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-gray-800">
            {project.amenities?.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow flex flex-col items-center hover:shadow-md transition"
              >
                {icons[amenity] || <BiSolidVideos size={36} className="text-amber-600 mx-auto" />}
                <p className="mt-3 text-base font-medium">{amenity}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section id="location" className="scroll-mt-24">
          <h2 className="text-4xl mt-12 font-semibold mb-10 text-center text-gray-800">Location</h2>
          <div className="bg-[#f5f1ec] p-4 flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Google Map Embed */}
            <div className="w-full mb-2">
              <iframe
                title="Project Location Map"
                src={project.mapEmbedUrl}
                width="100%"
                height="480"
                allowFullScreen=""
                loading="lazy"
                className="rounded shadow-md"
              />
            </div>
            {/* Address & Landmarks */}
            <div className="w-full lg:w-1/2 bg-white p-4 rounded-lg shadow-md text-[#1b2e46]">
              <h2 className="text-xl font-semibold mb-4 text-center text-amber-600">ADDRESS</h2>
              <p className="mb-6 text-center">Manglam’s River Valley, Ribandar, Goa 403006</p>
              <h3 className="text-lg font-semibold mb-2 text-amber-600">NEARBY LANDMARKS</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-amber-600">Temples –</h4>
                <p>Kadamba Temple, St. Cathedral Church, Basilica of Bom Jesus</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-amber-600">Beaches & Hotels –</h4>
                <p>Hilton, Fab Hotel, Panjim Beach, Ribander Beach</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-amber-600">Hospitals –</h4>
                <p>Anthony Gonsalves Hospital, Vrundavan Hospital, Vedicure Wellness Clinics</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-600">Transit –</h4>
                <p>Panjim Bus Stand, Goa Airport, Margao Railway Station</p>
              </div>
            </div>
          </div>
        </section>

        {/* Layout Plans */}
        <section id="layout-plans" className="py-6 border-b mt-10 scroll-mt-24">
          <h2 className="text-4xl font-semibold mb-12 text-center mt-8">Layout <span className="text-amber-600">Plans</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.layout?.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Layout ${i + 1}`}
                className="rounded-lg shadow hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </section>

        {/* Image Gallery */}
        <section id="image-gallery" className="py-6 border-b mt-10 mb-10 scroll-mt-24">
          <h2 className="text-4xl text-center font-semibold mb-12">Image <span className="text-amber-600">Gallery</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.gallery?.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                className="rounded-lg shadow hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </section>

        {/* Video Tour */}
        <section id="video-tour" className="py-6 border-b scroll-mt-24">
          <h2 className="text-4xl text-center mt-6 font-semibold mb-12">Video <span className="text-amber-600">Tours</span></h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={project.video}
              title="Video Tour"
              frameBorder="0"
              allowFullScreen
              className="w-full h-96 rounded-lg shadow"
            />
          </div>
        </section>

        {/* Enquiry & Brochure */}
        <section id="enquiry-&-brochure" className="py-6 mt-6 mb-10 scroll-mt-24">
          <h2 className="text-4xl text-center mt-6 font-semibold mb-12">Enquiry & <span className="text-amber-600">Brochure</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            <form className="space-y-4" onSubmit={handleEnquirySubmit}>
              <h4 className="text-amber-600">Wish to get a call back from our team? Fill in your details.</h4>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full border rounded px-3 py-2"
                value={enquiryForm.name}
                onChange={handleEnquiryChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border rounded px-3 py-2"
                value={enquiryForm.email}
                onChange={handleEnquiryChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="w-full border rounded px-3 py-2"
                value={enquiryForm.phone}
                onChange={handleEnquiryChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full border rounded px-3 py-2"
                rows="4"
                value={enquiryForm.message}
                onChange={handleEnquiryChange}
              />
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700"
                disabled={enquiryLoading}
              >
                {enquiryLoading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            <div className="bg-gray-100 p-6 rounded-lg shadow flex flex-col items-center justify-center">
              <IoIosCloudDownload size={65} className="mx-auto" />
              <button
                type="button"
                onClick={handleDownloadBrochure}
                className="mx-auto text-2xl mt-2 flex items-center gap-5 px-10 py-3 bg-white border border-amber-600 text-gray-800 rounded-4xl hover:bg-amber-600"
                aria-label="Download Brochure"
              >
                Download Brochure
              </button>
              <p className="text-amber-400 mb-4 mt-6 text-center">For more query contact us At +91 96606 66546.</p>
              <p className="text-amber-400 mb-4 mt-6 text-center">or ambeebuildersjpr.com.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Details;
