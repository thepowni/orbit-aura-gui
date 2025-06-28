
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, CreditCard, User, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
          <h2 className="text-2xl font-bold text-[#8c52ff] mb-1">COV</h2>
          <p className="text-sm text-gray-500">www.orbitnetting.com</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Account Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/account"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-lg ${
                        isActive
                          ? 'bg-[#8c52ff] text-white'
                          : 'text-gray-700 hover:bg-[#8c52ff]/10 hover:text-[#8c52ff]'
                      }`
                    }
                  >
                    <div className="w-8 h-8 bg-[#8c52ff]/10 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-[#8c52ff]" />
                    </div>
                    <span>Account</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-[#8c52ff]/20" />

        {/* COV Select Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#8c52ff] font-bold text-xl">
            COV Select
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-lg ${
                          isActive
                            ? 'bg-[#8c52ff] text-white'
                            : 'text-gray-700 hover:bg-[#8c52ff]/10 hover:text-[#8c52ff]'
                        }`
                      }
                    >
                      <item.icon className="w-6 h-6" />
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
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-lg ${
                          isActive
                            ? 'bg-[#8c52ff] text-white'
                            : 'text-gray-700 hover:bg-[#8c52ff]/10 hover:text-[#8c52ff]'
                        }`
                      }
                    >
                      <item.icon className="w-6 h-6" />
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
