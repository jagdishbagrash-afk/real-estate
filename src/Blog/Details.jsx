import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Listing from "../Admin/Apis/Listing";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogDetails();
  }, [slug]);

  const fetchBlogDetails = async () => {
    try {
      setLoading(true);

      const listing = new Listing();

      const response =
        await listing.BlogGetDetails(slug);

      console.log(
        "BLOG DETAILS:",
        response?.data
      );

      const data = response?.data?.data;

      setBlog(data || null);

      if (data) {
        setSEO(data);
      }

    } catch (error) {

      console.error(
        "BLOG DETAILS ERROR:",
        error?.response?.data || error
      );

      setBlog(null);

    } finally {
      setLoading(false);
    }
  };


  // ===========================================
  // SEO
  // ===========================================

  const setSEO = (data) => {

    document.title =
      data.meta_title ||
      data.title ||
      "Blog";


    const setMeta = (name, content) => {

      if (!content) return;

      let element =
        document.querySelector(
          `meta[name="${name}"]`
        );

      if (!element) {

        element =
          document.createElement("meta");

        element.setAttribute("name", name);

        document.head.appendChild(element);
      }

      element.setAttribute(
        "content",
        content
      );
    };


    setMeta(
      "description",
      data.meta_description ||
      data.short_content
    );


    setMeta(
      "keywords",
      data.meta_keyword || ""
    );
  };


  const formatDate = (date) => {

    if (!date) return "";

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );
  };


  if (loading) {

    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-lg text-gray-600">
          Loading blog...
        </p>
      </div>
    );
  }


  if (!blog) {

    return (
      <div className="min-h-[500px] flex flex-col items-center justify-center">

        <h1 className="text-3xl font-bold">
          Blog Not Found
        </h1>

        <Link
          to="/blogs"
          className="mt-4 text-blue-600"
        >
          Back to Blogs
        </Link>

      </div>
    );
  }


  return (
    <main className="bg-white">

      {/* ================= HEADER ================= */}

      <section className="bg-gray-900 py-14">

        <div className="max-w-4xl mx-auto px-4">

          <Link
            to="/blogs"
            className="text-blue-400 text-sm"
          >
            ← Back to Blogs
          </Link>


          <h1 className="text-3xl md:text-5xl text-white font-bold leading-tight mt-5">

            {blog.title}

          </h1>


          <p className="text-gray-400 mt-5">

            {formatDate(blog.createdAt)}

          </p>

        </div>

      </section>


      {/* ================= CONTENT ================= */}

      <section className="py-12">

        <div className="max-w-4xl mx-auto px-4">


          {/* IMAGE */}

          {(blog.image || blog.Image) && (

            <img
              src={
                blog.image ||
                blog.Image
              }
              alt={blog.title}
              className="w-full max-h-[550px] object-cover rounded-xl mb-10"
            />

          )}


          {/* SHORT DESCRIPTION */}

          {blog.short_content && (

            <p className="text-xl text-gray-600 leading-8 font-medium mb-8">

              {blog.short_content}

            </p>

          )}


          {/* QUILL HTML CONTENT */}

          <div
            className="
              blog-content
              text-gray-800
              text-base
              md:text-lg
              leading-8
            "
            dangerouslySetInnerHTML={{
              __html: blog.content || "",
            }}
          />


        </div>

      </section>

    </main>
  );
};

export default BlogDetails;