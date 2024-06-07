import React, { useState, useEffect } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const names = [
    "Mangxahoi",
    "Amthuc",
    "Chuongtrinh",
    "Thamgia",
    "Toquocghicong",
    "Toquoc",
    "Trituenhantao",
  ];

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const filteredNames = names.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredNames);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleSuggestionClick = (name: string) => {
    setSearchTerm(name);
    setSuggestions([]);
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search names..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {suggestions.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {suggestions.map((name, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(name)}
              >
                {name}
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
