import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Transform Your
                        <span className={styles.highlight}> Digital Presence</span>
                    </h1>
                    <p className={styles.subtitle}>
                        We help businesses grow with cutting-edge marketing strategies,
                        data-driven insights, and creative solutions that deliver real results.
                    </p>
                    <div className={styles.buttons}>
                        <button
                            className={styles.primaryButton}
                            onClick={() => scrollToSection('pricing')}
                        >
                            Start Your Journey
                        </button>
                        <button
                            className={styles.secondaryButton}
                            onClick={() => scrollToSection('about')}
                        >
                            Learn More
                        </button>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <h3>500+</h3>
                            <p>Clients Worldwide</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>98%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>24/7</h3>
                            <p>Support Available</p>
                        </div>
                    </div>
                </div>
                <div className={styles.visual}>
                    <div className={styles.gradientOrb}></div>
                    <div className={styles.floatingElement}></div>
                    <div className={styles.floatingElement}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;