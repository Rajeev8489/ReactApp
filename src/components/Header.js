import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@mui/material'
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    appbar: {
        backgroundColor: '#424242'
    }

})

export default function Header() {

    const classes = useStyles();

    return (

        <AppBar position="static">
            <Toolbar className={classes.appbar}>
                <Grid container >
                    <Grid item style={{ backgroundColor: 'whitesmoke' }}>
                        <InputBase placeholder="Search"
                            startAdornment={<SearchIcon fontSize="small" />} />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton style ={{color:'white'}}>
                            <Badge badgeContent={2} color="error">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>

                        <IconButton style ={{color:'white'}}>
                            <Badge badgeContent={4} color="error">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton style ={{color:'white'}}>
                            <Badge>
                                <SettingsOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton style ={{color:'white'}}>
                            <Badge>
                                <AccountCircleIcon />
                            </Badge>
                        </IconButton>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>

    )
}
