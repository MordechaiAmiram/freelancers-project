import React from 'react'
import { TextField } from '@mui/material'

function InputField({ label, value, name, sx }) {
  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        size='small'
        sx={sx}
        type='text'
        name={name}
        value={value}
      />
    </>
  )
}

export default InputField