import React from 'react';

const CollectionRouteReports = ({ reports }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Collection and Route Reports</h2>
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-left">Report Type</th>
                        <th className="px-4 py-2 text-left">Details</th>
                        <th className="px-4 py-2 text-left">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{report.type}</td>
                            <td className="px-4 py-2">{report.details}</td>
                            <td className="px-4 py-2">{report.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CollectionRouteReports;