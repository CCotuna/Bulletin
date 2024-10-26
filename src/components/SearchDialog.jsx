import React, { useEffect, useRef } from 'react';
import { AiOutlineClose } from "react-icons/ai";

function SearchDialog({ isOpen, toggleSearchDialog, searchHistory }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleSearchDialog();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSearchDialog]);

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div ref={modalRef} className="relative bg-white p-12 rounded-lg shadow-lg w-11/12 max-w-2xl">
          <button
            onClick={toggleSearchDialog}
            className="absolute top-4 right-4 text-2xl text-gray-600"
          >
            <AiOutlineClose />
          </button>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md mb-4"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Search History</h3>
            <ul className="space-y-2">
              {searchHistory.length > 0 ? (
                searchHistory.map((query, index) => (
                  <li key={index} className="text-blue-600 hover:underline">
                    {query}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No search history available.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}

export default SearchDialog;
