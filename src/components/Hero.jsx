import React, { useEffect } from 'react';
// import profileImage from '../assets/KevinRushProfile.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS for animations
  }, []);

  return (
    <div id='hero' className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className="flex flex-wrap">
        {/* Left side - Name and About Section */}
        <div className="w-full lg:w-1/2" data-aos="fade-right"> {/* Animate from left to right */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className='pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-5xl'>
              Jeyakumar Jegaruban
            </h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
             Full Stack MERN Developer
            </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
            I'm a passionate Full Stack MERN Developer focused on creating dynamic web applications. With a solid foundation in JavaScript, MongoDB, Express.js, React, and Node.js, I've developed responsive and user-friendly interfaces. My recent projects include [mention specific projects], where I successfully [highlight achievements].
             I'm excited to leverage my skills in a collaborative environment and continue growing as a developer.
            </p>
          </div>
        </div>

        {/* Right side - Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8" data-aos="fade-left"> {/* Animate from right to left */}
          <div className="flex justify-center">
            <img 
              src=""
              alt="" 
              className="rounded-full shadow-lg h-64 w-64 object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


