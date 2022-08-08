import React from "react";
import { FC } from "react";
import { VideoItemType } from "../../model/vedio";

interface Props {
  vedio: VideoItemType;
}

const VideoItem: FC<Props> = ({ vedio }) => {
  // const {} = vedio
  const {
    snippet: { title, thumbnails },
  } = vedio;

  // const {
  //   snippet: { title, thumbnails },
  // } = vedio;
  return (
    <div>
      <p>{title}</p>
      <img src={thumbnails.default.url} />
    </div>
  );
};

export default VideoItem;
