import React from 'react';

const TimelineEvent = ({ event, index, isVisible }) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      data-id={event.id}
      className={`timeline-event relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center`}
    >
      {/* Content */}
      <div 
        className={`w-5/12 ${isVisible ? (isEven ? 'animate-slideInRight' : 'animate-slideInLeft') : 'opacity-0'} 
          transition-all duration-700 bg-white p-6 rounded-lg shadow-md`}
      >
        <span className="inline-block bg-amber-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          {event.year}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-700">{event.description}</p>
      </div>
      
      {/* Center dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-amber-400 z-10 shadow-md"></div>
    </div>
  );
};

export default TimelineEvent;
