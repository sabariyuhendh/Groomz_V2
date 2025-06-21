import React, { useState } from 'react';
// Placeholder logo (replace with your own logo asset)
// import logo from '../assets/logo.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 flex items-center justify-between px-24 py-12 bg-transparent text-white z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* Replace with your logo image */}
        <span className="font-medium text-2xl tracking-widest">County</span>
      </div>
    
      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-8 text-xl">
          <a href="#" className="hover:text-gray-400 transition">Home</a>
          <a href="#" className="hover:text-gray-400 transition">Products</a>
          <a href="#" className="hover:text-gray-400 transition">My Bookings</a>
          <a href="#" className="hover:text-gray-400 transition">Book Service</a>
          <a href="#" className="hover:text-gray-400 transition">Cart</a>
      </div>
      <div className=" text-xl flex items-center gap-4">
        <button>Login</button>
        <button>Profile</button>
      </div>
      
      {/* Hamburger for mobile */}
      <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="8" x2="23" y2="8" /><line x1="5" y1="14" x2="23" y2="14" /><line x1="5" y1="20" x2="23" y2="20" /></svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#181818] flex flex-col items-center gap-6 py-6 md:hidden shadow-lg animate-fade-in z-20">
          <li><a href="#" className="hover:text-gray-400 transition">About Us</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Product</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">My Bookings</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Book Service</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Cart</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;