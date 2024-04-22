import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../css/ProjectCard.module.css'; // Make sure the path is correct

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className={styles.cardContainer}>
            <div
                className={styles.imageContainer}
                style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}
            />
            <div className={styles.content}>
                <h5 className={styles.title}>{title}</h5>
                <div className={`${styles.description} ${!showFullDescription ? 'hidden md:block' : ''}`}>
                    {description}
                </div>
                <button className={styles.readMoreButton} onClick={toggleDescription}>
                    {showFullDescription ? 'Show Less' : 'Read More'}
                </button>
            </div>
            <div className={`${styles.overlay} ${showFullDescription ? styles.overlayVisible : ''}`}>
                <Link href={gitUrl}>
                    <span className={styles.linkButton}>
                        <span className={styles.linkIcon}>Github</span>
                    </span>
                </Link>
                <Link href={previewUrl}>
                    <span className={styles.linkButton}>
                        <span className={styles.linkIcon}>Preview</span>
                    </span>
                </Link>
            </div>
            <div className={styles.bottomContent}>
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
