import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center relative h-[calc(100vh-80px)]">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }} // Added z-index to ensure it stays below the mobile menu
      >
        <source src="/jupiter.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered text */}
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center z-10">
        We are made of star stuff
      </h1>
    </div>
  );
};

export default LandingPage;