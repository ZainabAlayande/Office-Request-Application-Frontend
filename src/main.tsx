import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from '../src/ErrorBoundary';
import './index.css';
// import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
      {/* <ToastContainer /> */}
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
