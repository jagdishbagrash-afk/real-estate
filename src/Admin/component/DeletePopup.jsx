import React, { useState } from "react";
import Listing from "../Apis/Listing";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const DeletePopup = ({ item, fetchTeamList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    // Show popup
    const openModal = (member) => {
        setSelectedMember(member);
        setIsOpen(true);
    };

    // Close popup
    const closeModal = () => {
        setIsOpen(false);
        setSelectedMember(null);
    };
    const [loading, setLoading] = useState(false);

    // Confirm delete
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const main = new Listing();
            const response = await main.deleteteam({
                _id: item._id,
            });
            console.log("Success:", response);
            toast.success(response.data.message);
            setIsOpen(false);
            fetchTeamList();
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            {/* Example Delete Trigger Button (simulate member) */}
            <button
                onClick={() => openModal({ _id: "123", name: "John Doe" })}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
                <MdDelete />
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold mb-4 text-center">Confirm Deletion</h2>
                        <p className="text-gray-700 text-center mb-6">
                            Are you sure you want to delete{" "}
                            <span className="font-bold">{selectedMember?.name}</span>?
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                            >
                                {loading ? "Processing.. " : "Yes, Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeletePopup;
    