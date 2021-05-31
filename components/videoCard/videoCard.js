import ReplaceIcon from "../replaceIcon/replaceIcon";
import styles from "./videoCard.module.scss"

const VideoCard = ({ className, videoData }) => {
    const { videoName, thumbnailUrl } = videoData;
    let classes = styles.videoCard;
    if (className) classes += " " + className;

    return (
        <div className={classes}>
            <div className={styles.videoOverlay}>
                <div className={styles.playButton}><ReplaceIcon /></div>
                <div className={styles.videoCardTitle}>{videoName}</div>
            </div>
            <img
                src={thumbnailUrl || "/thumbnail.jpeg"}
                className={styles.thumbnail} />
        </div>
    )
}

export default VideoCard;