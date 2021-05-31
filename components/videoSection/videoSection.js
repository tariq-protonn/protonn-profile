import { useState } from 'react';
import Button from '../button/button';
import VideoCard from '../videoCard/videoCard';
import VideoPlayer from '../videoPlayer/videoPlayer';
import { useRouter } from 'next/router';
import styles from './videoSection.module.scss';
const VideoSection = ({ videoInfo, customUrl }) => {
    const router = useRouter();
    const [highlightVideo, setHighlightVideo] = useState(0);
    const [videoIndexes, setVideoIndexes] = useState([...videoInfo.keys()]);
    const onClickHandler = (newIdx, newVal) => {
        setVideoIndexes(previous => {
            const current = [...previous];
            [current[newIdx], current[0]] = [current[0], current[newIdx]]
            return current;
        });
        setHighlightVideo(newVal);
    }
    return (
        <section className={styles.videoSection} >
            <div className={styles.allVideos}>
                <div className={styles.videoLarge} >
                    <VideoPlayer videoData={videoInfo[highlightVideo]} />
                </div>
                <div className={styles.videos}>
                    {videoIndexes.map((val, idx) => {
                        if (val === highlightVideo || idx > 4) return;
                        return <div
                            key={videoInfo[val].videoId}
                            onClick={() => onClickHandler(idx, val)}>
                            <VideoCard className={styles.video} videoData={videoInfo[val]} />
                        </div>
                    })}
                </div>
            </div>
            {videoInfo.length > 5 &&
                <Button
                    className={styles.button}
                    onClick={() => router.push({
                        pathname: '/[professional]/videos',
                        query: { professional: customUrl }
                    })}
                    variant='primary'>
                    View All Videos
                </Button>}
        </section>
    );
}

export default VideoSection;
