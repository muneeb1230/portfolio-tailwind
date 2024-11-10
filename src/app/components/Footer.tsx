import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className=" text-white py-10 text-center">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around">
        
        {/* About Section */}
        <div className="about-footer w-full sm:w-1/3 mb-8 sm:mb-0">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300">I&apos;m a passionate web developer specializing in creating dynamic and responsive websites.</p>
        </div>
        
        {/* Social Links Section */}
        <div className="social-links w-full sm:w-1/3 mb-8 sm:mb-0">
          <h2 className="text-xl font-bold mb-4">Follow Me</h2>
          <div className="flex justify-center items-center ">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/fb_1-removebg-preview.png" alt="Facebook Icon" width={100} height={76} className="transition-transform transform hover:scale-110" />
            </Link>
            <Link href="https://www.linkedin.com/in/muneeb-ali-2062b62b6/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkdin-removebg-preview.png" alt="LinkedIn Icon" width={100} height={94} className="transition-transform transform hover:scale-110" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter-removebg-preview.png" alt="Twitter Icon" width={74} height={69} className="transition-transform transform hover:scale-110" />
            </Link>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="contact-footer w-full sm:w-1/3">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-gray-300">Email: muneebmalik@gmail.com</p>
          <p className="text-gray-300">Phone: +92 317 3829361</p>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <p className="footer-bottom text-gray-400 text-sm mt-6 border-t border-gray-600 pt-4">
        &copy; 2024 Muneeb Ali | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
