import moment from "moment";
import React from "react";

interface NewsData {
  url: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
  name: string;
  description: string;
  provider: {
    image: {
      thumbnail: {
        contentUrl: string;
      };
    };
    name: string;
  }[];
  datePublished: string;
}

interface Props {
  data: { value: NewsData[] } | null;
}

const NewsGrid: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {data?.value?.map((news: NewsData, index: number) => (
        <div
          key={index}
          className="dark:bg-neutral-900 bg-zinc-100 rounded-xl overflow-hidden space-y-5 border-[0.5px] dark:border-neutral-800"
        >
          <a
            href={news.url}
            target="_blank"
            rel="noreferrer"
            className="space-y-2"
          >
            <div>
              <img
                className="w-full h-auto bg-cover object-cover block"
                src={news.image.thumbnail.contentUrl}
                alt={index}
              />
            </div>

            <div className="space-y-2 px-5 pt-5">
              <h2 className="text-lg font-semibold hover:text-blue-700">
                {news.name.length > 50
                  ? `${news.name.substring(0, 50)}...`
                  : news.name}
              </h2>
              <p className="text-sm dark:text-gray-400">
                {news.description.length > 100
                  ? `${news.description.substring(0, 50)}...`
                  : news.description}
              </p>
            </div>
          </a>
          <div className="flex gap-5 items-center p-5">
            <img
              className="w-10 h-10 rounded-full"
              src={news.provider[0].image.thumbnail.contentUrl}
              alt={news.provider[0].name}
            />
            <div className="flex flex-col">
              <small>{news.provider[0].name}</small>
              <small className="text-xs dark:text-gray-400 text-gray-600">
                {moment(news.datePublished).startOf("ss").fromNow()}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
