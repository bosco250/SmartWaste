import React from 'react';

const NotificationManager = ({ notifications, onEditNotification }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Notification Manager</h2>
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-left">Type</th>
                        <th className="px-4 py-2 text-left">Message</th>
                        <th className="px-4 py-2 text-left">Scheduled Time</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.map((notification) => (
                        <tr key={notification.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{notification.type}</td>
                            <td className="px-4 py-2">{notification.message}</td>
                            <td className="px-4 py-2">{notification.scheduledTime}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="text-blue-500 hover:underline"
                                    onClick={() => onEditNotification(notification)}
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

export default NotificationManager;