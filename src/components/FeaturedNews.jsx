import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LatestNews = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestArticle = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_NEWS_API_KEY}` 
        );
        const firstArticle = response.data.articles[0];
        if (firstArticle && firstArticle.urlToImage) {
          setArticle(firstArticle);
        } else {
          setError('No articles with images available.');
        }
      } catch (err) {
        setError('Failed to fetch the latest article');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestArticle();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!article) return <p>No articles available.</p>;

  return (
    <div className="w-full p-8 px-40">
      <div className="flex flex-col md:flex-row items-center rounded-lg p-6">
        <div className="mb-4 md:mb-0">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:ml-6 flex flex-col justify-between space-y-4">
          <div className="flex items-center mb-2">
            <span className="text-gray-800 font-semibold">{article.author || 'Unknown Author'}</span>
            <span className="mx-2 text-gray-500">&bull;</span>
            <span className="text-gray-500">{new Date(article.publishedAt).toLocaleString()}</span>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl font-bold mb-3 text-gray-900 leading-normal hover:underline"
          >
            {article.title}
          </a>

          <p className="text-gray-700 text-md line-clamp-3 mb-4">
            {article.description} 
          </p>

          <div className="flex items-center text-sm text-gray-500">
            <span className="font-semibold text-red-600">{article.source.name || 'Business'}</span>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
