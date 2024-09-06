import React from 'react';

const CustomReports = ({ reports }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Custom Reports</h2>
            <p className="text-gray-700 mb-2">Create tailored reports based on specific criteria.</p>
            <ul className="list-disc list-inside">
                {reports.map((report) => (
                    <li key={report.id}>
                        <strong>{report.type}</strong>: {report.details} (Date: {report.date})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomReports;