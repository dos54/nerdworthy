import { neon } from '@neondatabase/serverless';

export default async function createEventForm() {

    async function create(formData: FormData) {
        'use server';
        
        const sql = neon(`${process.env.DATABASE_URL}`);
        const title = formData.get('title');
        const image = formData.get('image');
        const description = formData.get('description');
        const content = formData.get('content');
        
        await sql('INSERT INTO events (title, image, description, content) VALUES ($1, $2, $3, $4)', [title, image, description, content]);
    }
        
    <form action={create} className='web-form'>
        <h1>Create Event</h1>
        <input type='text' placeholder='Event Title' name='title' required />
        <input type='text' placeholder='Image URL' name='image' />
        <input type='text' placeholder='Short description' name='description' required />
        <input type='text' placeholder='Longer Description' name='content' />
        <button type='submit'>Create Event</button>
    </form>
    
}    