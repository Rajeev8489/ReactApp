import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import { makeStyles } from '@mui/styles';
import Header from '../components/Header';
import { CssBaseline } from '@mui/material';
import PageHeader from '../components/PageHeader';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'

  }
})

function App() {

  const classes = useStyles();
  
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>  
      <Header />
      <PageHeader
          title="Page Header"
          subTitle="Page description"
          icon={<PeopleOutlineOutlinedIcon fontSize="large" />}
        />
      </div>
      <CssBaseline />
     
    </>
  );
}

export default App;
