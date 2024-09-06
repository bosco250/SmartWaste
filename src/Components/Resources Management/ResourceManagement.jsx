import React, { useState } from 'react';
import ResourceAllocation from './ResourceAllocation';
import InventoryManagement from './InventoryManagement';
import ResourceModal from './ResourceModal'
import { resourceData } from './data';

const ResourceManagement = () => {
    const [resources, setResources] = useState(resourceData);
    const [selectedResource, setSelectedResource] = useState(null);
    const [showAddResourceModal, setShowAddResourceModal] = useState(false);

    const handleEditResource = (resource) => {
        setSelectedResource(resource);
    };

    const handleSaveResource = (updatedResource) => {
        const updatedResources = resources.map((resource) =>
            resource.id === updatedResource.id ? updatedResource : resource
        );
        setResources(updatedResources);
        setSelectedResource(null);
    };

    const handleAddResource = (newResource) => {
        setResources([...resources, newResource]);
        setShowAddResourceModal(false);
    };

    return (
        <div className="p-8 bg-green-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center">Resource Management Dashboard</h1>
            <div className="flex justify-end mb-4">
                <button
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                    onClick={() => setShowAddResourceModal(true)}
                >
                    Add Resource
                </button>
            </div>
            <ResourceAllocation 
                resources={resources} 
                onEditResource={handleEditResource} 
            />
            <InventoryManagement resources={resources} />
            {selectedResource && (
                <ResourceModal 
                    resource={selectedResource} 
                    onSave={handleSaveResource} 
                    onCancel={() => setSelectedResource(null)} 
                />
            )}
            {showAddResourceModal && (
                <ResourceModal 
                    onSave={handleAddResource} 
                    onCancel={() => setShowAddResourceModal(false)} 
                />
            )}
        </div>
    );
};

export default ResourceManagement;