import React, { useEffect, useRef, useState } from 'react';
import { getTimelineEvents } from '../Components/Data/Timeline';
import TimelineEvent from './TimelineEvent';

const Timeline = () => {
  const [events, setEvents] = useState(getTimelineEvents());
  const timelineRef = useRef(null);
  const [visibleEvents, setVisibleEvents] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setVisibleEvents((prev) => {
              const updated = new Set(prev);
              updated.add(id);
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const eventElements = timelineRef.current?.querySelectorAll('.timeline-event');
    eventElements?.forEach((element) => observer.observe(element));

    return () => {
      eventElements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="achievements" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          <span className="text-amber-500">Achievements</span> Timeline
        </h2>
        <div
          ref={timelineRef}
          className="relative max-w-4xl mx-auto"
          aria-label="Timeline of achievements"
        >
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          {/* Events */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <TimelineEvent
                key={event.id}
                event={event}
                index={index}
                isVisible={visibleEvents.has(event.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
