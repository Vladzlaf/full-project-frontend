import React from 'react';
import './assets/style.scss';
import './componets//drawer.scss' 
import './componets/navba.scss'
import './componets/error-bounadry/err.scss'
import './app/animation/animations.scss'
import {BrowserRouter} from 'react-router-dom';
import Drawer from './componets/drawer';
import { Navbar } from './componets/navbar';
import { AppRouter } from './router/app-router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes';
import { Provider } from 'react-redux';
import store from 'store';
import ErrorBoundaryComp from 'componets/error-bounadry/error-boundary.comp';


function App() {
  return (
    <div className="wrap__container">
      <ErrorBoundaryComp>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
                <Drawer/>
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </ErrorBoundaryComp>
    </div>
  );
}

export default App;

