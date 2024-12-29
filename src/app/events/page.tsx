'use client';

import { events } from '@/data/events';
import Link from 'next/link';
import EventCard from '@/app/ui/eventCard';

export default function Events() {
    return (
        
        <section 
        className= "home" >
        <h1>Upcoming Events </h1>
    {
        events.map((event, index) => {
            return (
                <EventCard 
                    key= { index }
                    title = { event.title }
                    image = { event.image }
                    description = { event.description }
                />
                );
        })
    }

        </section>
    );
}