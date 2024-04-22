import React from 'react'
import Image from 'next/image'
import styles from "../css/HeroSection.module.css"

const HeroSection = () => {
  return (
    <section>
        <div className={styles.heroGrid}>
            <div className={styles.textContainer}>
                <h1 className={styles.heroHeading}>
                    <span>Hey there, I'm {" "}</span>
                    Claire!
                </h1>
                <p className={styles.heroText}>
                    I'm a software engineer, researcher, and STEM student who likes to solve meaningful problems with computers.
                </p>
                <div>
                    <button className={styles.buttonPrimary}>
                        About Me
                    </button>
                    <button className={styles.buttonSecondary}>
                        Download CV
                    </button>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                        src="/headshot.jpg"
                        alt="hero-image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 -top-1/2 -left-1/2"
                        width={300}
                        height={300}/>
                {/* <div className={styles.avatar}>
                    
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default HeroSection