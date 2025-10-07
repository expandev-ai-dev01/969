import React from 'react';

type State = { hasError: boolean; error?: Error };

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  State
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    // Hook up to error reporting service here (Sentry, etc.)
    // errorReportingService.captureException(error, { extra: info });
    // For now we just log
    // eslint-disable-next-line no-console
    console.error('Unhandled error caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6">
          <h2 className="text-xl font-semibold">Algo deu errado</h2>
          <p className="text-sm text-gray-600 mt-2">
            Ocorreu um erro inesperado. Atualize a página ou contate o suporte.
          </p>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
