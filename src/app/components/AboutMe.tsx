import Image from 'next/image';
import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto max-w-[84%]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2">
            <Image src="/about 1.jpg" alt="img" width={400} height={400} className='w-full'/>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-semibold mb-4">About me</h2>
            <p className="max-w-[90%] mb-4">
              Hi, I am Muneeb Ali, a dedicated and passionate web developer with a keen eye for detail and a love for creating dynamic, responsive websites. With expertise in HTML, CSS, JavaScript, and React.js, I transform ideas into functional and visually appealing web experiences.
            </p>
            <p className="max-w-[90%] mb-4">
              Over the years, I have honed my skills in front-end development, focusing on clean, efficient code and user-centric design. My approach is always to understand the clients needs thoroughly and then exceed their expectations with high-quality work.
            </p>
            <h2 id="h2" className="text-lg font-semibold mt-5 mb-2">Experienced</h2>
            <p className="mb-2">&lsquo;I have 1 year of experience at Chiniot General Hospital&lsquo;</p>
            <p className="mb-2">&lsquo;I have successfully completed several projects ranging from small business websites to complex web applications.&rsquo;</p>
            <p className="mb-5">Lets connect and collaborate to bring your ideas to life</p>
            
            <a href="/Muneeb-Malik.pdf" download>
              <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
