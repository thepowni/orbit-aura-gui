
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Settings as SettingsIcon, Shield, Bell, Palette, Globe } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#8c52ff] mb-2 flex items-center justify-center gap-3">
          <SettingsIcon className="w-8 h-8" />
          Settings
        </h1>
        <p className="text-gray-600">Configure your application preferences</p>
      </div>

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
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
            <CardDescription>Control your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="threat-alerts">Threat Alerts</Label>
                <p className="text-sm text-gray-500">Get notified of security threats</p>
              </div>
              <Switch id="threat-alerts" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="status-updates">Status Updates</Label>
                <p className="text-sm text-gray-500">Receive system status notifications</p>
              </div>
              <Switch id="status-updates" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-reports">Email Reports</Label>
                <p className="text-sm text-gray-500">Weekly security reports via email</p>
              </div>
              <Switch id="email-reports" />
            </div>
          </CardContent>
        </Card>

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

        <Card className="border-2 border-[#8c52ff]/20">
          <CardHeader>
            <CardTitle className="text-[#8c52ff] flex items-center gap-2">
              <Globe className="w-5 h-5" />
              General
            </CardTitle>
            <CardDescription>General application settings</CardDescription>
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
    </div>
  );
};

export default Settings;
