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
            <Link href={gitUrl}>
                <div
                    className={styles.imageContainer}
                    style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}
                />
                <div className={styles.content}>
                    <h5 className={styles.title}>{title}</h5>
                    <div className={`${styles.description} ${!showFullDescription ? 'hidden md:block' : ''}`}>
                        {description}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
