import { useEffect, useState } from "react";
import Listing from "../Apis/Listing";
import LoadingSpinner from "../common/LoadingSpinner";
import Nodata from "../common/Nodata";
import SideBarAdmin from "../common/SideBarAdmin";
import HeaderAdmin from "../common/HeaderAdmin";
import AddTeam from "./AddTeam"
import toast from "react-hot-toast";

function ListTeam() {
    const [team, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTeamList = async () => {
        try {
            setLoading(true);
            const main = new Listing();
            const response = await main.teamlist();
            console.log("response", response);
            setTeams(response?.data?.data || []);
        } catch (error) {
            console.error("Error fetching team list:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTeamList();
    }, []);

    console.log("team", team)

    async function DeleteFile(Id) {
        if (loading) return;
        setLoading(true);

        const main = new Listing();
        try {
            let response;
            if (Id) {
                response = await main.DeleteTeam({_id :Id});
            }
            if (response?.data) {
                toast.success(response.data.message);
                fetchTeamList();
            } else {
                toast.error(response?.data?.message || "Unexpected error occurred.");
            }
        } catch (error) {
            console.error("error", error);
            toast.error(error?.response?.data?.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="md:flex flex-wrap bg-[#F5F6FB]">
            <SideBarAdmin />
            <div className="w-full lg:w-[calc(100%-304px)]">
                <HeaderAdmin title={"Team Listing"} />

                <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                    <div className="bg-white rounded-[20px] mb-[30px]">
                        <div className="py-4 px-4 md:px-6 lg:px-10 flex justify-between items-center border-b border-black border-opacity-10">
                            <h3 className="text-base lg:text-lg font-semibold text-[#1E1E1E] tracking-[-0.03em]">
                                Team Members
                            </h3>
                            <AddTeam fetchTeamList={fetchTeamList} />
                        </div>

                        <div className="overflow-x-auto">
                            {loading ? (
                                <LoadingSpinner />
                            ) : team.length === 0 ? (
                                <Nodata />
                            ) : (
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">#</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Image</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Name</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Role</th>
                                            <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {team.map((member, index) => (
                                            <tr
                                                key={member.id || index}
                                                className="bg-white border-t hover:bg-gray-100"
                                            >
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {index + 1}
                                                </td>
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center overflow-hidden rounded-full border border-gray-200">
                                                        <img
                                                            src={member.imageUrl}
                                                            alt={member.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </td>

                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {member.name}
                                                </td>
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
                                                    {member.position}
                                                </td>
                                                <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]" onClick={() => { DeleteFile(member._id) }}>
                                                    Delete
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

export default ListTeam;