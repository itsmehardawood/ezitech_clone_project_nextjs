'use client'
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaFacebook } from "react-icons/fa";
import Slider from 'react-slick';

const reviews = [
  {
    name: "Abdullah",
    img: "/images/p1.png",
    logo: <FaFacebook className="text-blue-600" />,
    jobTitle: "Software Engineer",
    comment:
      "The service was excellent, and I am very satisfied with the results! The platform is intuitive, and the team was always available to resolve my queries.",
  },
  {
    name: "Dawood Ayub",
    img: "/images/p2.png",
    logo: <FaGithub className="text-gray-800" />,
    jobTitle: "Product Manager",
    comment:
      "Fantastic quality and great support from the team. Loved it! The seamless integration with our systems saved countless hours.",
  },
  {
    name: "Shumail",
    img: "/images/p3.png",
    logo: <FaFacebook className="text-blue-600" />,
    jobTitle: "UI/UX Designer",
    comment:
      "The product exceeded my expectations. I will definitely come back. The attention to detail and focus on user experience is unmatched.",
  },
  {
    name: "Maryam",
    img: "/images/p4.png",
    logo: <FaGithub className="text-gray-800" />,
    jobTitle: "Marketing Specialist",
    comment:
      "The customer service was quick and helpful. Highly appreciated! They truly understand the importance of user satisfaction.",
  },
  {
    name: "Muhammad Waris",
    img: "/images/p5.png",
    logo: <FaFacebook className="text-blue-600" />,
    jobTitle: "Data Scientist",
    comment:
      "This was one of the best experiences I’ve had in a long time. Their insights and support made our data analytics seamless.",
  },
];

export function CarouselSize() {
  const settings = {
    infinite: true, 
    speed: 5000, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 0, 
    cssEase: 'linear', 
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-4">
            <Card>
              <CardContent className="flex flex-col items-start p-6 space-y-4">
                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-bold text-gray-800">
                        {review.name}
                      </h3>
                      {review.logo}
                    </div>
                    <p className="text-sm text-gray-500">{review.jobTitle}</p>
                  </div>
                </div>
                {/* Review Comment */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-base text-gray-700 font-medium leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
