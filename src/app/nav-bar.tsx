import React from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import Blogs from '@/app/blogs';
import Image from 'next/image';
import Logo from '@/assets/logo-34.png';
import GithubLink from '@/components/github-link';
import SignInButton from '@/components/sign-in-button';

interface NavBarProps {}

const NavBar = React.memo<NavBarProps>(() => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <Image src={Logo} alt="Symflowbuilder" width={35} height={33} priority />
                        <span className="hidden text-primary font-bold sm:inline-block">SymFlowBuilder</span>
                    </a>
                    <nav className="flex items-center gap-6 text-sm">
                        <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/"
                        >
                            Homepage
                        </a>
                        <Blogs />
                        <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="https://github.com/vandetho/workflow-builder"
                        >
                            GitHub
                        </a>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center gap-2">
                        <GithubLink />
                        <ThemeToggle />
                        <SignInButton />
                    </nav>
                </div>
            </div>
        </header>
    );
});

export default NavBar;
