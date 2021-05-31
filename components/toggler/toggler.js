import styles from './toggler.module.scss';
const Toggler = ({ className }) => {
    const classes = className ? `${styles.toggle} ${className}` : styles.toggle;
    return (
        <input className={classes} type="checkbox" />
    )
}

export default Toggler;