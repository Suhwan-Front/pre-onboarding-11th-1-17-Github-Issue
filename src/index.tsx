import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoadingProvider from './contexts/provider/LoadingProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LoadingProvider>
    <App />
  </LoadingProvider>
);
