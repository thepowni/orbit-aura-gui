
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Wifi, Cable, Power, PowerOff } from 'lucide-react';

const ConnectionToggle: React.FC = () => {
  const [connectionType, setConnectionType] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);

  const handleToggle = () => {
    if (!connectionType) {
      alert('Please select a connection type first');
      return;
    }
    setIsConnected(!isConnected);
  };

  return (
    <Card className="w-full max-w-md mx-auto border-2 border-[#8c52ff]/20 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-[#8c52ff] flex items-center justify-center gap-2">
          {isConnected ? <Power className="w-5 h-5" /> : <PowerOff className="w-5 h-5" />}
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

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-700">Connection Status</p>
            <p className="text-sm text-gray-500">
              {isConnected ? 'Connected' : 'Disconnected'}
            </p>
          </div>
          <Switch
            checked={isConnected}
            onCheckedChange={handleToggle}
            disabled={!connectionType}
            className="data-[state=checked]:bg-[#8c52ff]"
          />
        </div>

        <div className="text-center">
          <Button
            onClick={handleToggle}
            disabled={!connectionType}
            className={`w-full ${
              isConnected 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-[#8c52ff] hover:bg-[#7a45e6]'
            } text-white`}
          >
            {isConnected ? 'Disconnect' : 'Connect'}
          </Button>
        </div>

        {connectionType && (
          <div className="text-center text-sm text-gray-600">
            Selected: {connectionType === 'wifi' ? 'WiFi' : 'Ethernet'}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ConnectionToggle;
