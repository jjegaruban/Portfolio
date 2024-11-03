import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className='border-b border-neutral-900 pb-20'>
      <h2 className='my-10 text-center text-4xl'>Get In Touch</h2>
      <div className='flex flex-col items-center gap-6'>
        
        <div className='flex items-center gap-3'data-aos="flip-left">
          <FaEnvelope className='text-xl text-cyan-500 transition-transform duration-300 hover:scale-125' />
          <a 
            href='#jeyakumarjegaruban06@gmail.com'
            className='text-xl text-neutral-300 hover:text-cyan-500 transition-colors duration-300'>
            jeyakumarjegaruban06@gmail.com
          </a>
        </div>
        
        <div className='flex items-center gap-3'>
          <FaPhoneAlt className='text-xl text-cyan-500 transition-transform duration-300 hover:scale-125' />
          <a 
            href='tel:+1234567890' 
            className='text-xl text-neutral-300 hover:text-cyan-500 transition-colors duration-300'>
            0750543148
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;



