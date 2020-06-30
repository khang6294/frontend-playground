import React from 'react';
import { IErrorBoundaryState } from './interfaces';
import ErrorUI from 'components/ErrorUI';

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: Error | null, errorInfo: object) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorUI errorMessage='There are some errors. Please contact our customer support.' />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
