'use client'
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Card(props) {
    useEffect(() => {
        AOS.init({
          duration: 500, // Animation duration in ms
          once: true,     // Whether animation should happen only once
        });
      }, []);

  return (
<div data-aos="zoom-in-down" className="bg-white p-2 rounded-lg flex flex-row  space-y-4 md:space-y-0 md:space-x-8 w-full max-w-4xl mx-auto">
  {/* Left side: Step Number, Title, and Description */}
  <div className="flex flex-col space-y-4 w-full md:w-2/3">
    <p className="text-xl text-gray-400">Step {props.stepNumber}</p>
    <h1 className="text-5xl font-extrabold sm:w-[70%] lg:w-[100%] md:w-[90%] text-gray-800 pb-10">{props.title}</h1>
    <p className="text-gray-600 p-3">{props.description}</p>
  </div>

  {/* Right side: Larger number */}
  <div className="relative font-bold text-gray-400 md:text-8xl">
    <div className="absolute top-0 right-0  text-gray-400 text-9xl">{props.stepNumberRight}</div>
  </div>
</div>

  );
}

export default Card;
