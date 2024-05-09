import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";

const Thu = () => {
  const [element1, setElement1] = useState<string | null>(null);
  const [element2, setElement2] = useState<string | null>(null);

  const handleImageUpload1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setElement1(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setElement2(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="pt-5 flex gap-2 flex-wrap">
        <div className="items-center justify-center w-fit gap-2 contents">
          {element1 && (
            <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
              <img className="w-32 h-32 object-cover" src={element1} alt="" />
              <input
                id="dropzone-file-1"
                type="file"
                className="hidden"
                onChange={handleImageUpload1}
              />
              <button
                className="w-6 h-6 bg-[#D9D9D9] rounded-full flex items-center justify-center absolute right-2 top-2 text-sm text-stone-700"
                onClick={() => setElement1(null)}
              >
                x
              </button>
            </label>
          )}
          {!element1 && (
            <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
              <div className="flex flex-col items-center justify-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Tải lên
                </p>
                <img
                  className="w-5 h-5"
                  src="https://vdiarybook.com/assets/icons/default/add_blue.svg"
                  alt=""
                />
              </div>
              <input
                id="dropzone-file-1"
                type="file"
                className="hidden"
                onChange={handleImageUpload1}
              />
            </label>
          )}
          {element2 && (
            <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
              <img className="w-32 h-32 object-cover" src={element2} alt="" />
              <input
                id="dropzone-file-2"
                type="file"
                className="hidden"
                onChange={handleImageUpload2}
              />
              <button
                className="w-6 h-6 bg-[#D9D9D9] rounded-full flex items-center justify-center absolute right-2 top-2 text-sm text-stone-700"
                onClick={() => setElement2(null)}
              >
                x
              </button>
            </label>
          )}
          {!element2 && (
            <label className="flex relative flex-wrap flex-col items-center justify-center min-w-36 min-h-36 border border-[#4284f3] border-dashed rounded-lg cursor-pointer bg-gray-50">
              <div className="flex flex-col items-center justify-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Tải lên
                </p>
                <img
                  className="w-5 h-5"
                  src="https://vdiarybook.com/assets/icons/default/add_blue.svg"
                  alt=""
                />
              </div>
              <input
                id="dropzone-file-2"
                type="file"
                className="hidden"
                onChange={handleImageUpload2}
              />
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Thu;
