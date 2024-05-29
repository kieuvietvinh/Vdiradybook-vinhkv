import React, { useState } from "react";

function MediaUploader() {
  const [hasMedia, setHasMedia] = useState(false);

  const handleMediaUpload = (event: any) => {
    if (event.target.files.length > 0) {
      setHasMedia(true);
    } else {
      setHasMedia(false);
    }
  };

  return (
    <div className="mt-2 absolute bottom-10">
      {hasMedia && (
        <label
          htmlFor="media-upload"
          className="bg-[#000000B2] text-white font-medium py-2 px-4 rounded cursor-pointer"
        >
          Thay đổi
        </label>
      )}
      {!hasMedia && (
        <label
          htmlFor="media-upload"
          className="bg-[#000000B2] text-white font-medium py-2 px-4 rounded cursor-pointer"
        >
          Tải lên
        </label>
      )}
      <input
        id="media-upload"
        type="file"
        className="hidden"
        onChange={handleMediaUpload}
      />
    </div>
  );
}

export default MediaUploader;
