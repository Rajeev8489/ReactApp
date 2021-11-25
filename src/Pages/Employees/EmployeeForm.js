import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls';
import { Grid } from '@mui/material';
import * as employeeService from '../../Services/employeeService';
import Stack from '@mui/material/Stack';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' }
]
const theme = createTheme();
const useStyles = makeStyles({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
});

const initialFValues = {
    Id: '',
    fullName: '',
    gender: '',
    email: '',
    phoneNumber: '',
    city: '',
    departmentId: '',
    isPermanent: '',
    dateofjoining: new Date()
}

export default function EmployeeForm() {

    const [values, setValues] = useState(initialFValues);
    const classes = useStyles();

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <Form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Phone Number"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                    />
                    <Controls.DatePicker
                        name="dateofjoining"
                        label="Date of Joining"
                        value={values.dateofjoining}
                        onChange={handleInputChange}
                    />

                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <Stack direction="row" spacing={2}>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            type="reset"
                            text="Reset"
                        />
                    </Stack>

                </Grid>

            </Grid>
        </Form>
    )
}
