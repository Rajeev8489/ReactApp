import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import React from 'react'

export default function Checkboxlist(props) {

    const { values, onChange, error = null } = props;

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })
    return (
        <FormControl
            error={error}
            component="fieldset"
            sx={{ m: 2,  border: '1px groove lightgrey',p:1 }}
            variant="outlined"
        >
            <FormLabel component="legend">Languages</FormLabel>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="english"
                            checked={values.english}
                            onChange={e => onChange(convertToDefEventPara("english", e.target.checked))}
                        />
                    }
                    label="English"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="french"
                            checked={values.french}
                            onChange={e => onChange(convertToDefEventPara("french", e.target.checked))}
                        />
                    }
                    label="French"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="spanish"
                            checked={values.spanish}
                            onChange={e => onChange(convertToDefEventPara("spanish", e.target.checked))}
                        />
                    }
                    label="Spanish"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="german"
                            checked={values.german}
                            onChange={e => onChange(convertToDefEventPara("german", e.target.checked))}
                        />
                    }
                    label="German"
                />
            </FormGroup>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
