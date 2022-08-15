import React, { FC } from "react";
import { VideoItemType } from "../../model/video";
import styles from "./VideoDetail.module.css";

interface Props {
  video: VideoItemType;
}
const VideoDetail: FC<Props> = ({ video, video: { snippet } }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        data-type="text/html"
        width="100%"
        title="Youtube Video Player"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
