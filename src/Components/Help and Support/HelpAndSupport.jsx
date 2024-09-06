import React from 'react';
import FAQSection from './FAQSection';
import ContactSupport from './ContactSupport';
import UserGuides from './UserGuides';

const HelpAndSupport = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center ">Help & Support</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FAQSection />
                <ContactSupport />
                <UserGuides />
            </div>
        </div>
    );
};

export default HelpAndSupport;