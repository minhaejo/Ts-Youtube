import React, { FC } from "react";
import VideoItem from "../VideoItem/VideoItem";
import { VideoItemType } from "../../model/vedio";

interface Props {
  videos: VideoItemType[];
}

const VideoList: FC<Props> = ({ videos }) => {
  return (
    <>
      <ul>
        {videos.map((vedio) => (
          <VideoItem vedio={vedio} />
        ))}
      </ul>
    </>
  );
};

export default VideoList;
