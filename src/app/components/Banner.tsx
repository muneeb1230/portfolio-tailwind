import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <section className="relative mt-10 h-screen">
      <div className="container mx-auto max-w-[84%]">
        <div className="flex">
          <div className="max-w-[60%] mt-5">
            <p className="mb-2 leading-tight">Hi, This is me</p>
            <h1 className="mt-4 text-6xl font-bold">Muneeb Ali</h1>
            <p className="mt-5 mb-2 leading-relaxed">
              I am a passionate web developer specializing in creating dynamic and responsive websites. With a strong foundation in HTML, CSS, and JavaScript, I bring innovative ideas to life through clean and efficient code. I am dedicated to delivering high-quality work that meets client needs and exceeds expectations.
            </p>
            <button className="mt-8 px-5 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Contact me
            </button>
          </div>
          <div className="ml-auto">
            <Image src="/muneeb.jpg" alt="Muneeb Ali" width={300} height={300} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
