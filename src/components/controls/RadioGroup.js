import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@mui/material';
import React from 'react'

export default function RadioGroup(props) {
    const { name, label, value, error = null, onChange, items } = props;
    return (
        <FormControl 
        component="fieldset"
        {...(error && { error: true, helperText: error })}
            sx={{ border: '1px groove lightgrey', p: 1 }}
        >
            <FormLabel component="legend">{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                {
                    items.map(
                        item => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                        )
                    )
                }
            </MuiRadioGroup>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
