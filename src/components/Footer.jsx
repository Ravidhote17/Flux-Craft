import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 md:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center justify-between px-16 mb-4 md:mb-6 lg:mb-8">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h5 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">About Us</h5>
            <p className="text-sm md:text-base lg:text-lg">
                We Design your Dreams.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h5 className="text-xl px-8 md:text-2xl lg:text-3xl font-bold mb-2">Quick Links</h5>
            <ul className='px-[-8vw] flex gap-12'>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
            </div>
        </div>
        <hr />
        <div className="text-center mt-4">
          <p className="text-sm md:text-base lg:text-lg">&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
