
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle, XCircle } from 'lucide-react';

const COV: React.FC = () => {
  const features = [
    { name: 'Advanced Encryption', status: 'active' },
    { name: 'Real-time Monitoring', status: 'active' },
    { name: 'Threat Detection', status: 'active' },
    { name: 'Auto-Updates', status: 'inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#8c52ff] mb-2 flex items-center justify-center gap-3">
          <Shield className="w-8 h-8" />
          COV Security
        </h1>
        <p className="text-gray-600">Comprehensive security management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-[#8c52ff]/20">
          <CardHeader>
            <CardTitle className="text-[#8c52ff]">Security Status</CardTitle>
            <CardDescription>Current protection level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{feature.name}</span>
                  {feature.status === 'active' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#8c52ff]/20">
          <CardHeader>
            <CardTitle className="text-[#8c52ff]">System Health</CardTitle>
            <CardDescription>Overall system performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium">CPU Usage</span>
                <span className="text-sm text-green-600">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Memory Usage</span>
                <span className="text-sm text-yellow-600">67%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Network Load</span>
                <span className="text-sm text-green-600">23%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default COV;
