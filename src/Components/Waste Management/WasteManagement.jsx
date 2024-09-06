import React, { useState } from 'react';
import CollectionSchedule from './CollectionSchedule';
import CollectionScheduleModal from './CollectionScheduleModal';
import RouteOptimizer from './RouteOptimizer';
import WasteProcessing from './WasteProcessing';
import { collectionData } from './data';

const WasteManagement = () => {
    const [schedules, setSchedules] = useState(collectionData);
    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [showAddScheduleModal, setShowAddScheduleModal] = useState(false);

    const handleEditSchedule = (schedule) => {
        setSelectedSchedule(schedule);
    };

    const handleSaveSchedule = (updatedSchedule) => {
        const updatedSchedules = schedules.map((schedule) =>
            schedule.id === updatedSchedule.id ? updatedSchedule : schedule
        );
        setSchedules(updatedSchedules);
        setSelectedSchedule(null);
    };

    const handleAddSchedule = (newSchedule) => {
        setSchedules([...schedules, newSchedule]);
        setShowAddScheduleModal(false);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center">Waste Management Dashboard</h1>
            <div className="flex justify-end">
                <button
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                    onClick={() => setShowAddScheduleModal(true)}
                >
                    Add Collection Schedule
                </button>
            </div>
            <CollectionSchedule 
                schedules={schedules} 
                onEditSchedule={handleEditSchedule} 
            />
            <RouteOptimizer />
            <WasteProcessing />
            {selectedSchedule && (
                <CollectionScheduleModal 
                    schedule={selectedSchedule} 
                    onSave={handleSaveSchedule} 
                    onCancel={() => setSelectedSchedule(null)} 
                />
            )}
            {showAddScheduleModal && (
                <CollectionScheduleModal 
                    onSave={handleAddSchedule} 
                    onCancel={() => setShowAddScheduleModal(false)} 
                />
            )}
        </div>
    );
};

export default WasteManagement;