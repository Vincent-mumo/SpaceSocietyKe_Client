import React from 'react';

const Mission = () => {
  return (
    <div className="md:h-[400px] w-full flex flex-col md:flex-row bg-gray-200">
      {/* Container for Mission and Vision */}
      <div className="w-full flex flex-col md:flex-row justify-between p-5 gap-5">
        {/* Mission Section */}
        <div className="relative flex-1 p-10 flex flex-col justify-between">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          >
            <source src="mission.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Text Content */}
          <div className="relative z-10 text-white">
            <h1 className="text-2xl font-bold mb-4">Our Mission</h1>
            <p className="max-w-[90%] md:max-w-[90%] text-xl md:text-2xl">
              To position Kenya as a leader in space science and technology within Africa by inspiring and preparing the next generation of space pioneers. The Kenya Space Society aims to play a pivotal role in transforming Kenya into a spacefaring nation while addressing societal challenges through space-driven solutions.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative flex-1 p-10 flex flex-col justify-between">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          >
            <source src="vision.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Text Content */}
          <div className="relative z-10 text-white">
            <h1 className="text-2xl font-bold mb-4">Our Vision</h1>
            <p className="max-w-[90%] md:max-w-[90%] text-xl md:text-2xl">
              To bridge the gap between space enthusiasts, academia, professionals, and government agencies, fostering a robust space community in Kenya that contributes to national and global space exploration goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;