import { makeStyles } from '@mui/styles';
import React from 'react'
import sidemenuamazon from './Images/sidemenuamazon.jpg';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
    sidemenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '150px',
        height: '100%',
        backgroundColor: 'black',
    }
})

export default function SideMenu() {

    const classes = useStyles();

    return (

        <div className={classes.sidemenu}>
            <div></div>
            <Stack alignSelf="center">
                <Avatar variant="rounded" alt="this is logo" src={sidemenuamazon} sx={{ width: 150, height: 150 }} />
            </Stack>
        </div>

    )
}
