import styles from './profileCard.module.scss';
const ProfileCard = ({ className, profileInfo }) => {
    const { firstName,
        lastName,
        shortDescription,
        industry,
        photoUrl } = profileInfo;

    let classes = styles.profileCard;
    if (className) classes += " " + className;
    return (
        <div className={classes}>
            <img src={photoUrl} className={styles.profileImage} />
            <div className={styles.profileName}>
                {`${firstName} ${lastName}`}
            </div>
            <div className={styles.profileIndustry}>
                {industry}
            </div>
            <div className={styles.profileDescription}>
                {shortDescription}
            </div>
        </div>
    );
}

export default ProfileCard;