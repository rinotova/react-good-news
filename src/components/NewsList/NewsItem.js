const NewsItem = ({ news }) => {
  return (
    <li className="mt-4 pb-4 border-b-2 border-solid border-slate-400 last:border-b-0 dark:text-slate-200	">
      <div className="flex flex-col md:flex-row">
        <img
          className="max-w-full mb-2 md:max-w-md md:mr-4"
          src={news.urlToImage}
          loading="lazy"
          alt={news.headline}
        />
        <div className="md:flex flex-col">
          <div className="mb-2 text-sm">{news.publisher}</div>
          <a
            className="mb-3 font-semibold text-lg hover:underline"
            href={news.urk}
            target="_blank"
            rel="noreferrer"
          >
            {news.headline}
          </a>
          <p className="text-xs	text-slate-400 mt-2">{news.publishedAt} ago</p>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
