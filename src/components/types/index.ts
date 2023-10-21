export interface NewsArticle {
  _type: string;
  name: string;
  url: string;
  image: {
    _type: string;
    thumbnail: {
      _type: string;
      contentUrl: string;
      width: number;
      height: number;
    };
  };
  description: string;
  about: {
    _type: string;
    readLink: string;
    name: string;
  }[];
  provider: {
    _type: string;
    name: string;
    image: {
      _type: string;
      thumbnail: {
        _type: string;
        contentUrl: string;
      };
    };
  }[];
  datePublished: string;
}

export interface News {
  news: NewsArticle[]
}