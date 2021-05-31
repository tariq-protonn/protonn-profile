import React from 'react'
import styles from './serviceCard.module.scss';

const ServiceCard = ({ variant, className, serviceData }) => {
    const { name,
        description,
        sessionPricing,
        sessionDurationInMinutes,
        currency } = serviceData;

    const currencySymbol = currency === 'USD' ? '$' : '₹';

    let classes = styles.serviceCard + " " + (variant === 'link' ? styles.link : styles.long);
    if (className) classes += " " + className;
    return (
        <div className={classes}>
            <div className={styles.serviceContent}>
                <header className={styles.serviceTitle}>
                    {name}
                </header>
                <div className={styles.serviceDetail}>
                    {description}
                </div>
                <footer className={styles.serviceInfo}>
                    <div className={styles.duration}>
                        {`${sessionDurationInMinutes || "0"} mins`}
                    </div>
                    <div className={styles.cost}>
                        {`${currencySymbol}${sessionPricing || "0"}`}
                    </div>
                </footer>
            </div>
            {variant === 'link' &&
                <div className={styles.serviceNext}>
                    <img src='/nextDisabled.svg' width='8' />
                </div>}
        </div>
    );
}

export default ServiceCard;