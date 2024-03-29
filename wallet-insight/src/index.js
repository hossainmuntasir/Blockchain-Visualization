// Sam Banfield: 102560056
// Aiken Lee: 104093389
// Hossain Muntasir: 103798748 


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./index.css";
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#111F2C"
      },
      secondary: {
        main: "#FFFFFF"
      }
    }
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    </ThemeProvider>
    <App />
  </BrowserRouter >
);
