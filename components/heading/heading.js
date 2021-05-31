import styles from './heading.module.scss';

const Heading = ({ text }) => {
    return (
        <div className={styles.heading}>
            <div className={styles.text}>
                {text}
            </div>
            <hr className={styles.hr} />
        </div>
    )
}

export default Heading;