import { callApi, newsBaseUrl, newsEndPoint, newsHeaders } from '../../services';
import { News } from '../types';
import useFetch, { FetchDataFunction } from './useFetch';

function useNewsData() {
  const fetchDataFunction: FetchDataFunction<News> = async () => {
    const response = await callApi({ url: `${newsBaseUrl}${newsEndPoint}`, headers: newsHeaders });
    if (response?.value) {
      return {
        data: { news: response.value || [] }, // Assuming the news data is directly inside the response
        status: 'success',
      };
    } else {
      return {
        data: { news: [] }, // Return an empty array if there is an error
        status: 'error',
      };
    }
  };
  return useFetch(fetchDataFunction);
}

export default useNewsData


