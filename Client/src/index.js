import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import client from './apollo/client'
import { AuthProvider } from './context/authContext';

const documento = document.getElementById('root')
const root = ReactDOM.createRoot(documento);

root.render(
  <AuthProvider>

    <ApolloProvider client={client}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>
);
