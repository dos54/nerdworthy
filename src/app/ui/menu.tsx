'use client';

import React, { useState } from 'react';
import NavLinks from '@/app/ui/nav-links';

export default function Menu() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className="">
            <button
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls='menu'
                className='w-16 h-5 flex items-center justify-center md:opacity-0 md:pointer-events-none absolute right-5 top-5'
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </button>

            <nav
                id='menu'
                className={`absolute md:flex flex-col md:static right-5 mt-2 md:mt-0 w-48 md:w-full bg-slate-100 rounded-md md:flex-row md:justify-between md:gap-2 ${
                    isOpen ? 'scale-100 opacity-100' : 'scale:95 opacity-0 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto'
                } `}
            >
                <NavLinks />
            </nav>
        </div>
    );
}