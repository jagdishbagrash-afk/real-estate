import { useState } from "react";
import Listing from "../Apis/Listing";
import toast from "react-hot-toast";
import { MdAdd, MdEdit } from "react-icons/md";
function AddJob({ item, fecthJobList }) {
    const [preview, setPreview] = useState(item?.imageUrl || "");
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: item?.title || "",
        location: item?.location || "",
        employment_type: item?.employment_type || "",
        experience: item?.experience || "",
        content: item?.content || "",
        Skills: item?.Skills || "",
        _id: item?._id
    });

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, file }));
            setPreview(URL.createObjectURL(file)); // show preview
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const main = new Listing();
            const data = new FormData();
            data.append("title", formData.title);
            data.append("location", formData.location);
            data.append("employment_type", formData.employment_type);
            data.append("experience", formData.experience);
            data.append("content", formData.content);
            data.append("Skills", formData.Skills);
            if (formData.file) {
                data.append("file", formData.file); // append file
            }
            const response = await main.AddJob(data);
            toast.success(response.data.message);
            fecthJobList();
            setShowModal(false);
            setFormData({
                title: "",
                location: "",
                employment_type: "",
                experience: "",
                content: "",
                Skills: "",
                qualifications: "",
                offers: ""
            });
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="px-2 py-4 text-center">
                <button
                    onClick={() => setShowModal(true)}
                    className="px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center gap-1"
                >
                    {item?._id ? (
                        <MdEdit />
                    ) : (
                        <>
                          <MdAdd/> Add Job
                        </>
                    )}
                </button>

            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-semibold mb-4">{item?._id ? "Edit Job" : "Add Job"}</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-gray-700">Job Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Enter job title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Location *</label>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Enter job location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Job Type</label>
                                    <input
                                        type="text"
                                        name="employment_type"
                                        placeholder="e.g. Full-time, Part-time"
                                        value={formData.employment_type}
                                        onChange={handleChange}
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Experience</label>
                                    <input
                                        type="text"
                                        name="experience"
                                        placeholder="e.g. 2+ years"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">content the Job</label>
                                    <textarea
                                        type="text"
                                        name="content"
                                        value={formData.content}
                                        onChange={(e) => {
                                            if (e.target.value.length > 300) {
                                                return;
                                            }
                                            setFormData((prev) => ({
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
                                            {formData.content ? (
                                                <span>{formData.content.length}/300 characters</span>
                                            ) : (
                                                <span>0/300 characters</span>
                                            )}
                                        </label>
                                        <label className="block text-sm mb-2 font-medium text-end text-gray-700 mt-3">
                                            Minimum 300 words.
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Skills</label>
                                    <textarea
                                        name="Skills"
                                        placeholder="List Skills"
                                        value={formData.Skills}
                                        onChange={handleChange}
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                        rows={3}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">content Image</label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleUpload}
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />
                                {preview && (
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="h-32 w-32 object-cover rounded-md mt-2"
                                    />
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                {loading ? "Processing..." : item?._id ? "Update Job" : "Add Job"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddJob;
