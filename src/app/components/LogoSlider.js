'use client'
// components/LogoCarousel.jsx

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const LogoSlider = () => {
  const settings = {
    infinite: true, // Makes the carousel loop continuously
    speed: 3000, // Controls the speed of the transition (lower values make it slower)
    slidesToShow: 5, // Number of logos shown at once
    slidesToScroll: 1, // Controls how many slides are scrolled at once
    autoplay: true, // Enables autoplay
    autoplaySpeed: 0, // Set to 0 for constant movement
    cssEase: 'linear', // Linear easing to make movement smooth
    arrows: false, // Disables arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    '/images/wp.png',
    '/images/react.png',
    '/images/node.png',
    '/images/ex.png',
    '/images/flutter.png',
    '/images/xd.png',
    '/images/lara.png',

  ];

  return (
    <div className="pt-5 bg-white ">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className=" px-4">
            <Image src={logo} alt={`Logo ${index + 1}`} width={70} height={70} objectFit="contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
