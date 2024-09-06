import React, { useState } from 'react';

const GeneralSettings = ({ settings, onUpdate }) => {
    const [siteName, setSiteName] = useState(settings.siteName);
    const [siteURL, setSiteURL] = useState(settings.siteURL);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ siteName, siteURL });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">General Platform Settings</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Site Name</label>
                    <input
                        type="text"
                        value={siteName}
                        onChange={(e) => setSiteName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Site URL</label>
                    <input
                        type="url"
                        value={siteURL}
                        onChange={(e) => setSiteURL(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                >
                    Save Settings
                </button>
            </form>
        </div>
    );
};

export default GeneralSettings;