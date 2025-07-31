import "../App.css"
import Header from '../component/Header';
import Footer from "../component/Footer";
import blogdetailbg from '../img/blogdetailbg.jpg';
import blog1 from '../img/relateblog01.jpg';
import blog2 from '../img/relateblog02.jpg';
import blog3 from '../img/relateblog02.jpg';

const relatedBlogs = [
    {
      title: 'The Role of Technology in Sustainable Urban Development',
      image: blog1,
    },
    {
      title: 'Affordable Housing Solutions for Growing Urban Populations',
      image: blog2,
    },
    {
      title: 'Green Spaces and Their Impact on Urban Life',
      image: blog3,
    },
  ];

function Details() {
    return (<>
        <div className="min-h-screen ">
            <Header />
            <div className=" blogDetailBaneer ">
                <img src={blogdetailbg} alt="Logo" className="w-full" />
                <div className="blogbannerCnt">
                    <h3 className="text-[18px] text-white mb-[15px]">Adam Sandler | 2min read</h3>
                    <h2 className=" ">How Modern Urban Planning is Reshaping Indian Cities</h2>
                </div>
            </div>

            <div className="blogDetails ">
      
      {/* Left Main Blog Content */}
      <div className="blogleftpannel">
        <p className="mb-[15px] ">
        As India steps boldly into the future, the landscape of its cities is transforming faster than ever before. From smart infrastructure and sustainable development to cutting-edge technology, urban planning has become the backbone of this evolution. <br /> <br />
        At Cadmax Projects Pvt. Ltd., we’ve witnessed firsthand how progressive planning strategies are redefining not only how cities look but also how they feel, function, and flourish.
        </p>

        <h2 className="fontspring mb-[20px] text-[22px] md:text-[25px] lg:text-[30px] text-[#000112] mb-4">The Need for a New Approach</h2>

        <p className="">
          For decades, rapid urbanization in India has posed unique challenges: overcrowding, inefficient infrastructure...
        </p>
        <ul className="list-disc ">
          <li>Smart technology</li>
          <li>Inclusive design principles</li>
          <li>Environmental stewardship</li>
          <li>Data-driven decision-making</li>
        </ul>
        <p className="text-gray-700 mb-8">
          The goal is simple yet profound: to create cities that are livable, resilient, and prepared for tomorrow.
        </p>

        <h2 className="fontspring mb-[20px] text-[22px] md:text-[25px] lg:text-[30px] text-[#000112] mb-4">Key Trends Transforming Indian Urban Spaces</h2>
        <p className="">
          Here are some of the most significant trends we see driving change across the country:
        </p>

        <h3 className="">1. Sustainable Development and Green Cities</h3>
        <p className="">
          Urban planning is no longer just about concrete and roads—it’s about balancing growth with ecological sensitivity...
        </p>
        <ul className="">
          <li>Preserving green spaces and creating urban forests</li>
          <li>Rainwater harvesting and waste recycling</li>
          <li>Reducing energy footprints through smart building designs</li>
          <li>Promoting walkability and non-motorized transport</li>
        </ul>
      </div>

      {/* Right Sticky Related Blogs */}
      <aside className="blogsidebar ">
        <h3 className="fontspring ">Related Blogs</h3>
        <div className="sidebarimgbx">
          {relatedBlogs.map((blog, idx) => (
            <div key={idx}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <p className="text-[16px] text-[#000112ab] font-[600] uppercase tracking-wider">{blog.title}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>

            <Footer />
        </div>
    </>);
}

export default Details;