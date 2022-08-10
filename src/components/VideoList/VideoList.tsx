import React, { FC } from "react";
import VideoItem from "../VideoItem/VideoItem";
import { VideoItemType } from "../../model/vedio";
import styles from "./video_List.module.css";

interface Props {
  videos: VideoItemType[];
}

const VideoList: FC<Props> = ({ videos }) => {
  return (
    <>
      <ul className={styles.videos}>
        {videos.map((vedio) => (
          <VideoItem vedio={vedio} />
        ))}
      </ul>
    </>
  );
};

export default VideoList;
