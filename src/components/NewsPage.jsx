import { news } from '../constants/index';

const NewsPage = () => {
  return (
    <div className="w-full p-8 mt-24">
      <h2 className="text-4xl font-sans mb-6">All News</h2>
      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><g stroke-width="5" stroke="hsl(10, 75%, 40%)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="7 20" transform="rotate(154, 400, 400)"><path d="M302.4337463378906 334.5Q609.4337463378906 426.5 433.4337463378906 465.5 " marker-end="url(#SvgjsMarker2338)"></path></g><defs><marker markerWidth="6" markerHeight="6" refX="3" refY="3" viewBox="0 0 6 6" orient="auto" id="SvgjsMarker2338"><polygon points="0,6 3,3 0,0 6,3" fill="hsl(10, 75%, 40%)"></polygon></marker></defs></svg> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((article) => (
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

export default NewsPage;
