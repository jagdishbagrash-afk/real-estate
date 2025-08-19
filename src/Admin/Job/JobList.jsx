import { useEffect, useState } from "react";
import AuthLayout from "../component/AuthLayout";
import Listing from "../Apis/Listing";
import DeletePopup from "../component/DeletePopup";
import AddJob from "./AddJob";

function JobList() {
    const [Job, setJob] = useState([]);

    const fecthJobList = async () => {
        try {
            const main = new Listing();
            const response = await main.JobGet();
            console.log("response", response)
            setJob(response?.data?.data || []);
        } catch (error) {
            console.error("Error fetching team list:", error);
        }
    };
    useEffect(() => {

        fecthJobList();
    }, []);

    console.log("Job", Job)
    return (
        <AuthLayout>
            <div className="bg-white rounded-lg  p-6 ">
                <div className="flex justify-between items-center ">
                    <h2 className="text-2xl font-semibold mb-1 text-black">Job List</h2>
                    <AddJob />
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white text-center border border-gray-200 rounded-lg shadow-md">
                        <thead className="text-white bg-[#94A393]">
                            <tr>
                                <th className=" px-4 py-2">#</th>
                                <th className=" px-4 py-2">Title</th>
                                <th className=" px-4 py-2">Location</th>
                                <th className=" px-4 py-2">Experience</th>
                                <th className=" px-4 py-2">Employment Type</th>
                                <th className=" px-4 py-2">About</th>
                                <th className=" px-4 py-2">Responsibilities</th>
                                <th className=" px-4 py-2">Qualifications</th>
                                <th className=" px-4 py-2">Offers</th>
                                <th className=" px-4 py-2">Edit</th>
                                <th className=" px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Job && Job?.map((item, index) => (
                                <tr key={item._id} className="hover:bg-purple-50 transition duration-150">
                                    <td className="px-4 py-2 border-t">{index + 1}</td>
                                    <td className="px-4 py-2 border-t">{item.title}</td>
                                    <td className="px-4 py-2 border-t">{item.location}</td>
                                    <td className="px-4 py-2 border-t">{item.experience}</td>
                                    <td className="px-4 py-2 border-t">{item.job_type}</td>

                                    <td className="px-4 py-2 border-t">{item.about}</td>
                                    <td className="px-4 py-2 border-t">{item.responsibilities}</td>
                                    <td className="px-4 py-2 border-t">{item.qualifications}</td>
                                    <td className="px-4 py-2 border-t">{item.offers}</td>
                                    <td className=" border-t">
                                        <AddJob item={item} fecthJobList={fecthJobList} />
                                    </td>
                                    <td className=" border-t">
                                        <DeletePopup step={2} item={item} fetchTeamList={fecthJobList} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </AuthLayout>
    );
}

export default JobList;
