import React from 'react'
import { createTheme, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Controls from './Controls';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme();
const useStyles = makeStyles(({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),

    }
}))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = (useStyles);

    return (
        <Dialog open={openPopup} maxWidth="lg" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle style={{ backgroundColor: 'orange' }} >
                <div style={{ display: 'flex', maxHeight: '25px' }}>
                    <Typography color={'white'} variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        style={{ color: 'orange', backgroundColor: 'white' }}
                        title="Close"
                        onClick={() => setOpenPopup(false)} >
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}