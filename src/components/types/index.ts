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
export interface CoinProps {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  btcPrice: string;
  listedAt: number;
  change: string;
  rank: number;
  sparkline: string[];
  coinrankingUrl: string;
  volume24h: string;
}
export interface StatsTypes {
  totalCoins: number;
  totalMarkets: number;
  totalMarketCap: number;
  totalExchanges: number;
  total24hVolume: number;
}

export interface CoinsProps {
  coins: CoinProps[] | undefined;
}


export interface StatsTypes {
  totalCoins: number;
  totalMarkets: number;
  totalMarketCap: number;
  totalExchanges: number;
  total24hVolume: number;
}

export interface DataTypes {
  stats: StatsTypes | object;
  coins: CoinProps[] | [];
  coin?: CoinDetail;
}

export interface ComponentProps {
  limit?: number;
  endpoint: string;
}
export interface CoinDetail {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: Link[];
  supply: Supply;
  "24hVolume": string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  sparkline: string[];
  allTimeHigh: AllTimeHigh;
  coinrankingUrl: string;
  lowVolume: boolean;
  listedAt: number;
  notices: Notice[];
  tags: string[];
}

interface Link {
  name: string;
  url: string;
  type: string;
}

interface Supply {
  confirmed: boolean;
  supplyAt: number;
  circulating: string;
  total: string;
  max: string;
}

interface AllTimeHigh {
  price: string;
  timestamp: number;
}

interface Notice {
  type: string;
  value: string;
}

