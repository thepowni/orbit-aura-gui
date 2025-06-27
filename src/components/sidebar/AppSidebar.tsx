
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Shield, CreditCard, User, LogOut } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const menuItems = [
  { title: 'Dashboard', url: '/dashboard', icon: Home },
  { title: 'COV', url: '/cov', icon: Shield },
  { title: 'Pheurion', url: '/pheurion', icon: CreditCard },
  { title: 'Account', url: '/account', icon: User },
];

export function AppSidebar() {
  const { logout } = useAuth();

  return (
    <Sidebar className="border-r border-[#8c52ff]/20">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#8c52ff] font-bold text-lg">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-[#8c52ff] text-white'
                            : 'text-gray-700 hover:bg-[#8c52ff]/10 hover:text-[#8c52ff]'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          onClick={logout}
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
