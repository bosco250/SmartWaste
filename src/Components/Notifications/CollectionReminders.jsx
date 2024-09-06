import React from 'react';

const CollectionReminders = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Collection Reminders</h2>
            <p className="text-gray-700 mb-2">Send reminders to users about upcoming waste collection.</p>
            <button className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 transition duration-200">
                Send Reminders
            </button>
        </div>
    );
};

export default CollectionReminders;