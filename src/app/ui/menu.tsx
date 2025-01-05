'use client';

import React, { useEffect, useRef, useState } from 'react';
import NavLinks from '@/app/ui/nav-links';

export default function Menu() {
    
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event?.target as Node)) {
                setIsOpen(false);
            } 
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className="">
            <button
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls='menu'
                className='w-16 h-2 flex items-center justify-center md:opacity-0 md:pointer-events-none relative '
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
            </button>

            <nav
                id='menu'
                className={`absolute md:flex flex-col right-0 top-20 md:top-32 mt-2 md:mt-0 w-48 md:w-full bg-slate-100 rounded-md md:flex-row md:justify-between md:gap-2 ${
                    isOpen 
                        ? 'scale-100 opacity-100' 
                        : 'scale:95 opacity-0 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto'
                } `}
            >
                <NavLinks />
            </nav>
        </div>
    );
}