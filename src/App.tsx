import React, { FC, useEffect, useState } from "react";

import "./App.css";

import VideoList from "./components/VideoList/VideoList";

import { VideoItemType } from "../src/model/vedio";

import { YOUTUBE_API_KEY } from "./constants/index";

function App() {
  const [videos, setVideos] = useState<VideoItemType[]>([]);

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
  return (
    <div className="App">
      <VideoList videos={videos} />
    </div>
  );
}

export default App;

//특정 데이터 뽑아서 맵 돌릴거임 그 후 컴포넌트 랜더링 시킬거임
//이때 타입스크립트에서 타입정의를 어캐해야할지 고민됨
//기존 데이터에 몇개만 설정해서 해보니 정상적으로 됐음 하지만 데이터의 뎁스가 깊어서 타입정의에 있어 문제가됐음
//데이터를 가져오는 과정에서 어떻게 타입선언을 해야하는지 콘솔에 표기되는 몇십개의 모든 데이터를 모두 정의해야하는지?
//그러려고 해도 각 컨텐츠별로 데이터가 달랐음
//이런문제를 어떤 사고로 접근해야하는지?
