import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Listing from "../Apis/Listing";

const Profileupdate = () => {
  const [listing, setListing] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [Regs, setRegs] = useState({
    name: "",
    email: "",
    phone: "",
    profileImage: "",
    _id: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setRegs((prevState) => ({ ...prevState, [name]: value }));
  };

  // File Upload Handler (Preview only for now, you can integrate S3/Cloudinary)
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImageUrl(url);
      setRegs((prev) => ({ ...prev, profileImage: file }));
    }
  };

  // Submit Form
  async function handleForms(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const main = new Listing();
    try {
      let response;
      if (Regs._id) {
        response = await main.ProfileUpdate(Regs);
      }
      if (response?.data) {
        toast.success(response.data.message);
        fetchData();
      } else {
        toast.error(response?.data?.message || "Unexpected error occurred.");
      }
    } catch (error) {
      console.error("error", error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  // Fetch Profile Data
  const fetchData = async (signal) => {
    try {
      const main = new Listing();
      const response = await main.profileVerify({ signal });
      setListing(response?.data?.data)
      console.log("response", response)
    } catch (error) {
      localStorage && localStorage.removeItem("AdminToken");
      toast.error("Please log in first.");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setRegs((prevState) => ({
      ...prevState,
      name: listing?.name || "",
      email: listing?.email || "",
      phone: listing?.phone || "",
      profileImage: listing?.profileImage || "",
      _id: listing?._id || "",
    }));
    setUploadedImageUrl(listing?.profileImage || "");
  }, [listing]);

  return (
    <div className="w-full ">
      {/* Heading */}
      <form onSubmit={handleForms} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={Regs?.name}
            onChange={handleInputs}
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={Regs?.email}
            onChange={handleInputs}
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            value={Regs?.phone}
            onChange={handleInputs}
            name="phone"
            pattern="[0-9]{10}"
            maxLength="10"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Enter 10 digit phone number"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className=" bg-blue-600 text-white p-2.5 rounded-lg font-medium 
                       hover:bg-blue-700 transition duration-200 
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profileupdate;
