import React, { FC } from "react";
import VideoItem from "../VideoItem/VideoItem";
import { VideoItemType } from "../../model/video";
import styles from "./video_List.module.css";

interface Props {
  videos: VideoItemType[];
  onVideoClick: (video: any) => void;
  display: string;
}

const VideoList: FC<Props> = ({ videos, onVideoClick, display }) => {
  return (
    <>
      <ul className={styles.videos}>
        {videos.map((video) => (
          <VideoItem
            video={video}
            key={video.id}
            onVideoClick={onVideoClick}
            display={display}
          />
        ))}
      </ul>
    </>
  );
};

export default VideoList;
