import React, { useState } from 'react'
import BasicTableForm from './BasicTableForm'

function BasicTable({ usersOnHold, handleConfirm }) {
    const [checked, setChecked] = useState(new Array(usersOnHold.length).fill(false));
    const [toConfirm, setToConfirm] = useState([])

    const handleChange = ({ target }, index, freelanceId) => {
        setChecked((prev) => {
            return prev.map((v, i) => i === index ? (target.checked) : v)
        })
        if (target.checked) {
            setToConfirm((prev => [...prev, freelanceId]))
        } else {
            const index = toConfirm.findIndex(id => id === freelanceId)
            if (index === -1) return
            setToConfirm((prev) => {
                const toConfirmArr = [...prev]
                toConfirmArr.splice(index, 1)
                return toConfirmArr
            })
        }
    }
    return (
        <BasicTableForm
            usersOnHold={usersOnHold}
            handleConfirm={() => handleConfirm(toConfirm)}
            checked={checked}
            handleChange={handleChange}
        />
    )
}

export default BasicTable