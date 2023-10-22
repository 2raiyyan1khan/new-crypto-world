import { callApi, newsBaseUrl, newsEndPoint, newsHeaders } from '../../services';
import { NewsArticle } from '../types';
import useFetch, { FetchDataFunction } from './useFetch';



function useNewsData() {
  const fetchDataFunction: FetchDataFunction<NewsArticle[]> = async () => {
    const response = await callApi({ url: `${newsBaseUrl}${newsEndPoint}`, headers: newsHeaders });
    if (response?.value) {
      return {
        data: response.value,
        status: 'success',
      };
    } else {
      return {
        data: [],
        status: 'error',
      };
    }
  };
  return useFetch(fetchDataFunction);
}


export default useNewsData


