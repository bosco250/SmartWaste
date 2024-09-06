import React, { useState } from 'react';
import CollectionReminders from './CollectionReminders';
import NotificationManager from './NotificationManager';
import { notificationData } from './data';
import NotificationModal from './NotificationModal';

const AlertsAndNotifications = () => {
    const [notifications, setNotifications] = useState(notificationData);
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [showAddNotificationModal, setShowAddNotificationModal] = useState(false);

    const handleEditNotification = (notification) => {
        setSelectedNotification(notification);
    };

    const handleSaveNotification = (updatedNotification) => {
        const updatedNotifications = notifications.map((notification) =>
            notification.id === updatedNotification.id ? updatedNotification : notification
        );
        setNotifications(updatedNotifications);
        setSelectedNotification(null);
    };

    const handleAddNotification = (newNotification) => {
        setNotifications([...notifications, newNotification]);
        setShowAddNotificationModal(false);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center">Alerts and Notifications</h1>
            <div className="flex justify-end">
                <button
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                    onClick={() => setShowAddNotificationModal(true)}
                >
                    Create Notification
                </button>
            </div>
            <CollectionReminders />
            <NotificationManager 
                notifications={notifications} 
                onEditNotification={handleEditNotification} 
            />
            {selectedNotification && (
                <NotificationModal 
                    notification={selectedNotification} 
                    onSave={handleSaveNotification} 
                    onCancel={() => setSelectedNotification(null)} 
                />
            )}
            {showAddNotificationModal && (
                <NotificationModal 
                    onSave={handleAddNotification} 
                    onCancel={() => setShowAddNotificationModal(false)} 
                />
            )}
        </div>
    );
};

export default AlertsAndNotifications;