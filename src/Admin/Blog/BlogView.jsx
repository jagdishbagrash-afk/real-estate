import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
// import Delete from "../component/Delete";
import Pagination from "../component/Pagination";
import DashboardLayout from "../component/AuthLayout";
import debounce from "lodash.debounce";
import NoDataPage from "../component/NoDataPage";
import Image from "../component/Image";
import DateFormate from "../component/DateFormate";
import Listing from "../Apis/Listing";
import { BiSearch } from "react-icons/bi";

const BlogView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);

  const fetchMarketLists = async (searchQuery = "", page = 1, limit = 15) => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.BlogGet(searchQuery, page, limit);
      setListing(response?.data?.data || []);
      setTotalPages(response?.data?.totalPages);
      setCurrentPage(response?.data?.currentPage);
      setTotalItems(response.data.totalUsers);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketLists(search, currentPage, 15);
  }, [currentPage]);

  const debouncedFetchMarketLists = useCallback(
    debounce((searchQuery) => fetchMarketLists(searchQuery, 1, 15), 300),
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
    fetchMarketLists(search, page, 15);
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Blog History</h2>

          <div className="relative w-full max-w-xs">
            <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" size={16} />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Search blog by name"
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          <Link
            to="/admin/blog-add"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transition-all"
          >
            Add Blog
          </Link>
        </div>

        {/* Blog Cards */}
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : listing.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listing.map((blog, index) => (
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden" key={index}>
                <Link to={`/blog-details/${blog._id}`}>
                  <Image
                    className="w-full h-[200px] object-cover"
                    alt={blog.title || "Blog Image"}
                    src={blog.Image }
                  />
                </Link>

                <div className="p-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-primary" />
                      <DateFormate data={blog?.createdAt} />
                    </div>
                    <Link to={`/blog-details/${blog._id}`} className="flex items-center gap-2">
                      <FaEye className="text-green-600" />
                      {blog?.views || 0}
                    </Link>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{blog.title || "Untitled Blog"}</h3>
                  <p className="text-gray-600 line-clamp-3 text-sm">{blog?.short_content || "No content available."}</p>

                  <div className="flex justify-between items-center mt-4 border-t pt-3">
                    <Link
                      to={`/admin/blog-update/${blog._id}`}
                      className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                    >
                      <i className="bx bx-edit" />
                      Edit
                    </Link>
                    {/* <Delete
                      step={4}
                      Id={blog?._id}
                      title="Delete Blog"
                      fetchMarketLists={fetchMarketLists}
                    /> */}
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

export default BlogView;
