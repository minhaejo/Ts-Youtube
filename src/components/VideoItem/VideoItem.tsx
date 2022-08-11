import React from "react";
import { FC } from "react";
import { VideoItemType } from "../../model/video";
import styles from "./video_item.module.css";
//.모듈임 언더바로 하면 안됨
interface Props {
  vedio: VideoItemType;
}

const VideoItem: FC<Props> = ({ vedio }) => {
  // const {} = vedio
  const {
    snippet: { title, thumbnails, channelTitle },
  } = vedio;

  // video > 1 ,2 ,3 > 2> 2-1 , 2-2 ,
  // const {
  //   snippet: { title, thumbnails },
  // } = vedio;

  return (
    <li className={styles.container}>
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
};

export default VideoItem;
