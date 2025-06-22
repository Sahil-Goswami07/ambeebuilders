import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { Element } from "react-scroll";

const testimonials = [
  {
    quote:
      "Ambee Builders made our dream of owning a luxurious yet affordable home come true. The attention to detail and build quality is unmatched in Jaipur.",
    name: "Ravi Sharma",
    title: "Software Engineer, Jaipur",
    image: "https://images.unsplash.com/photo-1590473159791-1d514fd3656e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The entire home-buying process with Ambee Builders was seamless. From the first site visit to possession, it felt like we were part of a family.",
    name: "Pooja Mehta",
    title: "Teacher, Ajmer",
    image: "https://plus.unsplash.com/premium_photo-1681483544221-e04d719060ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "The architectural brilliance and location of the property exceeded our expectations. Highly recommend MB Builders for premium properties.",
    name: "Arjun Verma",
    title: "Bank Manager, Kota",
    image: "https://plus.unsplash.com/premium_photo-1691032016317-639a11f71b85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I appreciated the transparency and communication throughout the construction journey. A trustworthy developer indeed!",
    name: "Neha Singh",
    title: "Interior Designer, Jaipur",
    image: "https://images.unsplash.com/photo-1678263998418-8fd3afcb3d89?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    
    quote:
      "They don’t just build houses; they build trust. I’ve referred MB Builders to multiple friends already.",
    name: "Devendra Joshi",
    title: "Business Owner, Jaipur",
    image: "https://plus.unsplash.com/premium_photo-1689870831572-c9a50a5d2025?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function InfiniteMovingCardsDemo() {
  return (
    <Element name="testimonialsSection" className="w-full">
    <div className="h-[40rem]  bg-white  flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-5xl font-bold text-amber-600 mb-10">| What Our 
        <span className=" text-[#1f1f22]">
        &nbsp;Clients Say
        </span>
        </h2>


      <InfiniteMovingCards
        // className="bg-amber-600"
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </Element>
  );
}

export default InfiniteMovingCardsDemo;
