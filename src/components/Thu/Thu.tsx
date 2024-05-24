import React, { useState } from "react";

const images = [
  { id: 1, img: "/images/dang.svg" },
  { id: 2, img: "/images/thuoc.svg" },
  { id: 3, img: "/images/thanhnien.svg" },

  { id: 4, img: "/images/dang.svg" },
];

const Thu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="w-full h-64 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image: any, index: any) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-cover bg-center"
            >
              <img src={image.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          className="bg-white rounded-full w-8 h-8 shadow-md focus:outline-none"
          onClick={handlePrevClick}
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="bg-white rounded-full w-8 h-8 shadow-md focus:outline-none"
          onClick={handleNextClick}
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Thu;
