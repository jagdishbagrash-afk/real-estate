import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Listing from "../Admin/Apis/Listing";
import Header from '../component/Header';
import Footer from "../component/Footer";
import Banner from "../component/Banner";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);

      const listing = new Listing();

      const response = await listing.BlogGet("", page, 9);

      console.log("BLOG RESPONSE:", response?.data);

      setBlogs(response?.data?.data || []);

      setCurrentPage(
        response?.data?.currentPage || 1
      );

      setTotalPages(
        response?.data?.totalPages || 1
      );
    } catch (error) {
      console.error(
        "BLOG GET ERROR:",
        error?.response?.data || error
      );

      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-gray-600 text-lg">
          Loading blogs...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* ================= HERO ================= */}
      <Banner image={"https://cadmaxpro-buket.s3.ap-south-1.amazonaws.com/assets/home/blog_bg.png"} title={"Blogs"} overlay={true} />

      {/* ================= BLOG LIST ================= */}

      <section className="py-14">

        <div className="max-w-7xl mx-auto px-4">

          {blogs.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {blogs.map((blog) => (

                <article
                  key={blog._id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-lg transition duration-300"
                >

                  {/* IMAGE */}

                  <Link to={`/blog/${blog.slug}`}>

                    <img
                      src={
                        blog.image ||
                        blog.Image ||
                        "/work/Interior.png"
                      }
                      alt={blog.title}
                      className="w-full h-[230px] object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/work/Interior.png";
                      }}
                    />

                  </Link>


                  {/* CONTENT */}

                  <div className="p-6">

                    <p className="text-sm text-gray-500 mb-3">
                      {formatDate(blog.createdAt)}
                    </p>


                    <Link to={`/blog/${blog.slug}`}>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition line-clamp-2">
                        {blog.title}
                      </h2>

                    </Link>


                    <p className="text-gray-600 text-sm leading-6 line-clamp-3">
                      {blog.short_content}
                    </p>


                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-block mt-5 text-blue-600 font-semibold hover:text-blue-800"
                    >
                      Read More →
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="text-center py-20">

              <h2 className="text-2xl font-semibold text-gray-800">
                No blogs found
              </h2>

            </div>

          )}


          {/* ================= PAGINATION ================= */}

          {totalPages > 1 && (

            <div className="flex justify-center items-center gap-3 mt-12">

              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((prev) => prev - 1)
                }
                className="px-5 py-2 border rounded-lg disabled:opacity-40"
              >
                Previous
              </button>


              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>


              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => prev + 1)
                }
                className="px-5 py-2 border rounded-lg disabled:opacity-40"
              >
                Next
              </button>

            </div>

          )}

        </div>

      </section>
      <Footer />
    </div>

  );
};

export default Blog;