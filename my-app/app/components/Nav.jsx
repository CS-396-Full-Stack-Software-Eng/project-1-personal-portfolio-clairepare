"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import NavItem from './NavItem'
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title: "About",
        path: "#about",

    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
    {
        title: "Resume",
        path: "#resume",
    }
]

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100' >
            <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>LOGO</Link>
                <div className='mobilemenu block md:hidden'>
                    {
                        navOpen ? (
                            // close button component here
                            <button onClick={() => setNavOpen(false)} className='flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                                Close Nav
                            </button> 
                        ) : (
                            //open button component here
                            <button onClick={() => setNavOpen(true)} className='flex items-center text-slate-200 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                                Open Nav
                            </button>
                        )
                    }
                </div>
                <div className='menuitems hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavItem href={link.path} title={link.title}/>
                            </li>))
                        }
                    </ul>

                </div>
            </div>
            {
                navOpen ? (
                    <MenuOverlay links={navLinks} />
                ) : null
            }
        </nav>
    )
}

export default Nav