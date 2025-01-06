import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import CreateEventForm from '@/app/ui/events/createEventForm';

interface Role {
    role_name: string;
}

interface UserRoles {
    roles: Role;
}

export default async function PrivatePage() {

    const supabase = await createClient()

    const { data: {user}, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        redirect('/login')
    }

    const {data: userRoles, error} = await supabase
        .from<string, UserRoles>('user_roles')
        .select(`roles (
            role_name
            )`)
        .eq('user_id', user.id)
        .single();

    if (error) {
        throw new Error(`Error: ${error.message}`);
    }

    // throw new Error(`UserRoles ${JSON.stringify(userRoles) }, ${JSON.stringify(userRoles.roles)}`);

    const roleName = userRoles?.roles?.role_name || 'No Role Assigned';

    return (
    <div>
        <p>Hello {user.email}. Your role is {roleName}</p>
        <CreateEventForm />
    </div>
    );
}