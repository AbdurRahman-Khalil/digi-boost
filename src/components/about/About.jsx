import React from 'react';
import styles from './About.module.css';

const About = () => {

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>About DigiBoost</h2>
                    <p className={styles.subtitle}>
                        We are a team of passionate marketers, designers, and developers
                        dedicated to driving your business growth.
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>🚀</div>
                            <div className={styles.featureText}>
                                <h3>Innovation Driven</h3>
                                <p>We stay ahead of digital trends to keep your business competitive.</p>
                            </div>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>📊</div>
                            <div className={styles.featureText}>
                                <h3>Data-First Approach</h3>
                                <p>Every decision is backed by data and analytics for maximum impact.</p>
                            </div>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>💡</div>
                            <div className={styles.featureText}>
                                <h3>Creative Solutions</h3>
                                <p>Unique strategies tailored to your specific business needs.</p>
                            </div>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>🤝</div>
                            <div className={styles.featureText}>
                                <h3>Partnership Focused</h3>
                                <p>We work with you as partners in your success journey.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.visualContent}>
                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineYear}>2018</div>
                                <div className={styles.timelineContent}>
                                    <h4>Founded</h4>
                                    <p>Started with a vision to transform digital marketing</p>
                                </div>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineYear}>2020</div>
                                <div className={styles.timelineContent}>
                                    <h4>100+ Clients</h4>
                                    <p>Reached milestone of serving 100+ satisfied clients</p>
                                </div>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineYear}>2023</div>
                                <div className={styles.timelineContent}>
                                    <h4>Global Reach</h4>
                                    <p>Expanded to serve clients across 3 continents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;