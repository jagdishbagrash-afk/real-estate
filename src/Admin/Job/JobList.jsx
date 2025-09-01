import { useEffect, useState } from "react";
import Listing from "../Apis/Listing";
import DeletePopup from "../component/DeletePopup";
import AddJob from "./AddJob";
import SideBarAdmin from "../common/SideBarAdmin";
import HeaderAdmin from "../common/HeaderAdmin";
import LoadingSpinner from "../common/LoadingSpinner";
import Nodata from "../common/Nodata";

function JobList() {
    const [Job, setJob] = useState([]);

    const [loading, setLoading] = useState(true);

    const fecthJobList = async () => {
        try {
            setLoading(true);
            const main = new Listing();
            const response = await main.JobGet();
            console.log("response", response);
            setJob(response?.data?.data || []);
        } catch (error) {
            console.error("Error fetching team list:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {

        fecthJobList();
    }, []);

    console.log("Job", Job)
    return (
        <div className="md:flex flex-wrap bg-[#F5F6FB]">
            <SideBarAdmin />
            <div className="w-full lg:w-[calc(100%-304px)]">
                <HeaderAdmin title={"Team Listing"} />

                <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-4 px-4 md:px-6 lg:px-10 flex justify-between items-center border-b border-black border-opacity-10">
                            <h3 className="text-base lg:text-lg font-semibold text-[#1E1E1E] tracking-[-0.03em]">
                                Job List
                            </h3>
                            <AddJob />
                        </div>

                        <div className="overflow-x-auto">
                            {loading ? (
                                <LoadingSpinner />
                            ) : Job.length === 0 ? (
                                <Nodata />
                            ) : (
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">#</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Title</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Location</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Experience</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Employment Type</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">About</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Responsibilities</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Qualifications</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Offers</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Edit</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Job && Job.map((item, index) => (
                                            <tr
                                                key={item.id || index}
                                                className="bg-white border-t hover:bg-gray-100"
                                            >
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {index + 1}
                                                </td>
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.title}
                                                </td>

                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.location}
                                                </td>  <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.experience}
                                                </td>  <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.job_type}
                                                </td>  <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.about}
                                                </td>




                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.responsibilities}
                                                </td> <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.qualifications}
                                                </td> <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {item.offers}
                                                </td> <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    <AddJob item={item} fecthJobList={fecthJobList} />
                                                </td> <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    <DeletePopup step={2} item={item} fetchTeamList={fecthJobList} />
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobList;
