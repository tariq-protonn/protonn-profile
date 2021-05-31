import { useState } from 'react'
import Heading from '../heading/heading';
import ServiceCard from '../serviceCard/serviceCard';
import styles from './serviceSection.module.scss';
import Login from '../login/login';
import { useAuth } from '../../authentication/auth';
import { useRouter } from 'next/router';

const ServiceSection = ({ serviceInfo, customUrl }) => {
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
    return (
        <section className={styles.servicesSection}>
            {showLoginModal ? <Login onCancel={() => setShowLoginModal(false)} /> : null}
            <Heading text="Services" />
            <div className={styles.services}>
                {serviceInfo.map((serviceData) => {
                    return <div
                        key={serviceData.serviceId}
                        onClick={() => handleClick(serviceData.serviceId)}>
                        <ServiceCard
                            variant='link'
                            serviceData={serviceData} />
                    </div>
                })}
            </div>
        </section>
    );
}

export default ServiceSection;
