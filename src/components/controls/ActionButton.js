import React from 'react'
import { Button, createTheme, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';


const theme = createTheme();
const useStyles = makeStyles(({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5)
    },
    secondary: {
        backgroundColor: theme.palette.error.light,
        '& .MuiButton-label': {
            color: theme.palette.error.main,
        }
    },
    primary: {
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label': {
            color: theme.palette.secondary.main,
        }
    },
}))

export default function ActionButton(props) {

    const { color, children, onClick, title } = props;
    const classes = useStyles();

    return (
        <Tooltip title={title} arrow>
            <Button
                className={`${classes.root} ${classes[color]}`}
                onClick={onClick}>
                {children}
            </Button>
        </Tooltip>
    )
}