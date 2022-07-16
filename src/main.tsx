import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import App from './App';
import ScrollTop from '@components/ScrollTop/ScrollTop';

import { theme } from './assets/theme';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <App />
        <ScrollTop />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
