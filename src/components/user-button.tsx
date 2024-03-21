'use client';

import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const UserButton = React.memo(() => {
    const supabase = createClientComponentClient();
    const router = useRouter();

    const signOut = async () => {
        await supabase.auth.signOut();
        toast.success('You have been signed out.');
        router.refresh();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Icon icon="teenyicons:user-circle-solid" width={24} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-112">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Icon icon="ic:round-dashboard" width={18} />
                        <span>Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Icon icon="ph:user-fill" width={18} />
                        <span>Profile</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={signOut}>
                        <Icon icon="ic:baseline-logout" width={18} />
                        <span>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
});

export default UserButton;
