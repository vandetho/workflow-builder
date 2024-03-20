import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login?redirect=/profile');
    }

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default DashboardPage;
