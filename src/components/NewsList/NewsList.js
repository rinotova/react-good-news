import { Fragment, useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import NewsItem from './NewsItem';
import { newsListActions } from '../../store/slices/news-slice';
import Spinner from '../Spinner/Spinner';
import useFetch from '../../hooks/use-fetch';
import {
  getTransformedNews,
  applyGoodVibesFilter,
} from '../../helpers/newsHelpers';
import store from '../../store';
import useFirstRender from '../../hooks/use-first-render';

const NewsList = () => {
  const [triggerSearch, setTriggerSearch] = useState(false);
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.newsList);
  const countryCode = useSelector((state) => state.locale.countryCode);
  const { isLoading, isFetchError, sendRequest } = useFetch();
  const isFirstRender = useFirstRender();

  const fetchMoreNewsHandler = () => {
    if (!isLoading && !isFetchError) {
      setTriggerSearch((trigger) => !trigger);
    }
  };

  const processNews = useCallback(
    (newsData) => {
      dispatch(newsListActions.setTotalResults(newsData.totalResults));
      // const goodNews = applyGoodVibesFilter(newsData.results);
      const transformedNews = getTransformedNews(newsData.results);

      if (transformedNews.length === 0) {
        return;
      }
      dispatch(newsListActions.updateNewsList(transformedNews));
    },
    [dispatch]
  );

  useEffect(() => {
    if (countryCode === 'select') {
      return;
    }
    sendRequest(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_IO_KEY}&language=en`,
      null,
      processNews
    );
  }, [countryCode, sendRequest, processNews, triggerSearch]);

  // Fetching news will kick in in the second render triggered by country change
  if (isFirstRender) {
    return;
  }

  if (news.length === 0 && !isLoading) {
    return <p className="mt-3 text-lg dark:text-white">No results found.</p>;
  }

  if (news.length === 0 && isLoading) {
    return <Spinner isFullScreen={true} />;
  }

  const newsList = news.map((newsItem) => (
    <NewsItem key={newsItem.id} news={newsItem} />
  ));

  return (
    <Fragment>
      {isLoading && <Spinner isFullScreen={true} />}
      <h3 className="min-w-full text-left text-xl dark:text-slate-200">
        Headlines
      </h3>
      <div className="relative min-w-full">
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
