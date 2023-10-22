import HTMLReactParser from "html-react-parser";
import millify from "millify";
import React from "react";
import {
  AiOutlineNumber,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
} from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";
import { TfiExchangeVertical } from "react-icons/tfi";
import { useParams } from "react-router-dom";
import InteractiveSparkline from "../Common/Chart/sparkline";
import Container from "../Common/ContainerWrapper";
import RenderContent from "../Common/RenderContent";
import SectionTitle from "../Common/SectionTitle";
import SectionWrapper from "../Common/SectionWrapper";
import useGetCrypto from "../Hooks/useGetCrypto";
import { CoinDetail } from "../types";

const CurrenciesDetails: React.FC = () => {
  const { cId } = useParams();
  const { data, isFetching, isError } = useGetCrypto({
    endpoint: `/coin/${cId}`,
  });

  const coin = data?.coin as CoinDetail;
  const stats = [
    {
      title: "Price to USD",
      value: `${millify(Number(coin?.price) || 0)}$`,
      icon: <FiDollarSign />,
    },
    { title: "Rank", value: coin?.rank, icon: <AiOutlineNumber /> },
    {
      title: "24h Volume",
      value: `${millify(Number(coin?.["24hVolume"]) || 0)}$`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `${millify(Number(coin?.marketCap) || 0)}$`,
      icon: <FiDollarSign />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `${millify(Number(coin?.allTimeHigh?.price) || 0)}$`,
      icon: <AiOutlineTrophy />,
    },
    {
      title: "Number of Markets",
      value: `${coin?.numberOfMarkets || 0}`,
      icon: <AiOutlineNumber />,
    },
    {
      title: "Total Exchange",
      value: `${coin?.numberOfExchanges || 0}`,
      icon: <AiOutlineNumber />,
    },
    {
      title: "Change",
      value: (
        <span
          className="font-medium"
          style={{ color: Number(coin?.change) < 0 ? "red" : "green" }}
        >
          {coin?.change}%
        </span>
      ),
      icon: <TfiExchangeVertical />,
    },
  ];

  const renderStats = () => (
    <ul className="w-full dark:bg-neutral-900 bg-zinc-100 rounded-xl">
      {stats?.map((item, index) => (
        <li
          key={index}
          className="px-5 py-4 border-b-2 dark:border-neutral-950 border-white flex justify-between gap-5"
        >
          <div className="flex items-center gap-3  dark:text-gray-400">
            {item.icon}
            <h5 className="font-semibold text-sm md:text-base">{item.title}</h5>
          </div>
          <p className="text-sm md:text-base">{item.value}</p>
        </li>
      ))}
    </ul>
  );

  const renderLinks = () => (
    <ul className="dark:bg-neutral-900 bg-zinc-100 rounded-xl">
      {coin?.links?.map((link, index) => (
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
  );

  return (
    <Container>
      <SectionWrapper>
        <RenderContent isLoading={isFetching} isError={isError}>
          <div className="space-y-14">
            <div className="flex justify-center items-center flex-col gap-5">
              <img className="w-28 h-28" src={coin?.iconUrl} alt={coin?.name} />
              <h1 className="text-4xl text-violet-800 font-semibold">
                {coin?.name}
              </h1>
              <p className="dark:text-gray-400">
                Live price in US Dollar of {coin?.name}. View value statistics,
                market cap and supply
              </p>
            </div>
            <hr className="border-[0.5px] dark:border-neutral-900" />
            <div>
              <InteractiveSparkline
                data={coin?.sparkline?.map((d) => Number(d))}
              />
            </div>
            <hr className="border-[0.5px] dark:border-neutral-900" />
            <div className="space-y-8">
              <SectionTitle>{`${coin?.name} value statistics Overview.`}</SectionTitle>
              {renderStats()}
            </div>
            <hr className="border-[0.5px] dark:border-neutral-900" />
            <div className="space-y-8">
              <SectionTitle>{`Know About ${coin?.name}`} </SectionTitle>
              <div className="dark:text-gray-400">
                {coin?.description && HTMLReactParser(coin?.description)}
              </div>
            </div>
            <hr className="border-[0.5px] dark:border-neutral-900" />
            <div className="space-y-8">
              <SectionTitle>{`Resources to know about ${coin?.name}`}</SectionTitle>
              {renderLinks()}
            </div>
          </div>
        </RenderContent>
      </SectionWrapper>
    </Container>
  );
};

export default CurrenciesDetails;
