import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

const LatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.VITE_NEWS_API_KEY}` 
        );
        const articlesWithImages = response.data.articles.filter(article => article.urlToImage);
        setArticles(articlesWithImages);
      } catch (err) {
        setError('Failed to fetch latest news');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  const limitedArticles = articles.slice(0, 4);

  return (
    <div className="w-full p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-sans">Latest News</h2>
        <Link to="/news" className="text-red-600 font-semibold">
          See all &rarr;
        </Link>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {limitedArticles.map((article, index) => (
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
                <span className="ml-2">{article.author}</span>
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

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="font-semibold bg-red-100 text-red-600 px-2 py-1 rounded">
                {article.category || 'Business'}
              </span>
              <span>{article.readTime || 'N/A'}</span> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
