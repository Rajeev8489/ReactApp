import React from 'react'
import PageHeader from '../../components/PageHeader';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import EmployeeForm from './EmployeeForm';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';

const theme = createTheme();
const useStyles = makeStyles(({

    pageContent: {
        margin: theme.spacing(2),
        padding: theme.spacing(3)
    }
}));

export default function Employees() {
    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Employees"
                subTitle="Form design with validation"
                icon={<PeopleOutlineOutlinedIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </>
        
    )
}
