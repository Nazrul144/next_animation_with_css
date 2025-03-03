'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const navLinks = [
        {
            title : 'Home',
            path: '/'
        },
        {
            title : 'CSS',
            path: '/css'
        },
    ]
    return (
        <div className='bg-cyan-500'>
            <div className='flex justify-center gap-6 font-extrabold text-2xl'>
            {
                navLinks?.map((navLink)=><Link className={`${pathName === navLink.path ? 'text-red-900' : ""}`} key={navLink.path} href={navLink.path}>{navLink.title}</Link>)
            }
            </div>
        </div>
    );
}

export default Navbar;
