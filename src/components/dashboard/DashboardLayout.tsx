
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar/AppSidebar';

const DashboardLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-[#8c52ff]/20 bg-white flex items-center px-4">
            <SidebarTrigger className="text-[#8c52ff] hover:bg-[#8c52ff]/10" />
            <h1 className="ml-4 text-xl font-bold text-[#8c52ff]">Dashboard</h1>
          </header>
          <main className="flex-1 p-6 bg-gradient-to-br from-[#8c52ff]/5 via-white to-[#8c52ff]/10">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
