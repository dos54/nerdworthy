// 'use client';

// import { events } from '@/data/events';
import EventCard from '@/app/ui/eventCard';
import { neon } from '@neondatabase/serverless';
// import { describe } from 'node:test';

export default async function Events() {

    async function create(formData: FormData) {
        'use server';

        const sql = neon(`${process.env.DATABASE_URL}`);
        const title = formData.get('title');
        const image = formData.get('image');
        const description = formData.get('description');
        const content = formData.get('content');

        await sql('INSERT INTO events (title, image, description, content) VALUES ($1, $2, $3, $4)', [title, image, description, content]);
    }

    async function getEvents() {
        'use server';

        const sql = neon(`${process.env.DATABASE_URL}`);

        const events = await sql('SELECT title, image, description FROM events');

        return events.map((row: any) => ({
            title: row.title,
            image: row.image,
            description: row.description,
        }));
    }

    const events = await getEvents();
    return (

        <div>
            <form action={create} className='block'>
                <input type='text' placeholder='Event Title' name='title' />
                <input type='text' placeholder='Image URL' name='image' />
                <input type='text' placeholder='Short description' name='description' />
                <input type='text' placeholder='Longer Description' name='content' />
                <button type='submit'>Create Event</button>
            </form>

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