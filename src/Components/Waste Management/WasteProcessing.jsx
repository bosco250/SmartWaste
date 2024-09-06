import React from 'react';

const WasteProcessing = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Waste Processing & Recycling</h2>
            <p className="text-gray-700 mb-2">Track the status of waste processing and recycling activities.</p>
            <ul className="list-disc list-inside">
                <li>Processing Status: In Progress</li>
                <li>Recycled Materials: 150 tons</li>
                <li>Processed Waste: 300 tons</li>
            </ul>
        </div>
    );
};

export default WasteProcessing;