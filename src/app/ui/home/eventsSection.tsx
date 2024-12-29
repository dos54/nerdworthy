'use client';

import {events} from '@/data/events';
import Link from 'next/link';
import EventCard from '@/app/ui/eventCard';

export default function EventsSection() {
    
    return (
        <section 
        className="home">
            <h1>Upcoming Events</h1>
            {events.slice(-3).map((event, index) => {
                return (

                <EventCard 
                    key={index}
                    title={event.title}
                    image={event.image}
                    description={event.description}
                />
                );
            })
            }
            <Link
            href={"/events"}>
                <p
                className='text-center text-slate-500'
                >
                     - See more events - 
                </p>
            </Link>
        </section>
    );
}