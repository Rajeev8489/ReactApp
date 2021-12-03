import { FormControl, FormControlLabel, Checkbox as MuiCheckbox, FormHelperText } from '@mui/material';
import React from 'react'

export default function Checkbox(props) {

    const { name, label, value, onChange, error=null } = props;

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl error={error}>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    color="primary"
                    checked={value}
                    onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
                />}
                label={label}
            />
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}