import { useEffect, useState } from "react";
import { callApi, coinBaseUrl, coinHeaders, coinsEndpoint } from "../../services";
export interface dataTypes {
  stats: object,
  coins: []
}
function useGetCrypto({ limit = 10 }: { limit: number }) {
  const [data, setData] = useState<dataTypes | null>();
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState<unknown>();

  const fetchData = async () => {
    try {
      setIsError("");
      setIsFetching(true);
      const response = await callApi({ url: `${coinBaseUrl}${coinsEndpoint}?limit=${limit}`, headers: coinHeaders });
      if (response?.status === "success") {
        setData(response.data)
      }
    } catch (error) {
      setIsError(error);
    } finally {
      setIsFetching(false)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])
  return {
    isFetching, isError, data
  }
}

export default useGetCrypto