import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,futuristic')"
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Empowering Innovation with Modern Solutions
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-200">
          Build scalable apps with modern infrastructure, cutting-edge tools, and seamless user experiences.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#get-started"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="px-6 py-3 border border-gray-300 text-gray-200 hover:bg-white hover:text-gray-900 font-medium rounded-md transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;