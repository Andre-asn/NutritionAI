import React, { useState } from "react";
import axios from "axios";
import UploadResult from "./UploadResult";

function Upload() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "https://nutritionai-backend.onrender.com/sendImage",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to process the image.");
    }

    setLoading(false);
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

        <button
          onClick={handleUpload}
          disabled={!image || loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
        >
          {loading ? "One Moment..." : "Analyze Image"}
        </button>
      </div>

      {result && <UploadResult imageUrl={imageUrl} result={result} />}
    </div>
  );
}

export default Upload;
