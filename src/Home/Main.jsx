import Header from '../Header';
import OurServices from './OurService';
import WhyChooseUs from './WhyChooseUs';
import homebanner from '../img/homebanner.jpg';
import homebanneroverlay from '../img/homebanneroverlay.png';
import spacebanner from '../img/spacebanner.jpg';
function Main() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="relative h-[860px] mt-[-130px]">
        <img src={homebanner} alt="Logo" className="h-full w-full" />
        <div className='absolute top-[0] bottom-[0] w-full'>
          <img src={homebanneroverlay} alt="Logo" className="h-full w-full" />
        </div>

        <div className='absolute left-[0] right-[0] bottom-[50px] w-full max-w-[1320px] m-auto'>
          <h1 className='mb-[15px] text-[80px] text-white leading-[85px] pe-[150px] '>Transform Your Space Into a Work of Art</h1>
          <p className='text-[20px] text-white pe-[200px]'>At Horizon Interiors, we craft timeless, functional, and inspiring spaces that reflect who you are. From elegant homes to modern offices, our award-winning interior designers bring your vision to life with creativity and precision.</p>
        </div>

      </div>
      <div className='bg-[#94A393] px-[15px] py-[20px] text-center text-[20px] text-white'>Let’s create an interior that’s beautiful, functional, and uniquely yours.</div>


      <section className="bg-white py-[100px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img src={spacebanner} alt="Interior" className=" w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Creating Beautiful Spaces <br />
              <span className="font-light">Since 2010</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Horizon Interiors is a full-service interior design studio based in Bangalore, dedicated to elevating the way people live and work. With over 14 years of experience, our team blends thoughtful design, premium materials, and meticulous project management to deliver spaces that are both stunning and practical. <br /><br />
              Whether it’s a contemporary apartment, a luxury villa, or a commercial workspace, we approach every project with passion, transparency, and a deep respect for your story.
            </p>

            <button className="min-w-[250px] mt-8 px-6 py-3 border border-[94A393] text-[#94A393] font-[500] tracking-wide hover:bg-gray-100 transition-all uppercase">
              More About Us
            </button>
          </div>
        </div>
      </section>

      <OurServices />

      <WhyChooseUs />
    </div>
  );
}

export default Main;
