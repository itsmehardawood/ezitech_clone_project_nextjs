'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Importing the hamburger icon
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex p-4 bg-white bg-opacity-90 backdrop-blur-sm text-black justify-between items-center rounded-lg fixed w-[90%] top-20 z-50 left-1/2 transform -translate-x-1/2">
      {/* Logo */}
      <Image src="/images/logo.png" width={150} height={80} alt="logo" />

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          <FaBars className="w-8 h-8" /> {/* Hamburger icon from React Icons */}
        </button>
      </div>

      {/* Menu List for large screens */}
      <ul className="hidden lg:flex space-x-10 text-xl hover:text-gray-400">
        <li className='hover:text-black'><Link href="/">Home</Link></li>
        <li className='hover:text-blue-600'><Link href="/">About</Link></li>
        <li className='hover:text-black'><Link href="/">Internship's</Link></li>
        <li className='hover:text-black'><Link href="/">Careers</Link></li>
        <li className='hover:text-blue-600'><Link href="/">Courses</Link></li>
        <li className='hover:text-black'><Link href="/">Tech Blogs</Link></li>
      </ul>

      {/* Mobile Menu (Hamburger) */}
      {menuOpen && (
        <ul className="lg:hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white text-black text-lg p-4 space-y-6 rounded-lg shadow-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Internship's</Link></li>
          <li><Link href="/">Careers</Link></li>
          <li><Link href="/">Courses</Link></li>
          <li><Link href="/">Tech Blogs</Link></li>
        </ul>
      )}

      {/* Login Button */}
      <button className="bg-blue-600 rounded-3xl px-5 py-3 text-white hover:bg-blue-500 hidden lg:block">
        IPortal Login
      </button>
    </div>
  );
}

export default Navbar;
