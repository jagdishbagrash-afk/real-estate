import { useEffect, useState } from "react";
import Listing from "../Apis/Listing";
import DeletePopup from "../component/DeletePopup";
import AddJob from "./AddJob";
import SideBarAdmin from "../common/SideBarAdmin";
import HeaderAdmin from "../common/HeaderAdmin";
import LoadingSpinner from "../common/LoadingSpinner";
import Nodata from "../common/Nodata";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobList = async () => {
    try {
      setLoading(true);
      const api = new Listing();
      const response = await api.JobGet();
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
    fetchJobList();
  }, []);

  return (
    <div className="md:flex flex-wrap bg-[#F5F6FB] min-h-screen">
      <SideBarAdmin />
      <div className="w-full lg:w-[calc(100%-304px)]">
        <HeaderAdmin title="Job Listing" />

        <div className="px-4 py-2 lg:px-10 lg:py-2.5">
          <div className="bg-white rounded-[20px] mb-[30px]">
            <div className="py-4 px-4 md:px-6 lg:px-10 flex justify-between items-center border-b border-black border-opacity-10">
              <h3 className="text-base lg:text-lg font-semibold text-[#1E1E1E] tracking-[-0.03em]">
                Job List
              </h3>
              <AddJob fecthJobList={fetchJobList} />
            </div>

            <div className="overflow-x-auto">
              {loading ? (
                <LoadingSpinner />
              ) : jobs.length === 0 ? (
                <Nodata />
              ) : (
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">#</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Title</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Location</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Experience</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Employment Type</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">About</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Skills</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Image</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((item, index) => (
                      <tr key={item.slug || index} className="bg-white border-t hover:bg-gray-100">
                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">{index + 1}</td>
                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">{item.title}</td>
                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">{item.location}</td>
                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">{item.experience}</td>
                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">{item.employment_type}</td>
                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">{item.content}</td>
                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">{item.Skills}</td>
                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 object-cover rounded-md"
                            />
                          )}
                        </td>
                        <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                          <DeletePopup step={2} item={item} fetchTeamList={fetchJobList} />
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
