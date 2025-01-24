import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const Events = () => {
  // Dummy data for events
  const events = [
    { id: 1, title: 'Star Gazing at Masai Mara National Park', Date: '3rd March 2025', Cost: 'ksh 2,000', image: 'space1.jpg' },
    { id: 2, title: 'Debate Hosted by Martin Junior', Date: '6th April 2025', Cost: 'ksh Free', image: 'space3.jpg' },
    { id: 3, title: 'Town Hall Meeting about Rocketry', Date: '3rd May 2025', Cost: 'ksh 2,500', image: 'space4.jpg' },
    { id: 4, title: 'Space Sensitization Countrywide Tour', Date: '9th July 2025', Cost: 'ksh 2,000', image: 'space5.jpg' },
  ];

  return (
    <div className="min-h-[60vh] bg-cover bg-center mb-10" style={{ backgroundImage: 'url(events.svg)' }}>
      <div className="container mx-auto px-3 py-3">
        <h2 className="text-center text-5xl font-bold text-black mb-10">Upcoming Events</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {events.map((event) => (
            <div key={event.id} className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-[200px] object-cover" />
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.Date}</p>
                <p className="text-gray-600">{event.Cost}</p>
                <Link
                  to={`/event/${event.id}`}
                  className="bg-green-500 text-white text-center py-2 rounded-lg cursor-pointer hover:bg-green-600 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;