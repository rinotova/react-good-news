import { v4 as uuidv4 } from 'uuid';

const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
};

export const getTransformedNews = (articles) => {
  const transformedNews = articles.map((pieceOfNews) => {
    return {
      id: uuidv4(),
      headline: pieceOfNews.title,
      url: pieceOfNews.url,
      urlToImage: pieceOfNews.urlToImage,
      publishedAt: timeSince(new Date(pieceOfNews.publishedAt)),
      publisher: pieceOfNews.source.name,
    };
  });
  return transformedNews;
};
