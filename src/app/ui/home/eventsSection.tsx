'use client';

import { useState } from 'react';
import EventCard from '@/app/ui/events/eventCard';

export default function EventsSection({events}: {events: any[]}) {
    // State to manage how many events are displayed
    const [visibleCount, setVisibleCount] = useState(3);

    // Function to reveal all events
    const RevealEvents = () => {
        setVisibleCount(events.length); // Set visibleCount to the total number of events
    };

    const HideEvents = () => {
        setVisibleCount(3);
    };

    return (
        <section className="home">
            <h1>Upcoming Events</h1>

            {/* Display visible events */}
            {[...events].reverse().slice(0, visibleCount).map((event, index) => (
                <EventCard
                    key={index}
                    title={event.title}
                    image={event.image}
                    description={event.description}
                />
            ))}

            {/* Show the "See more events" button only if not all events are visible */}
            {visibleCount < events.length && (
                <div
                    className="mx-auto w-auto cursor-pointer"
                    onClick={RevealEvents}
                >
                    <p className="text-center text-slate-500">
                        - See more events -
                    </p>
                    <p className="text-center text-slate-500">
                        V
                    </p>
                </div>
            )}


            {visibleCount >= events.length && events.length > 3 && (
                <div
                    className="mx-auto w-auto cursor-pointer"
                    onClick={HideEvents}
                >
                    <p className="text-center text-slate-500">
                        ^
                    </p>
                    <p className="text-center text-slate-500">
                        - Minimize -
                    </p>
                </div>
            )
            }
        </section>
    );
}
