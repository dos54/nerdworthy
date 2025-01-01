'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/'},
    { name: 'Gateway Games', href: '/gateway-games'},
    { name: 'News', href: '/news'},
    { name: 'Events', href: '/events'},
    { name: "Blog", href: '/blog'},
    { name: 'Gallery', href: '/gallery'},
]

export default function NavLinks() {
    const pathname = usePathname();
    return (
    <>
        {links.map((link) => {
            return (
                <Link
                 key={link.name}
                 href={link.href}
                 className={clsx(
                    "flex h-[48px] grow items-center justify-center rounded-md hover:ring ",
                    {
                        'bg-sky-100 text-blue-600': pathname === link.href
                    }
                 )}
                 >
                    <p>{link.name}</p>
                </Link>
            )
        })
        }
    </>
    );
}