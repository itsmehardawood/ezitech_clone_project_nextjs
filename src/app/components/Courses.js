'use client'
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon
import { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Card = ({ logoSrc, title, description, bgColor, positionClass }) => {
      useEffect(() => {
          AOS.init({
            duration: 2000, // Animation duration in ms
            once: true,     // Whether animation should happen only once
          });
        }, []);
  return (
    <div data-aos="zoom-in"
      className={`group relative max-w-sm rounded-lg overflow-hidden shadow-lg ${bgColor} ${positionClass} p-6 hover:bg-white transition-colors duration-500`}
    >
      <div className="relative w-full h-24 flex justify-start pl-5 items-center">
        <Image
          src={logoSrc}
          alt="Logo"
          width={100}
          height={100}
          objectFit="contain"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-500 text-lg mb-4">{description}</p>
      </div>

      {/* Explore More - Pop-up from bottom */}
      <p className="absolute bottom-6 left-12 text-black font-bold opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 transform translate-y-10">
        Explore More <FaArrowRight className="inline ml-2 text-black" />
      </p>
    </div>
  );
};

export default function CardSection() {
  const cards = [
    {
      logoSrc: '/images/ai.png',
      title: 'Artificial Intelligence',
      description:
        'Gain practical experience in Artificial Intelligence by building and deploying machine learning models. Learn key concepts, data processing, and model training to prepare for real-world AI challenges',
      bgColor: 'bg-red-50',
      positionClass: 'transform translate-x-0 translate-y-10', // Custom position
    },
    {
      logoSrc: '/images/digi.png',
      title: 'Digital Marketing',
      description:
        'Digital marketing involves the use of the internet and online-based digital technologies to promote products and services. It includes social media marketing, search engine optimization (SEO), and content marketing.',
      bgColor: 'bg-purple-200',
      positionClass: 'transform -translate-x-0 -translate-y-5', // Custom position
    },
    {
      logoSrc: '/images/set.png',
      title: '2d/4d Architecture',
      description:
        'Setting refers to the environment, location, and circumstances in which a story, event, or project takes place. It helps provide context and background to the narrative or operation.',
      bgColor: 'bg-red-100',
      positionClass: 'transform translate-x-0 translate-y-5', // Custom position
    },
    {
      logoSrc: '/images/web.png',
      title: 'Web Development',
      description:
        'Exceptional web experiences engage, inspire, and drive results – all built on a foundation of strategic, innovative design',
      bgColor: 'bg-blue-100',
      positionClass: 'transform -translate-x-0 translate-y-12', // Custom position
    },
    {
      logoSrc: '/images/graphic.png',
      title: 'Graphic Designing',
      description:
        'Graphic design is the art of combining text, images, and other visual elements to communicate a message or concept. It is used in user interface design.',
      bgColor: 'bg-yellow-50',
      positionClass: 'transform translate-x-0 translate-y-10', // Custom position
    },
    {
      logoSrc: '/images/app.png',
      title: 'App Development',
      description:
        'We offer hands-on experience to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic.',
      bgColor: 'bg-indigo-100',
      positionClass: 'transform -translate-x-0 translate-y-14', // Custom position
    },
  ];

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 md:p-5 sm:p-12 my-24">
      {cards.map((card, index) => (
        <Card
          key={index}
          logoSrc={card.logoSrc}
          title={card.title}
          description={card.description}
          bgColor={card.bgColor}
          positionClass={card.positionClass}
        />
      ))}
    </div>
  );
}
