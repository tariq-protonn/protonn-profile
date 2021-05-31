import styles from './textarea.module.scss';
const Textarea = ({ className, placeholder }) => {
    const classes = className ? `${styles.textarea} ${className}` : styles.textarea;
    return (
        <textarea className={classes} placeholder={placeholder}></textarea>
    )
}

export default Textarea;