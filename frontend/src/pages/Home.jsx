import React from 'react'
import logo from "../images/man1.jpg";

function Home() {
  return (
    <div className="w-full h-screen flex text-white font-sans relative overflow-hidden">
      
      {/* Left Panel */}
      <div className="w-1/2 h-full bg-[#111112] py-8 px-24 flex flex-col justify-center">
        {/* Content Left */}
        <div className="flex-grow flex flex-col justify-center items-start" >
          <h1 className="text-7xl font-bebas tracking-wide leading-tight">Groom Like<br/> a King.</h1>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 h-full bg-black py-8 px-24 flex flex-col justify-end items-end">
        {/* Content Right */}
        <div className="flex-grow flex justify-end items-end">
        </div>
      </div>
      
      {/* Central Image Placeholder */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
        {/* Replace this div with your image later */}        
        <img src={logo} alt="Grooming" className="w-[500px] h-[500px] object-contain rounded-full" />
      </div>
     

    </div>
  )
}

export default Home