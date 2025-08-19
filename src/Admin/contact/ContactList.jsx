import { useEffect, useState } from "react";
import AuthLayout from "../component/AuthLayout";
import Listing from "../Apis/Listing";

function ContactList() {
   const [team, setTeams] = useState([]);
  
      const fetchTeamList = async () => {
          try {
              const main = new Listing();
              const response = await main.ContactGet();
              console.log("response", response)
              setTeams(response?.data?.data?.contactget || []);
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
                <h2 className="text-2xl font-semibold mb-4 text-black">Contact List</h2>
              <div className="overflow-x-auto">
                    <table className="min-w-full bg-white text-center border border-gray-200 rounded-lg shadow-md">
                        <thead className="text-white bg-[#94A393]">
                            <tr>
                                <th className="text-left px-4 py-2">#</th>
                                <th className="text-left px-4 py-2">Name</th>
                                <th className="text-left px-4 py-2">Email</th>
                                <th className="text-left px-4 py-2">Phone</th>
                                <th className="text-left px-4 py-2">Service</th>
                                <th className="text-left px-4 py-2">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {team && team?.map((item, index) => (
                                <tr key={item.id} className="hover:bg-purple-50 transition duration-150">
                                    <td className="px-4 py-2 border-t">{index + 1}</td>
                                    <td className="px-4 py-2 border-t">{item.name}</td>
                                    <td className="px-4 py-2 border-t">{item.email}</td>
                                    <td className="px-4 py-2 border-t">
                                        {item.phone_number || <span className="text-gray-400 italic">—</span>}
                                    </td>
                                    <td className="px-4 py-2 border-t">{item.services}</td>
                                    <td className="px-4 py-2 border-t">{item.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthLayout>
    );
}

export default ContactList;
