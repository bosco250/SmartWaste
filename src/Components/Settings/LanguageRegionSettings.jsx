import React, { useState } from 'react';

const LanguageRegionSettings = ({ settings, onUpdate }) => {
    const [language, setLanguage] = useState(settings.language);
    const [region, setRegion] = useState(settings.region);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ language, region });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Language and Region Settings</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Language</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Region</label>
                    <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CA">Canada</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                >
                    Save Language and Region Settings
                </button>
            </form>
        </div>
    );
};

export default LanguageRegionSettings;