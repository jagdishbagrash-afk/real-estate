import React, { useState } from "react";
import axios from "axios";

const IMGBB_API_KEY = process.env.REACT_APP_IMAGE; 

export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select an image file");

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setUrl(res.data.data.url);
      setLoading(false);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Image upload failed");
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded shadow">
      <h1 className="text-xl font-bold mb-2">Upload Image</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 rounded w-full mb-2"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {url && (
        <div className="mt-4 text-center">
          <p className="mb-2 font-medium">Uploaded Image URL:</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 break-all">
            {url}
          </a>
          <img src={url} alt="Uploaded" className="mt-2 max-w-full rounded shadow" />
        </div>
      )}
    </div>
  );
}
