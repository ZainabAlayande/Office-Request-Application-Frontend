// import React, { ReactNode, ErrorInfo } from 'react';

// interface ErrorBoundaryProps {
//   children: ReactNode;
// }

// class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
//   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     // Log the error or handle it as needed
//     console.error(error, errorInfo);
//   }

//   render() {
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;


import React, { ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error or handle it as needed
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
