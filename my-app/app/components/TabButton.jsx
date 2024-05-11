import React from 'react';
import styles from '../css/TabButton.module.css'; // Import the CSS module

const TabButton = ({ active, selectTab, children }) => {
    // Apply 'active' class conditionally
    const buttonClasses = `${styles.buttonText} ${active ? styles.active : ''}`;

    return (
        <button onClick={selectTab}>
            <p className={buttonClasses}>
                {children}
            </p>
        </button>
    );
};

export default TabButton;
