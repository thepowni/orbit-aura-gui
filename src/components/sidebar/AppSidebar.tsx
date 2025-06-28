
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, CreditCard, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarHeader,
} from '@/components/ui/sidebar';

const mainItems = [
  { title: 'COV', url: '/cov', icon: Shield },
  { title: 'Pheurion', url: '/pheurion', icon: CreditCard },
];

const settingsItems = [
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-[#8c52ff]/20">
      <SidebarHeader className="p-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#8c52ff] mb-1">COV</h2>
          <p className="text-lg text-gray-500">www.orbitnetting.com</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Account Section - Larger */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/account"
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-4 rounded-lg transition-colors text-xl ${
                        isActive
                          ? 'bg-[#8c52ff] text-white'
                          : 'text-gray-700 hover:bg-[#8c52ff]/10 hover:text-[#8c52ff]'
                      }`
                    }
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="" alt="Profile" />
                      <AvatarFallback className="bg-[#8c52ff]/10 text-[#8c52ff] text-lg font-semibold">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <span>Account</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-[#8c52ff]/20" />

        {/* Main Navigation Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-xl ${
                          isActive
                            ? 'bg-[#8c52ff] text-white'
                            : 'text-gray-700 hover:bg-[#8c52ff]/10 hover:text-[#8c52ff]'
                        }`
                      }
                    >
                      <item.icon className="w-7 h-7" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-[#8c52ff]/20" />

        {/* Settings Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-xl ${
                          isActive
                            ? 'bg-[#8c52ff] text-white'
                            : 'text-gray-700 hover:bg-[#8c52ff]/10 hover:text-[#8c52ff]'
                        }`
                      }
                    >
                      <item.icon className="w-7 h-7" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
