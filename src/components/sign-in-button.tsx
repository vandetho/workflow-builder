import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import UserButton from '@/components/user-button';

const SignInButton = React.memo(async () => {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        return <UserButton />;
    }

    return (
        <a
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            href="/sign-in"
        >
            Sign In
        </a>
    );
});

export default SignInButton;
