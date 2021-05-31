import styles from './button.module.scss';

const Button = ({ variant, className, children, type, onClick }) => {

    let classes = variant === 'primary' ? styles.btnPrimary : styles.btnSecondary;
    classes = className ? `${classes} ${className}` : classes;
    return (
        <button
            className={classes}
            type={type ? type : 'button'}
            onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;