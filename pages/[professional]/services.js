import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import ProfileCard from '../../components/profileCard/profileCard';
import SideCard from '../../components/sideCard/sideCard';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import ServiceSection from '../../components/serviceSection/serviceSection';
import fetchProfileData from '../../utils/fetchProfileData';
import { useAuth } from '../../authentication/auth'
import styles from '../../styles/services.module.scss';
import globalStyles from '../../styles/globals.module.scss';

const Services = ({ data }) => {
    const user = useAuth();
    const customUrl = data.customInfo.customUrl;
    const profileInfo = {
        firstName: data.firstName,
        lastName: data.lastName,
        shortDescription: data.shortDescription,
        industry: data.industry,
        photoUrl: data.photoInfo.photoUrl,
    };
    const [login, setLogin] = useState(false);
    const getFreeService = (services) => {
        const freeService = { available: false };
        for (const service of services) {
            if (!service.sessionPricing || service.sessionPricing === 0) {
                freeService.available = true;
                freeService.serviceId = service.serviceId;
                break;
            }
        }
        return freeService;
    }

    const freeService = getFreeService(data.serviceInfo);
    return (<div className={styles.services}>
        <Head>
            <title>{`${data.firstName} - ${data.industry}`}</title>
            <link rel='icon' href="/logoP.png" />
        </Head>
        <div className={`${globalStyles.cover}`}></div>
        <div className={globalStyles.container}>
            <div className={globalStyles.content} >
                <div>
                    <div className={globalStyles.sidePannel}>
                        <ProfileCard profileInfo={profileInfo} />
                        {freeService.available &&
                            <SideCard
                                serviceId={freeService.serviceId}
                                customUrl={customUrl} />}
                    </div>
                </div>
                <div className={globalStyles.main}>
                    <Navbar
                        active='Services'
                        user={user.user}
                        onLogin={() => setLogin(true)}
                        customUrl={customUrl} />
                    {login && <Login onCancel={() => setLogin(false)} />}
                    <div className={globalStyles.mainContent}></div>
                    <ServiceSection
                        serviceInfo={data.serviceInfo}
                        customUrl={customUrl} />
                </div>
            </div>
        </div>
        <Footer />
    </div>)
}

export async function getServerSideProps({ params }) {
    const data = await fetchProfileData(params.professional);

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: { data },
    }
}

export default Services;