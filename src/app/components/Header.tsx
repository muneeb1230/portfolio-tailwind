// components/Header.js
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="mt-10">
      <div className="container mx-auto max-w-[84%]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
          <nav>
            <ul className="flex gap-8 mb-7">
              <li><Link href="/" className="text-lg text-teal-400 hover:text-yellow-300 transition duration-300">Home</Link></li>
              <li><Link href="#about" className="text-lg text-teal-400 hover:text-yellow-300 transition duration-300">About</Link></li>
              <li><Link href="#services" className="text-lg text-teal-400 hover:text-yellow-300 transition duration-300">Services</Link></li>
              <li><Link href="#skill" className="text-lg text-teal-400 hover:text-yellow-300 transition duration-300">Skills</Link></li>
              <li><Link href="#portfolio" className="text-lg text-teal-400 hover:text-yellow-300 transition duration-300">Portfolio</Link></li>
              <li><Link href="#contact" className="text-lg text-teal-400 hover:text-yellow-300 transition duration-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}




