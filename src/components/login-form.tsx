'use client';

import React from 'react';
import TextField from '@/components/text-field';
import { CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { object, string } from 'yup';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

const schema = object({
    email: string().email().required(),
    password: string().required(),
});

const LoginForm = React.memo(() => {
    const supabase = createClientComponentClient();
    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const router = useRouter();

    const authenticateUser = React.useCallback(
        async (data: { email: string; password: string }) => {
            setIsLoading(true);
            const { error } = await supabase.auth.signInWithPassword({ ...data });
            setIsLoading(false);
            if (error) {
                toast.error(error.message);
                return;
            }
            toast.success('Logged in successfully');
            router.replace('/dashboard');
        },
        [router, supabase.auth],
    );

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(authenticateUser)}>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <TextField
                            control={form.control}
                            id="email"
                            name="email"
                            label="E-mail"
                            placeholder="Enter email address"
                            type="email"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <TextField
                            control={form.control}
                            id="password"
                            name="password"
                            label="Password"
                            placeholder="Password"
                            type="password"
                        />
                    </div>
                    <CardFooter>
                        <Button type="submit" disabled={isLoading} className="w-full">
                            Login
                        </Button>
                    </CardFooter>
                </div>
            </form>
        </Form>
    );
});

export default LoginForm;
