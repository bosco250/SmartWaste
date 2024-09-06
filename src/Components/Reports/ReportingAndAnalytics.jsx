import React, { useState } from 'react';
import CollectionRouteReports from './CollectionRouteReports';
import CustomReports from './CustomReports';
import ResourceAnalysis from './ResourceAnalysis';
import { reportData } from './data';
import CustomReportModal from './CustomReportModal';

const ReportingAndAnalytics = () => {
    const [reports, setReports] = useState(reportData);
    const [showCustomReportModal, setShowCustomReportModal] = useState(false);

    const handleGenerateCustomReport = (newReport) => {
        setReports([...reports, newReport]);
        setShowCustomReportModal(false);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center">Reporting and Analytics</h1>
            <div className="flex justify-end mb-4">
                <button
                    className="bg-green-800 text-white rounded-md px-4 py-2 hover:bg-green-950 transition duration-200"
                    onClick={() => setShowCustomReportModal(true)}
                >
                    Generate Custom Report
                </button>
            </div>
            <CollectionRouteReports reports={reports} />
            <CustomReports reports={reports} />
            <ResourceAnalysis reports={reports} />
            {showCustomReportModal && (
                <CustomReportModal 
                    onGenerate={handleGenerateCustomReport} 
                    onCancel={() => setShowCustomReportModal(false)} 
                />
            )}
        </div>
    );
};

export default ReportingAndAnalytics;