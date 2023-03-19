import { useCallback, useState } from 'react';
import store from '../store';
import { newsListActions } from '../store/slices/news-slice';
import { useDispatch } from 'react-redux';

async function getNews(theUrl, numberOfCalls, nextP) {
  const firstUrl = nextP ? `${theUrl}&page=${nextP}` : theUrl;
  const firstResponseJson = await fetch(firstUrl).then((response) =>
    response.json()
  );
  let nextPage = firstResponseJson.nextPage;
  const results = [...firstResponseJson.results];
  const calls = new Array(numberOfCalls).fill().map((val) => ({ theUrl }));

  for (const call of calls) {
    const responseJson = await fetch(`${call.theUrl}&page=${nextPage}`).then(
      (response) => response.json()
    );
    results.push(...responseJson.results);
    nextPage = responseJson.nextPage;
  }

  return { results, nextPage };
}

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
        const pageAt = setAsNewSearch ? null : store.getState().news.newsPageAt;

        const { results, nextPage } = await getNews(
          theUrl,
          numberOfCalls,
          pageAt
        );

        if (setAsNewSearch) {
          dispatch(newsListActions.setPageAt(null));
        } else {
          dispatch(newsListActions.setPageAt(nextPage));
        }
        postProcessCallback({
          results,
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
