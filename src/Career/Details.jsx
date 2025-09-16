import "../App.css"
import Header from '../component/Header';
import Footer from "../component/Footer";
import { useState } from "react";
import Listing from "../Admin/Apis/Listing";
import toast from "react-hot-toast";
import CareerDetails from "../Json/Carrer.json";
import { useParams } from "react-router-dom";
import AnimatedHeading from "../component/AnimatedHeading";
function Details() {
    const { slug } = useParams();
    const Carrer = CareerDetails[slug];
    console.log(Carrer)
    const [Regs, setRegs] = useState({
        name: "",
        email: "",
        position: "",
        phone_number: "",
        resume: "",
        city: ""
    });


    const handleInputs = (e) => {
        const { name, value } = e.target;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };

    const [loading, setLoading] = useState(false);

    const handleForms = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (!Regs.name || !Regs.email || !Regs.phone_number || !Regs.position || !Regs.city) {
            toast.error("Please fill out all fields.");
            setLoading(false);
            return;
        }
        const main = new Listing();
        try {
            const updatedRegs = {
                ...Regs,
            };
            const response = await main.JobOpening(updatedRegs);
            console.log("response", response)
            if (response?.data?.status) {
                toast.success(response.data.message);
                setRegs({
                    name: "",
                    email: "",
                    message: "",
                    subject: "",
                    phone_number: "",
                    city: ""
                });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error); // Log the error for debugging
            toast.error("Something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (<>

        <div className="min-h-screen ">
            <Header />
           <div className="relative mt-[-150px]">
                <img
                    src={Carrer?.image}
                    alt="Logo"
                    className="w-full h-[500px] md:h-[600px] xl:h-[650px] object-cover"
                />
                <div className="max-w-[1320px] m-auto absolute left-0 right-0 bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[1] px-[15px]">
                    <AnimatedHeading>
                        <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white">
                           {Carrer?.role}
                        </h2>
                    </AnimatedHeading>
                </div>
            </div>

            <div className="px-4 py-[40px] md:py-[60px] lg:py-[70px] md:px-10 lg:px-20 bg-white text-gray-800">
                <div className="max-w-[1320px] mx-auto flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row items-start gap-[25px]">
                    {/* Left: Job Details */}
                    <div className="w-full md:w-60%">
                        <div className="border border-[#999999] p-4 md:p-6 mb-[30px]">
                            <h2 className="fontspring text-[20px] md:text-[22px] lg:text-[24px] lg:text-[26px] text-[#000112] mb-2">
                                {Carrer?.role}
                            </h2>
                            <div className="text-[14px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#0001129e]">
                              <span>Location: Jaipur, Rajasthan</span> |
                                <span className="ml-2">Employment Type: Full-Time</span> |
                                <span className="ml-2">Experience: 2–5 Years</span>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h3 className="fontspring text-[20px] md:text-[25px] lg:text-[30px] text-[#000112] mb-2">Required Skills & Qualifications</h3>
                            <ul className="list-disc list-inside space-y-1 text-[16px] md:text-[18px] lg:text-[20px] text-[#0001129e]">
                             {Carrer?.requiredSkillsAndQualifications?.map((item)=>{
                                return <li>{item}</li>
                             })}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Application Form */}
                    <div className="w-full md:w-[40%] bg-[#F8F6F2] pb-[20px] rounded shadow-md">
                        <h3 className="fontspring mb-[30px] text-[20px] md:text-[25px] lg:text-[30px] text-[#000112] border-b-[1px] border-b-[#0000002e] px-[15px] py-[15px]">Related Blogs</h3>

                        <form className="flex flex-col gap-[20px] px-[15px] md:px-[15px] lg:md:px-[25px]">
                            <div className="flex flex-col gap-[4px]">
                                <label className="text-[12px] text-[#4D4D4D] font-[500]">FULL NAME*</label>
                                <input type="text"
                                    name="name"
                                    value={Regs.name}
                                    onChange={handleInputs}
                                    required
                                    placeholder="your name" className="bg-[#F8F6F2] w-full border-b-[1px] border-b-[#00000029]  py-[15px] pt-[2px] outline-none text-[16px] font-[500] text-[#999999]" />
                            </div>

                            <div className="flex flex-col gap-[4px]">
                                <label className="text-[12px] text-[#4D4D4D] font-[500]">EMAIL ADDRESS*</label>
                                <input type="email"
                                    name="email"
                                    value={Regs.email}
                                    onChange={handleInputs}
                                    required
                                    placeholder="your email" className="bg-[#F8F6F2] w-full border-b-[1px] border-b-[#00000029]  py-[15px] pt-[2px] outline-none text-[16px] font-[500] text-[#999999]" />
                            </div>


                            <div className="flex flex-col gap-[4px]">
                                <label className="text-[12px] text-[#4D4D4D] font-[500] uppercase">PHONE NUMBER*</label>
                                <input type="tel"
                                    name="phone_number"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        // Allow only digits and max 10 characters
                                        if (/^\d{0,10}$/.test(value)) {
                                            handleInputs(e); // your existing handler
                                        }
                                    }}
                                    placeholder="Enter 10-digit phone number"
                                    required
                                    className="bg-[#F8F6F2] w-full border-b-[1px] border-b-[#00000029]  py-[15px] pt-[2px] outline-none  text-[16px] font-[500] text-[#999999]" />
                            </div>

                            <div className="flex flex-col gap-[4px]">
                                <label className="text-[12px] text-[#4D4D4D] font-[500] uppercase">Current City*</label>
                                <input type="text"
                                    name="city"
                                    value={Regs.city}
                                    onChange={handleInputs}
                                    required
                                    placeholder="your name" className="bg-[#F8F6F2] w-full border-b-[1px] border-b-[#00000029]  py-[15px] pt-[2px] outline-none  text-[16px] font-[500] text-[#999999]" />
                            </div>

                            <div className="flex flex-col gap-[4px]">
                                <label className="text-[12px] text-[#4D4D4D] font-[500] uppercase">Position Applying For*</label>
                                <select
                                    name="position"
                                    value={Regs.position}
                                    onChange={handleInputs}
                                    required
                                    className="bg-[#F8F6F2] w-full border-b-[1px] border-b-[#00000029]  py-[15px] pt-[2px] outline-none  text-[16px] font-[500] text-[#999999]">
                                    <option >--Select a position--</option>
                                    <option value={"Architect"}>Architectr</option>
                                    <option value={"Interior Designer"}>Interior Designer</option>
                                    <option value={"Surveying Engineer"}>Surveying Engineer</option>
                                    <option value={"Urban Planner"}>Urban Planner</option>
                                </select>
                            </div>

                            <div className="bg-[#F8F6F2] relative flex flex-col items-center justify-center w-full h-[130px] border border-[#00000029] p-4 text-center text-gray-600 text-sm cursor-pointer text-[16px] text-[#94A393] uppercase">
                                <input type="file"
                                    name="resume"
                                    value={Regs.resume}
                                    onChange={handleInputs}
                                    className="absolute top-[0] left-[0] w-[100%] h-[100%] opacity-0" />
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 16V7.85L8.9 10.45L7.5 9L12.5 4L17.5 9L16.1 10.45L13.5 7.85V16H11.5ZM6.5 20C5.95 20 5.47933 19.8043 5.088 19.413C4.69667 19.0217 4.50067 18.5507 4.5 18V15H6.5V18H18.5V15H20.5V18C20.5 18.55 20.3043 19.021 19.913 19.413C19.5217 19.805 19.0507 20.0007 18.5 20H6.5Z" fill="#94A393" />
                                </svg>

                                Upload Resume
                            </div>
                            <button type="submit"
                                disabled={loading}
                                onClick={handleForms}
                                className="w-full bg-[#94A393] text-white text-[14px] py-[10px] py-[15px] hover:bg-black tracking-wider">

                                {loading ? "Processing.." : "APPLY NOW"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
        <Footer />
    </>);
}

export default Details;