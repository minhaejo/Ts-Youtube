import React, { FC, useEffect, useState } from "react";
import styles from "./App.module.css";
import VideoList from "./components/VideoList/VideoList";
import VideoSearch from "./components/VideoSearch/VideoSearch";
import { VideoItemType } from "../src/model/video";
import { Youtube } from "./service/youtube";

interface Props {
  youtube: Youtube;
}
//유튜브 > 인덱스 >> 앱 >> 써치로
const App: FC<Props> = ({ youtube }) => {
  //초기배열
  const [videos, setVideos] = useState<VideoItemType[]>([]);

  const search = (qeury: string) => {
    youtube
      .search(qeury) //
      .then((video) => setVideos(video));
  };
  //인풋벨류
  //처음 로딩데이터
  useEffect(() => {
    youtube.mostPopular().then((video) => setVideos(video));
  }, []);
  //
  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
