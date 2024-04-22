import React from 'react';
import styles from '../css/ProjectTag.module.css'; // Import the CSS module

const ProjectTag = ({ name, onClick, isSelected }) => {
    // Apply 'selected' or 'default' class based on the 'isSelected' prop
    const buttonClasses = isSelected ? styles.selected : styles.default;

    return (
        <button 
            className={`${styles.tagButton} ${buttonClasses}`}
            onClick={() => onClick(name)}>
            {name}
        </button>
    );
};

export default ProjectTag;
