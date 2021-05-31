import styles from './footer.module.scss';

const Footer = ({ className }) => {
    const copyright = "©2021 Protonn, Inc.";
    const terms = "Terms of service"
    const policy = "Privacy policy";
    const help = "connect@protonn.com";

    const classes = className ? `${styles.footer} ${className}` : styles.footer;
    return (
        <footer className={classes}>
            <div className={styles.content}>
                <img className={styles.logo} src='/logo.svg' />
                <div className={styles.footerText} >
                    <div>
                        <span className={styles.copyright}>{copyright}</span>
                        <span className={styles.termsAndPolicy}>
                            <span>{terms}</span>
                            <span>•</span>
                            <span>{policy}</span>
                        </span>
                    </div>
                    <div className={styles.help}>Need help? <span>{help}</span></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;