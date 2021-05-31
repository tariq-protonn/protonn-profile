import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import ProfileCard from '../../components/profileCard/profileCard';
import SideCard from '../../components/sideCard/sideCard';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import VideoSection from '../../components/videoSection/videoSection';
import ServiceSection from '../../components/serviceSection/serviceSection';
import fetchProfileData from '../../utils/fetchProfileData';
import { useAuth } from '../../authentication/auth';
import globalStyles from '../../styles/globals.module.scss';
import styles from '../../styles/home.module.scss';

const Home = ({ data }) => {
	const user = useAuth();
	const customUrl = data.customInfo.customUrl;
	const profileInfo = {
		firstName: data.firstName,
		lastName: data.lastName,
		shortDescription: data.shortDescription,
		industry: data.industry,
		photoUrl: data.photoInfo.photoUrl,
	};
	const [showLoginModal, setShowLoginModal] = useState(false);

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

	return (<div className={styles.home}>
		<Head>
			<title>{`${data.firstName} - ${data.industry}`}</title>
			<link rel='icon' href="/logoP.png" />
		</Head>
		{showLoginModal && <Login onCancel={() => setShowLoginModal(false)} />}
		<div className={globalStyles.cover}></div>
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
						active='Home'
						user={user.user}
						onLogin={() => setShowLoginModal(true)}
						customUrl={customUrl} />
					<div className={globalStyles.mainContent} >
						<VideoSection
							videoInfo={data.videoInfo}
							customUrl={customUrl} />
						<ServiceSection
							serviceInfo={data.serviceInfo}
							customUrl={customUrl} />
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>)
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { professional: 'anil-goteti' } },
			{ params: { professional: 'shashank-juyal' } },
			{ params: { professional: 'ashish-ranka' } },
			{ params: { professional: 'lindsay' } },
			{ params: { professional: 'prashant' } },
			{ params: { professional: 'charles-lam' } },
		],
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const data = await fetchProfileData(params.professional);

	if (!data)
		return { notFound: true }

	return { props: { data } }
}

export default Home;