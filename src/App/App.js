import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import { makeStyles } from '@mui/styles';
import Header from '../components/Header';
import { CssBaseline } from '@mui/material';
import Employees from '../Pages/Employees/Employees';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

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
    paddingLeft: '150px',
    width: '100%'

  }
})

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
