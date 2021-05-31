import styles from './input.module.scss';
const Input = ({ className, placeholder }) => {
    const classes = className ? `${styles.input} ${className}` : styles.input;
    return (
        <input className={classes} type='text' placeholder={placeholder} />
    )
}

export default Input;
