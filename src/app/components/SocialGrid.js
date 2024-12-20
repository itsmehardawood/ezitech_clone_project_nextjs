import React from 'react';
import { FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialGrid = () => {
  return (
    <div className="bg-white ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-5">
          {/* LinkedIn */}
          <div className="text-center bg-white p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 ">
            <FaLinkedin className="text-cyan-900 text-8xl mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">LinkedIn</h2>
            <p className="text-gray-600 mt-2">Latest News and updates.</p>
          </div>

          {/* YouTube */}
          <div className="text-center bg-white p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 ">
            <FaYoutube className="text-cyan-900 text-8xl mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">YouTube</h2>
            <p className="text-gray-600 mt-2">Latest News and updates.</p>
          </div>

          {/* Facebook */}
          <div className="text-center bg-white p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 ">
            <FaFacebook className="text-cyan-900 text-8xl mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">Facebook</h2>
            <p className="text-gray-600 mt-2">Latest News and updates.</p>
          </div>

          {/* WhatsApp */}
          <div className="text-center bg-white p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 ">
            <FaWhatsapp className="text-cyan-900 text-8xl mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">WhatsApp</h2>
            <p className="text-gray-600 mt-2">Join the Community.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialGrid;
