import { TextField } from '@mui/material';
import React from 'react'

export default function Phone(props) {

    const { name,label,value,error=null, onChange } = props;

    return (
         <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
            inputProps= {{maxLength:10}}
        />
    )
}
