import React from 'react';

const TrainingModules = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Training Modules</h2>
            <p className="text-gray-700 mb-4">
                Access interactive training modules to learn about waste management best practices.
            </p>
            <ul className="training-module-list">
                <li className="training-module-item">
                    <h3 className="text-lg font-semibold">Module 1: Introduction to Waste Management</h3>
                    <p className="text-gray-700">Learn the basics of waste management and its importance.</p>
                    <button className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200">
                        Start Module
                    </button>
                </li>
                <li className="training-module-item">
                    <h3 className="text-lg font-semibold">Module 2: Waste Collection Best Practices</h3>
                    <p className="text-gray-700">Discover best practices for efficient waste collection.</p>
                    <button className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200">
                        Start Module
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default TrainingModules;