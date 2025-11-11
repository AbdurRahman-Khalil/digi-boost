import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'pricing'];
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (section) => {
        return activeSection === section ? styles.active : '';
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h2>DigiBoost</h2>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <a 
                        className={isActive('home')} 
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </a>
                    <a 
                        className={isActive('about')} 
                        onClick={() => scrollToSection('about')}
                    >
                        About
                    </a>
                    <a 
                        className={isActive('services')} 
                        onClick={() => scrollToSection('services')}
                    >
                        Services
                    </a>
                    <a 
                        className={isActive('pricing')} 
                        onClick={() => scrollToSection('pricing')}
                    >
                        Pricing
                    </a>
                </nav>

                <div className={styles.controls}>
                    <button
                        className={styles.ctaButton}
                        onClick={() => scrollToSection('pricing')}
                    >
                        Get Started
                    </button>
                </div>

                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;