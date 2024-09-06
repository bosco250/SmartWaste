import React from 'react';

const WasteManagementGuidelines = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Waste Management Guidelines</h2>
            <p className="text-gray-700 mb-4">
                Access guidelines and best practices for waste management operations.
            </p>
            <ul className="guideline-list">
                <li className="guideline-item">
                    <h3 className="text-lg font-semibold">Guideline 1: Waste Segregation</h3>
                    <p className="text-gray-700">
                        Learn about the importance of waste segregation and how to implement it effectively.
                    </p>
                    <a href="#" className="text-green-800 hover:underline">
                        Read Guideline
                    </a>
                </li>
                <li className="guideline-item">
                    <h3 className="text-lg font-semibold">Guideline 2: Waste Collection Scheduling</h3>
                    <p className="text-gray-700">
                        Discover best practices for creating efficient waste collection schedules.
                    </p>
                    <a href="#" className="text-green-800 hover:underline">
                        Read Guideline
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default WasteManagementGuidelines;