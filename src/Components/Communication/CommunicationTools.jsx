import React, { useState } from 'react';
import InAppMessaging from './InAppMessaging';
import NotificationCenter from './NotificationCenter';
import { messageData, notificationData } from './data';

const CommunicationTools = () => {
    const [messages, setMessages] = useState(messageData);
    const [notifications, setNotifications] = useState(notificationData);

    const handleSendMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    const handleSendNotification = (newNotification) => {
        setNotifications([...notifications, newNotification]);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center">Communication Tools</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InAppMessaging 
                    messages={messages} 
                    onSendMessage={handleSendMessage} 
                />
                <NotificationCenter 
                    notifications={notifications} 
                    onSendNotification={handleSendNotification} 
                />
            </div>
        </div>
    );
};

export default CommunicationTools;