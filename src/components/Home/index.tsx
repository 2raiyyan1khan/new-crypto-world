import millify from "millify";
import { Link } from "react-router-dom";
import Container from "../Common/ContainerWrapper";
import CryptoGrid from "../Common/CryptoGrid";
import Hero from "../Common/Hero";
import { default as Loading } from "../Common/Loader";
import NewsGrid from "../Common/NewsGrid";
import SectionTitle from "../Common/SectionTitle";
import SectionWrapper from "../Common/SectionWrapper";
import { dummyCoins } from "../Crypto/CryptoList";
import { dummyNewsData } from "../CryptoNews";

const Home = () => {
  // const { data, isFetching } = useGetCryptoQuery(10);
  let stats = {};
  let show = false;
  return (
    <Container>
      <SectionWrapper className="space-y-14">
        <Hero />
        {show ? (
          <Loading home />
        ) : (
          <div className="space-y-8">
            <SectionTitle>Global Statistics</SectionTitle>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="dark:bg-neutral-900 bg-zinc-100 p-5 rounded-xl text-center border-[0.5px] dark:border-neutral-800">
                <h5 className="text-5xl font-semibold mb-3">
                  {stats?.total || 3456}
                </h5>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  Total
                </p>
              </div>
              <div className="dark:bg-neutral-900 bg-zinc-100 p-5 rounded-xl text-center border-[0.5px] dark:border-neutral-800">
                <h5 className="text-5xl font-semibold mb-3">
                  {stats?.totalMarkets && millify(stats?.totalMarkets)}
                </h5>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  Total Markets
                </p>
              </div>
              <div className="dark:bg-neutral-900 bg-zinc-100 p-5 rounded-xl text-center border-[0.5px] dark:border-neutral-800">
                <h5 className="text-5xl font-semibold mb-3">
                  {stats?.totalMarketCap && millify(stats?.totalMarketCap)}
                </h5>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  Total Markets Cap
                </p>
              </div>
              <div className="dark:bg-neutral-900 bg-zinc-100 p-5 rounded-xl text-center border-[0.5px] dark:border-neutral-800">
                <h5 className="text-5xl font-semibold mb-3">
                  {stats?.totalExchanges && millify(stats?.totalExchanges)}
                </h5>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  Total Exchanges
                </p>
              </div>
              <div className="dark:bg-neutral-900 bg-zinc-100 p-5 rounded-xl text-center border-[0.5px] dark:border-neutral-800">
                <h5 className="text-5xl font-semibold mb-3">
                  {stats?.total24hVolume && millify(stats?.total24hVolume)}
                </h5>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  Total 24H Volume
                </p>
              </div>
            </div>
          </div>
        )}

        {/* top 10 currencies  */}

        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <SectionTitle>Today's Standout Currencies</SectionTitle>
            <button className="bg-violet-800 text-white dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700">
              <Link to="/currencies">View All</Link>
            </button>
          </div>

          <CryptoGrid coins={dummyCoins} />
        </div>

        {/* top 10 News  */}
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <SectionTitle>Trending News</SectionTitle>
            <button className="bg-violet-800 text-white dark:text-gray-300 px-4 py-2 rounded-lg  text-sm font-semibold hover:bg-violet-700">
              <Link to="/news">View All</Link>
            </button>
          </div>

          <NewsGrid data={{ value: dummyNewsData }} />
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Home;
