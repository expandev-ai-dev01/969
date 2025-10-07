import React from 'react';

export const AppFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Sistema de Gestão de Pessoas
      </div>
    </footer>
  );
};

export default AppFooter;
