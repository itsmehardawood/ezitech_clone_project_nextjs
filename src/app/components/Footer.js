import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className='text-gray-500 space-y-5'>
            <p>Office #304-B, Amna Plaza, Main Peshawar Rd, Rawalpindi, Punjab</p>
            <p className="mt-2">(92) 337-7777860</p>
            <p className="mt-2 text-gray-700">info@ezitech.org</p>
          </div>

          {/* Explore More */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Explore More</h2>
            <ul className="space-y-3 text-[18px] text-gray-600">
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Partners</a></li>
              <li><a href="#" className="hover:text-black">Portfolio</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Internships</h2>
            <ul className="space-y-3 text-[18px] text-gray-600 ">
              <li><a href="#" className="hover:text-black">Strategy</a></li>
              <li><a href="#" className="hover:text-black">eCommerce</a></li>
              <li><a href="#" className="hover:text-black">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-black">Branding</a></li>
              <li><a href="#" className="hover:text-black">Design</a></li>
            </ul>
          </div>

          {/* Updates */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Updates</h2>
            <p className="mb-4 text-[18px] text-gray-600">Subscribe to our newsletter to get the latest news & updates.</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 p-4 rounded-l bg-zinc-200 focus:outline-none  text-gray-700 "
              />
              <button className="p-4 bg-zinc-300 hover:bg-blue-700 hover:text-white font-semibold text-black rounded-r">GO</button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center flex items-center justify-between">
          <p className="text-sm">© 2024 Ezitech Institute. All rights reserved | Design & Develop by Ezitech Solutions</p>
          <div className=" space-x-4 ">
            <a href="#" className="text-sm hover:text-white">Terms & Conditions</a>
            <a href="#" className="text-sm hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
