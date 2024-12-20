'use client'
import React from 'react';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

function SuccessSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className='w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 px-8 sm:px-4 py-10'>
      {/* Left Section */}
      <div data-aos="fade-right" className='p-8 space-y-8 lg:pl-16 md:pl-10 sm:pl-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 w-[90%] sm:w-full'>
          Hundreds of Successful Internships &{' '}
          <span className="relative inline-block group">
            <span className="underline decoration-blue-200 decoration-8 underline-offset-4">Countings</span>
            <span className="absolute inset-0 bg-opacity-60 bg-blue-400 scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-300 ease-out"></span>
          </span>
        </h1>
        <p className='text-gray-400 text-lg md:text-xl mb-6 w-[90%] sm:w-full'>
          With a commitment to quality training and career advancement, we've empowered students from diverse backgrounds.
          Through structured internships, hands-on projects, and expert mentorship, Ezitech Institute ensures that every student builds a solid foundation in IT.
        </p>
      </div>

      {/* Right Section */}
      <section data-aos="fade-right" className="px-8 sm:px-4">
        <div className="max-w-full mx-auto grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-10">
          {/* Insight 1 */}
          <div className="bg-white space-y-2 rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
            <p className="text-5xl font-serif font-bold text-gray-800">35+</p>
            <p className="text-sm text-gray-600">Industry MOUs</p>
          </div>

          {/* Insight 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
            <p className="text-5xl font-serif font-bold text-gray-800">327</p>
            <p className="text-sm text-gray-600">Active Students</p>
          </div>

          {/* Insight 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
            <p className="text-5xl font-serif font-bold text-gray-800">98%</p>
            <p className="text-sm text-gray-600">Positive Feedback</p>
          </div>

          {/* Insight 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
            <p className="text-5xl font-serif font-bold text-gray-800">6686</p>
            <p className="text-sm text-gray-600">Successful Graduates</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessSection;
