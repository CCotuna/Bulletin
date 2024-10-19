import React from 'react';
import { ImNewspaper } from 'react-icons/im'; // Import the newspaper icon

const Gallery = () => {
  return (
    <div className="gallery relative p-4">
      <div className="title text-center mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          <span className='font-sans'>Recent Articles</span>
        </h1>
      </div>

      <div className="trapezoid-container flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
        {/* Repeatable Section */}
        {[
          { title: 'Pyramids', description: 'The Egyptian pyramids are ancient pyramid-shaped masonry structures.', author: 'John Doe' },
          { title: 'Statue of Liberty', description: 'The Statue of Liberty is a colossal neoclassical sculpture.', author: 'Jane Smith' },
          { title: 'Taj Mahal', description: 'The Taj Mahal is an ivory-white marble mausoleum.', author: 'Alice Johnson' },
          { title: 'Eiffel Tower', description: 'The Eiffel Tower is a wrought-iron lattice tower in Paris.', author: 'Robert Brown' },
          { title: 'Big Ben', description: 'Big Ben is the nickname for the Great Bell of the Great Clock of Westminster in London.', author: 'Emily Davis' },
          { title: 'Colosseum', description: 'The Colosseum is an ancient Roman amphitheater in Rome.', author: 'Mark Lee' },
          { title: 'Great Wall of China', description: 'The Great Wall is a series of fortifications made of stone, brick, and earth.', author: 'Sarah Wilson' }
        ].map((item, index) => (
          <div
            key={index}
            className="section relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 h-80 bg-black hover:bg-red-800 rounded-lg shadow-lg flex justify-center items-center text-center border-4 border-black hover:border-none group transition duration-300 ease-in-out"
          >
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-white"></div>
            <ImNewspaper className="absolute top-0 right-0 w-10 h-10 text-red-600 group-hover:text-black transform translate-x-1 translate-y-1 transition duration-300 ease-in-out" />
            <div className="front p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-white mb-4">{item.description}</p>
              <p className="text-sm text-gray-300">Posted by: {item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
