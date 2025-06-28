
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, Calendar, Shield } from 'lucide-react';

const Account: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <Card className="border-[#8c52ff]/20">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="bg-[#8c52ff]/10 text-[#8c52ff] text-2xl font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl text-[#8c52ff]">John Doe</CardTitle>
              <CardDescription className="text-lg">COV Security Member</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Plan Information */}
      <Card className="border-[#8c52ff]/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-[#8c52ff]">
            <Shield className="w-6 h-6" />
            Plan Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-700">Current Plan:</span>
              <Badge variant="secondary" className="bg-[#8c52ff] text-white text-lg px-4 py-2">
                Select
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Information */}
      <Card className="border-[#8c52ff]/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-[#8c52ff]">
            <User className="w-6 h-6" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-medium text-gray-700">
                <User className="w-5 h-5" />
                Full Name
              </label>
              <p className="text-lg text-gray-600 bg-gray-50 p-3 rounded-md">John Doe</p>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-medium text-gray-700">
                <Mail className="w-5 h-5" />
                Email
              </label>
              <p className="text-lg text-gray-600 bg-gray-50 p-3 rounded-md">john.doe@example.com</p>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-medium text-gray-700">
                <Phone className="w-5 h-5" />
                Phone
              </label>
              <p className="text-lg text-gray-600 bg-gray-50 p-3 rounded-md">+1 (555) 123-4567</p>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-medium text-gray-700">
                <Calendar className="w-5 h-5" />
                Member Since
              </label>
              <p className="text-lg text-gray-600 bg-gray-50 p-3 rounded-md">January 15, 2024</p>
            </div>
          </div>

          {/* Discord Integration Section */}
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Discord Integration</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#5865F2]/10 rounded-lg border border-[#5865F2]/20">
                <div>
                  <p className="font-medium text-gray-800">Discord Account</p>
                  <p className="text-sm text-gray-600">Connected: JohnDoe#1234</p>
                  <p className="text-sm text-gray-500">ID: 123456789012345678</p>
                </div>
                <Badge variant="outline" className="bg-[#5865F2] text-white border-[#5865F2]">
                  Connected
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Account;
