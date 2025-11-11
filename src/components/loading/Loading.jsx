import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}>
                <div className={styles.spinner}></div>
                <p className={styles.loadingText}>Loading Digital Solutions...</p>
            </div>
        </div>
    );
};

export default Loading;