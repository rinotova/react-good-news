import { Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetchParallel from '../hooks/use-fetch-parallel';
import useProcessNews from '../hooks/use-process-news';
import Spinner from './Spinner/Spinner';
import { newsListActions } from '../store/slices/news-slice';

const InputSearch = () => {
  const dispatch = useDispatch();
  const inputSearchRef = useRef('');
  const { mapNews } = useProcessNews();
  const { isLoading, sendRequest } = useFetchParallel();
  const countryCode = useSelector((state) => state.locale.countryCode);

  const searchHandler = (e) => {
    e.preventDefault();
    if (isLoading || inputSearchRef.current.value === '') {
      return;
    }
    dispatch(newsListActions.setQuery(inputSearchRef.current.value));
    sendRequest(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_IO_KEY}&country=${countryCode}`,
      mapNews,
      7,
      true
    );
  };

  return (
    <Fragment>
      {isLoading && <Spinner isFullScreen={true} />}
      <form className="min-w-full" onSubmit={searchHandler}>
        <input
          ref={inputSearchRef}
          id="newsInputSearch"
          type="search"
          placeholder="Search..."
          className="min-w-full h-9 outline-0 border-0 border-b-2 border-solid border-black text-lg mb-8 dark:bg-slate-400	dark:text-slate-200"
        />
      </form>
    </Fragment>
  );
};
export default InputSearch;
