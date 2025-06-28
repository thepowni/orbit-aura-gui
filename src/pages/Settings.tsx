
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Settings as SettingsIcon, Shield, Bell, Palette, Globe, Monitor, User } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  const loginHistory = [
    { date: '2024-01-15 14:30', location: 'Istanbul, Turkey', ip: '185.123.45.67', device: 'Chrome Windows' },
    { date: '2024-01-14 09:15', location: 'Ankara, Turkey', ip: '78.456.78.90', device: 'Firefox MacOS' },
    { date: '2024-01-13 16:45', location: 'Izmir, Turkey', ip: '212.789.12.34', device: 'Chrome Android' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-2 border-[#8c52ff]/20">
              <CardHeader>
                <CardTitle className="text-[#8c52ff] flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  General Settings
                </CardTitle>
                <CardDescription>Application preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-updates">Auto Updates</Label>
                    <p className="text-sm text-gray-500">Automatically install updates</p>
                  </div>
                  <Switch id="auto-updates" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="analytics">Analytics</Label>
                    <p className="text-sm text-gray-500">Help improve the application</p>
                  </div>
                  <Switch id="analytics" />
                </div>
                <Button
                  variant="outline"
                  className="w-full border-[#8c52ff]/30 text-[#8c52ff] hover:bg-[#8c52ff]/10 mt-4"
                >
                  Reset to Defaults
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'security':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-2 border-[#8c52ff]/20">
              <CardHeader>
                <CardTitle className="text-[#8c52ff] flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>Manage your security preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-lock">Auto-lock</Label>
                    <p className="text-sm text-gray-500">Automatically lock after inactivity</p>
                  </div>
                  <Switch id="auto-lock" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="encryption">Advanced Encryption</Label>
                    <p className="text-sm text-gray-500">Enable enhanced security protocols</p>
                  </div>
                  <Switch id="encryption" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="monitoring">Real-time Monitoring</Label>
                    <p className="text-sm text-gray-500">Monitor threats in real-time</p>
                  </div>
                  <Switch id="monitoring" defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#8c52ff]/20">
              <CardHeader>
                <CardTitle className="text-[#8c52ff] flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Recent Logins
                </CardTitle>
                <CardDescription>Your recent login history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {loginHistory.map((login, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <p className="font-medium text-sm">{login.date}</p>
                      <p className="text-sm text-gray-600">{login.location}</p>
                      <p className="text-xs text-gray-500">IP: {login.ip} • {login.device}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'personalization':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-2 border-[#8c52ff]/20">
              <CardHeader>
                <CardTitle className="text-[#8c52ff] flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personalization
                </CardTitle>
                <CardDescription>Customize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Push Notifications</Label>
                    <p className="text-sm text-gray-500">Receive push notifications</p>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sound">Sound Effects</Label>
                    <p className="text-sm text-gray-500">Enable sound effects</p>
                  </div>
                  <Switch id="sound" />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'appearance':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-2 border-[#8c52ff]/20">
              <CardHeader>
                <CardTitle className="text-[#8c52ff] flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Appearance
                </CardTitle>
                <CardDescription>Customize the interface</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-sm text-gray-500">Switch to dark theme</p>
                  </div>
                  <Switch id="dark-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="compact-view">Compact View</Label>
                    <p className="text-sm text-gray-500">Reduce spacing and padding</p>
                  </div>
                  <Switch id="compact-view" />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200">
        {[
          { id: 'general', label: 'General', icon: Globe },
          { id: 'security', label: 'Security', icon: Shield },
          { id: 'personalization', label: 'Personalization', icon: User },
          { id: 'appearance', label: 'Appearance', icon: Palette },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-[#8c52ff] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default Settings;
