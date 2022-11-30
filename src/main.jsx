import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { Details } from './pages/Details';
import { AddFood } from './pages/AddFood';
import { EditFood } from './pages/EditFood';
import { Home } from './pages/Home';
import { Requests } from './pages/Requests';
import { SignIn } from './pages/SignIn';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignIn/>
    </ThemeProvider>
  </React.StrictMode>
)
