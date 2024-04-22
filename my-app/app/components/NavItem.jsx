import React from 'react';
import Link from "next/link";
import styles from '../css/NavItem.module.css'; // Ensure the path to the CSS module is correct

const NavItem = ({href, title}) => {
    return(
        <Link href={href} className={styles.navLink}>
            {title}
        </Link>
    );
};

export default NavItem;
