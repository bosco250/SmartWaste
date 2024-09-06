import React from 'react';

const ResourceAllocation = ({ resources, onEditResource }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Resource Allocation</h2>
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-left">Resource Type</th>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {resources.map((resource) => (
                        <tr key={resource.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{resource.type}</td>
                            <td className="px-4 py-2">{resource.name}</td>
                            <td className="px-4 py-2">{resource.status}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="text-blue-500 hover:underline"
                                    onClick={() => onEditResource(resource)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResourceAllocation;