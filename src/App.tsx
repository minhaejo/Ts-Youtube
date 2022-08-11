import React, { FC, useEffect, useState } from "react";
import styles from "./App.module.css";
import VideoList from "./components/VideoList/VideoList";
import VideoSearch from "./components/VideoSearch/VideoSearch";

import { VideoItemType } from "../src/model/video";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { VideoSearchItem } from "./model/videoSearch";
import { YOUTUBE_API_KEY } from "./constants";

//유튜브 > 인덱스 >> 앱 >> 써치로
function App() {
  //초기배열
  const [videos, setVideos] = useState<VideoItemType[]>([]);

  const search = (qeury: string) => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${qeury}&key=AIzaSyCy-Iqm1Qrw3KNbTZ_CrE6PnG8RZUpXpPk`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item: VideoSearchItem) => ({
          ...item,
          id: item.id.videoId,
        }))
      )
      .then((item) => setVideos(item))
      .catch((error) => console.log("error", error));
  };
  //인풋벨류
  //처음 로딩데이터
  useEffect(() => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${YOUTUBE_API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  //
  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
