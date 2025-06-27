
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Lock, Settings } from 'lucide-react';

const Account: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Saving profile:', profile);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#8c52ff] mb-2 flex items-center justify-center gap-3">
          <User className="w-8 h-8" />
          Account Settings
        </h1>
        <p className="text-gray-600">Manage your account information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-2 border-[#8c52ff]/20">
          <CardHeader>
            <CardTitle className="text-[#8c52ff] flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile Information
            </CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                disabled={!isEditing}
                className="border-[#8c52ff]/30 focus:border-[#8c52ff]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={!isEditing}
                className="border-[#8c52ff]/30 focus:border-[#8c52ff]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                disabled={!isEditing}
                className="border-[#8c52ff]/30 focus:border-[#8c52ff]"
              />
            </div>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button
                    onClick={handleSave}
                    className="bg-[#8c52ff] hover:bg-[#7a45e6] text-white"
                  >
                    Save Changes
                  </Button>
                  <Button
                    onClick={() => setIsEditing(false)}
                    variant="outline"
                    className="border-[#8c52ff]/30 text-[#8c52ff] hover:bg-[#8c52ff]/10"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-[#8c52ff] hover:bg-[#7a45e6] text-white"
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#8c52ff]/20">
          <CardHeader>
            <CardTitle className="text-[#8c52ff] flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Security
            </CardTitle>
            <CardDescription>Manage your security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full border-[#8c52ff]/30 text-[#8c52ff] hover:bg-[#8c52ff]/10"
            >
              Change Password
            </Button>
            <Button
              variant="outline"
              className="w-full border-[#8c52ff]/30 text-[#8c52ff] hover:bg-[#8c52ff]/10"
            >
              Enable Two-Factor Authentication
            </Button>
            <Button
              variant="outline"
              className="w-full border-[#8c52ff]/30 text-[#8c52ff] hover:bg-[#8c52ff]/10"
            >
              Manage Login Sessions
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#8c52ff]/20 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-[#8c52ff] flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Preferences
            </CardTitle>
            <CardDescription>Customize your experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-[#8c52ff]/20 rounded-lg">
                <Mail className="w-8 h-8 text-[#8c52ff] mx-auto mb-2" />
                <h3 className="font-semibold text-[#8c52ff] mb-1">Email Notifications</h3>
                <p className="text-sm text-gray-600">Manage notification preferences</p>
              </div>
              <div className="text-center p-4 border border-[#8c52ff]/20 rounded-lg">
                <Settings className="w-8 h-8 text-[#8c52ff] mx-auto mb-2" />
                <h3 className="font-semibold text-[#8c52ff] mb-1">Privacy Settings</h3>
                <p className="text-sm text-gray-600">Control your privacy options</p>
              </div>
              <div className="text-center p-4 border border-[#8c52ff]/20 rounded-lg">
                <User className="w-8 h-8 text-[#8c52ff] mx-auto mb-2" />
                <h3 className="font-semibold text-[#8c52ff] mb-1">Display Settings</h3>
                <p className="text-sm text-gray-600">Customize interface appearance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Account;
