import {neon} from '@neondatabase/serverless';

export async function getEvents() {
    'use server';

    const sql = neon(`${process.env.DATABASE_URL}`);

    const events = await sql('SELECT title, image, description FROM events');

    return events;
}
