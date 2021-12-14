import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import { makeStyles } from '@mui/styles';
import Header from '../components/Header';
import { CssBaseline } from '@mui/material';
import Employees from '../Pages/Employees/Employees';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from '../Pages/Contact';

const theme = createTheme({

  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    width: '100%',
    height: '100%'


  }
})

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>

      <div className={classes.appMain}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
