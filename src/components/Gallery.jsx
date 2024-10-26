import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImNewspaper } from 'react-icons/im';

const Gallery = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}` 
        );
        
        const filteredArticles = response.data.articles.filter(article => article.urlToImage);
        
        setArticles(filteredArticles.slice(0, 12));
      } catch (err) {
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (articles.length === 0) return <p>No articles available.</p>;

  return (
    <div className="gallery relative p-4">
      <div className="title text-center mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          <span className='font-sans uppercase'>You Should Know</span>
        </h1>
      </div>

      <div className="trapezoid-container flex flex-wrap justify-center gap-4 mx-auto">
        {articles.map((article, index) => (
          <div
            key={index}
            className="section relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-80 bg-black rounded-lg shadow-lg overflow-hidden group transition duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${article.urlToImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div> 
            <div className="relative z-10 flex flex-col justify-end h-full p-4">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold mb-2 text-white">{article.title}</h3>
              </a>
              <p className="text-sm text-white mb-4">{article.description}</p>
              <p className="text-sm text-gray-300">Posted by: {article.author || 'Unknown Author'}</p>
            </div>

            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute top-2 right-2 w-16 h-16 bg-white rounded-lg flex justify-center items-center shadow-lg transition duration-300 ease-in-out group-hover:bg-black"
            >
              <ImNewspaper className="w-10 h-10 text-red-600 group-hover:text-white" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
