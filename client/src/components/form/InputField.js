import React from 'react'
import { TextField } from '@mui/material'

function InputField({ label, name, sx , props, value, handleChange}) {
  return (
    <>
      <TextField
        label={label}
        {...props}
        onChange={handleChange}
        value={value}
        variant="outlined"
        size='small'
        type='text'
        name={name}
        sx={sx}
      />
    </>
  )
}

export default InputField