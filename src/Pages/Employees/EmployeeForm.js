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
    isPermanent: ''
}

export default function EmployeeForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "Fullname is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('city' in fieldValues)
            temp.city = fieldValues.city ? "" : "City required"
        if ('phoneNumber' in fieldValues)
            temp.phoneNumber = fieldValues.phoneNumber.length > 9 ? "" : "Phone number required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId ? "" : "Department required"
        if ('gender' in fieldValues)
            temp.gender = fieldValues.gender ? "" : "Gender is required."
        if ('dateofjoining' in fieldValues)
            temp.dateofjoining = fieldValues.dateofjoining ? "" : "Date of Joining is required."
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
        e.preventDefault()
        if (validate()) {
            employeeService.insertEmployee(values)
            window.alert(JSON.stringify(values));
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
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
                    <Controls.Input
                        label="Phone Number"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleInputChange}
                        error={errors.phoneNumber}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                        error={errors.gender}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name="dateofjoining"
                        label="Date of Joining"
                        value={values.dateofjoining}
                        onChange={handleInputChange}
                        error={errors.dateofjoining}
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
                            text="Reset"
                            onClick={resetForm}
                        />
                    </Stack>

                </Grid>

            </Grid>
        </Form>
    )
}
