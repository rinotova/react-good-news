import { useRef } from 'react';
import { useSelector } from 'react-redux';
import useFetchParallel from '../hooks/use-fetch-parallel';
import useProcessNews from '../hooks/use-process-news';

const InputSearch = () => {
  const inputSearchRef = useRef('');
  const { mapNews } = useProcessNews();
  const { sendRequest } = useFetchParallel();
  const countryCode = useSelector((state) => state.locale.countryCode);

  const searchHandler = (e) => {
    e.preventDefault();
    if (inputSearchRef.current.value === '') {
      return;
    }

    sendRequest(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_IO_KEY}&country=${countryCode}`,
      mapNews,
      7,
      inputSearchRef.current.value,
      true
    );
  };

  return (
    <form className="min-w-full" onSubmit={searchHandler}>
      <input
        ref={inputSearchRef}
        type="search"
        placeholder="Search..."
        className="min-w-full h-9 outline-0 border-0 border-b-2 border-solid border-black text-lg mb-8 dark:bg-slate-400	dark:text-slate-200"
      />
    </form>
  );
};
export default InputSearch;
