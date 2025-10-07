import React from 'react';

/**
 * Welcome page - minimal public entry point for the application.
 * No business logic is implemented here; this file serves as a placeholder
 * for feature teams to add pages under src/features.
 */
export const Welcome: React.FC = () => {
  return (
    <section className="rounded-md bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold mb-2">Sistema de Gestão de Pessoas</h1>
      <p className="text-gray-600">
        Bem-vindo ao sistema para gerenciar colaboradores em home office.
      </p>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Use this foundation to add features like Cadastro de Colaboradores, Controle de Jornada,
          Dashboard de Produtividade and more.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
