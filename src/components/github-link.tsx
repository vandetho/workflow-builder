'use client';
import React from 'react';
import { Icon } from '@iconify/react';

const GithubLink = React.memo(() => {
    return (
        <a target="_blank" rel="noreferrer" href="https://github.com/vandetho/workflow-builder">
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                <Icon icon={'akar-icons:github-fill'} className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
            </div>
        </a>
    );
});

export default GithubLink;
