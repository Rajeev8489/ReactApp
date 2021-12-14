import { createTheme, Dialog, DialogContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import ProgressCircle from './ProgressCircle';

const theme = createTheme();
const useStyles = makeStyles(({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
        opacity: '0.5'

    }
}))

export default function Progress(props) {
    const { openProgress } = props;
    const classes = (useStyles);

    return (
        <Dialog open={openProgress} maxWidth="lg" classes={{ paper: classes.dialogWrapper }}>
            <DialogContent>
                <ProgressCircle />
            </DialogContent>
        </Dialog>
    )
}