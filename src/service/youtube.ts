import { YOUTUBE_API_KEY } from "../constants";
import { VideoSearchItem } from "../model/videoSearch";

export class Youtube {
  key;
  getRequestOptions: RequestInit;
  //키를 기본속성으로 넣어서 만들 인스턴스들에게 조금 더 유용하게 쓰게하기위함?
  constructor(key: string) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${YOUTUBE_API_KEY}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }
  async search(qeury: string) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${qeury}&key=${YOUTUBE_API_KEY}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item: VideoSearchItem) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}
