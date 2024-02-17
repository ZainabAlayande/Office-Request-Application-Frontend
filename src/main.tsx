import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from '../src/ErrorBoundary';
import { Toaster } from 'sonner';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
    <Toaster richColors/>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
