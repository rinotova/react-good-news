import { Fragment, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
import NewsItem from './NewsItem';
import Spinner from '../Spinner/Spinner';
import useFirstRender from '../../hooks/use-first-render';
import useFetchParallel from '../../hooks/use-fetch-parallel';
import useProcessNews from '../../hooks/use-process-news';

const NewsList = () => {
  const [triggerSearch, setTriggerSearch] = useState(false);
  const news = useSelector((state) => state.news.newsList);
  const countryCode = useSelector((state) => state.locale.countryCode);
  const { isLoading, isFetchError, sendRequest } = useFetchParallel();

  const isFirstRender = useFirstRender();

  const fetchMoreNewsHandler = () => {
    if (!isLoading && !isFetchError) {
      setTriggerSearch((trigger) => !trigger);
    }
  };

  const { mapNews } = useProcessNews();

  useEffect(() => {
    if (countryCode === 'select') {
      return;
    }
    sendRequest(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_IO_KEY}&country=${countryCode}`,
      mapNews,
      4
    );
  }, [countryCode, sendRequest, mapNews, triggerSearch]);

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
            hasMore={newsList.length <= 30}
          >
            {newsList}
          </InfiniteScroll>
        </ul>
      </div>
    </Fragment>
  );
};

export default NewsList;
