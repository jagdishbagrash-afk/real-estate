import "../App.css"
import Header from '../component/Header';
import exploreservicebg from '../img/exploreservicebg.jpg';
import img1 from "../img/realestate.jpg";
import img2 from "../img/FINALNADHALLAYOUT20_page-0001.jpg";
import img3 from "../img/Infrastructure.jpg";
import img4 from "../img/Acrchitecture.jpg";
import img5 from "../img/Interior.png";
import img6 from '../img/serviceimg06.jpg';



import Footer from "../component/Footer";


const services = [
      { title: "URBAN PLANNING", image: img2 },
  { title: "REAL STATE", image: img1 },
  { title: "INFRASTRUCTURE ", image: img3 },
  { title: "ARCHITECTURE", image: img4 },
  { title: "Interior Designing", image: img5 },
    { title: 'SURVEYING', image: img6 },
  ];


function Services() {
    return ( <>
    <div className="min-h-screen ">
      <Header />
        <div className="relative mt-[-150px] ">
            <img src={exploreservicebg} alt="Logo" className="object-cover min-h-[350px] md:min-h-[400px] lg:min-h-[450px] w-full" />
            <div className="max-w-[1320px] m-auto absolute left-[0] right-[0]  bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
                <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white  ">Explore our services</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-[15px] py-[40px] md:py-[60px] lg:py-[100px] max-w-7xl mx-auto">
            {services.map((service, index) => (
                 <div key={index} className="relative h-[300px] md:h-[350px] lg:md:h-[420px] xl:md:h-[520px] w-full overflow-hidden shadow-lg group cursor-grab">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[300px] md:h-[350px] lg:md:h-[420px] xl:md:h-[520px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* bg-[#0000007d] */}
                <div className="absolute inset-0 bg-[#000000b3]	 hover:bg-transparent bg-opacity-[10%] flex items-center justify-center">
                  <h3 className="text-white  text-lg font-semibold tracking-wider uppercase">{service.title}</h3>
                </div>
              </div>
            ))}
            </div>
    </div>
    <Footer />
    </>
     );
}

export default Services;