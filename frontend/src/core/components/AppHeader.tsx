import React from 'react';

export const AppHeader: React.FC = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-semibold">
            SGP
          </div>
          <div>
            <h2 className="text-lg font-semibold">Sistema de Gestão de Pessoas</h2>
            <p className="text-xs text-gray-500">Gestão de colaboradores em home office</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
