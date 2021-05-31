import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import styles from "./videoPlayer.module.scss";

const VideoPlayer = ({ className, videoData }) => {
    const [showOverlay, setShowOverlay] = useState(true);
    const date = "FEB 12th";
    const { videoName,
        videoDescription,
        videoDurationInSec,
        videoUrl,
        thumbnailUrl } = videoData;

    let classes = styles.videoCardLarge;
    if (className) classes += " " + className;
    return (
        <div className={classes}>
            {showOverlay ?
                <div className={styles.videoOverlay}>
                    <div className={styles.videoCardLargeName}>
                        {videoName}
                    </div>
                    <div className={styles.videoCardLargeInfo}>
                        <div className={styles.videoCardLargeDate}>
                            {date}
                        </div>
                        &nbsp; &#183; &nbsp;
                        <div className={styles.videoCardLargeDuration}>
                            {`${videoDurationInSec} secs`}
                        </div>
                    </div>
                    <p className={styles.videoCardLargeDescription}>{videoDescription}</p>
                </div> : null}
            <div className={styles.videoPlayer}>
                <ReactPlayer
                    url={videoUrl}
                    controls={true}
                    light={thumbnailUrl}
                    width="100%"
                    height="100%"
                    playIcon={<img src="/playButton.svg"
                        width="50"
                        height="50"
                        style={{ backgroundColor: "rgba(balck, 0.2)" }} />}
                    onClickPreview={() => setShowOverlay(false)}
                    playing />
            </div>
        </div>
    );
}

export default VideoPlayer;