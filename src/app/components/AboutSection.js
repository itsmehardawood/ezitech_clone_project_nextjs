'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="flex flex-col lg:flex-row w-full h-auto lg:h-[1000px] justify-between py-10">
      {/* Left Div with Randomly Placed Images */}
      <div 
        data-aos="fade-right" 
        className="relative w-full h-[900px] sm:h-[700px] md:h-[700px] lg:w-1/2 lg:h-full mb-10 lg:mb-0"
      >
        <div className="absolute top-5 left-0 w-72 h-72 lg:w-96 lg:h-96 z-10">
          <Image
            className="rounded-lg"
            src="/images/eziimg2.webp"
            alt="Image 1"
            width={1000}
            height={1000}
            objectFit="cover"
          />
        </div>
        <div className="absolute top-80 left-36 w-64 h-64 lg:w-80 lg:h-80 z-20">
          <Image
            className="rounded-lg"
            src="/images/eziimg1.webp"
            alt="Image 2"
            width={1000}
            height={1000}
            objectFit="cover"
          />
        </div>
        <div className="absolute top-0 left-40 w-72 h-72 lg:w-96 lg:h-96 z-30">
          <Image
            className="rounded-lg"
            src="/images/eziimg3.webp"
            alt="Image 3"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
      </div>

      {/* Right Div with Description and Button */}
      <div 
        data-aos="fade-left" 
        className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 pt-10 lg:pt-20"
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">
          Empowering Connections in the{' '}
          <span className="relative inline-block group">
            <span className="underline decoration-blue-200 decoration-8 underline-offset-4">
              Digital World
            </span>
            <span className="absolute inset-0 bg-opacity-60 bg-blue-400 scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-300 ease-out"></span>
          </span>
        </h2>
        <p className="font-bold text-lg text-gray-500 py-8">
          We equip future professionals with the essential tools to thrive in both traditional and digital IT landscapes.
        </p>
        <p className="text-gray-500 text-xl mb-6 w-full lg:w-[85%]">
          With years of experience and countless successful placements, Ezitech Institute has perfected a unique learning process that goes beyond theory. We delve deep into practical skills and real-world applications, helping students understand, connect, and excel in the ever-evolving tech market.
        </p>
        <button className="bg-blue-500 mt-10 text-white px-9 py-5 rounded-full shadow-md hover:bg-blue-400 transition duration-300">
          More About Us
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
