import React from 'react';

import { Button, Text } from '../';

interface ErrorBoundaryProps {
  error: any;
  resetErrorBoundary: any;
}

const ErrorFallback: React.FC<ErrorBoundaryProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role='alert'>
      <Text>Something went wrong:</Text>
      <pre>{error.message}</pre>
      <Button text='Try again' onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
};

export default ErrorFallback;
