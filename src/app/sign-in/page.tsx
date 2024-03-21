import React from 'react';
import { cookies } from 'next/headers';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SignInForm from '@/components/sign-in-form';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';

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
                    <CardTitle>Sign into your account</CardTitle>
                    <CardDescription>Easily manage your workflow configuration with your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Separator className="my-4" />
                    <SignInForm />
                    <Separator />
                    <Button>
                        <a href="/register">Register</a>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignInPage;
