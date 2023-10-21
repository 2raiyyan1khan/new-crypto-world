import millify from "millify";
import { Link } from "react-router-dom";

interface CoinData {
  id: number;
  slug: string;
  rank: number;
  name: string;
  iconUrl: string;
  marketCap: string;
  price: number;
  volume: number;
  change: number;
}

// Define props interface for your component
interface Props {
  coins: CoinData[] | undefined;
}

const CryptoGrid: React.FC<Props> = ({ coins }) => {
  return (
    <div className="grid  md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1 ">
      {coins?.map((coin: CoinData) => (
        <div
          className="dark:bg-neutral-900 bg-zinc-100 rounded-xl p-5 border-[0.5px] dark:border-neutral-800"
          key={coin.id}
        >
          <Link to={`/currency/${coin.slug}/${coin.id}`}>
            <ul key={coin.id} className="space-y-2">
              <li className="mb-4">
                <div className="flex items-start gap-5">
                  <img
                    src={coin.iconUrl}
                    alt={coin.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h5 className="text-2xl font-semibold text-violet-800 dark:text-violet-700">
                      {coin.name}
                    </h5>
                    <h5 className="text-sm font-medium dark:text-gray-400 ">
                      Rank: {coin.rank}
                    </h5>
                  </div>
                </div>
              </li>

              <li className="flex gap-5 justify-between items-center">
                <p className="font-medium  inline-block mr-2 dark:text-gray-400 ">
                  Price
                </p>
                <span>{millify(coin.price)}$</span>
              </li>
              <li className="flex gap-5 justify-between items-center">
                <p className="font-medium inline-block mr-2 dark:text-gray-400 ">
                  Market cap
                </p>
                <span>{millify(Number(coin.marketCap))}$</span>
              </li>
              <li className="flex gap-5 justify-between items-center">
                <p className="font-medium inline-block mr-2 dark:text-gray-400 ">
                  Change
                </p>
                <span style={{ color: coin.change < 0 ? "red" : "green" }}>
                  {coin.change}%
                </span>
              </li>
            </ul>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CryptoGrid;
