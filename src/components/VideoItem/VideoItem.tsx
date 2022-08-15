import React, { memo } from "react";
import { FC } from "react";
import { VideoItemType } from "../../model/video";
import styles from "./video_item.module.css";
//.모듈임 언더바로 하면 안됨
interface Props {
  video: VideoItemType;
  onVideoClick: (video: any) => void;
  display: string;
}
//프롭이 바뀌지 않는다면  // 다시 바뀔 필요가 없다면 memo 사용
const VideoItem: FC<Props> = memo(({ video, onVideoClick, display }) => {
  // const {} = vedio
  const displayType = display === "list" ? styles.list : styles.grid;
  const {
    snippet: { title, thumbnails, channelTitle },
  } = video;

  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => {
        onVideoClick(video);
      }}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={thumbnails.medium.url}
          alt="video thumnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channel}>{channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
