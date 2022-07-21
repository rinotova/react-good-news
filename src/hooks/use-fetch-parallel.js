import { useCallback, useState } from 'react';
import store from '../store';
import { newsListActions } from '../store/slices/news-slice';
import { useDispatch } from 'react-redux';

const useFetchParallel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchError, setIsFetchError] = useState(null);
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async (
      url,
      postProcessCallback = (responseJson) => responseJson,
      numberOfCalls,
      setAsNewSearch
    ) => {
      try {
        setIsLoading(true);
        const q = store.getState().news.q
          ? encodeURIComponent(store.getState().news.q)
          : null;
        const qX = q ? q.trim().replace('%20', '%20OR%20') : null;
        const theUrl = qX ? `${url}&q=${qX}` : url;
        const fetchArray = [];
        const pageAt = setAsNewSearch ? 1 : store.getState().news.newsPageAt;

        for (let index = 0; index < numberOfCalls; index++) {
          fetchArray.push(
            fetch(`${theUrl}&page=${parseInt(index + pageAt, 10)}`).then(
              (response) => response.json()
            )
          );
        }
        let jsonResponses = await Promise.all(fetchArray);
        const mappedResponses = jsonResponses.map((jsonResponse) => {
          return jsonResponse.results;
        });

        const merged = [].concat.apply([], mappedResponses);
        if (setAsNewSearch) {
          dispatch(newsListActions.setPageAt(numberOfCalls));
        } else {
          dispatch(newsListActions.setPageAt(pageAt + numberOfCalls));
        }
        postProcessCallback({
          results: merged,
          setAsNewSearch,
        });
      } catch (e) {
        setIsFetchError(e.message);
      }
      setIsLoading(false);
    },
    [dispatch]
  );
  return { isLoading, isFetchError, sendRequest };
};

export default useFetchParallel;
