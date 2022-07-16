import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';

import ScrollTop from '@components/ScrollTop/ScrollTop';

import { theme } from '@assets/theme';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <ScrollTop />
    </ChakraProvider>
  </React.StrictMode>
);
