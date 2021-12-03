import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader';
import * as employeeService from '../../Services/employeeService';
import EmployeeForm from './EmployeeForm';
import { makeStyles } from '@mui/styles';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { createTheme } from '@mui/material/styles';
import { Checkbox, InputAdornment, Paper, TableBody, TableCell, TableRow, Toolbar } from '@mui/material';
import useTable from '../../components/useTable';
import Controls from '../../components/controls/Controls';
import { Search } from '@mui/icons-material';

const theme = createTheme();
const useStyles = makeStyles(({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(10),
    },
    searchInput: {
        width: '100%'
    }
}))

const headCells = [
    { id: 'fullName', label: 'Full Name' },
    { id: 'email', label: 'Email Address' },
    { id: 'phoneNumber', label: 'Phone Number' },
    { id: 'department', label: 'Department', disableSorting: true },
    { id: 'isPermanent', label: 'Permanent', disableSorting: true },
]

export default function Employees() {

    const classes = useStyles();
    const [records] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value.toLowerCase()))
            }
        })
    }

    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm />
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.phoneNumber}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell>
                                    <Checkbox
                                        color="primary"
                                        checked={item.isPermanent}
                                    />
                                </TableCell>
                            </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
    )
}