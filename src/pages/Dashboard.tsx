
import React from 'react';
import ConnectionToggle from '@/components/dashboard/ConnectionToggle';

const Dashboard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-full">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#8c52ff] mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your connections</p>
        </div>
        <ConnectionToggle />
      </div>
    </div>
  );
};

export default Dashboard;
