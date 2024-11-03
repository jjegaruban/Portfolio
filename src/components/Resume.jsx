import React from 'react';

const  ResumeSection = () => {
  return (
    <div id='resume' className='border-b border-neutral-900 pb-20'>
      <h2 className='my-10 text-center text-4xl'>Resume</h2>
      <div className='flex justify-center' data-aos="fade-right">
        <a 
          href='/path-to-your-resume.pdf'  // Put the correct path here (inside public folder)
          download='Your-Resume.pdf'  // Suggested file name for download
          className='px-6 py-3 bg-cyan-500 text-white text-xl rounded hover:bg-cyan-600 transition-colors duration-300'
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default ResumeSection;
