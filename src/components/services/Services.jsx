import React from 'react';
import styles from './Services.module.css';

const Services = () => {

    const services = [
        {
            icon: '🎯',
            title: 'SEO Optimization',
            description: 'Improve your search engine rankings and drive organic traffic to your website.',
            features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy']
        },
        {
            icon: '📱',
            title: 'Social Media Marketing',
            description: 'Engage your audience and build brand presence across social platforms.',
            features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics']
        },
        {
            icon: '📧',
            title: 'Email Marketing',
            description: 'Nurture leads and build customer relationships through targeted campaigns.',
            features: ['Automation', 'A/B Testing', 'List Management', 'Performance Tracking']
        },
        {
            icon: '💻',
            title: 'Web Development',
            description: 'Create stunning, responsive websites that convert visitors into customers.',
            features: ['UI/UX Design', 'Frontend Development', 'Backend Development', 'E-commerce']
        },
        {
            icon: '📊',
            title: 'Analytics & Reporting',
            description: 'Make data-driven decisions with comprehensive analytics and insights.',
            features: ['Dashboard Setup', 'KPI Tracking', 'Custom Reports', 'Data Visualization']
        },
        {
            icon: '🎨',
            title: 'Content Creation',
            description: 'Tell your brand story with compelling content that resonates with your audience.',
            features: ['Blog Writing', 'Video Production', 'Graphic Design', 'Brand Storytelling']
        }
    ];

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Services</h2>
                    <p className={styles.subtitle}>
                        Comprehensive digital marketing solutions tailored to your business goals
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={styles.serviceCard}
                        >
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                            <ul className={styles.featuresList}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={styles.learnMoreButton}>
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;