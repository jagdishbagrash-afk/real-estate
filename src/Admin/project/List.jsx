import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { MdAdd, MdEdit } from "react-icons/md";
import debounce from "lodash.debounce";

import DashboardLayout from "../component/AuthLayout";
import Pagination from "../component/Pagination";
import NoDataPage from "../component/NoDataPage";
import DeletePopup from "../component/DeletePopup";
import Listing from "../Apis/Listing";

import BlogImage from "../../img/Interior.png";
import Image from "../component/Image";

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);

  // Fetch data
  const fetchMarketLists = async (searchQuery = "", page = 1, limit = 15) => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.ProjectGet(searchQuery, page, limit);

      setListing(response?.data?.data || []);
      setTotalPages(response?.data?.totalPages || 1);
      setCurrentPage(response?.data?.currentPage || 1);
      setTotalItems(response?.data?.totalUsers || 0);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketLists(search, currentPage);
  }, [currentPage]);

  // Debounced search
  const debouncedFetchMarketLists = useCallback(
    debounce((query) => fetchMarketLists(query, 1), 300),
    []
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length === 0 || value.length >= 3) {
      debouncedFetchMarketLists(value);
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Project History</h2>

          <Link
            to="/admin/project-add"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <MdAdd />
            Add Project
          </Link>
        </div>

        {/* Search */}
        {/* <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search by title..."
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
        </div> */}

        {/* Blog List */}
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : listing.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {listing.map((blog, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-300"
              >
                <Link to={`/blog-details/${blog._id}`}>
                  <Image
                    className="w-full h-[200px] object-cover"
                    alt={blog.title || "Blog Image"}
                    src={blog?.Image?.[0] || BlogImage}
                  />
                </Link>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {blog.title || "Untitled"}
                  </h3>
                  <p className="text-gray-500 text-sm mb-1">
                    <strong>Client:</strong> {blog.client || "N/A"}
                  </p>

                  <p className="text-gray-500 text-sm mb-3">
                    <strong>Category:</strong> {blog.category || "N/A"}
                  </p>

                  <p className="text-gray-600 line-clamp-3 text-sm">
                    {blog?.short_content || blog?.content?.slice(0, 100) || "No content available."}
                  </p>

                  <div className="flex justify-between items-center mt-4 border-t pt-3">
                    <Link
                      to={`/admin/project-update/${blog._id}`}
                      className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      <MdEdit />
                    </Link>

                    <DeletePopup
                      item={blog}
                      title="Delete project"
                      step={4}
                      fetchTeamList={fetchMarketLists}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <NoDataPage />
          </div>
        )}

        {/* Pagination */}
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default List;
