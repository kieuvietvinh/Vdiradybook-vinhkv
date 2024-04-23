import React, { useState } from "react";

const Thu = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-full flex transition-transform duration-700 ease-in-out">
        <img
          src="https://ocopmart.org/static/media/files/banners/s800_800/953_1657167413_39562c65e35cfad6.png"
          alt=""
        />
        <img
          src="https://ocopmart.org/static/media/files/banners/s800_800/953_1657167413_39562c65e35cfad6.png"
          alt=""
        />
        <img
          src="https://ocopmart.org/static/media/files/banners/s800_800/953_1657167413_39562c65e35cfad6.png"
          alt=""
        />
      </div>

      <button
        className="absolute top-1/2 -translate-y-1/2 left-0 z-10 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-l"
        data-carousel-prev
      >
        Prev
      </button>

      <button
        className="absolute top-1/2 -translate-y-1/2 right-0 z-10 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-r"
        data-carousel-next
      >
        Next
      </button>
    </div>
  );
};

export default Thu;
