import { v4 as uuidv4 } from 'uuid';
import Sentimood from './sentimood';

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
      url: pieceOfNews.link,
      urlToImage: pieceOfNews.image_url,
      publishedAt: timeSince(new Date(pieceOfNews.pubDate)),
      publisher: pieceOfNews.source_id,
    };
  });
  return transformedNews;
};

export const applyGoodVibesFilter = (articles) => {
  const goodNews = [];
  const sentiment = new Sentimood();

  console.log(articles);

  articles.forEach((article) => {
    console.log(sentiment.analyze(article.title).score);
    if (sentiment.analyze(article.title).score > 0) {
      goodNews.push(article);
    }
  });
  console.log(goodNews);
  return goodNews;
};
