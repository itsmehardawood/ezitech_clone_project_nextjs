import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube, FaFacebookF, FaLinkedin, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { LiaMailBulkSolid } from "react-icons/lia";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-blue-500">
      {/* Top Contact Info */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-between w-[90%] p-4 text-white text-xs md:text-lg z-10">
        <div className="flex flex-wrap justify-evenly w-full text-[15px]">
          <div className='flex items-center space-x-4 mb-2 md:mb-0'>
            <LiaMailBulkSolid className="mr-2" />
            <span>Email: contact@example.com</span>
          </div>
          <div className='flex items-center space-x-4 mb-2 md:mb-0'>
            <FaPhoneAlt className="mr-2" />
            <span>Phone: (123) 456-7890</span>
          </div>
          <div className='flex items-center space-x-4 mb-2 md:mb-0'>
            <MdLocationPin className="mr-2" />
            <span>Westridge 1, Office #304-G Peshawar Road, Rawalpindi, Pakistan</span>
          </div>
        </div>

        <div className='flex text-xl space-x-4'>
          <FaFacebookF />
          <GrInstagram />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>

      {/* Background Image with Faded Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative top-40 z-10 text-center text-white px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 w-[90%] mx-auto">
          Learn the Fundamentals with our experts in{' '}
          <span className="text-sky-400">Marketing</span>
        </h1>

        {/* Search Bar */}
        <div className="flex items-center justify-around max-w-md mx-auto py-4 w-full rounded-full border text-black bg-white">
          <input
            type="text"
            placeholder="Search here..."
            className="focus:outline-none w-3/4 py-2 px-4 rounded-l-full"
          />
          <IoMdSearch className="text-xl focus:outline-none p-2 rounded-r-full" />
        </div>

        {/* Explore Projects */}
        <div className="flex justify-center items-center space-x-3 mt-5">
          <p className="text-xl">Explore Our more useful products Projects</p>
          <span><FaHeart /></span>
        </div>

        {/* Project Names */}
        <div className="text-[45px] md:text-[50px] font-extrabold font-serif text-white flex flex-wrap justify-center py-6 space-x-4">
          <div>EZIBLOGS</div>
          <div>EZIPOS</div>
          <div>EZICODING</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
