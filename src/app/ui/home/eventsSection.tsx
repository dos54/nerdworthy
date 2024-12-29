'use client';

import {events} from '@/data/events';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const defaultImagePath = '/gateway-games-low.png';

export default function EventsSection() {
    
    return (
        <section 
        className="home">
            <h1>Upcoming Events</h1>
            {events.slice(-3).map((event, index) => {
                return (
                // <div
                // key={index}
                // className='event-card flex flex-row'
                // >
                //     <Image 
                //     src={event.image || defaultImagePath}
                //     onError={() => setImgSrc}
                //     width={128}
                //     height={128}
                //     alt={event.title}
                //     />
                //     <div
                //     className='block'
                //     >
                //         <h2 className='antialiased font-semibold text-lg'>{event.title}</h2>
                //         <p>{event.description}</p>
                //     </div>
                // </div>

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

function EventCard({title, image, description}: {title: string, image?: string, description: string}) {
    const [imgSrc, setImgSrc] = useState(image || defaultImagePath);

    return (
        <div className="event-card flex flex-row my-4 ring">
            <Image
                src={imgSrc}
                alt={title}
                width={128} // Adjust width as needed
                height={128} // Adjust height as needed
                onError={() => setImgSrc(defaultImagePath)} // Fallback to default image
            />
            <div 
            className='block'>
                <h2 className='antialiased font-semibold text-lg'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}