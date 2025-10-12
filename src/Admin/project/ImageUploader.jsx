import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const ImageUploader = ({ images, setImages, setInstructorDetails }) => {
    const [dragIndex, setDragIndex] = useState(null);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setImages([...images, ...selectedFiles]);
        setInstructorDetails((prev) => ({
            ...prev,
            images: selectedFiles,
        }));
    };

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);

        // ✅ instructorDetails से भी remove करें
        setInstructorDetails((prev) => ({
            ...prev,
            images: newImages,
        }));
    };

    const handleDragStart = (index) => {
        setDragIndex(index);
    };

    const handleDrop = (index) => {
        const updatedImages = [...images];
        const [draggedImage] = updatedImages.splice(dragIndex, 1);
        updatedImages.splice(index, 0, draggedImage);
        setImages(updatedImages);
        setDragIndex(null);

        // Sync with instructorDetails
        setInstructorDetails((prev) => ({
            ...prev,
            images: updatedImages,
        }));
    };


    const makeCoverImage = (index) => {
        const newImages = [...images];
        const [cover] = newImages.splice(index, 1);
        newImages.unshift(cover);
        setImages(newImages);
    };

    return (
        <>
            <div className="mb-4">

                <label
                    htmlFor="image-upload"
                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-md cursor-pointer bg-white hover:bg-white"
                >
                    <MdAdd size={48} className="text-gray-400" />
                    <p className="text-sm text-gray-500 mt-2">Click or drag files to upload</p>
                    <input
                        id="image-upload"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                    />
                </label>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(index)}
                        className="relative group border rounded-md overflow-hidden shadow"
                    >
                        <img
                            src={URL.createObjectURL(image)}
                            alt={`Upload ${index}`}
                            className="w-full h-40 object-cover"
                        />

                        {index === 0 && (
                            <span className="absolute top-2 left-2 text-xs bg-white text-gray-700 px-2 py-1 rounded">
                                Cover
                            </span>
                        )}

                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                            {index !== 0 && (
                                <button
                                    type="button"
                                    onClick={() => makeCoverImage(index)}
                                    className="bg-yellow-500 text-white px-2 py-1 text-xs rounded hover:bg-yellow-600"
                                >
                                    Make Cover
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ImageUploader;
