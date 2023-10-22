
export const coinBaseUrl = "https://api.coinranking.com/v2";
export const coinHeaders = {
  'Content-Type': 'application/json',
  'x-access-token': import.meta.env.VITE_COIN_API_KEY,
};

export const coinsEndpoint = `/coins`;
export const coinsDetailEndpoint = `/coin/`;



export const newsBaseUrl = "https://bing-news-search1.p.rapidapi.com";
export const newsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": import.meta.env.VITE_NEWS_API_KEY,
};
export const newsEndPoint = `/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=day&count=10`


type CoinHeaders = typeof coinHeaders;
type NewsHeaders = typeof newsHeaders;
export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}
interface CallApiProps {
  url: string;
  method?: string;
  headers: CoinHeaders | NewsHeaders
}

export const callApi = async ({ url, method = Methods.GET, headers }: CallApiProps) => {
  try {
    const response = await fetch(url, { method, headers });
    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
