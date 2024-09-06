import React from 'react';

const InventoryManagement = ({ resources }) => {
    const bins = resources.filter(resource => resource.type === 'Bin');
    const vehicles = resources.filter(resource => resource.type === 'Vehicle');

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Inventory Management</h2>
            <h3 className="text-lg font-semibold mb-2">Waste Bins</h3>
            <ul className="list-disc list-inside mb-4">
                {bins.map(bin => (
                    <li key={bin.id}>{bin.name} - Status: {bin.status}</li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Vehicles</h3>
            <ul className="list-disc list-inside">
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>{vehicle.name} - Status: {vehicle.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryManagement;