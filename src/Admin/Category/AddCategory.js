import { useState, useEffect } from "react";
import Listing from "../Apis/Listing";
import toast from "react-hot-toast";
import { MdAdd, MdEdit } from "react-icons/md";

function AddCategory({ item, fetchCategories, categories }) {
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [allCategories, setAllCategories] = useState([]);
    const [parentCategories, setParentCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        description: "",
        parent_id: "",
        sub_parent_id: "", // For level 3 categories
        _id: ""
    });

    // Initialize form based on item
    useEffect(() => {
        if (item) {
            // Find the category hierarchy
            const findCategoryHierarchy = (catId) => {
                const category = allCategories.find(c => c.id === catId);
                if (category) {
                    if (category.level === 3) {
                        // Find parent (level 2)
                        const parentCat = allCategories.find(c => c.id === category.parent_id);
                        return {
                            title: item.title || "",
                            image: item.image || "",
                            description: item.description || "",
                            parent_id: parentCat?.parent_id || "", // Level 1 parent
                            sub_parent_id: category.parent_id || "", // Level 2 parent
                            _id: item.id || ""
                        };
                    } else if (category.level === 2) {
                        return {
                            title: item.title || "",
                            image: item.image || "",
                            description: item.description || "",
                            parent_id: category.parent_id || "",
                            sub_parent_id: "",
                            _id: item.id || ""
                        };
                    }
                }
                return {
                    title: item.title || "",
                    image: item.image || "",
                    description: item.description || "",
                    parent_id: item.parent_id || "",
                    sub_parent_id: "",
                    _id: item.id || ""
                };
            };

            const formDataFromItem = findCategoryHierarchy(item.id);
            setFormData(formDataFromItem);
            
            // Set preview image
            if (item.image) {
                if (item.image.startsWith('http')) {
                    setPreview(item.image);
                } else {
                    setPreview(`http://localhost:5000${item.image}`);
                }
            } else {
                setPreview("");
            }
        } else {
            resetForm();
        }
    }, [item, allCategories]);

    // Fetch all categories for dropdowns
    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const api = new Listing();
                const response = await api.CategoryGet();
                const categoriesList = response?.data || [];
                setAllCategories(categoriesList);
                
                // Get parent categories (level 1)
                const parents = categoriesList.filter(cat => cat.level === 1);
                setParentCategories(parents);
                
                // If editing, load subcategories based on parent
                if (item && formData.parent_id) {
                    const subs = categoriesList.filter(cat => 
                        cat.parent_id === parseInt(formData.parent_id)
                    );
                    setSubCategories(subs);
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        
        if (showModal) {
            fetchAllCategories();
        }
    }, [showModal, item, formData.parent_id]);

    // Handle parent category change
    const handleParentChange = async (parentId) => {
        if (!parentId) {
            setFormData(prev => ({ 
                ...prev, 
                parent_id: "",
                sub_parent_id: "" 
            }));
            setSubCategories([]);
            return;
        }

        // Fetch subcategories for selected parent
        try {
            const api = new Listing();
            const response = await api.getSubcategories(parentId);
            setSubCategories(response?.data || []);
        } catch (error) {
            console.error("Error fetching subcategories:", error);
            setSubCategories([]);
        }
        
        setFormData(prev => ({ 
            ...prev, 
            parent_id: parentId,
            sub_parent_id: "" 
        }));
    };

    // Handle sub-parent category change
    const handleSubParentChange = (subParentId) => {
        setFormData(prev => ({ 
            ...prev, 
            sub_parent_id: subParentId 
        }));
    };

    // Calculate level based on selections
    const calculateLevel = () => {
        if (formData.sub_parent_id) {
            return 3; // Child category
        } else if (formData.parent_id) {
            return 2; // Sub category
        } else {
            return 1; // Main category
        }
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, file }));
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const api = new Listing();
            const data = new FormData();
            
            data.append("title", formData.title);
            data.append("description", formData.description);
            
            // Determine level and parent based on selections
            const level = calculateLevel();
            data.append("level", level.toString());
            
            if (level === 2) {
                // Sub category: parent_id is selected parent category
                data.append("parent_id", formData.parent_id);
            } else if (level === 3) {
                // Child category: parent_id is selected sub-parent category
                data.append("parent_id", formData.sub_parent_id);
            }
            // For level 1, no parent_id needed
            
            if (formData.file) {
                data.append("image", formData.file);
            } else if (formData.image && !formData.file) {
                data.append("image", formData.image);
            }
            
            let response;
            if (formData._id) {
                response = await api.UpdateCategory(formData._id, data);
                toast.success("Category updated successfully!");
            } else {
                response = await api.AddCategory(data);
                toast.success("Category added successfully!");
            }
            
            fetchCategories();
            setShowModal(false);
            resetForm();
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            image: "",
            description: "",
            parent_id: "",
            sub_parent_id: "",
            _id: ""
        });
        setPreview("");
        setParentCategories([]);
        setSubCategories([]);
    };

    return (
        <>
            <div className="px-2 py-4 text-center">
                <button
                    onClick={() => setShowModal(true)}
                    className={`px-4 py-2 rounded-md hover:transition flex items-center gap-2 ${
                        formData._id
                            ? "bg-yellow-500 text-white hover:bg-yellow-600"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                    {formData._id ? (
                        <>
                            <MdEdit className="text-lg" /> Edit
                        </>
                    ) : (
                        <>
                            <MdAdd className="text-lg" /> Add Category
                        </>
                    )}
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
                        <button
                            onClick={() => {
                                setShowModal(false);
                                resetForm();
                            }}
                            className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-semibold mb-4">
                            {formData._id ? "Edit Category" : "Add Category"}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-gray-700">Category Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Enter category title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                    />
                                </div>

                                {/* Parent Category Dropdown (always shown) */}
                                <div>
                                    <label className="block text-gray-700">
                                        Parent Category
                                    </label>
                                    <select
                                        name="parent_id"
                                        value={formData.parent_id}
                                        onChange={(e) => handleParentChange(e.target.value)}
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                    >
                                        <option value="">Select Parent Category (Optional)</option>
                                        <option value="">-- Create Main Category --</option>
                                        {parentCategories.map(category => (
                                            <option key={category.id} value={category.id}>
                                                {category.title}
                                            </option>
                                        ))}
                                    </select>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Leave empty to create a main category
                                    </p>
                                </div>

                                {/* Sub-Category Dropdown (only shown if parent is selected) */}
                                {formData.parent_id && (
                                    <div>
                                        <label className="block text-gray-700">
                                            Sub Category
                                        </label>
                                        <select
                                            name="sub_parent_id"
                                            value={formData.sub_parent_id}
                                            onChange={(e) => handleSubParentChange(e.target.value)}
                                            className="border border-gray-300 p-2 rounded-md w-full"
                                        >
                                            <option value="">Select Sub Category (Optional)</option>
                                            <option value="">-- Create Sub Category --</option>
                                            {subCategories.map(category => (
                                                <option key={category.id} value={category.id}>
                                                    {category.title}
                                                </option>
                                            ))}
                                        </select>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Leave empty to create a sub-category under {parentCategories.find(p => p.id === parseInt(formData.parent_id))?.title}
                                        </p>
                                    </div>
                                )}

                                {/* Category Level Indicator */}
                                <div className="md:col-span-2">
                                    <div className="bg-blue-50 p-3 rounded-md">
                                        <p className="text-sm text-blue-800 font-medium">
                                            Category Type:{" "}
                                            <span className="font-bold">
                                                {formData.sub_parent_id ? 
                                                    "Child Category" : 
                                                    formData.parent_id ? 
                                                    "Sub Category" : 
                                                    "Main Category"}
                                            </span>
                                        </p>
                                        <p className="text-xs text-blue-600 mt-1">
                                            {formData.sub_parent_id ? 
                                                `Will be created under: ${subCategories.find(s => s.id === parseInt(formData.sub_parent_id))?.title}` : 
                                                formData.parent_id ? 
                                                `Will be created under: ${parentCategories.find(p => p.id === parseInt(formData.parent_id))?.title}` : 
                                                "Will be created as a top-level category"}
                                        </p>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-gray-700">Description</label>
                                    <textarea
                                        name="description"
                                        placeholder="Enter category description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                        rows="3"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Category Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleUpload}
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />
                                {preview && (
                                    <div className="mt-2">
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="h-32 w-32 object-cover rounded-md"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowModal(false);
                                        resetForm();
                                    }}
                                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
                                >
                                    {loading 
                                        ? "Processing..." 
                                        : formData._id 
                                            ? "Update Category" 
                                            : "Add Category"
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddCategory;