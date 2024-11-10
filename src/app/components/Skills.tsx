import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <section id="skill" className="skills-section py-20">
      <div className="container mx-auto max-w-[84%]">
        <h2 className="text-center text-4xl font-semibold mb-10">Skills</h2>
        <div className="skills-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          <div className="skill-box text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Image src="/html55.png" alt="HTML Icon" width={60} height={60} className="mx-auto" />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">HTML5</h3>
          </div>
          <div className="skill-box text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Image src="/css3.png" alt="CSS Icon" width={60} height={60} className="mx-auto" />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">CSS3</h3>
          </div>
          <div className="skill-box text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Image src="/java3.webp" alt="JavaScript Icon" width={60} height={60} className="mx-auto" />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">JavaScript</h3>
          </div>
          <div className="skill-box text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Image src="/react3.jpeg" alt="React Icon" width={60} height={60} className="mx-auto" />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">React.js</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
