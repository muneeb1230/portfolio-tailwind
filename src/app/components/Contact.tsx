import React from 'react';
import Image from 'next/image';

function Contact() {
  return (
    <section id="contact" className="pb-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-white mb-12">
          Let&apos;s connect and create something amazing together—reach out to start the conversation!
        </p>

        {/* Contact Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 rounded-lg">
            <Image src="/contat 1.avif" alt="Address Icon" width={86} height={86} className="mx-auto rounded-full bg-white p-2 mb-4" />
            <p className="font-semibold text-white mb-2">ADDRESS</p>
            <p className="text-gray-300">Karachi, Sindh</p>
          </div>
          <div className="text-center p-6 rounded-lg">
            <Image src="/contat2.avif" alt="Contact Number Icon" width={86} height={86} className="mx-auto rounded-full bg-white p-2 mb-4" />
            <p className="font-semibold text-white mb-2">CONTACT NO</p>
            <p className="text-gray-300">+92 317,3829361</p>
          </div>
          <div className="text-center p-6 rounded-lg">
            <Image src="/contat3.avif" alt="Email Icon" width={86} height={86} className="mx-auto rounded-full bg-white p-2 mb-4" />
            <p className="font-semibold text-white mb-2">EMAIL ADDRESS</p>
            <p className="text-gray-300">muneebmalikdev@gmail.com</p>
          </div>
          <div className="text-center p-6 rounded-lg">
            <a href="https://www.linkedin.com/in/muneeb-ali-2062b62b6/" target="_blank" rel="noopener noreferrer">
              <Image src="/contact4.avif" alt="LinkedIn Icon" width={86} height={86} className="mx-auto rounded-full bg-white p-2 mb-4" />
            </a>
            <p className="font-semibold text-white mb-2">LINKEDIN</p>
            <p className="text-gray-300">Muneeb Ali</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mt-20  ">
          <div className="lg:w-1/2">
            <Image src="/muneeb.jpg" id="img-contat" alt="Contact Image" width={380} height={480} className="rounded-lg" />
          </div>
          
          <div className="form lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="input-field">
                <label htmlFor="first-name" className="block font-semibold">First Name</label>
                <input type="text" id="first-name" placeholder="John" className="mt-2 p-3 border border-gray-300 rounded-lg w-full" />
              </div>

              <div className="input-field">
                <label htmlFor="last-name" className="block font-semibold">Last Name</label>
                <input type="text" id="last-name" placeholder="Alfard" className="mt-2 p-3 border border-gray-300 rounded-lg w-full" />
              </div>
            </div>

            <div className="input-field mb-6">
              <label htmlFor="email" className="block font-semibold">Email</label>
              <input type="email" id="email" placeholder="example@mail.com" className="mt-2 p-3 border border-gray-300 rounded-lg w-full" />
            </div>

            <div className="input-field mb-6">
              <label htmlFor="message" className="block  font-semibold">Message</label>
              <textarea id="message" placeholder="Your message..." className="mt-2 p-3 border border-gray-300 rounded-lg w-full h-32"></textarea>
            </div>

            <button type="submit" className="w-full py-3 text-white rounded-lg border-none bg-blue-700 transition duration-200">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
