// 'use client';

// import { events } from '@/data/events';
import '@/styles/module.form.css';
import EventCard from '@/app/ui/events/eventCard';
import {getEvents} from '@/utils/getEvents';
// import { describe } from 'node:test';


export default async function Events() {

    const events = await getEvents();

    return (

        <div>
            <section
                className="home" >
                <h1>Upcoming Events </h1>
                {
                    events.map((event, index) => {
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

            </section>
        </div>
    );
}