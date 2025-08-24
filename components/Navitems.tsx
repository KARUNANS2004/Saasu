'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navitems = [
    { label: 'Home', href: "/" },
    { label: 'Companions', href: "/companions" },
    { label: 'My Journey', href: "/my-journey" },
]

const Navitems = () => {
    const pathName = usePathname()
    return (
        <nav className='flex items-center gap-4 '>
            {navitems.map(({ label, href }) => (
                <Link href={href} key={label} className={cn(pathName === href && 'text-primary font-bold')}>
                    {label}
                </Link>
            ))}
        </nav>
    )
}

export default Navitems
