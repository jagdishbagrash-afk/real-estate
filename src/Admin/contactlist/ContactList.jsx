import AuthLayout from "../component/AuthLayout";

function ContactList() {
    const submissions = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            phone: "9876543210",
            service: "Web Development",
            message: "Hello World",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            phone: "",
            service: "App Development",
            message: "Need a demo",
        },
    ];

    return (
        <AuthLayout>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4 text-black">Contact List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
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
                            {submissions.map((item, index) => (
                                <tr key={item.id} className="hover:bg-purple-50 transition duration-150">
                                    <td className="px-4 py-2 border-t">{index + 1}</td>
                                    <td className="px-4 py-2 border-t">{item.name}</td>
                                    <td className="px-4 py-2 border-t">{item.email}</td>
                                    <td className="px-4 py-2 border-t">
                                        {item.phone || <span className="text-gray-400 italic">—</span>}
                                    </td>
                                    <td className="px-4 py-2 border-t">{item.service}</td>
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
