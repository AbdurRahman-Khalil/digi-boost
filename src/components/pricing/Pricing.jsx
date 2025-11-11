import React, { useState } from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: 'Starter',
            price: { monthly: 299, annual: 249 },
            description: 'Perfect for small businesses starting their digital journey',
            features: [
                'Basic SEO Optimization',
                'Social Media Management (2 platforms)',
                'Monthly Analytics Report',
                'Email Support',
                'Up to 5 pages website'
            ],
            popular: false
        },
        {
            name: 'Professional',
            price: { monthly: 599, annual: 499 },
            description: 'Ideal for growing businesses with expanding needs',
            features: [
                'Advanced SEO Strategy',
                'Social Media Management (4 platforms)',
                'Weekly Analytics Report',
                'Priority Support',
                'Up to 15 pages website',
                'Email Marketing Campaigns',
                'Content Creation'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: { monthly: 999, annual: 849 },
            description: 'Complete solution for established businesses',
            features: [
                'Comprehensive SEO & SEM',
                'Full Social Media Management',
                'Real-time Analytics Dashboard',
                '24/7 Dedicated Support',
                'Unlimited Website Pages',
                'Advanced Email Automation',
                'Custom Content Strategy',
                'Competitor Analysis'
            ],
            popular: false
        }
    ];

    return (
        <section id="pricing" className={styles.pricing}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Simple, Transparent Pricing</h2>
                    <p className={styles.subtitle}>
                        Choose the plan that works best for your business
                    </p>

                    <div className={styles.billingToggle}>
                        <span className={!isAnnual ? styles.active : ''}>Monthly</span>
                        <div className={styles.toggleSwitch}>
                            <input
                                type="checkbox"
                                id="billing-toggle"
                                checked={isAnnual}
                                onChange={() => setIsAnnual(!isAnnual)}
                            />
                            <label htmlFor="billing-toggle"></label>
                        </div>
                        <span className={isAnnual ? styles.active : ''}>
                            Annual <span className={styles.discount}>Save 20%</span>
                        </span>
                    </div>
                </div>

                <div className={styles.pricingGrid}>
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
                        >
                            {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}

                            <div className={styles.planHeader}>
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <div className={styles.planPrice}>
                                    <span className={styles.currency}>$</span>
                                    <span className={styles.amount}>
                                        {isAnnual ? plan.price.annual : plan.price.monthly}
                                    </span>
                                    <span className={styles.period}>/month</span>
                                </div>
                                {isAnnual && (
                                    <p className={styles.billingNote}>billed annually</p>
                                )}
                                <p className={styles.planDescription}>{plan.description}</p>
                            </div>

                            <ul className={styles.featuresList}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <span className={styles.checkIcon}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`${styles.ctaButton} ${plan.popular ? styles.primary : styles.secondary}`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <p>All plans include a 14-day free trial. No credit card required.</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;