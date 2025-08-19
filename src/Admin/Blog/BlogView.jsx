import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
// import Delete from "../component/Delete";
import Pagination from "../component/Pagination";
import DashboardLayout from "../component/AuthLayout";
import debounce from "lodash.debounce";
import NoDataPage from "../component/NoDataPage";
import Image from "../component/Image";
import Listing from "../Apis/Listing";
import BlogImage from "../../img/Interior.png"
import DeletePopup from "../component/DeletePopup";
import { MdAdd, MdEdit } from "react-icons/md";

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
      <div className="bg-white rounded-lg  p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Blog History</h2>
          <Link
            to="/admin/blog-add"
            className="px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"

          >
            <MdAdd />
          </Link>
        </div>

        {/* Blog Cards */}
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : listing.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {listing.map((blog, index) => (
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden" key={index}>
                <Link to={`/blog-details/${blog._id}`}>
                  <Image
                    className="w-full object-cover"
                    alt={blog.title || "Blog Image"}
                    src={blog.Image || BlogImage}
                  />
                </Link>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{blog.title || "Untitled Blog"}</h3>
                  <p className="text-gray-600 line-clamp-3 text-sm">{blog?.short_content || "No content available."}</p>

                  <div className="flex justify-between items-center mt-4 border-t pt-3">
                    <Link
                      to={`/admin/blog-update/${blog._id}`}
                      className="px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"

                    >
                      <MdEdit />
                    </Link>

                    <DeletePopup
                      step={3}
                      item={blog}
                      title="Delete Blog"
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

export default BlogView;
