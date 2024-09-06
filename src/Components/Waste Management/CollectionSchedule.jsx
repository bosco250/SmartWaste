import React from 'react';

const CollectionSchedule = ({ schedules, onEditSchedule }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Collection Schedules</h2>
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-left">Date</th>
                        <th className="px-4 py-2 text-left">Time</th>
                        <th className="px-4 py-2 text-left">Route</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule) => (
                        <tr key={schedule.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{schedule.date}</td>
                            <td className="px-4 py-2">{schedule.time}</td>
                            <td className="px-4 py-2">{schedule.route}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="text-blue-500 hover:underline"
                                    onClick={() => onEditSchedule(schedule)}
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

export default CollectionSchedule;