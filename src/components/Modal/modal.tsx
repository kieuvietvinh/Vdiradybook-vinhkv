import React from "react";

const OffCanvasSidebar = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed top-[70px] h-[calc(100vh_-_70px)] rounded-tl-2xl right-0 w-[300px] bg-white shadow-lg z-50 transition-all duration-300 ${
        isOpen
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible -translate-x-full"
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-2xl text-[#1F1F1F] font-semibold">
            Bộ lọc nâng cao
          </h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default OffCanvasSidebar;
