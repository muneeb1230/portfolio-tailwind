import React from 'react';
import Image from 'next/image';

function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="container mx-auto max-w-[84%]">
        <h2 className="text-center text-4xl font-semibold">My services</h2>
        <p id="para" className="text-center mt-5">
          Crafting interactive and responsive websites using the latest technologies like HTML, CSS, JavaScript, and
          <br />
          frameworks like Next.js and React.js
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="bg-[#171717] p-10 text-center rounded-lg shadow-lg hover:bg-gray-800 transition duration-500">
            <Image src="/serv 1.avif" alt="Web Design Service" width={128} height={128} className="mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">WEB DESIGN</h3>
            <hr className="w-12 h-[3px] bg-green-600 my-3 mx-auto" />
          </div>

          <div className="bg-[#171717] p-10 text-center rounded-lg shadow-lg hover:bg-gray-800 transition duration-500">
            <Image src="/serv 2.avif" alt="Web Content Service" width={128} height={128} className="mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">WEB CONTENT</h3>
            <hr className="w-12 h-[3px] bg-green-600 my-3 mx-auto" />
          </div>

          <div className="bg-[#171717] p-10 text-center rounded-lg shadow-lg hover:bg-gray-800 transition duration-500">
            <Image src="/serv 3.avif" alt="Web Development Service" width={128} height={128} className="mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">WEB DEVELOPMENT</h3>
            <hr className="w-12 h-[3px] bg-green-600 my-3 mx-auto" />
          </div>

          <div className="bg-[#171717] p-10 text-center rounded-lg shadow-lg hover:bg-gray-800 transition duration-500">
            <Image src="/serv 4.avif" alt="Code Problem Service" width={128} height={128} className="mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">CODE PROBLEM</h3>
            <hr className="w-12 h-[3px] bg-green-600 my-3 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
