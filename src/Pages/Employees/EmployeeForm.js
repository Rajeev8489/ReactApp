import React, { useState, useEffect } from 'react'
import { Form, useForm } from '../../components/useForm';
import Controls from '../../components/controls/Controls';
import { Grid } from '@mui/material';
import * as employeeService from '../../Services/employeeService';
import Stack from '@mui/material/Stack';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    city: '',
    departmentId: '',
    dateofjoining: new Date(),
    isPermanent: false
}

export default function EmployeeForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "Required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid"
        if ('city' in fieldValues)
            temp.city = fieldValues.city ? "" : "Required"
        if ('phoneNumber' in fieldValues) {
            temp.phoneNumber = fieldValues.phoneNumber ? "" : "Required";
            if (fieldValues.phoneNumber != '')
                temp.phoneNumber = (/^[0-9]{10}$/.test(fieldValues.phoneNumber)) ? "" : "Phone Number should be 10 digit numeric value";
        }
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId ? "" : "Required"
        if ('gender' in fieldValues)
            temp.gender = fieldValues.gender ? "" : "Required"
        if ('dateofjoining' in fieldValues)
            temp.dateofjoining = fieldValues.dateofjoining ? "" : "Required"
        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        // e.preventDefault()  --  commented to test Table functionalities
        if (validate()) {
            employeeService.insertEmployee(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Controls.Input
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                    <Controls.Phone
                        label="Phone Number"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleInputChange}
                        error={errors.phoneNumber}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controls.RadioGroup
                        label="Gender"
                        name="gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                        error={errors.gender}
                    />
                    <Controls.Select
                        label="Department"
                        name="departmentId"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        label="Date of Joining"
                        name="dateofjoining"
                        value={values.dateofjoining}
                        onChange={handleInputChange}
                        error={errors.dateofjoining}
                    />

                    <Controls.Checkbox
                        label="Permanent Employee"
                        name="isPermanent"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <Stack direction="row" spacing={2}>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            onClick={resetForm}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Form>
    )
}
