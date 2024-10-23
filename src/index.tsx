import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <AuthProvider>
    <Pages />
  </AuthProvider>,
  document.getElementById('root')
);
