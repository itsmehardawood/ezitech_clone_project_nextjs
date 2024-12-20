import Image from 'next/image';
import React from 'react';

function GetStart() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-center rounded-xl shadow-lg my-20 text-black bg-gray-50">
      {/* Left Section */}
      <div className="w-full md:w-[60%] space-y-8 px-8 py-12 md:px-16 md:py-16">
        <h2 className="font-bold text-4xl md:text-5xl">Ready to get started?</h2>
        <p className="text-xl text-gray-500 text-justify w-full md:w-[90%]">
          At Ezitech, we constantly push boundaries to deliver excellence. Our commitment to quality and innovation makes us your trusted partner for growth and success.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex justify-center md:justify-end pt-12 md:pt-20 pr-8 md:pr-16 w-full md:w-[40%]">
        <div className="relative">
          {/* Circle Image */}
          <Image src="/images/circle.webp" alt="circle img" width={180} height={400} className="rounded-full" />

          {/* Button on top of circle */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
            <button className="px-12 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-500 rounded-full shadow-lg whitespace-nowrap">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStart;
