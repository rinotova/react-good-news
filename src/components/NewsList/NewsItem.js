const NewsItem = ({ news }) => {
  return (
    <li className="mt-4 pb-4 border-b-2 border-solid border-slate-400 last:border-b-0 dark:text-slate-200	">
      <div className="flex flex-col md:flex-row">
        {news.urlToImage && (
          <img
            className="max-w-full mb-2 md:max-w-md md:mr-4"
            src={news.urlToImage}
            loading="lazy"
            alt={news.headline}
          />
        )}
        {!news.urlToImage && (
          <div className="bg-slate-200 mb-2 w-[343px] h-[179px] md:w-[450px] md:h-[300px] flex items-center justify-center text-center text-black md:mr-4 shrink-0">
            <h6>The good news</h6>
          </div>
        )}
        <div className="md:flex flex-col">
          <div className="mb-2 text-sm capitalize">{news.publisher}</div>
          <a
            className="mb-3 font-semibold text-lg hover:underline"
            href={news.url}
            target="_blank"
            rel="noreferrer"
            loading="lazy"
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
