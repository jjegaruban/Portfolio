import React, { useEffect } from 'react';
import { FaReact, FaCloudSun, FaCode } from 'react-icons/fa'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div id='experience' className='border-b border-neutral-900 pb-10 my-20'>
      <h2 className='text-center text-4xl mb-10' data-aos="fade-up">
        Experience
      </h2>
      <div className='flex flex-wrap justify-center items-start gap-8 '>

        {/* Project 1 - Portfolio Website */}
        <div className='w-full lg:w-1/3 p-6 bg-neutral-900 text-white rounded-xl border-2 border-neutral-800 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:border-cyan-400' data-aos="fade-right">
          <div className="flex items-center mb-4">
            <FaReact className="text-3xl text-sky-400 mr-4" />
            <h3 className='text-xl font-semibold'>Personal Project: Portfolio Website</h3>
          </div>
          <p className='text-neutral-400'>
            Built a responsive personal portfolio using React and Tailwind CSS. 
            This project showcases modern web development practices, including reusable components, responsive design, and animations.
          </p>
        </div>

        {/* Project 2 - Weather App */}
        <div className='w-full lg:w-1/3 p-6 bg-neutral-900 text-white rounded-xl border-2 border-neutral-800 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:border-cyan-400 cursor-pointer' data-aos="fade-up ">
          <a href="https://672712b415ea8179cebdf1a0--weatherappbyjegaruban.netlify.app/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex items-center mb-4">
              <FaCloudSun className="text-3xl text-yellow-400 mr-4" />
              <h3 className='text-xl font-semibold'>Weather App (React + API Integration)</h3>
            </div>
          </a>
          <p className='text-neutral-400'>
            Developed a weather app using React and OpenWeather API to display real-time weather data. 
            Implemented features like location search, data fetching with Axios, and dynamic UI changes based on weather conditions.
          </p>
        </div>

        {/* Learning Journey */}
        <div className='w-full lg:w-1/3 p-6 bg-neutral-900 text-white rounded-xl border-2 border-neutral-800 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:border-cyan-400' data-aos="fade-left">
          <div className="flex items-center mb-4">
            <FaCode className="text-3xl text-green-400 mr-4" />
            <h3 className='text-xl font-semibold'>Learning Journey</h3>
          </div>
          <p className='text-neutral-400'>
            As a fresher, I’ve been continuously building my skills in JavaScript, React, and Tailwind CSS by working on personal projects and following best practices. I’m actively seeking opportunities to grow as a frontend developer.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Experience;



