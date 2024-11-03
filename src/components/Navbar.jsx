import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <nav id='navbar' className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
 
      </div>
      <div className='flex-grow'>
        <ul className=' bg-primary hover:bg-primary/80 p-3 rounded-full cursor-pointer flex space-x-8 justify-start'>
          <li className='cursor-pointer'>
            <a href="#about">About</a>
          </li>
          <li className='cursor-pointer'>
            <a href="#technologies">Technologies</a>
          </li>
          <li className='cursor-pointer'>
            <a href="#experience">Experience</a>
          </li>
          <li className='cursor-pointer'>
            <a href="#projects">Projects</a>
          </li>
          <li className='cursor-pointer'>
            <a href="#resume">Resume</a>
          </li>
          <li className='cursor-pointer'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" data-aos="fade-down">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" data-aos="fade-down" data-aos-delay="100">
          <FaGithub />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" data-aos="fade-down" data-aos-delay="200">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" data-aos="fade-down" data-aos-delay="300">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;






