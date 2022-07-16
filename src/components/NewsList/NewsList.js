import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import NewsItem from './NewsItem';
import { newsListActions } from '../../store/slices/news-slice';
import Spinner from '../Spinner/Spinner';

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.newsList);

  if (news.length === 0) {
    return;
  }

  const newsList = news.map((newsItem) => (
    <NewsItem key={newsItem.id} news={newsItem} />
  ));

  const fetchMoreNewsHandler = () => {
    console.log('fetching');
    setTimeout(() => {
      dispatch(newsListActions.updateNewsList(news));
    }, 1500);
  };

  return (
    <Fragment>
      <h3 className="min-w-full text-left text-xl">Headlines</h3>
      <div className="min-w-full">
        <ul>
          <InfiniteScroll
            dataLength={newsList.length}
            next={fetchMoreNewsHandler}
            hasMore={true}
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
