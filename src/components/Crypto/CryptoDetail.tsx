import HTMLReactParser from "html-react-parser";
import millify from "millify";
import React from "react";
import {
  AiOutlineNumber,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
} from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Container from "../Common/ContainerWrapper";
import Loading from "../Common/Loader";
import SectionTitle from "../Common/SectionTitle";
import SectionWrapper from "../Common/SectionWrapper";
const dummyCoinData: CoinData = {
  name: "Sample Coin",
  iconUrl: "sample-coin-icon-url",
  price: 123.45,
  rank: 10,
  volume: 6789.01,
  marketCap: 12345678.9,
  allTimeHigh: { price: 543.21 },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  links: [
    {
      type: "website",
      url: "https://sample-coin-website.com",
      name: "Official Website",
    },
    { type: "explorer", url: "https://sample-explorer.com", name: "Explorer" },
  ],
};

interface CoinData {
  name: string;
  iconUrl: string;
  price: number;
  rank: number;
  volume: number;
  marketCap: number;
  allTimeHigh: { price: number };
  description: string;
  links: { type: string; url: string; name: string }[];
}

interface StatsData {
  title: string;
  value: string | number;
  icon: JSX.Element;
}

interface Error {
  message: string;
}

const CurrenciesDetails: React.FC = () => {
  const { cId } = useParams();
  const data: { data: { coin: CoinData } } | null = {
    data: { coin: dummyCoinData },
  };

  const isFetching = false;
  const isError = false;
  const error: Error | null = null;

  const stats: StatsData[] = [
    {
      title: "Price to USD",
      value: `$ ${data?.data?.coin.price && millify(data?.data?.coin.price)}`,
      icon: <FiDollarSign />,
    },
    {
      title: "Rank",
      value: data?.data?.coin.rank,
      icon: <AiOutlineNumber />,
    },
    {
      title: "24h Volume",
      value: `$ ${data?.data?.coin.volume && millify(data?.data?.coin.volume)}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        data?.data?.coin.marketCap && millify(data?.data?.coin.marketCap)
      }`,
      icon: <FiDollarSign />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        data?.data?.coin.marketCap &&
        millify(data?.data?.coin.allTimeHigh.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];

  return (
    <Container>
      <SectionWrapper>
        {isError ? (
          <div style={{ margin: "100px 0", textAlign: "center" }}>
            <h2>{error?.message}</h2>
          </div>
        ) : isFetching ? (
          <Loading />
        ) : (
          <div className="space-y-14">
            <div className="flex justify-center items-center flex-col gap-5">
              <img
                src={data?.data?.coin?.iconUrl}
                alt={data?.data?.coin?.name}
              />
              <h1 className="text-2xl text-violet-800 font-semibold">
                {data?.data?.coin?.name}
              </h1>
              <p className="dark:text-gray-400">
                Live price in US Dollar of {data?.data?.coin?.name}. View value
                statistics, market cap and supply
              </p>
            </div>
            <hr className="border-[0.5px] dark:border-neutral-900" />

            <div className="space-y-8">
              <SectionTitle>{`${data?.data?.coin?.name} value statistics Overview.`}</SectionTitle>

              <ul className="w-full dark:bg-neutral-900 bg-zinc-100 rounded-xl">
                {stats?.map((item, index) => (
                  <li
                    key={index}
                    className="px-5 py-4 border-b-2 dark:border-neutral-950 border-white flex justify-between gap-5"
                  >
                    <div className="flex items-center gap-3  dark:text-gray-400">
                      {item.icon}
                      <h5 className="font-semibold text-sm md:text-base">
                        {item.title}
                      </h5>
                    </div>

                    <p className="text-sm md:text-base">{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="border-[0.5px] dark:border-neutral-900" />
            <div className="space-y-8">
              <SectionTitle>
                {`Know About ${data?.data?.coin?.name}`}{" "}
              </SectionTitle>
              <div className="dark:text-gray-400">
                {data?.data?.coin.description &&
                  HTMLReactParser(data?.data?.coin.description)}
              </div>
            </div>
            <hr className="border-[0.5px] dark:border-neutral-900" />
            <div className="space-y-8">
              <SectionTitle>{`Resources to know about ${data?.data?.coin?.name}`}</SectionTitle>
              <ul className="dark:bg-neutral-900 bg-zinc-100 rounded-xl">
                {data?.data?.coin?.links?.map((link, index) => (
                  <li
                    key={index}
                    className="border-b-2 px-5 py-4 dark:border-neutral-950 border-white"
                  >
                    <div className="flex justify-between items-center">
                      <h5 className="font-semibold dark:text-gray-400 md:text-base text-sm">
                        {link.type.toUpperCase()}
                      </h5>

                      <a
                        className="text-sm md:text-base dark:text-blue-800 text-blue-700 font-medium"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.name}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </SectionWrapper>
    </Container>
  );
};

export default CurrenciesDetails;
