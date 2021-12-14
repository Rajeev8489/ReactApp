import { createTheme, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import Controls from './Controls'


const theme = createTheme();
const useStyles = makeStyles(({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    }
}))

export default function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog } = props
    const classes = (useStyles);

    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
            <DialogTitle style={{ backgroundColor: 'orange' }}>
                <div style={{ maxHeight: '20px' }}>
                    <Typography color={'white'} variant="h6" component="div">
                        {confirmDialog.headTitle}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent>
                <br />
                <Typography variant="subtitle1" >
                    {confirmDialog.title}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Controls.Button
                    text="No"
                    color="primary"
                    onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
                />
                <Controls.Button
                    text="Yes"
                    color="secondary"
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>

        </Dialog>
    )
}
