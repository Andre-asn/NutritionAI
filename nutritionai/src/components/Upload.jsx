import React, { useState } from "react";
import axios from "axios";
import UploadResult from "./UploadResult";

function Upload() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result.split(",")[1];

        setLoading(true);
        setResult(null);

        try {
          const response = await axios.post("https://nutritionai-backend.onrender.com/sendImage", {
            image: base64Image,
            fileName: file.name,
            mimeType: file.type
          });

          setResult(response.data);
        } catch (error) {
          console.error("Upload failed:", error);
          alert("Failed to process the image.");
        }

        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Upload Image Page</h1>

      <div className="flex flex-col items-center space-y-4">
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            className="w-48 h-48 object-cover rounded shadow-md border border-gray-300"
          />
        )}

        {loading && (
          <button disabled className="bg-blue-600 text-white px-6 py-2 rounded opacity-60">
            One Moment...
          </button>
        )}
      </div>

      {result && <UploadResult imageUrl={imageUrl} result={result} />}
    </div>
  );
}

export default Upload;
