import millify from "millify";
import { Link } from "react-router-dom";
import { coinsEndpoint } from "../../services";
import Container from "../Common/ContainerWrapper";
import CryptoGrid from "../Common/CryptoGrid";
import Hero from "../Common/Hero";
import NewsGrid from "../Common/NewsGrid";
import RenderContent from "../Common/RenderContent";
import SectionTitle from "../Common/SectionTitle";
import SectionWrapper from "../Common/SectionWrapper";
import StatsCard from "../Common/StatsCard";
import useGetCrypto from "../Hooks/useGetCrypto";
import useNewsData from "../Hooks/useNewsData";
import { StatsTypes } from "../types";

const Home = () => {
  const { data, isFetching, isError } = useGetCrypto({
    limit: 10,
    endpoint: coinsEndpoint,
  });
  const {
    data: newsData,
    isFetching: isNewsLoading,
    isError: isNewsError,
  } = useNewsData();
  const cryptoStats = data?.stats as StatsTypes;
  const coins = data?.coins;
  const news = newsData?.news;
  console.log("news", news);
  return (
    <Container>
      <SectionWrapper className="space-y-14">
        <Hero />
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <SectionTitle>
              Today's 24-Hour Global Data and the Top 10 Currencies
            </SectionTitle>
            {!isFetching && (
              <button className="bg-violet-800 text-white dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700">
                <Link to="/currencies">View All</Link>
              </button>
            )}
          </div>
          <RenderContent isLoading={isFetching} isError={isError}>
            <div className="space-y-14">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <StatsCard
                  title="Total Coins"
                  value={cryptoStats?.totalCoins || 0}
                />
                <StatsCard
                  title="Total Markets"
                  value={millify(cryptoStats?.totalMarkets || 0) || 0}
                />
                <StatsCard
                  title="Total Market Cap"
                  value={`${millify(cryptoStats?.totalMarketCap || 0)}$`}
                />
                <StatsCard
                  title="Total Exchanges"
                  value={millify(cryptoStats?.totalExchanges || 0)}
                />
                <StatsCard
                  title="Total 24H Trading Volume"
                  value={`${millify(cryptoStats?.total24hVolume || 0)}$`}
                />
              </div>

              <div>
                <CryptoGrid coins={coins} />
              </div>
            </div>
          </RenderContent>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        {/* top 10 News  */}
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <SectionTitle>Trending News</SectionTitle>
            {!isNewsLoading && (
              <button className="bg-violet-800 text-white dark:text-gray-300 px-4 py-2 rounded-lg  text-sm font-semibold hover:bg-violet-700">
                <Link to="/news">View All</Link>
              </button>
            )}
          </div>
          <RenderContent isLoading={isNewsLoading} isError={isNewsError}>
            <NewsGrid data={news} />
          </RenderContent>
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Home;
