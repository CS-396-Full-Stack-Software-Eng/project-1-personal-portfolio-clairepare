import React from 'react';
import NavItem from './NavItem';
import styles from '../css/MenuOverlay.module.css'; // Import the CSS module

const MenuOverlay = ({ links }) => {
  return (
    <ul className={styles.overlayMenu}>
        {links.map((link, index) => (
            <li key={index}>
                <NavItem href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
  );
};

export default MenuOverlay;
