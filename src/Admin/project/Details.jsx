import { useNavigate, useParams } from "react-router-dom";
import SideBarAdmin from "../common/SideBarAdmin";
import HeaderAdmin from "../common/HeaderAdmin";
import { useEffect, useState } from "react";
import Listing from "../Apis/Listing";
import AnimatedHeading from "../../component/AnimatedHeading";

function Details() {
    const slug = useParams();
    console.log("slug",);


    const record = slug?.slug
    const [jobs, setJobs] = useState([]);
    const [loadings, setLoading] = useState(false);

    const fetchJobList = async () => {
        try {
            setLoading(true);
            const api = new Listing();
            const response = await api.ProjectGetDetails(record);
            console.log("API response:", response);
            // Adjust according to your API structure
            setJobs(response?.data?.data || []);
        } catch (error) {
            console.error("Error fetching job list:", error);
            setJobs([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobList(record);
    }, [record]);

    const navigate = useNavigate()
    return (<>
        <div className="">
            <div className="bg-white rounded-[20px] mb-[30px]">
                {/* Background Image */}
                <img
                    src={jobs?.banner_image}
                    alt="Logo"
                    className="w-full h-[500px] md:h-[600px] xl:h-[650px]  md:max-h-[900px] object-cover"
                />
                {/* Content */}
                <div className="max-w-[1320px] m-auto absolute left-0 right-0 bottom-[30px] md:bottom-[50px] lg:bottom-[90px] z-[10] px-[15px]">
                    <AnimatedHeading>
                        <div className="flex flex-col items-left">
                            <h2 className="fontspring text-[20px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-white">
                                <span
                                    onClick={() => navigate(-1)}
                                    className="text-[16px] md:text-[18px] lg:text-[20px] text-blue-600 hover:underline cursor-pointer transition"
                                >
                                    ← Back
                                </span>   {jobs?.title}
                            </h2>
                        </div>
                    </AnimatedHeading>
                </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-[15px] md:gap-[30px] lg:gap-[45px] xl:gap-[55px] w-full max-w-[1330px] m-auto py-[10px] md:py-[45px] lg-[65px] px-[15px]">
                <div className="bg-white p-[10px] w-full md:w-[38%] ">
                    <div className="sticky top-[15px]">
                        <h2 className="fontspring flex items-center justify-between flex-wrap gap-2 text-[#000112] text-[20px] md:text-[25px] lg:text-[40px] mb-[5px] md:mb-[15px] leading-tight">
                            <span
                                onClick={() => navigate(-1)}
                                className="text-[16px] md:text-[18px] lg:text-[20px] text-blue-600 hover:underline cursor-pointer transition"
                            >
                                ← Back
                            </span>
                            <span className="font-semibold text-[#000112]">
                                {jobs?.title}
                            </span>
                        </h2>

                        <p className="text-[#000112] text-[12px] md:text-[14px] lg:text-[16px]">
                            {jobs?.content}
                        </p>
                        <div className="flex flex-col gap-[20px] border-t-[1px] border-b-[1px] border-t-[#f2f2f2] border-b-[#f2f2f2] py-[15px] mt-[25px]">
                            <div className="flex justify-between gap-[15px]">
                                <div className="text-[#666666] text-[12px] md:text-[14px] lg:text-[18px] font-[500]">
                                    Category
                                </div>

                                <div className="text-[#181A20] text-[12px] md:text-[14px] lg:text-[18px] font-[500]">
                                    {jobs?.category}

                                </div>
                            </div>


                            <div className="flex justify-between gap-[15px]">
                                <div className="text-[#666666] text-[12px] md:text-[14px] lg:text-[18px] font-[500]">
                                    Client
                                </div>

                                <div className="text-[#181A20] text-[12px] md:text-[14px] lg:text-[18px] font-[500]">
                                    {jobs?.client}

                                </div>
                            </div>

                            <div className="flex justify-between gap-[15px]">
                                <div className="text-[#666666] text-[12px] md:text-[14px] font-[500]">
                                    Location
                                </div>

                                <div className="text-[#181A20] text-[12px] md:text-[14px] font-[500]">
                                    {jobs?.location}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full md-w-[67%] flex-col gap-[20px]">
                    {jobs?.Image?.map((feature, index) => (
                        <img
                            key={index}
                            src={feature} // ✅ no .image
                            alt={`Project image ${index + 1}`}
                            className="object-cover min-h-[250px] md:min-h-[300px] lg:min-h-[450px] w-full"
                        />
                    ))}


                </div>
            </div>

            <div className="px-[15px] py-[30px] md:py-[60px] lg:py-[100px] bg-[#F8F6F2]">
                <h2 className="fontspring text-[25px] md:text-[40px] lg:text-[50px] text-[#000112] text-center mb-[15px]">What This Client said about Us</h2>
                <div className="bg-white px-[20px] py-[20px] w-[90%] max-w-[960px] m-auto drop-shadow-md">
                    <p className="text-[14px] md:text-[18px] lg:text-[22px] text-[#000112] mb-[15px]">
                        {jobs?.client_review}
                    </p>
                    <h2 className="text-[#000112a1] text-[14px] font-[600] uppercase">— {jobs?.client_name ? jobs?.client_name : jobs.client} </h2>
                </div>
            </div>
        </div>

    </>);
}

export default Details;