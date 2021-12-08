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
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Popup from '../../components/controls/Popup';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';


const theme = createTheme();
const useStyles = makeStyles(({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(5),
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        left: '200px'
    }
}))

const headCells = [
    { id: 'fullName', label: 'Full Name' },
    { id: 'email', label: 'Email Address' },
    { id: 'phoneNumber', label: 'Phone Number' },
    { id: 'department', label: 'Department', disableSorting: true },
    { id: 'isPermanent', label: 'Permanent', disableSorting: true },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Employees() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(employeeService.getAllEmployees());
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
    const [openPopup, setOpenPopup] = useState(false);
    const [popUpTitle, setPopUpTitle] = useState();
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
    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            employeeService.insertEmployee(employee);
        else
            employeeService.updateEmployee(employee);
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setRecords(employeeService.getAllEmployees());
    }
    const openInPopup = item => {
        setPopUpTitle("Edit Employee");
        setRecordForEdit(item);
        setOpenPopup(true);
    }

    return (
        <>
            <PageHeader
                title="Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Controls.Input
                        label="Search Employees by Full Name"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => {
                            setPopUpTitle("New Employee");
                            setOpenPopup(true);
                            setRecordForEdit(null);
                        }}
                    />
                </Toolbar>
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
                                <TableCell>
                                    <Controls.ActionButton
                                        title="Edit"
                                        onClick={() => { openInPopup(item) }}
                                        color='primary'>
                                        <EditOutlinedIcon fontSize="small" />
                                    </Controls.ActionButton>
                                    {/* <Controls.ActionButton
                                        onClick={() => {  }}>
                                        <CloseIcon fontSize="small" />
                                    </Controls.ActionButton> */}
                                </TableCell>
                            </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title={popUpTitle}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
        </>
    )
}