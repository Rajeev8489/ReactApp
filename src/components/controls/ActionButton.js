import React from 'react'
import { IconButton, createTheme, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';


const theme = createTheme();
const useStyles = makeStyles(({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5)
    }
}))

export default function ActionButton(props) {

    const { children, onClick, title, variant, color, size, ...other } = props;
    const classes = useStyles();

    return (
        <Tooltip title={title} arrow>
            <IconButton
                variant={variant || "contained"}
                size={size || "small"}
                color={color || "error"}
                className={classes.root}
                {...other}
                onClick={onClick}>
                {children}
            </IconButton >
        </Tooltip>
    )
}