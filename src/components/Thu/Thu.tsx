import { useState } from "react";

const UploadMediaFile = () => {
  const [mediaFile, setMediaFile] = useState<any>(null);
  const [previewUrl, setPreviewUrl] = useState<any>(null);

  const handleMediaUpload = (event: any) => {
    const file = event.target.files[0];
    setMediaFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="">
        {previewUrl && (
          <div>
            {mediaFile.type.startsWith("image/") ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-[200px] max-h-[200px] rounded-lg"
              />
            ) : (
              <video
                controls
                className="max-w-[200px] max-h-[200px] rounded-lg"
              >
                <source src={previewUrl} type={mediaFile.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
      <div className="mt-4">
        <label
          htmlFor="media-upload"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Choose Media File
        </label>
        <input
          id="media-upload"
          type="file"
          className="hidden"
          onChange={handleMediaUpload}
        />
      </div>
    </div>
  );
};

export default UploadMediaFile;
