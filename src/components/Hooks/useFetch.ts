import { useEffect, useState } from "react";
export interface FetchDataResponse<T> {
  data: T;
  status: 'success' | 'error';
}

export type FetchDataFunction<T> = () => Promise<{ data: T, status: 'success' | 'error' }>;

function useFetch<T>(fetchDataFunction: FetchDataFunction<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setIsError(null);
      setIsFetching(true);
      const response = await fetchDataFunction();
      if (response.status === 'success') {
        setData(response.data);

      }
    } catch (error) {
      setIsError('Oops! Something went wrong!');
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isFetching,
    isError,
    data,
  };
}

export default useFetch;