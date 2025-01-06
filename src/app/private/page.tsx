import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import CreateEventForm from '@/app/ui/events/createEventForm';

export default async function PrivatePage() {

    const supabase = await createClient()

    const { data: {user}, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        redirect('/login')
    }

    const {data: userRoles, error} = await supabase
        .from('user_roles')
        .select(`roles (
            role_name
            )`)
        .eq('user_id', user.id)
        .single();

    if (error) {
        throw new Error(`Error: ${error.message}`);
    }

    const roleName = userRoles?.roles?.role_name || 'No Role Assigned';

    return (
    <div>
        <p>Hello {user.email}. Your role is {roleName}</p>
        <CreateEventForm />
    </div>
    );
}