import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import NewsItem from './NewsItem';

const NewsList = () => {
  const news = useSelector((state) => state.news.newsList);

  if (news.length === 0) {
    return;
  }
  console.log('render');
  const newsList = news.map((newsItem) => (
    <NewsItem key={newsItem.id} news={newsItem} />
  ));

  return (
    <Fragment>
      <h3 className="min-w-full text-left text-xl">Headlines</h3>
      <div className="min-w-full">
        <ul>{newsList}</ul>
      </div>
    </Fragment>
  );
};

export default NewsList;
