import React from 'react';

const ResourceAnalysis = ({ reports }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Resource Allocation and Efficiency</h2>
            <p className="text-gray-700 mb-2">Analyze how resources are allocated and their efficiency.</p>
            <ul className="list-disc list-inside">
                <li>Total Resources Used: {reports.length}</li>
                <li>Average Collection Efficiency: 85%</li>
                <li>Resources Under Maintenance: 2</li>
            </ul>
        </div>
    );
};

export default ResourceAnalysis;