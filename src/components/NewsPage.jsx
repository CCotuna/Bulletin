import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=2024-09-26&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (err) {
        setError('Failed to fetch news articles');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredArticles = articles.filter(article => article.urlToImage);

  return (
    <div className="w-full p-8">
      <h2 className="text-4xl font-sans mb-6">Top News</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
          >
            <div className="w-full h-48 bg-gray-300 rounded-lg mb-4">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex items-center text-sm mb-2">
              {article.author && (
                <span className="mr-2">{article.author}</span>
              )}
              <span className="mx-2">&bull;</span>
              <span>{new Date(article.publishedAt).toLocaleString()}</span>
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {article.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 truncate">
              {article.description}
            </p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-teal-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
