import '@/styles/module.form.css';
import { createClient } from '@/utils/supabase/server';

export default async function CreateEventForm() {

    async function createEvent(formData: FormData) {
        'use server';
        
        const supabase = await createClient();
        
        const {
            data: {user},
            error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
            throw new Error('You must be logged in to create an event');
        }

        const { data: userRole, error: roleError } = await supabase
            .from('user_roles')
            .select('id')
            .eq('user_id', user.id)
            .eq('role_id', 1)
            .single();

        console.log('User Role: ', userRole);
        console.log('Role Error: ', roleError);

        if (roleError || !userRole ) {
            throw new Error(`Only admins can create events ${userRole}, ${JSON.stringify(roleError)}`);
        }

        const { error: insertError } = await supabase
            .from('events')
            .insert( {
                title: formData.get('title'),
                image: formData.get('image'),
                description: formData.get('description'),
                content: formData.get('content'),
                publisher: user.email,
             } );
        
        if (insertError) {
            console.error('Insert Error: ', insertError.message);
            throw new Error(`Failed to create event: ${insertError.message}`);
        }
    }
        
    return (
    <form action={createEvent} className='web-form'>
        <h1>Create Event</h1>
        <input type='text' placeholder='Event Title' name='title' required />
        <input type='text' placeholder='Image URL' name='image' />
        <input type='text' placeholder='Short description' name='description' required />
        <input type='text' placeholder='Longer Description' name='content' />
        <button type='submit'>Create Event</button>
    </form>
    );
}    