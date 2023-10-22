import millify from "millify";
import { AiOutlineNumber } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CoinProps, CoinsProps } from "../../types";
import Badge from "../Badge";

const CryptoGrid: React.FC<CoinsProps> = ({ coins }) => {
  return (
    <div className="grid  md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1 ">
      {coins?.map((coin: CoinProps) => (
        <div
          className="dark:bg-neutral-900 bg-zinc-100 rounded-xl p-5 border-[0.5px] dark:border-neutral-800"
          key={coin.uuid}
        >
          <Link to={`/currency/${coin.uuid}`}>
            <ul key={coin.uuid} className="space-y-2">
              <li className="mb-4">
                <div className="flex items-start gap-5">
                  <img
                    src={coin.iconUrl}
                    alt={coin.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className=" mb-2 text-2xl font-semibold text-violet-800 dark:text-violet-700">
                      {coin.name}
                    </h4>
                    <h6 className="text-sm font-medium dark:text-gray-400 ">
                      <Badge className=" dark:bg-green-900 dark:text-green-200 bg-green-200 text-green-900">
                        <AiOutlineNumber /> {coin.rank}
                      </Badge>
                    </h6>
                  </div>
                </div>
              </li>

              <li className="flex gap-5 justify-between items-center">
                <p className="font-medium  inline-block mr-2 dark:text-gray-400 ">
                  Price
                </p>
                <span className="font-medium">
                  {millify(Number(coin.price))}$
                </span>
              </li>
              <li className="flex gap-5 justify-between items-center">
                <p className="font-medium inline-block mr-2 dark:text-gray-400 ">
                  Market cap
                </p>
                <span className="font-medium">
                  {millify(Number(coin.marketCap))}$
                </span>
              </li>
              <li className="flex gap-5 justify-between items-center">
                <p className="font-medium inline-block mr-2 dark:text-gray-400 ">
                  Change
                </p>
                <span
                  className="font-medium"
                  style={{ color: Number(coin.change) < 0 ? "red" : "green" }}
                >
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
