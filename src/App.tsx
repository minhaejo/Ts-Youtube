import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import VideoList from "./components/VideoList/VideoList";
import VideoSearch from "./components/VideoSearch/VideoSearch";
import { VideoItemType } from "../src/model/video";
import { Youtube } from "./service/youtube";
import VideoDetail from "./components/VideoDetail/VideoDetail";

interface Props {
  youtube: Youtube;
}
//유튜브 > 인덱스 >> 앱 >> 써치로
const App: FC<Props> = ({ youtube }) => {
  //초기배열

  const [videos, setVideos] = useState<VideoItemType[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoItemType | null>(
    null
  );

  const selectVideo = (video: VideoItemType) => {
    setSelectedVideo(video);
  };
  const search = useCallback(
    (qeury: string) => {
      youtube
        .search(qeury) //
        .then((video) => {
          setVideos(video);
          setSelectedVideo(null);
        });
    },
    [youtube]
  );

  const handleLogoClick = () => {
    search("");
    setSelectedVideo(null);
  };
  //인풋벨류
  //처음 로딩데이터
  useEffect(() => {
    youtube.mostPopular().then((video) => setVideos(video));
  }, []);
  //
  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search} onClick={handleLogoClick} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
