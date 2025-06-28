
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, CheckCircle, XCircle, User, LogOut, Wifi, Cable, Power, PowerOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const COV: React.FC = () => {
  const { logout } = useAuth();
  const [connectionType, setConnectionType] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);

  const features = [
    { name: 'Advanced Encryption', status: 'active' },
    { name: 'Real-time Monitoring', status: 'active' },
    { name: 'Threat Detection', status: 'active' },
    { name: 'Auto-Updates', status: 'inactive' },
  ];

  const handleToggle = () => {
    if (!connectionType) {
      alert('Please select a connection type first');
      return;
    }
    setIsConnected(!isConnected);
  };

  return (
    <div className="space-y-6">
      {/* Account Widget at the top */}
      <Card className="border-2 border-[#8c52ff]/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8c52ff]/10 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-[#8c52ff]" />
              </div>
              <div>
                <p className="font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
            </div>
            <Button
              onClick={logout}
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#8c52ff] mb-2 flex items-center justify-center gap-3">
          <Shield className="w-8 h-8" />
          COV Security
        </h1>
        <p className="text-gray-600">Comprehensive security management</p>
      </div>

      {/* Connection Control with Big Round Button */}
      <div className="flex justify-center mb-8">
        <Card className="w-full max-w-md border-2 border-[#8c52ff]/20 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold text-[#8c52ff]">
              Connection Control
            </CardTitle>
            <CardDescription>
              Select connection type and toggle
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Connection Type</label>
              <Select value={connectionType} onValueChange={setConnectionType}>
                <SelectTrigger className="border-[#8c52ff]/30 focus:border-[#8c52ff]">
                  <SelectValue placeholder="Select connection type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wifi">
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4" />
                      WiFi
                    </div>
                  </SelectItem>
                  <SelectItem value="ethernet">
                    <div className="flex items-center gap-2">
                      <Cable className="w-4 h-4" />
                      Ethernet
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Big Round Connection Button */}
            <div className="flex justify-center py-4">
              <button
                onClick={handleToggle}
                disabled={!connectionType}
                className={`w-32 h-32 rounded-full border-4 transition-all duration-300 flex items-center justify-center ${
                  !connectionType 
                    ? 'bg-gray-100 border-gray-300 cursor-not-allowed' 
                    : isConnected 
                      ? 'bg-green-500 border-green-600 hover:bg-green-600 shadow-lg' 
                      : 'bg-[#8c52ff] border-[#7a45e6] hover:bg-[#7a45e6] shadow-lg'
                }`}
              >
                {isConnected ? (
                  <Power className="w-12 h-12 text-white" />
                ) : (
                  <PowerOff className="w-12 h-12 text-white" />
                )}
              </button>
            </div>

            <div className="text-center">
              <p className="font-medium text-gray-700">
                Status: {isConnected ? 'Connected' : 'Disconnected'}
              </p>
              {connectionType && (
                <p className="text-sm text-gray-500">
                  Type: {connectionType === 'wifi' ? 'WiFi' : 'Ethernet'}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="border-2 border-[#8c52ff]/20">
          <CardHeader>
            <CardTitle className="text-[#8c52ff]">Security Status</CardTitle>
            <CardDescription>Current protection level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="space-y-4 w-full max-w-md">
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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default COV;
