import React, { FC } from "react";
import VideoItem from "../VideoItem/VideoItem";
import { VideoItemType } from "../../model/video";
import styles from "./video_List.module.css";

interface Props {
  videos: VideoItemType[];
}

const VideoList: FC<Props> = ({ videos }) => {
  return (
    <>
      <ul className={styles.videos}>
        {videos.map((vedio) => (
          <VideoItem vedio={vedio} key={vedio.id} />
        ))}
      </ul>
    </>
  );
};

export default VideoList;
