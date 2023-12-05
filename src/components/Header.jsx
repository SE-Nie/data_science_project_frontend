import React from 'react';

export default function Header() {
    return (
        <div className="bg-zinc-600 w-full h-[100px] flex items-center px-4">
            {/* Logo */}
            <div className="flex-shrink-0">
                <img src="../static/images/logo-schrift.png" alt="Logo" className="h-20 object-cover" />
            </div>
            <div className="flex-shrink-0 ml-auto">
                <img src="../static/images/logo.png" alt="Logo" className="h-20 object-cover" />
            </div>
        </div>
    );
}
