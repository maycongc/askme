import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './services/firebase';

import { ThemesContextProvider } from './contexts/ThemesContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemesContextProvider>
      <App />
    </ThemesContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
