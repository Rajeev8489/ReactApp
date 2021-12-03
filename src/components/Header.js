import { AppBar, Toolbar, Grid, IconButton, Badge, Button, createTheme } from '@mui/material'
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import { useNavigate } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const theme = createTheme();
const useStyles = makeStyles({
    appbar: {
        backgroundColor: theme.palette.primary.light
    }
})

export default function Header() {

    const classes = useStyles();
    const navigate = useNavigate();
    const redirecttocontact = () => {
        navigate('/Contact');
    }
    const redirecttohome = () => {
        navigate('/');
    }

    return (

        <AppBar position="static">
            <Toolbar className={classes.appbar}>
                <Grid container >
                    <Grid item paddingRight="10px">
                        <Button variant="contained" onClick={redirecttohome} startIcon={<HomeRoundedIcon />}>
                            Home
                        </Button>
                    </Grid>
                    <Grid>
                        <Button variant="contained" onClick={redirecttocontact} startIcon={<ContactMailRoundedIcon />}>
                            Contact Us
                        </Button>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton style={{ color: 'white' }}>
                            <Badge badgeContent={2} color="error">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>

                        <IconButton style={{ color: 'white' }}>
                            <Badge badgeContent={4} color="success">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton style={{ color: 'white' }}>
                            <Badge>
                                <SettingsOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton style={{ color: 'white' }}>
                            <Badge>
                                <AccountCircleIcon />
                            </Badge>
                        </IconButton>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar >

    )
}
