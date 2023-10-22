import moment from "moment";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { NewsArticle } from "../../types";

interface Props {
  data: NewsArticle[];
}

const NewsGrid: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {data?.map((news, index: number) => (
        <div
          key={index}
          className=" dark:bg-neutral-900 bg-zinc-100 rounded-xl overflow-hidden space-y-5 border-[0.5px] dark:border-neutral-800"
        >
          <a
            href={news.url}
            target="_blank"
            rel="noreferrer"
            className="space-y-2"
          >
            <div className="space-y-2 px-5 pt-5">
              <div className="flex gap-5 w-full h-auto">
                <img
                  className="w-24 h-24 bg-cover object-cover block rounded-lg"
                  src={
                    news?.image?.thumbnail?.contentUrl ||
                    "../../../assets/default-image.png"
                  }
                  alt={news.name}
                />
                <div className="w-full h-auto">
                  <h2 className="text-lg font-semibold hover:text-blue-700 line-clamp-3">
                    {news.name}
                  </h2>
                </div>
              </div>

              <p className="text-sm dark:text-gray-400 pt-5 line-clamp-2">
                {news.description}
              </p>
            </div>
          </a>
          <div className="flex gap-5 items-center p-5">
            {news.provider[0]?.image?.thumbnail?.contentUrl ? (
              <img
                className="w-10 h-10 rounded-full"
                src={news.provider[0]?.image?.thumbnail?.contentUrl}
                alt={news.name}
              />
            ) : (
              <AiOutlineUser />
            )}

            <div className="flex flex-col">
              <small>{news.provider[0].name}</small>
              <small className="text-xs dark:text-gray-400 text-gray-600">
                {moment(news.datePublished).startOf("second").fromNow()}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
