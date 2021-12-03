import React from 'react'
import PageHeader from '../components/PageHeader';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import { createTheme, Paper, Grid, Stack } from '@mui/material';
import Controls from '../components/controls/Controls';
import { Form, useForm } from '../components/useForm';
import { makeStyles } from '@mui/styles';

const theme = createTheme();
const useStyles = makeStyles(({
    pageContent: {
        margin: theme.spacing(1),
        paddingLeft: '10%',
        paddingTop: '25px',
        paddingBottom: '25px'
    }
}))
const initialFValues = {
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
    isAgreed: false
}

export default function Contact() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('phoneNumber' in fieldValues) {
            temp.phoneNumber = fieldValues.phoneNumber ? "" : "Required";
            if (fieldValues.phoneNumber != '')
                temp.phoneNumber = (/^[0-9]{10}$/.test(fieldValues.phoneNumber)) ? "" : "Phone Number should be 10 digit numeric value";
        }
        if ('email' in fieldValues) {
            temp.email = fieldValues.email ? "" : "Required";
            if (fieldValues.email != '')
                temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid";
        }
        if ('subject' in fieldValues)
            temp.subject = fieldValues.subject ? "" : "Required.";

        if ('isAgreed' in fieldValues)
            temp.isAgreed = fieldValues.isAgreed == true ? "" : "Required";
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
            window.alert(JSON.stringify(values));
            resetForm()
        }
    }

    const classes = useStyles();

    return (

        <>
            <PageHeader
                title="Contact Us"
                icon={<ContactMailRoundedIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent} >
                <Form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12} >
                            <Controls.Phone
                                label="Phone Number"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleInputChange}
                                error={errors.phoneNumber}
                            />
                            <Controls.Input
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                error={errors.email}
                            />
                            <Controls.Input
                                label="Subject"
                                name="subject"
                                value={values.subject}
                                onChange={handleInputChange}
                                error={errors.subject}
                            />
                            <Controls.Textarea
                                label="Message"
                                name="message"
                                value={values.message}
                                onChange={handleInputChange}
                            />
                            <Controls.Checkbox
                                label="I, hereby agree to get the notifications."
                                name="isAgreed"
                                value={values.isAgreed}
                                onChange={handleInputChange}
                                error={errors.isAgreed}
                            />
                        </Grid>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Controls.Button
                                type="submit"
                                text="Submit"
                            />
                        </Grid>
                    </Grid>
                </Form>
            </Paper>
        </>
    )
}
