import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFetchActions } from '../store/slices/use-fetch-slice';
import store from '../store';

const useFetch = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchError, setIsFetchError] = useState(null);

  const sendRequest = useCallback(
    async (
      url,
      requestConfig,
      postProcessCallback = (responseJson) => responseJson,
      callBack = () => {}
    ) => {
      try {
        setIsLoading(true);

        // Abort previous ongoing request and set a new abort controller
        const pageAt = store.getState().news.newsPageAt;
        const controller = store.getState().useFetch.controller;
        controller.abort();
        let newController = new AbortController();
        let signal = newController.signal;
        dispatch(useFetchActions.setController(newController));

        const response = await fetch(`${url}&page=${pageAt}`, {
          ...requestConfig,
          signal,
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const responseJson = await response.json();
        postProcessCallback(responseJson);
        callBack();
      } catch (e) {
        setIsFetchError(e.message);
      }
      setIsLoading(false);
    },
    [dispatch]
  );
  return { isLoading, isFetchError, sendRequest };
};

export default useFetch;
