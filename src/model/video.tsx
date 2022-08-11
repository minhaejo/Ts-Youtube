export type VideoItemType = {
  //아이템 []
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
};
export type VideosType = {
  kind: string;
  etag: string;
  //아이템 벗어난 데이터
  items: VideoItemType[];
  //아이템 벗어난 데이터
  //items가 엄청 거대한 데이터임 , 그리고 그 배열이 끝나는 지점에서의 나머지 데이터임
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};
