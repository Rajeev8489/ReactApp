import { InputLabel , TextareaAutosize } from '@mui/material';
import React from 'react'

export default function Textarea(props) {

    const { name,label,value,error=null, onChange } = props;
    return (
        <div style={{paddingLeft:'9px'}}>
        <InputLabel>{label}</InputLabel>
        <TextareaAutosize
            variant="outlined"
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
            style={{ height: 200,width:'90%' }}
        />
        </div>
    )
}
