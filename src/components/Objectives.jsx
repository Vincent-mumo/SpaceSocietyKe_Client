import React from 'react';

const Objectives = () => {
  return (
    <div className="border border-green-500 m-5 rounded-[10px]">
      <h1 className="text-center text-4xl font-bold my-5">Our Main Objectives</h1>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex flex-col gap-10 p-5">
          {/* Objective 1 */}
          <div className="flex md:flex-row items-start gap-2">
            <img src="star.png" alt="" className="h-[30px] w-[30px]" />
            <h2 className="w-full md:w-[60%]">
              Space Education and Outreach: Conducts workshops, seminars, and events to raise awareness about space sciences and their importance. Organizes public outreach programs like stargazing events, trivia sessions, and space boot camps.
            </h2>
          </div>

          {/* Objective 2 */}
          <div className="flex md:flex-row items-start gap-2">
            <img src="star.png" alt="" className="h-[30px] w-[30px]" />
            <h2 className="w-full md:w-[60%]">
              Research and Innovation: Encourages members to participate in space-related research and projects, such as climate monitoring, space debris mitigation, and innovative energy solutions. Promotes hands-on activities like hackathons and conceptual design competitions for space missions.
            </h2>
          </div>

          {/* Objective 3 */}
          <div className="flex md:flex-row items-start gap-2">
            <img src="star.png" alt="" className="h-[30px] w-[30px]" />
            <h2 className="w-full md:w-[60%]">
              Partnerships and Collaboration: Partners with universities, space agencies, and private organizations.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;