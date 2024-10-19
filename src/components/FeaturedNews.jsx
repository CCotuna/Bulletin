import { article } from '../constants/index'; // Import the article from constants
import React from 'react';

const LatestNews = () => {
  return (
    <div className="w-full p-8 px-40 mt-20">
      {/* Display the NewsCard with the article data */}
      <div className="flex flex-col md:flex-row items-center rounded-lg p-6">
        {/* Left Image */}
        <div className=" mb-4 md:mb-0">
          <img
            src={article.image}
            alt={article.title}
            className=" object-cover rounded-lg"
          />
        </div>
        {/* Right Content */}
        <div className="md:w-2/3 md:ml-6 flex flex-col justify-between space-y-4">
          {/* Author and time posted */}
          <div className="flex items-center mb-2">
            <img
              src={article.avatar}
              alt={article.author}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-800 font-semibold">{article.author}</span>
            <span className="mx-2 text-gray-500">&bull;</span>
            <span className="text-gray-500">{article.timePosted}</span>
          </div>

          {/* Big Title */}
          <h2 className="text-4xl font-bold mb-3 text-gray-900 leading-normal">{article.title}</h2>

          {/* Content (truncated if necessary) */}
          <p className="text-gray-700 text-md line-clamp-3 mb-4">
            {article.content}
          </p>

          {/* Category, dot, and reading time */}
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-semibold text-red-600">{article.category}</span>
            <span className="mx-2">&bull;</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
