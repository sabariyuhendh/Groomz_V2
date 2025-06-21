import React, { useState } from 'react';
// Placeholder logo (replace with your own logo asset)
// import logo from '../assets/logo.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 flex items-center justify-between px-24 py-12 bg-transparent text-slate-300 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* Replace with your logo image */}
        <span className="font-medium text-2xl tracking-widest">The King's Chair</span>
      </div>
    
      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-8 text-xl">
          <a href="#" className="relative group hover:text-white transition-all duration-300 ease-out">
            <span className="relative z-10">Home</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
          </a>
          <a href="#" className="relative group hover:text-white transition-all duration-300 ease-out">
            <span className="relative z-10">Products</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
          </a>
          <a href="#" className="relative group hover:text-white transition-all duration-300 ease-out">
            <span className="relative z-10">My Bookings</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
          </a>
          <a href="#" className="relative group hover:text-white transition-all duration-300 ease-out">
            <span className="relative z-10">Book Service</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
          </a>
          <a href="#" className="relative group hover:text-white transition-all duration-300 ease-out">
            <span className="relative z-10">Cart</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
          </a>
      </div>
      <div className=" text-xl flex items-center gap-4">
        <button className="relative group hover:text-white transition-all duration-300 ease-out">
          <span className="relative z-10">Login</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
        </button>
        <button className="relative group hover:text-white transition-all duration-300 ease-out">
          <span className="relative z-10">Profile</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
        </button>
      </div>
      
      {/* Hamburger for mobile */}
      <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="8" x2="23" y2="8" /><line x1="5" y1="14" x2="23" y2="14" /><line x1="5" y1="20" x2="23" y2="20" /></svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#181818] flex flex-col items-center gap-6 py-6 md:hidden shadow-lg animate-fade-in z-20">
          <li><a href="#" className="relative group hover:text-blue-300 transition-all duration-300 ease-out">
            <span className="relative z-10">About Us</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
          </a></li>
          <li><a href="#" className="relative group hover:text-blue-300 transition-all duration-300 ease-out">
            <span className="relative z-10">Product</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
          </a></li>
          <li><a href="#" className="relative group hover:text-blue-300 transition-all duration-300 ease-out">
            <span className="relative z-10">My Bookings</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
          </a></li>
          <li><a href="#" className="relative group hover:text-blue-300 transition-all duration-300 ease-out">
            <span className="relative z-10">Book Service</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
          </a></li>
          <li><a href="#" className="relative group hover:text-blue-300 transition-all duration-300 ease-out">
            <span className="relative z-10">Cart</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500 ease-out group-hover:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700 ease-out delay-100 opacity-60"></div>
          </a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;