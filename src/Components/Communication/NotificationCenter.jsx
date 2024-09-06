import React, { useState } from 'react';

const NotificationCenter = ({ notifications, onSendNotification }) => {
    const [newNotification, setNewNotification] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const notification = {
            id: Date.now(),
            type: 'Email',
            content: newNotification,
        };
        onSendNotification(notification);
        setNewNotification('');
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Notification Center</h2>
            <ul className="notification-list mb-4">
                {notifications.map((notification) => (
                    <li key={notification.id} className="notification-item">
                        <div className="notification-type">{notification.type}</div>
                        <div className="notification-content">{notification.content}</div>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="text"
                    value={newNotification}
                    onChange={(e) => setNewNotification(e.target.value)}
                    placeholder="Type your notification..."
                    className="flex-grow border border-gray-300 rounded-md px-4 py-2 mr-2"
                />
                <button
                    type="submit"
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default NotificationCenter;