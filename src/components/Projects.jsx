import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Weather App',
    description: 'A dynamic weather application using an external API to fetch and display real-time weather data.',
    technologies: ['React', 'Tailwind CSS', 'OpenWeather API'],
    image: '/path/to/weather-app-image.jpg',
    link: 'https://672712b415ea8179cebdf1a0--weatherappbyjegaruban.netlify.app/',
     // Add your actual weather site link
  },
  {
    title: 'To-Do List App',
    description: 'A simple and interactive to-do list application to manage daily tasks efficiently.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '/path/to/todo-app-image.jpg',
    link: 'https://your-weather-website.com', // Add your actual weather site link
  },
  // Add other projects here...
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initializes AOS and sets the animation duration
  }, []);

  return (
    <div id='projects' className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div className='flex flex-col gap-12'>
        {projects.map((project, index) => (
          <div key={index} className='flex flex-col lg:flex-row items-center gap-6'>
            
            {/* Image animation from left */}
            <div 
              className='lg:w-1/2' 
              data-aos="fade-right" // AOS animation for image from left
            >
              <img className='rounded-lg' src={project.image} alt={project.title} />
            </div>
            
            {/* Title, description, and technologies animation from right */}
            <div 
              className='lg:w-1/2' 
              data-aos="fade-left" // AOS animation for content from right
            >
              <h3 className='text-2xl font-semibold'>{project.title}</h3>
              <p className='my-4'>{project.description}</p>
              <ul className='flex gap-2'>
                {project.technologies.map((tech, i) => (
                  <li key={i} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</li>
                ))}
              </ul>
              {project.link && (
                <a 
                  href={project.link} 
                  className='mt-4 inline-block text-cyan-500 underline' 
                  target='_blank' 
                  rel='noopener noreferrer'>
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;



