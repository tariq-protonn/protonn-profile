import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from '../../../components/button/button';
import Heading from '../../../components/heading/heading';
import InfoForm from '../../../components/infoForm/infoForm';
import ServiceCard from '../../../components/serviceCard/serviceCard';
import CalendarAndSlots from '../../../components/calendarAndSlots/calendarAndSlots';
import LoginInfo from '../../../components/loginInfo/loginInfo';
import Footer from '../../../components/footer/footer';
import fetchProfileData from '../../../utils/fetchProfileData';
import { useAuth } from '../../../authentication/auth';
import styles from '../../../styles/service.module.scss';
import globalStyles from '../../../styles/globals.module.scss';

const Booking = ({ data }) => {
    const user = useAuth().user;
    const router = useRouter();
    const { serviceId } = router.query;
    const [serviceData] = data.serviceInfo.filter(service => service.serviceId === serviceId);
    const name = `${data.firstName} ${data.lastName}`;
    return (
        <div className={styles.service}>
            <Head>
                <title>
                    {`${serviceData.name} - Service Deatils - ${data.firstName} - ${data.industry}`}
                </title>
                <link rel='icon' href="/logoP.png" />
            </Head>
            <div className={`${globalStyles.cover}`}></div>
            <div className={globalStyles.container}>
                <header className={styles.header}>
                    <h2>{name}</h2>
                    {user && <LoginInfo data={{
                        name: user.displayName,
                        pictureUrl: user.photoURL,
                        customUrl: data.customInfo.customUrl
                    }} />}
                </header>
                <Heading text='Your session' />
                <ServiceCard variant='long' serviceData={serviceData} />
                <Heading text='Select a time to book' />
                <CalendarAndSlots />
                <Heading text='Your information' />
                <InfoForm />
                <div className={styles.buttons}>
                    <Button onClick={() => router.back()} variant='primary'>Go Back</Button>
                    <Button variant='secondary'>Continue Booking</Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const data = await fetchProfileData(params.professional);

    if (!data)
        return { notFound: true }

    return { props: { data } }
}

export default Booking;