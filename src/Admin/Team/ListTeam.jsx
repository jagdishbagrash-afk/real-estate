import { useEffect, useState } from "react";
import AuthLayout from "../component/AuthLayout";
import AddTeam from "./AddTeam";
import Listing from "../Apis/Listing";
import DeletePopup from "../component/DeletePopup";
import userimage from "../../img/RudraMahal.jpg"

function ListTeam() {
    const [team, setTeams] = useState([]);

    const fetchTeamList = async () => {
        try {
            const main = new Listing();
            const response = await main.teamlist();
            console.log("response", response)
            setTeams(response?.data?.data || []);
        } catch (error) {
            console.error("Error fetching team list:", error);
        }
    };
    useEffect(() => {

        fetchTeamList();
    }, []);

    return (
        <AuthLayout>
            <div className="bg-white rounded-lg  p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                    <h2 className="text-2xl font-semibold mb-1 text-black">Team Member List</h2>
                    <AddTeam />
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white text-center border border-gray-200 rounded-lg shadow-md">
                        <thead className="text-white bg-[#94A393]">
                            <tr>
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Position </th>
                                <th className="px-4 py-2">Edit </th>
                                <th className="px-4 py-2">Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {team && team?.map((item, index) => (
                                <tr key={item.id} className="hover:bg-purple-50 transition duration-150">
                                    <td className="px-4 py-2 border-t">{index + 1}</td>
                                    <td className="px-4 py-2 border-t">
                                        <img src={item.imageUrl || userimage} alt="Item" className="h-16 w-16 object-cover rounded" />
                                    </td>
                                    <td className="px-4 py-2 border-t">{item.name}</td>
                                    <td className="px-4 py-2 border-t">{item.position}</td>

                                    <td className=" border-t">

                                        <AddTeam item={item} fetchTeamList={fetchTeamList} />
                                    </td>

                                    <td className=" border-t">

                                        <DeletePopup step={1} item={item} fetchTeamList={fetchTeamList} />
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

export default ListTeam;
