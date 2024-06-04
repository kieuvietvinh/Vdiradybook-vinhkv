import React, { useState } from "react";

const FileUploader = () => {
  const [file, setFile] = useState<any>(null);
  const [fileType, setFileType] = useState("");

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileType(selectedFile.type.split("/")[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <label
          htmlFor="file-input"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Choose File
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*,video/*,audio/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {file && (
        <div className="mb-4">
          {fileType === "image" && (
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded"
              className="max-w-full h-auto"
            />
          )}
          {fileType === "video" && (
            <video controls className="max-w-full h-auto">
              <source src={URL.createObjectURL(file)} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          )}
          {fileType === "audio" && (
            <audio controls>
              <source src={URL.createObjectURL(file)} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
          <p className="font-bold">Selected File: {file.name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
