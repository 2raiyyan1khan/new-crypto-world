import { callApi, coinBaseUrl, coinHeaders, coinsDetailEndpoint } from "../../services";
import { ComponentProps, DataTypes } from "../types";
import useFetch, { FetchDataFunction } from "./useFetch";



function useGetCrypto({ limit, endpoint }: ComponentProps) {
  const fetchDataFunction: FetchDataFunction<DataTypes | null> = async () => {
    let url = `${coinBaseUrl}${endpoint}`;
    if (limit) {
      url += `?limit=${limit}`;
    }

    const response = await callApi({ url, headers: coinHeaders });

    if (response.status === 'success') {
      if (endpoint.includes(coinsDetailEndpoint)) {
        const { coin = {} } = response.data;
        return {
          data: { coin, coins: [], stats: {} },
          status: 'success',
        };
      } else {
        const { coins, stats } = response.data;
        return {
          data: { coins, stats },
          status: 'success',
        };
      }
    } else {
      return {
        data: null,
        status: 'error',
      };
    }
  };

  return useFetch(fetchDataFunction);
}
export default useGetCrypto;


