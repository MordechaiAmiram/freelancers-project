import React from 'react'
import { TextField } from '@mui/material'

function InputField({ label, name, sx , props}) {
  return (
    <>
      <TextField
        label={label}
        {...props}
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