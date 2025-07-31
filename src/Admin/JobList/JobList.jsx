import AuthLayout from "../component/AuthLayout";

function JobList() {
    const applications = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            phone: "9876543210",
            city: "Mumbai",
            position: "Web Developer",
            resume: "resume_john.pdf",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            phone: "9123456780",
            city: "Delhi",
            position: "UI/UX Designer",
            resume: "jane_cv.pdf",
        },
    ];
    return (
        <AuthLayout>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4 text-black">Job List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="text-white bg-[#94A393]">
                            <tr>
                                <th className="text-left px-4 py-2">#</th>
                                <th className="text-left px-4 py-2">Full Name</th>
                                <th className="text-left px-4 py-2">Email</th>
                                <th className="text-left px-4 py-2">Phone</th>
                                <th className="text-left px-4 py-2">City</th>
                                <th className="text-left px-4 py-2">Position</th>
                                <th className="text-left px-4 py-2">Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-purple-50 transition duration-150"
                                >
                                    <td className="px-4 py-2 border-t">{index + 1}</td>
                                    <td className="px-4 py-2 border-t">{item.name}</td>
                                    <td className="px-4 py-2 border-t">{item.email}</td>
                                    <td className="px-4 py-2 border-t">{item.phone}</td>
                                    <td className="px-4 py-2 border-t">{item.city}</td>
                                    <td className="px-4 py-2 border-t">{item.position}</td>
                                    <td className="px-4 py-2 border-t">
                                        <a
                                            href={`/uploads/${item.resume}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            {item.resume}
                                        </a>
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
