// import { render } from 'react-dom';
// import React from 'react';
// import App from './App.tsx';
// import './index.css';

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from '../src/ErrorBoundary';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
