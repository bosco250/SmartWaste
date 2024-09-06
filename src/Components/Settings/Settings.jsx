import React, { useState } from 'react';
import GeneralSettings from './GeneralSettings';
import NotificationPreferences from './NotificationPreferences';
import SecuritySettings from './SecuritySettings';
import LanguageRegionSettings from './LanguageRegionSettings';

const Settings = () => {
    const [generalSettings, setGeneralSettings] = useState({
        siteName: 'SmartWaste',
        siteURL: 'https://smartwaste.example.com',
    });

    const [notificationPreferences, setNotificationPreferences] = useState({
        emailNotifications: true,
        smsNotifications: false,
    });

    const [securitySettings, setSecuritySettings] = useState({
        password: '',
        twoFactorAuth: false,
    });

    const [languageRegion, setLanguageRegion] = useState({
        language: 'English',
        region: 'US',
    });

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center ">Settings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GeneralSettings 
                    settings={generalSettings} 
                    onUpdate={setGeneralSettings} 
                />
                <NotificationPreferences 
                    preferences={notificationPreferences} 
                    onUpdate={setNotificationPreferences} 
                />
                <SecuritySettings 
                    settings={securitySettings} 
                    onUpdate={setSecuritySettings} 
                />
                <LanguageRegionSettings 
                    settings={languageRegion} 
                    onUpdate={setLanguageRegion} 
                />
            </div>
        </div>
    );
};

export default Settings;