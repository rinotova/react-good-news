import { Fragment, useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import NewsItem from './NewsItem';
import { newsListActions } from '../../store/slices/news-slice';
import Spinner from '../Spinner/Spinner';
import useFetch from '../../hooks/use-fetch';
import { getTransformedNews } from '../../helpers/newsHelpers';
import store from '../../store';

const NewsList = () => {
  const [triggerSearch, setTriggerSearch] = useState(false);
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.newsList);
  const countryCode = useSelector((state) => state.locale.countryCode);
  const { isLoading, isFetchError, sendRequest } = useFetch();

  const processNews = useCallback(
    (newsData) => {
      console.log(newsData);
      dispatch(newsListActions.setTotalResults(newsData.totalResults));

      const transformedNews = getTransformedNews(newsData.articles);

      if (transformedNews.length === 0) {
        return;
      }
      dispatch(newsListActions.updateNewsList(transformedNews));
      console.log(transformedNews);
    },
    [dispatch]
  );

  useEffect(() => {
    if (countryCode === 'select') {
      return;
    }
    console.log('fetching');
    sendRequest(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&pageSize=10`,
      {
        headers: {
          'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY,
        },
      },
      processNews
    );
  }, [countryCode, sendRequest, processNews, triggerSearch]);

  if (news.length === 0) {
    return;
  }

  const newsList = news.map((newsItem) => (
    <NewsItem key={newsItem.id} news={newsItem} />
  ));

  const fetchMoreNewsHandler = () => {
    if (!isLoading && !isFetchError) {
      setTriggerSearch((trigger) => !trigger);
    }
  };

  return (
    <Fragment>
      <h3 className="min-w-full text-left text-xl dark:text-slate-200">
        Headlines
      </h3>
      <div className="min-w-full">
        <ul>
          <InfiniteScroll
            dataLength={newsList.length}
            next={fetchMoreNewsHandler}
            hasMore={newsList.length < store.getState().news.totalResults}
            loader={<Spinner />}
          >
            {newsList}
          </InfiniteScroll>
        </ul>
      </div>
    </Fragment>
  );
};

export default NewsList;
