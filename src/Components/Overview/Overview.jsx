import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';

const Overview = () => {
    // Static data for the Pie Chart
    const pieData = [
        { id: 'Active Users', label: 'Active Users', value: 70 },
        { id: 'Inactive Users', label: 'Inactive Users', value: 30 },
    ];

    // Static data for the Bar Chart
    const barData = [
        { user: 'Admin', projects: 5 },
        { user: 'Collector', projects: 8 },
        { user: 'Customer', projects: 3 },
    ];

    // Static data for the Line Chart
    const lineData = [
        {
            id: 'Projects Over Time',
            color: '#3182ce',
            data: [
                { x: 'Week 1', y: 3 },
                { x: 'Week 2', y: 5 },
                { x: 'Week 3', y: 8 },
                { x: 'Week 4', y: 4 },
            ],
        },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Overview Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">User Status Distribution</h2>
                    <div style={{ height: '300px' }}>
                        <ResponsivePie
                            data={pieData}
                            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            cornerRadius={3}
                            colors={{ scheme: 'nivo' }}
                            borderWidth={1}
                            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                            arcLinkLabelsTextColor="#333333"
                            arcLinkLabelsThickness={2}
                            arcLinkLabelsColor={{ from: 'color' }}
                            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                        />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Projects per User Role</h2>
                    <div style={{ height: '300px' }}>
                        <ResponsiveBar
                            data={barData}
                            keys={['projects']}
                            indexBy="user"
                            margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
                            padding={0.3}
                            colors={{ scheme: 'nivo' }}
                            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'User Role',
                                legendPosition: 'middle',
                                legendOffset: 32,
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Number of Projects',
                                legendPosition: 'middle',
                                legendOffset: -40,
                            }}
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">Projects Over Time</h2>
                <div style={{ height: '300px' }}>
                    <ResponsiveLine
                        data={lineData}
                        margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                            min: 'auto',
                            max: 'auto',
                            stacked: true,
                            reverse: false,
                        }}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Week',
                            legendOffset: 36,
                            legendPosition: 'middle',
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Number of Projects',
                            legendOffset: -40,
                            legendPosition: 'middle',
                        }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]}
                    />
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                <p className="text-gray-700">
                    This dashboard provides an overview of user management metrics, including the distribution of active and inactive users, the number of projects assigned to different user roles, and a summary of project trends over time.
                </p>
            </div>
        </div>
    );
};

export default Overview;