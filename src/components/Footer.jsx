import React from 'react';

export default function Footer() {
    return (
        <div className="bg-zinc-600 w-full h-[50px] flex items-center justify-between px-4">
            <div className="text-white">
                <span>&copy; 2023 Pixel Diagnose</span>
            </div>
            <div className="text-white">
                <a
                    href="https://github.com/pixel-diagnose/user-application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                    <span>Pixel Diagnose on GitHub</span>
                    <img
                        src="https://github.com/favicon.ico"
                        alt="GitHub Logo"
                        className="ml-2 w-5 h-5"
                    />
                </a>
            </div>
        </div>
    );
}
