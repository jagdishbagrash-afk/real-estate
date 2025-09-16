import "../App.css"
import Header from '../component/Header';
import Footer from "../component/Footer";
import TownshipSlider from "./TownshipSlider";
import { Link } from "react-router-dom";
import AnimatedHeading from "../component/AnimatedHeading";

const blogs = [
  {
    title: 'How Modern Urban Planning Is Reshaping Indian Cities',
    image: "/blog/blogimg01.jpg",
  },
  {
    title: 'The Role of Technology in Sustainable Urban Development',
    image: "/blog/blogimg02.jpg",

  },
  {
    title: 'Public Transportation: A Key to Smart City Success',
    image: "/blog/blogimg03.jpg",

  },
  {
    title: 'Green Spaces and Their Impact on Urban Life',
    image: "/blog/blogimg04.jpg",

  },
  {
    title: 'Affordable Housing Solutions for Growing Urban Populations',
    image: "/blog/blogimg05.jpg",

  },
  {
    title: 'Community Engagement in Urban Design Processes',
    image: "/blog/blogimg06.jpg",

  },

  {
    title: 'Community Engagement in Urban Design Processes',
    image: "/blog/blogimg07.jpg",

  },

  {
    title: 'Community Engagement in Urban Design Processes',
    image: "/blog/blogimg08.jpg",

  },

  {
    title: 'Community Engagement in Urban Design Processes',
    image: "/blog/blogimg09.jpg",

  },
];


function Blog() {
  return (<>
    <div className="min-h-screen ">
      <Header />
      <div className="relative mt-[-150px] ">
        <img src={"/home/exploreservicebg.jpg"} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full" />
        <AnimatedHeading>
          <div className="max-w-[1320px] m-auto absolute left-[0] right-[0]  bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
            <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white  ">Blogs and Upcoming Project</h2>
          </div>
        </AnimatedHeading>
      </div>
      <div className="bg-[#F8F6F2] py-[40px] md:py-[50px] lg:py-[80px] xl:py-[100px]">
        <AnimatedHeading>

          <h2 className="fontspring text-[25px] text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[30px] md:leading-[35px] lg:leading-[45px] xl:leading-[55px] mb-[40px] text-[#000112] text-center">What We Offer</h2>
        </AnimatedHeading>
        <TownshipSlider />
      </div>


      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <AnimatedHeading>

          <h2 className="mb-[25px] text-center fontspring text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-[#000112]  ">Latest Blogs</h2>
        </AnimatedHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:max-w-[1320px] m-auto">
          {blogs.map((blog, index) => (
            <Link to="/blog/details" key={index} className="flex flex-col">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[250px] md:h-[280px] lg:h-[320px] object-cover rounded"
              />
              <p className="mt-4 font-[12px] md:font-[14px] lg:font-[16px] font-[600] text-[#000112] uppercase tracking-wider">{blog.title.toUpperCase()}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-[40px] mb-[20px]">
          <button className="px-[10px] py-[10px] min-w-[200px] text-[14px] font-[600] text-[#94A393] border-[1px] border-[#94A393] hover:bg-[#94A393] hover:text-white uppercase tracking-wider">Load More</button>
        </div>
      </section>


      <Footer />
    </div>

  </>);
}

export default Blog;