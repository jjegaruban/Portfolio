import React, { useEffect } from 'react';
import aboutImg from "../assets/about.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS for animations
  }, []);

  return (
    <div id='about' className='border-b border-neutral-900 pb-4 my-20'>
      {/* Heading with up-to-down animation */}
      <h2 
        className='text-center text-4xl' 
        data-aos="fade-down" // Heading comes from up to down
      >
        About <span className='text-neutral-500'>Me</span>
      </h2>

      <div className='flex flex-wrap'>
        {/* Image with left-to-right animation */}
        <div 
          className='w-full lg:w-1/2 lg:p-8 flex justify-center' 
          data-aos="fade-right" // Image comes from left to right
        >
          <img className='rounded-2xl mx-auto h-80 w-70' src={aboutImg} alt="About Me" />
        </div>

        {/* Text with right-to-left animation */}
        <div 
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start p-4" 
          data-aos="fade-left" // Text comes from right to left
        >
          <p className='my-2 max-w-xl py-6'>
          I am a Full Stack MERN Developer skilled in building and deploying web applications using MongoDB, 
          Express.js, React, and Node.js. With a strong foundation in JavaScript, I handle both frontend and backend development,
          creating responsive user interfaces with React and managing server-side logic, API integrations, and databases with Node.js and Express.
          My experience includes developing RESTful APIs, handling data management with MongoDB, and ensuring efficient, secure applications through user authentication and state management (Redux). I am comfortable with Git for version control, and I prioritize writing clean, maintainable code. My goal is to build dynamic,
          scalable applications that offer seamless user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;



