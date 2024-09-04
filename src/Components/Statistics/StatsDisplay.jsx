import React from 'react';

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-xl font-bold text-[#184b41]">{label}</div>
  </div>
);

const StatsDisplay = () => {
  return (
    <div className="flex justify-between mb-[-80px] flex-wrap items-center max-w-3xl py-14 bg-white mx-auto">
      <StatItem value="200+" label="Members" />
      <StatItem value="20" label="Waste Banks" />
      <StatItem value="50" label="Waste Bins" />
      <StatItem value="150" label="Products" />
      <StatItem value="75" label="Routes" />
    </div>
  );
};

export default StatsDisplay;
