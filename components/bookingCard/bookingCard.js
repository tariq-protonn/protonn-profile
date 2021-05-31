import styles from './bookingCard.module.scss';

const BookingCard = ({ className }) => {
    const data = {
        header: "1-on-1 consultation",
        title: "Month-End Audit",
        statusText: "Payment Pending",
        status: "Pending",
        details: null,
    };

    const classes = className ? `${styles.bookingCard} ${className}` : styles.bookingCard;
    return (
        <div className={classes}>
            <header className={styles.header}>
                {data.header}
            </header>
            <div className={styles.title}>
                {data.title}
            </div>
            <footer className={styles.footer}>
                <div className={`${styles.status} ${data.status === 'completed' ? styles.completed : styles.pending}`}>
                    {data.statusText}
                </div>
                <div className={styles.detailsLink}>
                    <span>VIEW DETAILS</span>
                    <img src="/angleDown.svg" width="8" />
                </div>
            </footer>
        </div>
    );
}

export default BookingCard;
