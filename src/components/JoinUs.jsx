import React from 'react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  return (
    <div className="flex items-center justify-center p-4">
      {/* Main div with gradient background */}
      <div className="bg-gradient-to-r from-[#242300] via-[#0d7909] to-[#00d4ff] w-full rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between p-8">
        {/* Text content */}
        <div className="w-full md:w-[40%] flex flex-col justify-center space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white">Join Us</h1>
          <p className="text-white text-base md:text-2xl">
            Join our community of space enthusiasts, researchers, and professionals. We welcome students, educators, and anyone who is interested in space sciences and exploration. Membership is now open to all.
          </p>
          <Link to="/register">
            <button className="bg-white text-[#242300] font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer">
              Join Now
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center mt-6 md:mt-0">
          <img
            src="lady.jpg"
            alt="Lady"
            className="w-[300px] md:w-[400px] h-[300px] md:h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;