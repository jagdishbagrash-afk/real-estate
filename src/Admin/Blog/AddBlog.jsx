import React, { useState, useEffect } from "react";
import 'react-quill-new/dist/quill.snow.css';
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuillEditor from "../component/ReactQuillEditor";
import Listing from "../Apis/Listing";
import SideBarAdmin from "../common/SideBarAdmin";

const AddBlog = () => {
    const { Id } = useParams();
    console.log("Id", Id)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [instructorDetails, setInstructorDetails] = useState({
        Image: "",
        content: "",
        title: "",
        short_content: "",
        meta_title: "",
        meta_description: "",
        meta_keyword: "",
    });

    const fetchInstructorData = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.BlogGetId(Id);
            if (response?.data?.data) {
                setInstructorDetails(response.data.data);
            } else {
                toast.error("Failed to fetch blog details.");
            }
        } catch (error) {
            console.error("Error fetching blog data:", error);
            toast.error("Unable to load blog data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (Id) fetchInstructorData();
    }, [Id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInstructorDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleBioChange = (value) => {
        setInstructorDetails((prev) => ({
            ...prev,
            content: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        const main = new Listing();

        try {
            let response;
            if (Id) {
                response = await main.BlogUpdate(instructorDetails);
            } else {
                response = await main.BlogAdd(instructorDetails);
            }

            if (response?.data) {
                toast.success(response.data.message || "Operation successful");
                if (!Id) {
                    setInstructorDetails({
                        Image: "",
                        content: "",
                        title: "",
                        short_content: "",
                        meta_title: "",
                        meta_description: "",
                        meta_keyword: "",
                    });
                }
                navigate("/admin/blog-list");
            } else {
                toast.error(response?.data?.message || "Unexpected error occurred.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(error?.response?.data?.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:flex flex-wrap bg-[#F5F6FB]">
            <SideBarAdmin />
            <div className="w-full lg:w-[calc(100%-304px)] ">
                <div className="px-4 py-2 lg:px-10 lg:py-2.5  ">

                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        {Id ? "Edit Blog" : "Add Blog"}
                    </h2>

                    <hr className="mb-6" />

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Meta Title
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Meta Title</label>
                        <input
                            type="text"
                            name="meta_title"
                            value={instructorDetails.meta_title}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 p-2 rounded-md w-full"

                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Meta Description</label>
                        <input
                            type="text"
                            name="meta_description"
                            value={instructorDetails.meta_description}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded-md w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Meta Keyword</label>
                        <input
                            type="text"
                            name="meta_keyword"
                            value={instructorDetails.meta_keyword}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 p-2 rounded-md w-full"

                        />
                    </div> */}

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Blog Image</label>
                            <input
                                type="file"
                                name="imageUrl"
                                placeholder="Image URL"
                                value={instructorDetails.imageUrl}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-2 rounded-md w-full"
                            />
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Blog Title</label>
                            <input
                                type="text"
                                name="title"
                                value={instructorDetails.title}

                                onChange={(e) => {
                                    if (e.target.value.length > 100) {
                                        return;
                                    }
                                    setInstructorDetails((prev) => ({
                                        ...prev,
                                        [e.target.name]: e.target.value,
                                    }));
                                }}
                                required
                                className="border border-gray-300 p-2 rounded-md w-full"

                            />

                            <div className="flex flex-wrap justify-between">
                                <label className="block text-sm mb-2 font-medium text-start text-gray-700 mt-3">
                                    {instructorDetails.title ? (
                                        <span>{instructorDetails.title.length}/100 characters</span>
                                    ) : (
                                        <span>0/100 characters</span>
                                    )}
                                </label>
                                <label className="block text-sm mb-2 font-medium text-end text-gray-700 mt-3">
                                    Minimum 100 words.
                                </label>
                            </div>
                        </div>

                        {/* Short Content */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Blog Content</label>
                            <textarea
                                type="text"
                                name="short_content"
                                value={instructorDetails.short_content}
                                onChange={(e) => {
                                    if (e.target.value.length > 300) {
                                        return;
                                    }
                                    setInstructorDetails((prev) => ({
                                        ...prev,
                                        [e.target.name]: e.target.value,
                                    }));
                                }}
                                required
                                rows={6}
                                className="border border-gray-300 p-2 rounded-md w-full"

                            />

                            <div className="flex flex-wrap justify-between">
                                <label className="block text-sm mb-2 font-medium text-start text-gray-700 mt-3">
                                    {instructorDetails.short_content ? (
                                        <span>{instructorDetails.short_content.length}/300 characters</span>
                                    ) : (
                                        <span>0/300 characters</span>
                                    )}
                                </label>
                                <label className="block text-sm mb-2 font-medium text-end text-gray-700 mt-3">
                                    Minimum 300 words.
                                </label>
                            </div>
                        </div>

                        {/* Rich Text Editor */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Blog Content</label>
                            <ReactQuillEditor
                                desc={instructorDetails.content}
                                handleBioChange={handleBioChange}
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center px-6 py-2 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-red-600 transition-all disabled:opacity-50"
                            >
                                {loading ? "Saving..." : Id ? "Update Blog" : "Add Blog"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;
