
export const coinBaseUrl = "https://api.coinranking.com/v2";
export const coinHeaders = {
  'Content-Type': 'application/json',
  'x-access-token': import.meta.env.VITE_COIN_API_KEY,
};

export const coinsEndpoint = `/coins`;
export const coinsDetailEndpoint = `/coin`;



export const newsBaseUrl = "https://bing-news-search1.p.rapidapi.com";
export const newsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": import.meta.env.VITE_NEWS_API_KEY,
};
export const newsEndPoint = `/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=day&count=10`


type CoinHeaders = typeof coinHeaders;
type NewsHeaders = typeof newsHeaders;
interface CallApiProps {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers: CoinHeaders | NewsHeaders
}

export const callApi = async ({ url, method = "GET", headers }: CallApiProps) => {
  try {
    const response = await fetch(url, { method: method, headers });
    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

  }
}
// const createRequest = (url: string) => ({ url, headers: headers });
// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCrypto: builder.query({
//       query: (limit) => createRequest(`/coins?limit=${limit}`),
//     }),
//     getCryptoDetails: builder.mutation({
//       query: (cId) => createRequest(`/coin/${cId}`),
//     }),
//   }),
// });
// export const { useGetCryptoQuery, useGetCryptoDetailsMutation } = cryptoApi;