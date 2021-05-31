import { useState } from 'react'
import Login from '../login/login';
import { useAuth } from '../../authentication/auth';
import { useRouter } from 'next/router';

import styles from './sideCard.module.scss';
const SideCard = ({ className, serviceId, customUrl }) => {
    const user = useAuth().user;
    const router = useRouter();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const handleClick = (serviceId) => {
        if (user) {
            router.push({
                pathname: `/[professional]/service/${serviceId}`,
                query: { professional: customUrl }
            })
            return;
        }
        setShowLoginModal(true);
    }

    const title = "Book a free 30 minute consultation";
    const body = "Let’s figure out how to work together. No obligation, no spam."

    let classes = styles.sideCard;
    if (className) classes += " " + className;
    return (<>
        {showLoginModal ? <Login onCancel={() => setShowLoginModal(false)} /> : null}
        <div className={classes}
            onClick={() => handleClick(serviceId)}>
            <div className={styles.sideCardContent}>
                <header className={styles.sideCardTitle}>
                    <strong>{title}</strong>
                </header>
                <div className={styles.sideCardBody}>
                    {body}
                </div>
            </div>
            <div className={styles.sideCardNext}>
                <img src="/nextDisabled.svg" width="8" />
            </div>
        </div>
    </>
    );
}

export default SideCard;