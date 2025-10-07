import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Welcome } from './pages/Welcome';
import { ErrorBoundary } from './core/error/ErrorBoundary';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <MainLayout>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          {/* Feature routes will be added under src/features/ and imported here */}
        </Routes>
      </MainLayout>
    </ErrorBoundary>
  );
};

export default App;
