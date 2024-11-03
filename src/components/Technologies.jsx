import React, { useEffect } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiNodedotjs, SiTailwindcss, SiRedux, SiVite, SiGithub } from 'react-icons/si';
import { SiJavascript, SiMongodb, SiExpress, SiHtml5, SiCss3 } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technologies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS for animations
  }, []);

  return (
    <div id='technologies' className='border-b border-neutral-800 pb-24'>
      {/* Heading with fade-down animation */}
      <h2 
        className="my-20 text-center text-4xl font-semibold text-white" 
        data-aos="fade-down"
      >
        Technologies
      </h2>

      <div className='flex flex-wrap items-center justify-center gap-6'>
        
        {/* MongoDB Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <SiMongodb className='text-7xl text-green-500' /> {/* MongoDB Color */}
        </div>

        {/* Express.js Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <SiExpress className='text-7xl text-gray-300' /> {/* Express Color */}
        </div>

        {/* React Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <RiReactjsLine className='text-7xl text-sky-400' /> {/* React Color */}
        </div>

        {/* Node.js Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <SiNodedotjs className='text-7xl text-green-600' /> {/* Node.js Color */}
        </div>

        {/* Tailwind CSS Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <SiTailwindcss className='text-7xl text-cyan-400' /> {/* Tailwind CSS Color */}
        </div>

        {/* Redux Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <SiRedux className='text-7xl text-purple-500' /> {/* Redux Color */}
        </div>

        {/* JavaScript Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <SiJavascript className='text-7xl text-yellow-500' /> {/* JavaScript Color */}
        </div>

        {/* HTML5 Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <SiHtml5 className='text-7xl text-orange-500' /> {/* HTML5 Color */}
        </div>

        {/* CSS3 Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <SiCss3 className='text-7xl text-blue-500' /> {/* CSS3 Color */}
        </div>

        {/* Vite Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <SiVite className='text-7xl text-purple-600' /> {/* Vite Color */}
        </div>

        {/* GitHub Icon */}
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-5" 
          data-aos="fade-up"
        >
          <SiGithub className='text-7xl text-white' /> {/* GitHub Color */}
        </div>
      </div>
    </div>
  );
}

export default Technologies;


