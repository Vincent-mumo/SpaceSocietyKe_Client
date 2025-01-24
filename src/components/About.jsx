import React from 'react';

const About = () => {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: "url('space8.jpg')" }}>
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kenya Space Society</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          The Kenya Space Society (KSS) is a membership organization dedicated to promoting space science, technology, and exploration in Kenya. It serves as a platform to inspire, educate, and engage individuals—especially students, professionals, and space enthusiasts—about the potential and impact of space-related activities on society. Through workshops, seminars, and collaborative projects, KSS aims to foster innovation and advance Kenya's role in the global space community. Join us as we explore the final frontier and unlock the endless possibilities of space!
        </p>
      </div>
    </div>
  );
};

export default About;