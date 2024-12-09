import React from "react";
import Rating from "react-rating";

const Card = () => {
  return (
    <div className="max-w-sm mx-auto border rounded-lg shadow-md bg-white">
      <div className="relative">
        <img
          src="https://via.placeholder.com/300" 
          alt="Loaded Fries"
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 19.938a1 1 0 001.415 0L12 14.475l5.464 5.463a1 1 0 001.415-1.414L13.415 13l5.464-5.464a1 1 0 10-1.414-1.415L12 11.585 6.536 6.121a1 1 0 00-1.415 1.414L10.585 13l-5.464 5.464a1 1 0 000 1.415z"
            />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <Rating
            initialRating={4} 
            emptySymbol={<span className="text-gray-300 text-2xl">☆</span>}
            fullSymbol={<span className="text-yellow-400 text-2xl">★</span>}
            readonly
          />
        </div>

        <h3 className="text-lg font-bold">Loaded Fries At Aloo Cart</h3>

        <div className="text-gray-500 text-sm flex items-center gap-1 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.704 9.704a7 7 0 11-9.408 0 3.5 3.5 0 114.704 0 3.5 3.5 0 114.704 0z"
            />
          </svg>
          <p>Pakistan, Lahore</p>
          <span className="ml-2 text-blue-500">+2 more</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-medium text-green-500">Flat 15% Off</span>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600">
            Get Offer
          </button>
        </div>
      </div>

      <div className="flex items-center px-4 py-3 border-t">
        <img
          src="https://via.placeholder.com/40"
          alt="Aloo Cart"
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-medium text-sm">Aloo Cart</span>
      </div>
    </div>
  );
};

export default Card