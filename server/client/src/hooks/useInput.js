import { useState } from 'react'

function useInput({ text }) {
    const [value, setValue] = useState(text);

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