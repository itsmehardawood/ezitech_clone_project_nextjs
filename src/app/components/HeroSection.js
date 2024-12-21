"use client";

import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube, FaFacebookF, FaLinkedin, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { LiaMailBulkSolid } from "react-icons/lia";

const HeroSection = () => {
  const mainText = "Learn the Fundamentals with our experts in"; // Full sentence to type
  const words = ["Marketing", "Digital", "Web Dev"]; // Words to cycle through after main text
  const [displayedText, setDisplayedText] = useState(""); // Text currently being displayed
  const [mainTextCompleted, setMainTextCompleted] = useState(false); // Check if main text is completed
  const [wordIndex, setWordIndex] = useState(0); // Index of the word in the array
  const [charIndex, setCharIndex] = useState(0); // Index of the character being typed
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting text

  useEffect(() => {
    const handleTyping = () => {
      if (!mainTextCompleted) {
        // Typing the main text
        setDisplayedText(mainText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === mainText.length) {
          setMainTextCompleted(true); // Main text finished
          setCharIndex(0); // Reset for the next phase
          setTimeout(() => setIsDeleting(false), 1000); // Pause before typing the first word
        }
      } else {
        // Typing or deleting the cycling words
        const fullWord = words[wordIndex];
        if (!isDeleting) {
          // Typing forward
          setDisplayedText(
            <>
              {mainText}&nbsp;
              <span className="text-sky-400">{fullWord.substring(0, charIndex + 1)}</span>
            </>
          );
          setCharIndex((prev) => prev + 1);

          if (charIndex === fullWord.length) {
            // Pause after typing the word
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          // Deleting backward
          setDisplayedText(
            <>
              {mainText}&nbsp;
              <span className="text-sky-400">{fullWord.substring(0, charIndex - 1)}</span>
            </>
          );
          setCharIndex((prev) => prev - 1);

          if (charIndex === 0) {
            // Move to the next word after deleting
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length); // Loop to the next word
          }
        }
      }
    };

    const typingSpeed = mainTextCompleted ? (isDeleting ? 50 : 100) : 80; // Adjust speed for main text and words
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, mainTextCompleted, mainText, words]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-blue-500">
      {/* Top Contact Info */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-between items-center w-[95%] p-4 text-white text-sm md:text-base lg:text-lg z-10 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start w-full md:w-auto gap-4 text-center">
          <div className="flex items-center space-x-2">
            <LiaMailBulkSolid className="text-lg" />
            <span className="whitespace-nowrap">Email: contact@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-lg" />
            <span className="whitespace-nowrap">Phone: (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-2 text-center">
            <MdLocationPin className="text-lg" />
            <span className="whitespace-normal text-center">
              Westridge 1, Office #304-G Peshawar Road, Rawalpindi, Pakistan
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0 text-xl justify-center">
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
      <div className="relative top-28 z-10 text-center text-white px-4">
        {/* Heading with Typing Animation */}
        <h1 className="text-4xl md:text-6xl font-bold text-white w-[70%] mx-auto my-5">
          {displayedText}
          <span className="blink">|</span>
        </h1>

        {/* Search Bar */}
        <div className="flex items-center justify-between max-w-md mx-auto py-4 w-full rounded-full border text-black bg-white px-4">
          <input
            type="text"
            placeholder="Search here..."
            className="focus:outline-none w-3/4 py-2 px-4 rounded-l-full"
          />
          <IoMdSearch className="text-4xl focus:outline-none p-2 rounded-r-full" />
        </div>

        {/* Explore Projects */}
        <div className="flex justify-center items-center space-x-3 mt-5">
          <p className="text-xl">Explore Our more useful products Projects</p>
          <span>
            <FaHeart />
          </span>
        </div>

        {/* Project Names */}
        <div className="text-[30px] md:text-[50px] font-extrabold font-serif text-white flex flex-wrap justify-center py-6 space-x-4">
          <div>EZIBLOGS</div>
          <div>EZIPOS</div>
          <div>EZICODING</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
