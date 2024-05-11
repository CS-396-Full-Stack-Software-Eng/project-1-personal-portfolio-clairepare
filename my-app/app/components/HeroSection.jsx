import React from 'react'
import Image from 'next/image'
import styles from "../css/HeroSection.module.css"
import Link from 'next/link'

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
                    <Link href="/about">
                        <button className={styles.buttonPrimary}>
                            About Me
                        </button>
                    </Link>
                    <a href="/Claire_Pare_Jan30_resume_cs.pdf" download>
                        <button className={styles.buttonSecondary}>
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default HeroSection