import Navbar from '../components/navbar/navbar';
import ServiceCard from '../components/serviceCard/serviceCard';
import ProfileCard from '../components/profileCard/profileCard';
import SideCard from '../components/sideCard/sideCard';
import Footer from '../components/footer/footer';
import fetchProfileData from '../utils/fetchProfileData';
import Link from 'next/link';
import styles from '../styles/bookings.module.scss';
import globalStyles from '../styles/globals.module.scss';
import Heading from '../components/heading/heading';
import BookingCard from '../components/bookingCard/bookingCard';

const Bookings = ({ data }) => {
    const coverUrl = "/cover.jpeg";
    return (<>
        <div className={`${globalStyles.cover}`}>
            <img src={coverUrl} className={globalStyles.coverImg} />
        </div>
        <div className={globalStyles.container}>
            <div className={globalStyles.content} >
                <div className={`${globalStyles.sidePannel}`}>
                    <ProfileCard
                        profileInfo={{
                            firstName: data.firstName,
                            lastName: data.lastName,
                            shortDescription: data.shortDescription,
                            industry: data.industry,
                            photoUrl: data.photoInfo.photoUrl,
                        }} />
                    <SideCard />
                </div>
                <div className={globalStyles.main}>
                    <Navbar active='Your Bookings' />
                    <div className={styles.bookings}>
                        <Heading text="Upcoming Bookings" />
                        <div className={styles.upcoming} >
                            <BookingCard />
                            <BookingCard />
                        </div>
                        <Heading text='Completed Bookings' />
                        <div className={styles.completed} >
                            <BookingCard />
                            <BookingCard />
                            <BookingCard />
                            <BookingCard />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    </>)
}

export async function getStaticProps() {
    const data = await fetchProfileData("shashank-juyal");

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: { data },
    }
}

export default Bookings;