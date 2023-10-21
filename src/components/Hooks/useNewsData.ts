import { useEffect, useState } from 'react';
import { callApi, newsBaseUrl, newsEndPoint, newsHeaders } from '../../services';
import { News } from '../types';

function useNewsData() {
  const [data, setData] = useState<News>({ news: [] });
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState<unknown>();

  const fetchData = async () => {
    try {
      setIsError("");
      setIsFetching(true);
      const response = await callApi({ url: `${newsBaseUrl}${newsEndPoint}`, headers: newsHeaders });
      if (response?.value) {
        setData({ news: response?.value || [] })
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

export default useNewsData


