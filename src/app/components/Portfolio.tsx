import React from 'react';
import Image from 'next/image';

function Portfolio() {
  return (
    <section id="portfolio" className="py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <p className="text-lg text-white mb-10">
          Here are some of the projects I have worked on, showcasing my skills in web development and my ability to turn
          ideas into fully functional, visually appealing websites.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mt-10">
          <div className=" p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/proj 1.avif" alt="The Music Website" width={492} height={300} className="rounded-lg"/>
            <p className="mt-4 text-white font-medium">The Music Website</p>
          </div>
          <div className=" p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/proj 2.avif" alt="The John Deno Website" width={492} height={300} className="rounded-lg"/>
            <p className="mt-4 text-white font-medium">The John Deno Website</p>
          </div>
          <div className=" p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/proj 3.avif" alt="Darna Constructor Website" width={492} height={300} className="rounded-lg"/>
            <p className="mt-4 text-white font-medium">Darna Constructor Website</p>
          </div>
          <div className="p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image src="/pro 4.png" alt="The Client Portfolio" width={492} height={300} className="rounded-lg"/>
            <p className="mt-4 text-white font-medium">The Client Portfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
