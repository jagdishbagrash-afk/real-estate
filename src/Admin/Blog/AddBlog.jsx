import React, { useEffect, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuillEditor from "../component/ReactQuillEditor";
import Listing from "../Apis/Listing";
import SideBarAdmin from "../common/SideBarAdmin";

const AddBlog = () => {
    const { Id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [blog, setBlog] = useState({
        title: "",
        short_content: "",
        content: "",
        meta_title: "",
        meta_description: "",
        meta_keyword: "",
        Image: "",
    });

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    // =====================================================
    // FETCH BLOG FOR EDIT
    // =====================================================

    useEffect(() => {
        if (Id) {
            fetchBlog();
        }
    }, [Id]);

    const fetchBlog = async () => {
        setLoading(true);

        try {
            const listing = new Listing();

            const response = await listing.BlogGetId(Id);

            console.log("BLOG GET RESPONSE:", response);

            const data = response?.data?.data;

            if (!data) {
                toast.error("Blog details not found.");
                return;
            }

            const image =
                data.Image ||
                data.image ||
                data.imageUrl ||
                "";

            setBlog({
                title: data.title || "",
                short_content: data.short_content || "",
                content: data.content || "",
                meta_title: data.meta_title || "",
                meta_description: data.meta_description || "",
                meta_keyword: data.meta_keyword || "",
                Image: image,
            });

            if (image) {
                setImagePreview(image);
            }
        } catch (error) {
            console.error("BLOG GET ERROR:", error);

            toast.error(
                error?.response?.data?.message ||
                "Unable to load blog."
            );
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // INPUT CHANGE
    // =====================================================

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setBlog((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // =====================================================
    // IMAGE CHANGE
    // =====================================================

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) {
            return;
        }

        console.log("SELECTED IMAGE:", file);

        if (!file.type.startsWith("image/")) {
            toast.error("Please select a valid image.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error("Image size should be less than 5MB.");
            return;
        }

        setImageFile(file);

        const previewUrl = URL.createObjectURL(file);

        setImagePreview(previewUrl);
    };

    // =====================================================
    // QUILL CHANGE
    // =====================================================

    const handleBioChange = (value) => {
        setBlog((prev) => ({
            ...prev,
            content: value,
        }));
    };

    // =====================================================
    // SUBMIT
    // =====================================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) {
            return;
        }

        // Frontend validation
        if (!blog.title.trim()) {
            toast.error("Blog title is required.");
            return;
        }

        if (!blog.short_content.trim()) {
            toast.error("Short content is required.");
            return;
        }

        if (!blog.content.trim()) {
            toast.error("Blog content is required.");
            return;
        }

        setLoading(true);

        try {
            const listing = new Listing();

            const formData = new FormData();

            // =============================================
            // BLOG DATA
            // =============================================

            formData.append("title", blog.title.trim());

            formData.append(
                "short_content",
                blog.short_content.trim()
            );

            formData.append(
                "content",
                blog.content
            );

            formData.append(
                "meta_title",
                blog.meta_title?.trim() || ""
            );

            formData.append(
                "meta_description",
                blog.meta_description?.trim() || ""
            );

            formData.append(
                "meta_keyword",
                blog.meta_keyword?.trim() || ""
            );

            // =============================================
            // ID - ONLY FOR UPDATE
            // =============================================

            if (Id) {
                formData.append("_id", Id);
            }

            // =============================================
            // IMAGE
            // =============================================

            if (imageFile) {
                formData.append("image", imageFile);
            }

            // =============================================
            // DEBUG
            // =============================================

            console.log("========== BLOG REQUEST ==========");

            for (const [key, value] of formData.entries()) {
                if (value instanceof File) {
                    console.log(
                        key,
                        "FILE:",
                        value.name,
                        value.type,
                        value.size
                    );
                } else {
                    console.log(key, value);
                }
            }

            console.log("==================================");

            // =============================================
            // API
            // =============================================

            let response;

            if (Id) {
                response = await listing.BlogUpdate(formData);
            } else {
                response = await listing.BlogAdd(formData);
            }

            console.log("BLOG SAVE RESPONSE:", response);

            if (response?.data?.status === false) {
                toast.error(
                    response?.data?.message ||
                    "Unable to save blog."
                );
                return;
            }

            toast.success(
                response?.data?.message ||
                (Id
                    ? "Blog updated successfully."
                    : "Blog added successfully.")
            );

            navigate("/admin/blog-list");
        } catch (error) {
            console.error("BLOG SAVE ERROR:", error);

            console.error(
                "SERVER ERROR:",
                error?.response?.data
            );

            toast.error(
                error?.response?.data?.message ||
                "Something went wrong while saving blog."
            );
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // CLEAN IMAGE URL
    // =====================================================

    useEffect(() => {
        return () => {
            if (
                imagePreview &&
                imagePreview.startsWith("blob:")
            ) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);

    // =====================================================
    // UI
    // =====================================================

    return (
        <div className="md:flex flex-wrap bg-[#F5F6FB]">

            <SideBarAdmin />

            <div className="w-full lg:w-[calc(100%-304px)]">

                <div className="px-4 py-2 lg:px-10 lg:py-2.5">

                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        {Id ? "Edit Blog" : "Add Blog"}
                    </h2>

                    <hr className="mb-6" />

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* IMAGE */}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Blog Image
                            </label>

                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="border border-gray-300 p-2 rounded-md w-full bg-white"
                            />

                            {imagePreview && (
                                <div className="mt-4">
                                    <img
                                        src={imagePreview}
                                        alt="Blog Preview"
                                        className="w-full max-w-xl h-64 object-cover rounded-md border"
                                    />
                                </div>
                            )}
                        </div>

                        {/* TITLE */}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Blog Title
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={blog.title}
                                onChange={(e) => {
                                    if (
                                        e.target.value.length <= 100
                                    ) {
                                        handleInputChange(e);
                                    }
                                }}
                                required
                                className="border border-gray-300 p-2 rounded-md w-full"
                            />

                            <p className="text-sm text-gray-600 mt-2">
                                {blog.title.length}/100 characters
                            </p>
                        </div>

                        {/* SHORT CONTENT */}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Short Content
                            </label>

                            <textarea
                                name="short_content"
                                value={blog.short_content}
                                onChange={(e) => {
                                    if (
                                        e.target.value.length <= 300
                                    ) {
                                        handleInputChange(e);
                                    }
                                }}
                                required
                                rows={6}
                                className="border border-gray-300 p-2 rounded-md w-full"
                            />

                            <p className="text-sm text-gray-600 mt-2">
                                {blog.short_content.length}/300 characters
                            </p>
                        </div>

                        {/* FULL CONTENT */}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Blog Content
                            </label>

                            <ReactQuillEditor
                                desc={blog.content}
                                handleBioChange={handleBioChange}
                            />
                        </div>

                        {/* META TITLE */}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Meta Title
                            </label>

                            <input
                                type="text"
                                name="meta_title"
                                value={blog.meta_title}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-2 rounded-md w-full"
                            />
                        </div>

                        {/* META DESCRIPTION */}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Meta Description
                            </label>

                            <textarea
                                name="meta_description"
                                value={blog.meta_description}
                                onChange={handleInputChange}
                                rows={4}
                                className="border border-gray-300 p-2 rounded-md w-full"
                            />
                        </div>

                        {/* META KEYWORD */}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Meta Keywords
                            </label>

                            <input
                                type="text"
                                name="meta_keyword"
                                value={blog.meta_keyword}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-2 rounded-md w-full"
                            />
                        </div>

                        {/* SUBMIT */}

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center px-6 py-2 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-red-600 transition-all disabled:opacity-50"
                            >
                                {loading
                                    ? "Saving..."
                                    : Id
                                        ? "Update Blog"
                                        : "Add Blog"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;