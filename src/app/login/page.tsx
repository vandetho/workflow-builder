'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const authenticateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            alert('Email address is required');
            return;
        }
        setIsLoading(true);

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        setIsLoading(false);
        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <Card>
                <CardHeader>
                    <CardTitle>Login into your account</CardTitle>
                    <CardDescription>Easily manage your workflow configuration with your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Separator className="my-4" />
                    <form onSubmit={authenticateUser}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter email address"
                                    className="border border-slate-200 w-full px-3 py-2 rounded-lg"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Password</Label>
                                <Input
                                    type="password"
                                    placeholder="Enter password"
                                    className="border border-slate-200 w-full px-3 py-2 rounded-lg"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                            <CardFooter>
                                <Button type="submit" disabled={isLoading} className="w-full">
                                    Login
                                </Button>
                            </CardFooter>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginPage;
