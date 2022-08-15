// import { Youtube } from './youtube';
import { YOUTUBE_API_KEY } from "../constants";
import { VideoSearchItem } from "../model/videoSearch";
import axios, { AxiosInstance } from "axios";

export class Youtube {
  youtube: AxiosInstance;
  //Property 'youtube' does not exist on type 'Youtube'.
  //참조할 프로퍼티 필요
  constructor(httpClient: AxiosInstance) {
    this.youtube = httpClient;
  }
  //기본적으로 내장될 내용
  //그 내용엔 통신 할 수 있는 fetch의 상위호환인 axios를 탑재시킴
  //그리고 생성할 인스턴스 안에   baseURL: "https://youtube.googleapis.com/youtube/v3",params: { key: key },
  //를 넣어서 고정적으로 데이터를 요청할 주소를 설정

  //after chord
  async mostPopular() {
    const response = await this.youtube.get("videos", {
      //base url = https://youtube.googleapis.com/youtube/v3
      //params = part=snippet&chart=mostPopular&maxResults=25
      //https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${YOUTUBE_API_KEY}`
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
    //자동변환 json

    //before chord
    // const response = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${YOUTUBE_API_KEY}`,
    //   this.getRequestOptions
    // );
    // const result_1 = await response.json();
    // return result_1.items;
  }
  async search(query: string) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });

    //response data 는 await의 내용을 가져오기 위함임
    //await로 값을 받았기때문에
    return response.data.items.map((item: VideoSearchItem) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

// const response = await fetch(
//   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${qeury}&key=${YOUTUBE_API_KEY}`,
//   this.getRequestOptions
// );
// const result_1 = await response.json();
// return result_1.items.map((item: VideoSearchItem) => ({
//   ...item,
//   id: item.id.videoId,
// }));
