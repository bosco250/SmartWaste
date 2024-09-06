import React, { useState } from 'react';

const SecuritySettings = ({ settings, onUpdate }) => {
    const [password, setPassword] = useState(settings.password);
    const [twoFactorAuth, setTwoFactorAuth] = useState(settings.twoFactorAuth);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ password, twoFactorAuth });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">New Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            checked={twoFactorAuth}
                            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                            className="mr-2"
                        />
                        Enable Two-Factor Authentication
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                >
                    Save Security Settings
                </button>
            </form>
        </div>
    );
};

export default SecuritySettings;