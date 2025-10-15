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
                response = await main.DeleteTeam({ _id: Id });
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                                    {team.map((member, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-start justify-start transform transition-transform duration-500 hover:-translate-y-4 min-h-[600px] bg-white shadow-md rounded-2xl p-4"
                                        >
                                            {/* Image Box */}
                                            <div className="w-full h-[420px] flex items-center justify-center overflow-hidden bg-gray-50 rounded-xl">
                                                <img
                                                    src={member.imageUrl}
                                                    alt={member.name}
                                                    className="h-[380px] object-contain"
                                                />
                                            </div>

                                            {/* Text */}
                                            <p className="text-start font-semibold mt-3 text-[18px] md:text-[20px] lg:text-[22px] text-[#000112]">
                                                {member.name}
                                            </p>
                                            <p className="text-start text-[14px] md:text-[16px] lg:text-[18px] text-[#94A393] font-medium uppercase">
                                                {member.position}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListTeam;