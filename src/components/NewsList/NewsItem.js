import biden from '../../biden.jpg';

const NewsItem = ({ news }) => {
  return (
    <li className="mt-4 pb-4 border-b-2 border-solid border-slate-400 last:border-b-0">
      <div className="flex flex-col md:flex-row">
        <img
          className="max-w-full mb-2 md:max-w-md md:mr-4"
          src={biden}
          loading="lazy"
          alt={news.headline}
        />
        <div className="md:flex flex-col">
          <div className="mb-2 text-lg">Publisher</div>
          <a
            className="mb-3 font-semibold text-lg hover:underline"
            href="/"
            target="_blank"
          >
            {news.headline}
          </a>
          <p className="text-xs	text-slate-400">4 hours ago</p>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
