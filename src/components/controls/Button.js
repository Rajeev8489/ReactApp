import React from 'react'
import { Button as MuiButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles({
    root: {
        '& .MuiButton-root': {
            margin: theme.spacing(1, 'auto'),
            textTransform: 'none',
        }
    }
});

export default function Button(props) {

    const { text, size, color, variant, onClick, ...other } = props;
    const classes = useStyles();
    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root }}>
            {text}
        </ MuiButton>

    )
}
