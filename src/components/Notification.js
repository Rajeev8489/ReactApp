import { Alert, createTheme, Snackbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const theme = createTheme();
const useStyles = makeStyles(({
    root: {
        paddingTop: theme.spacing(6)
    }
}))

export default function Notification(props) {

    const { notify, setNotify } = props;
    const classes = useStyles()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}>
            <Alert
                severity={notify.type}
                onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
