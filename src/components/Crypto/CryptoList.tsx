import Container from "../Common/ContainerWrapper";
import CryptoGrid from "../Common/CryptoGrid";
import Loading from "../Common/Loader";
import SectionWrapper from "../Common/SectionWrapper";

interface CurrenciesProps {
  home?: boolean;
}
export const dummyCoins = [
  {
    id: 1,
    slug: "bitcoin",
    rank: 1,
    name: "Bitcoin",
    iconUrl: "bitcoin-icon-url",
    price: 50000,
    volume: 1000000,
    change: 5,
  },
  {
    id: 2,
    slug: "ethereum",
    rank: 2,
    name: "Ethereum",
    iconUrl: "ethereum-icon-url",
    price: 3500,
    volume: 50000,
    change: -2,
  },
  {
    id: 3,
    slug: "ripple",
    rank: 3,
    name: "Ripple",
    iconUrl: "ripple-icon-url",
    price: 1.5,
    volume: 25000,
    change: 1.5,
  },
  {
    id: 4,
    slug: "litecoin",
    rank: 4,
    name: "Litecoin",
    iconUrl: "litecoin-icon-url",
    price: 150,
    volume: 10000,
    change: 2,
  },
  {
    id: 5,
    slug: "cardano",
    rank: 5,
    name: "Cardano",
    iconUrl: "cardano-icon-url",
    price: 2.5,
    volume: 8000,
    change: -1,
  },
  {
    id: 6,
    slug: "polkadot",
    rank: 6,
    name: "Polkadot",
    iconUrl: "polkadot-icon-url",
    price: 30,
    volume: 7000,
    change: 3.5,
  },
  {
    id: 7,
    slug: "binance-coin",
    rank: 7,
    name: "Binance Coin",
    iconUrl: "binance-coin-icon-url",
    price: 400,
    volume: 6000,
    change: 0.5,
  },
  {
    id: 8,
    slug: "solana",
    rank: 8,
    name: "Solana",
    iconUrl: "solana-icon-url",
    price: 150,
    volume: 5000,
    change: 4,
  },
  {
    id: 9,
    slug: "dogecoin",
    rank: 9,
    name: "Dogecoin",
    iconUrl: "dogecoin-icon-url",
    price: 0.25,
    volume: 4000,
    change: -3,
  },
  {
    id: 10,
    slug: "stellar",
    rank: 10,
    name: "Stellar",
    iconUrl: "stellar-icon-url",
    price: 0.75,
    volume: 3000,
    change: 2.5,
  },
  // You can continue to add more objects to simulate additional coins
];

const Currencies = ({ home = false }: CurrenciesProps) => {
  const limit = home ? 10 : 100;
  // const { data, isFetching, error, isError } = useGetCryptoQuery(limit);
  const coins = dummyCoins;
  const isFetching = false;
  const error = "";
  const isError = false;
  return (
    <Container>
      <SectionWrapper>
        {isError ? (
          <h2>{error?.message}</h2>
        ) : isFetching ? (
          <Loading home={home} />
        ) : (
          <CryptoGrid coins={coins} />
        )}
      </SectionWrapper>
    </Container>
  );
};

export default Currencies;
