import { articles } from '../constants/index'; 
import { Link } from 'react-router-dom'; // Import Link


const LatestNews = () => {
  return (
    <div className="w-full p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-sans">Latest News</h2>
        <Link to="/news" className="text-red-600 font-semibold">
          See all &rarr;
        </Link>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Iterate over articles */}
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-48 bg-gray-300 rounded-lg mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Author Info */}
            <div className="flex items-center text-sm mb-2">
              <img
                src={article.avatar}
                alt={article.author}
                className="w-6 h-6 rounded-full"
              />
              <span className="ml-2">{article.author}</span>
              <span className="mx-2">&bull;</span>
              <span>{article.timePosted}</span>
            </div>

            {/* News Title */}
            <h3 className="text-lg font-semibold mb-2">
              {article.title}
            </h3>

            {/* News Content */}
            <p className="text-sm text-gray-600 mb-4 truncate ...">
              {article.content}
            </p>

            {/* Category and Reading Time */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="font-semibold bg-red-100 text-red-600 px-2 py-1 rounded">
                {article.category}
              </span>
              <span>{article.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
