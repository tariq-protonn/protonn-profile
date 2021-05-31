import { useState } from 'react';
import styles from './navbar.module.scss';
import LoginInfo from '../loginInfo/loginInfo';
import Link from 'next/link';

const Navbar = ({ className, active, user, onLogin, customUrl }) => {
    const tabs = [
        { name: "Home", link: "/" },
        { name: "Videos", link: "/videos" },
        { name: "Services", link: "/services" },
        { name: "Your Bookings", link: "#" },
    ];
    const [activeTab, setActiveTab] = useState(active);

    let classes = styles.navbar;
    if (className) classes += " " + className;
    return (
        <nav className={classes}>
            <div className={styles.routingLinks}>
                {tabs.map((tab, idx) => {
                    if (tab.name === 'Your Bookings' && !user) return;
                    return (<Link
                        key={idx}
                        href={{
                            pathname: `/[professional]${tab.link}`,
                            query: { professional: customUrl }
                        }}>
                        <div
                            className={`${styles.navLink} ${tab.name === activeTab ? styles.selected : ""}`}
                            onClick={() => setActiveTab(tab.name)}>
                            {tab.name}
                        </div>
                    </Link>)
                })}
            </div>
            <div className={styles.authenticationLinks}>
                {user ?
                    <LoginInfo
                        data={{
                            name: user.displayName,
                            pictureUrl: user.photoURL,
                            customUrl: customUrl
                        }} /> :
                    <div onClick={onLogin} className={`${styles.navLink} ${styles.signIn}`}>Sign in</div>}
            </div>
        </nav>
    )
}

export default Navbar;