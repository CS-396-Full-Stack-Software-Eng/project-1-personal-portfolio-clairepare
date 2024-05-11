import React from 'react';
import ThemeToggle from './ThemeToggle';
import styles from '../css/Footer.module.css'; // Import the CSS module
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import Link from 'next/link';
import { GiPear } from "react-icons/gi";


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <Link href="/">
                    <div className={styles.circle}>
                        <GiPear className={styles.icon} />
                    </div>
                </Link>
            {/* <ThemeToggle /> ATTEMPTED, CAN'T FIGURE OUT ERROR*/}
            <p className={styles.thanksText}>Thanks for visiting!</p>
            <Link href="https://github.com/clairepare">
                    <FaGithub width={600} height={600}/>
                </Link>
                <Link href="https://www.linkedin.com/in/claire-par%C3%A9-256b2a20a/">
                    <RxLinkedinLogo width={600} height={600} />
                </Link>
        </div>
    </footer>
  );
};

export default Footer;
