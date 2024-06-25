import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserProvider } from './context/UserContext.jsx';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ToastContainer position="bottom-right" />
      <App />
    </UserProvider>
  </React.StrictMode>
);
