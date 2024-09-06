import React from 'react';

const UserGuides = () => {
    const guides = [
        { title: 'User Guide for Waste Collection', link: '#' },
        { title: 'Recycling Guidelines', link: '#' },
        { title: 'Troubleshooting Common Issues', link: '#' },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">User Guides and Documentation</h2>
            <ul className="list-disc list-inside">
                {guides.map((guide, index) => (
                    <li key={index} className="mb-2">
                        <a href={guide.link} className="text-green-800 hover:underline">
                            {guide.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserGuides;