import React, { useState } from 'react';

const ResourceLibrary = ({ documents, onUploadDocument }) => {
    const [newDocument, setNewDocument] = useState(null);

    const handleUpload = (e) => {
        e.preventDefault();
        const document = {
            id: Date.now(),
            name: newDocument.name,
            type: newDocument.type,
        };
        onUploadDocument(document);
        setNewDocument(null);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Resource Library</h2>
            <ul className="document-list mb-4">
                {documents.map((document) => (
                    <li key={document.id} className="document-item">
                        <div className="document-name">{document.name}</div>
                        <div className="document-type">{document.type}</div>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleUpload} className="flex">
                <input
                    type="file"
                    onChange={(e) => setNewDocument(e.target.files[0])}
                    className="flex-grow border border-gray-300 rounded-md px-4 py-2 mr-2"
                />
                <button
                    type="submit"
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                >
                    Upload
                </button>
            </form>
        </div>
    );
};

export default ResourceLibrary;