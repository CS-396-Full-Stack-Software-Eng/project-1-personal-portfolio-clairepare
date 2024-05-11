"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import NavItem from './NavItem';
import MenuOverlay from './MenuOverlay';
import styles from '../css/Nav.module.css'; // Import the CSS module
import { GiPear } from "react-icons/gi";

const navLinks = [
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/email" },
    { title: "Resume", path: "/resume" }
];

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className={styles.navBar}>
            <div className={styles.navContainer}>
                <Link href="/">
                    <div className={styles.circle}>
                        <GiPear className={styles.icon} />
                    </div>
                </Link>
                <div className={styles.mobileMenu}>
                    <button onClick={() => setNavOpen(!navOpen)} className={styles.navButton}>
                        {navOpen ? 'Close Nav' : 'Open Nav'}
                    </button>
                </div>
                <div className={`${styles.menuItems} ${styles.desktop}`}>
                    <ul className={styles.menuList}>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavItem href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navOpen && <MenuOverlay links={navLinks} />} {/* Overlay for small screens */}
        </nav>
    );
};

export default Nav;
