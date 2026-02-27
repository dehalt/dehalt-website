import React from 'react';

const Footer = () => {
  return (
    <div className='w-full py-5 md:py-10 bg-[#121212] md:px-40   text-white flex justify-center items-center'>
        <div className='  flex w-full md:justify-between justify-center flex-wrap gap-5'>
          <div className='text-sm text-gray-400 w-fit'>&copy; Copyrights 2026</div>
        <div>Terms and Conditaions</div>
        <div>Privacy policy</div>
        </div>
    </div>
  );
};

export default Footer;