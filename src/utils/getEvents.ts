import {neon} from '@neondatabase/serverless';

type Event = {
    title: string;
    image: string;
    description: string;
}

export async function getEvents() {
    'use server';

    const sql = neon(`${process.env.DATABASE_URL}`);

    const rawEvents = await sql('SELECT title, image, description FROM events');

    const events: Event[] = rawEvents.map((event) => ({
        title: event.title,
        image: event.image,
        description: event.description,
    }));

    return events;
}
