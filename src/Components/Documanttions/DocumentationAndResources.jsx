import React, { useState } from 'react';
import ResourceLibrary from './ResourceLibrary';
import TrainingModules from './TrainingModules';
import WasteManagementGuidelines from './WasteManagementGuidelines';
import { documentData } from './data';

const DocumentationAndResources = () => {
    const [documents, setDocuments] = useState(documentData);

    const handleUploadDocument = (newDocument) => {
        setDocuments([...documents, newDocument]);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center">Documentation and Resources</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ResourceLibrary 
                    documents={documents} 
                    onUploadDocument={handleUploadDocument} 
                />
                <TrainingModules />
                <WasteManagementGuidelines />
            </div>
        </div>
    );
};

export default DocumentationAndResources;