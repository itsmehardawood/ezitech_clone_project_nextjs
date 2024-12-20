'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

function TrustedOrg() {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in ms
          once: true,     // Whether animation should happen only once
        });
      }, []);
  return (
    <div className="flex flex-col md:flex-row w-full h-auto py-10">
      {/* Left Div - Image */}
      <div  data-aos="fade-right" className="flex items-center justify-center w-full md:w-[55%]">
        <Image src="/images/org1.webp" alt="OrgLogos" width={700} height={500} className="object-contain" />
      </div>

      {/* Right Div - Description and Button */}
      <div  data-aos="fade-left" className="w-full md:w-[45%] p-8 md:pt-52 space-y-16 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 w-[80%] line-clamp-3">
          Trusted by Leading 
          <span className="relative inline-block group">
            <span className="underline decoration-blue-200 decoration-8 underline-offset-4">
              Organizations
            </span>
            <span className="absolute inset-0 bg-opacity-60 bg-blue-400 scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-300 ease-out"></span>
          </span>
        </h2>
        <p className="text-gray-500 text-lg md:text-2xl mb-6 w-[90%]">
          Ezitech Institute is a subsidiary of Eziline Software House, a distinguished leader in technology and innovation. As part of the Eziline family, Ezitech is dedicated to providing cutting-edge training and solutions, enabling individuals and organizations to excel in the ever-evolving digital landscape.
        </p>
      </div>
    </div>
  );
}

export default TrustedOrg;
