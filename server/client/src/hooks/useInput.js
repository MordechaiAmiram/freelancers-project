import { useState } from 'react'

function useInput() {
    const [value, setValue] = useState();

    function handleChange(e) {
        setValue(e.target.value);
    }

    const inputProps = {
        value: value,
        onChange: handleChange
    };

    return inputProps;
}

export default useInput