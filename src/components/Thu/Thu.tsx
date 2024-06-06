import React, { useState } from "react";

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/tatca.svg",
    "/images/gautruc.svg",
    "/images/meo.svg",
  ];

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={handlePreviousClick}
      >
        Previous
      </button>
      <div className="flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`max-w-full max-h-full object-contain cursor-pointer mr-4 ${
              index === currentImageIndex ? "opacity-100" : "opacity-50"
            }`}
          />
        ))}
      </div>
      <button
        className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default ImageGallery;
