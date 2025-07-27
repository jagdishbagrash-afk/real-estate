import "../App.css"
import Header from '../component/Header';
import Footer from "../component/Footer";
import blogdetailbg from '../img/blogdetailbg.jpg';
import blog1 from '../img/relateblog01.jpg';
import blog2 from '../img/relateblog02.jpg';
import blog3 from '../img/relateblog03.jpg';

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
            <div className="relative mt-[-150px] ">
                <img src={blogdetailbg} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full" />
                <div className="max-w-[1320px] m-auto absolute left-[0] right-[0]  bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
                    <h3 className="text-[18px] text-white mb-[15px]">Adam Sandler | 2min read</h3>
                    <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white  leading-[25px] md:leading-[45px] lg:leading-[65px] xl:leading-[85px] ">How Modern Urban Planning is Reshaping Indian Cities</h2>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
      
      {/* Left Main Blog Content */}
      <div>
        <p className="mb-[15px] mb-[15px] text-[14px] md:text-[18px] lg:text-[20px] text-[#000112ab] font-[400] mb-6 leading-relaxed">
        As India steps boldly into the future, the landscape of its cities is transforming faster than ever before. From smart infrastructure and sustainable development to cutting-edge technology, urban planning has become the backbone of this evolution. <br /> <br />
        At Cadmax Projects Pvt. Ltd., we’ve witnessed firsthand how progressive planning strategies are redefining not only how cities look but also how they feel, function, and flourish.
        </p>

        <h2 className="fontspring mb-[20px] text-[22px] md:text-[25px] lg:text-[30px] text-[#000112] mb-4">The Need for a New Approach</h2>

        <p className="mb-[15px] text-[14px] md:text-[18px] lg:text-[20px] text-[#000112ab] font-[400] mb-6 leading-relaxed">
          For decades, rapid urbanization in India has posed unique challenges: overcrowding, inefficient infrastructure...
        </p>
        <ul className="list-disc list-inside mb-[15px] text-[14px] md:text-[18px] lg:text-[20px] text-[#000112ab] font-[400] mb-6 leading-relaxed space-y-1">
          <li>Smart technology</li>
          <li>Inclusive design principles</li>
          <li>Environmental stewardship</li>
          <li>Data-driven decision-making</li>
        </ul>
        <p className="text-gray-700 mb-8">
          The goal is simple yet profound: to create cities that are livable, resilient, and prepared for tomorrow.
        </p>

        <h2 className="fontspring mb-[20px] text-[22px] md:text-[25px] lg:text-[30px] text-[#000112] mb-4">Key Trends Transforming Indian Urban Spaces</h2>
        <p className="mb-[15px] text-[14px] md:text-[18px] lg:text-[20px] text-[#000112ab] font-[400] mb-6 leading-relaxed">
          Here are some of the most significant trends we see driving change across the country:
        </p>

        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#000112] mb-2">1. Sustainable Development and Green Cities</h3>
        <p className="mb-[15px] text-[14px] md:text-[18px] lg:text-[20px] text-[#000112ab] font-[400] mb-6 leading-relaxed">
          Urban planning is no longer just about concrete and roads—it’s about balancing growth with ecological sensitivity...
        </p>
        <ul className="list-disc list-inside mb-[15px] text-[14px] md:text-[18px] lg:text-[20px] text-[#000112ab] font-[400] mb-6 leading-relaxed space-y-1">
          <li>Preserving green spaces and creating urban forests</li>
          <li>Rainwater harvesting and waste recycling</li>
          <li>Reducing energy footprints through smart building designs</li>
          <li>Promoting walkability and non-motorized transport</li>
        </ul>
      </div>

      {/* Right Sticky Related Blogs */}
      <aside className="lg:sticky lg:top-[0] h-fit bg-[#f9f6f2] p-4 rounded">
        <h3 className="fontspring text-[20px] md:text-[25px] lg:text-[30px] font-semibold mb-6 text-[#000112]">Related Blogs</h3>
        <div className="space-y-6">
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