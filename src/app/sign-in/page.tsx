import React from 'react';
import { cookies } from 'next/headers';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SignInForm from '@/components/sign-in-form';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        redirect('/dashboard');
    }

    return (
        <div
            className="flex items-center justify-center"
            style={{
                height: 'calc(100vh - 64px)',
            }}
        >
            <Card>
                <CardHeader>
                    <CardTitle>Sign Into your account</CardTitle>
                    <CardDescription>Easily manage your workflow configuration with your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Separator className="my-4" />
                    <SignInForm />
                    <Separator />

                    <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/sign-up"
                    >
                        Sign Up
                    </a>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignInPage;
