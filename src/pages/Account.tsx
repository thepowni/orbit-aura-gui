
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-2 border-[#8c52ff]/20">
          <CardHeader>
            <CardTitle className="text-[#8c52ff] flex items-center gap-2 text-2xl">
              <User className="w-6 h-6" />
              Profile Information
            </CardTitle>
            <CardDescription className="text-lg">Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                disabled={!isEditing}
                className="border-[#8c52ff]/30 focus:border-[#8c52ff] text-lg p-3"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={!isEditing}
                className="border-[#8c52ff]/30 focus:border-[#8c52ff] text-lg p-3"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg">Phone</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                disabled={!isEditing}
                className="border-[#8c52ff]/30 focus:border-[#8c52ff] text-lg p-3"
              />
            </div>

            {/* Discord Integration */}
            <div className="border-t pt-4 mt-4">
              <h4 className="font-medium text-gray-900 mb-3 text-xl">Discord Integration</h4>
              <div className="space-y-2">
                <Label className="text-lg">Discord Username</Label>
                <Input
                  value="JohnDoe#1234"
                  disabled
                  className="border-[#8c52ff]/30 bg-gray-50 text-lg p-3"
                />
              </div>
              <div className="space-y-2 mt-2">
                <Label className="text-lg">Discord ID</Label>
                <Input
                  value="123456789012345678"
                  disabled
                  className="border-[#8c52ff]/30 bg-gray-50 text-lg p-3"
                />
              </div>
            </div>

            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button
                    onClick={handleSave}
                    className="bg-[#8c52ff] hover:bg-[#7a45e6] text-white text-lg px-6 py-3"
                  >
                    Save Changes
                  </Button>
                  <Button
                    onClick={() => setIsEditing(false)}
                    variant="outline"
                    className="border-[#8c52ff]/30 text-[#8c52ff] hover:bg-[#8c52ff]/10 text-lg px-6 py-3"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-[#8c52ff] hover:bg-[#7a45e6] text-white text-lg px-6 py-3"
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#8c52ff]/20">
          <CardHeader>
            <CardTitle className="text-[#8c52ff] flex items-center gap-2 text-2xl">
              <Lock className="w-6 h-6" />
              Security
            </CardTitle>
            <CardDescription className="text-lg">Manage your security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full border-[#8c52ff]/30 text-[#8c52ff] hover:bg-[#8c52ff]/10 text-lg py-3"
            >
              Change Password
            </Button>
            <Button
              variant="outline"
              className="w-full border-[#8c52ff]/30 text-[#8c52ff] hover:bg-[#8c52ff]/10 text-lg py-3"
            >
              Enable Two-Factor Authentication
            </Button>
            <Button
              variant="outline"
              className="w-full border-[#8c52ff]/30 text-[#8c52ff] hover:bg-[#8c52ff]/10 text-lg py-3"
            >
              Manage Login Sessions
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#8c52ff]/20 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-[#8c52ff] flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6" />
              Preferences
            </CardTitle>
            <CardDescription className="text-lg">Customize your experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-[#8c52ff]/20 rounded-lg">
                <Mail className="w-10 h-10 text-[#8c52ff] mx-auto mb-2" />
                <h3 className="font-semibold text-[#8c52ff] mb-1 text-xl">Email Notifications</h3>
                <p className="text-lg text-gray-600">Manage notification preferences</p>
              </div>
              <div className="text-center p-4 border border-[#8c52ff]/20 rounded-lg">
                <Settings className="w-10 h-10 text-[#8c52ff] mx-auto mb-2" />
                <h3 className="font-semibold text-[#8c52ff] mb-1 text-xl">Privacy Settings</h3>
                <p className="text-lg text-gray-600">Control your privacy options</p>
              </div>
              <div className="text-center p-4 border border-[#8c52ff]/20 rounded-lg">
                <User className="w-10 h-10 text-[#8c52ff] mx-auto mb-2" />
                <h3 className="font-semibold text-[#8c52ff] mb-1 text-xl">Display Settings</h3>
                <p className="text-lg text-gray-600">Customize interface appearance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Account;
