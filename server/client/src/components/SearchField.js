import React from 'react'
import useInput from '../hooks/useInput'

function SearchField() {
    const textProps = useInput('')

    return (
        <>
            <Button><SearchIcon /></Button>
            <InputField
                {...textProps}
                label={'חפש'}
                sx={{ width: '30%' }} />
        </>
    )
}

export default SearchField