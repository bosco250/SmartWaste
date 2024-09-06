import React from 'react';

const NotificationPreferences = ({ preferences, onUpdate }) => {
    const handleChange = (e) => {
        const { name, checked } = e.target;
        onUpdate({ ...preferences, [name]: checked });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        name="emailNotifications"
                        checked={preferences.emailNotifications}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Email Notifications
                </label>
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        name="smsNotifications"
                        checked={preferences.smsNotifications}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    SMS Notifications
                </label>
            </div>
        </div>
    );
};

export default NotificationPreferences;