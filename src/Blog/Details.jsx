import React, {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import Listing from "../Admin/Apis/Listing";

const BlogDetails = () => {

  // URL: /blog/my-blog
  // slug = my-blog
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  // ==========================================
  // FETCH BLOG
  // ==========================================

  useEffect(() => {

    if (slug) {
      fetchBlogDetails();
    }

  }, [slug]);


  const fetchBlogDetails = async () => {

    try {

      setLoading(true);
      setError("");

      console.log(
        "URL SLUG:",
        slug
      );

      const listing =
        new Listing();

      const response =
        await listing.BlogGetDetails(slug);

      console.log(
        "BLOG API RESPONSE:",
        response?.data
      );

      if (
        response?.data?.status === true &&
        response?.data?.data
      ) {

        const blogData =
          response.data.data;

        setBlog(blogData);

        updateSEO(blogData);

      } else {

        setBlog(null);

        setError(
          "Blog not found."
        );
      }

    } catch (error) {

      console.error(
        "BLOG DETAILS ERROR:",
        error
      );

      console.error(
        "SERVER RESPONSE:",
        error?.response?.data
      );

      setBlog(null);

      setError(
        error?.response?.data?.message ||
        "Unable to load blog."
      );

    } finally {

      setLoading(false);

    }
  };


  // ==========================================
  // SEO
  // ==========================================

  const updateSEO = (data) => {

    document.title =
      data?.meta_title ||
      data?.title ||
      "Blog";


    updateMetaTag(
      "description",
      data?.meta_description ||
      data?.short_content ||
      ""
    );


    updateMetaTag(
      "keywords",
      data?.meta_keyword || ""
    );

  };


  const updateMetaTag = (
    name,
    content
  ) => {

    if (!content) return;

    let meta =
      document.querySelector(
        `meta[name="${name}"]`
      );


    if (!meta) {

      meta =
        document.createElement(
          "meta"
        );

      meta.setAttribute(
        "name",
        name
      );

      document.head.appendChild(
        meta
      );

    }


    meta.setAttribute(
      "content",
      content
    );

  };


  // ==========================================
  // DATE
  // ==========================================

  const formatDate = (date) => {

    if (!date) return "";

    const parsedDate =
      new Date(date);

    if (
      Number.isNaN(
        parsedDate.getTime()
      )
    ) {
      return "";
    }

    return parsedDate.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );
  };


  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {

    return (
      <div
        className="
          min-h-[500px]
          flex
          items-center
          justify-center
        "
      >
        <p className="text-lg text-gray-600">
          Loading blog...
        </p>
      </div>
    );
  }


  // ==========================================
  // ERROR
  // ==========================================

  if (error || !blog) {

    return (
      <div
        className="
          min-h-[500px]
          flex
          flex-col
          items-center
          justify-center
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            text-gray-900
          "
        >
          Blog Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          {error}
        </p>

        <Link
          to="/blog"
          className="
            mt-5
            text-blue-600
            hover:underline
          "
        >
          ← Back to Blogs
        </Link>

      </div>
    );
  }


  // ==========================================
  // IMAGE
  // ==========================================

  const blogImage =
    blog?.image ||
    blog?.Image ||
    "";


  // ==========================================
  // UI
  // ==========================================

  return (

    <main className="bg-white">

      {/* ================= HEADER ================= */}

      <section
        className="
          bg-[#111827]
          py-16
          md:py-20
        "
      >

        <div
          className="
            max-w-5xl
            mx-auto
            px-4
            sm:px-6
          "
        >

          <Link
            to="/blog"
            className="
              text-gray-300
              hover:text-white
              transition
              text-sm
            "
          >
            ← Back to Blogs
          </Link>


          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              text-white
              font-bold
              leading-tight
              mt-6
            "
          >
            {blog.title}
          </h1>


          {blog.createdAt && (

            <p
              className="
                text-gray-400
                mt-5
                text-sm
              "
            >
              {formatDate(
                blog.createdAt
              )}
            </p>

          )}

        </div>

      </section>


      {/* ================= BLOG CONTENT ================= */}

      <section
        className="
          py-10
          md:py-16
        "
      >

        <div
          className="
            max-w-5xl
            mx-auto
            px-4
            sm:px-6
          "
        >


          {/* BLOG IMAGE */}

          {blogImage && (

            <div className="mb-10">

              <img
                src={blogImage}
                alt={
                  blog.title ||
                  "Blog"
                }
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="
                  w-full
                  max-h-[600px]
                  object-cover
                  rounded-xl
                "
                onError={(e) => {

                  console.log(
                    "IMAGE LOAD ERROR:",
                    blogImage
                  );

                  e.currentTarget.style.display =
                    "none";

                }}
              />

            </div>

          )}


          {/* SHORT CONTENT */}

          {blog.short_content && (

            <p
              className="
                text-lg
                md:text-xl
                text-gray-600
                leading-8
                font-medium
                mb-10
              "
            >
              {blog.short_content}
            </p>

          )}


          {/* FULL CONTENT */}

          {blog.content && (

            <div
              className="
                blog-content
                text-gray-800
                text-base
                md:text-lg
                leading-8
              "
              dangerouslySetInnerHTML={{
                __html:
                  blog.content,
              }}
            />

          )}

        </div>

      </section>

    </main>
  );
};

export default BlogDetails;