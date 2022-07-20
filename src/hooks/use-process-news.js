import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  applyGoodVibesFilter,
  getTransformedNews,
} from '../helpers/newsHelpers';
import { newsListActions } from '../store/slices/news-slice';

const useProcessNews = () => {
  const dispatch = useDispatch();

  const mapNews = useCallback(
    (newsData) => {
      console.log(newsData);
      const goodNews = applyGoodVibesFilter(newsData.results);
      const transformedNews = getTransformedNews(goodNews);

      if (newsData.setAsNewSearch) {
        dispatch(newsListActions.setNewsList(transformedNews));
      } else {
        dispatch(newsListActions.updateNewsList(transformedNews));
      }
    },
    [dispatch]
  );
  return { mapNews };
};

export default useProcessNews;
