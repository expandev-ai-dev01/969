import React from 'react';
import { AppHeader } from '../core/components/AppHeader';
import { AppFooter } from '../core/components/AppFooter';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <AppHeader />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <AppFooter />
    </div>
  );
};
