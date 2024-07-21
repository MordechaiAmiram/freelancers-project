import React, { useState } from 'react'
import BasicTableForm from './BasicTableForm'
import api from '../../services/BaseURL';

function BasicTable({ usersOnHold, handleUsersOnHold }) {
    const [checked, setChecked] = useState(new Array(usersOnHold.length).fill(false));
    const [toConfirm, setToConfirm] = useState([])

    const handleConfirm = async () => {
        if (toConfirm.length <= 0) return
        handleUsersOnHold(toConfirm)
        const promises = []
        toConfirm.forEach(element => {
            const promise = api.put('/users',
                {
                    userId: element,
                    isConfirmed: 1
                })
            promises.push(promise)
        });
        
        try {
            const data = await Promise.allSettled(promises)
            console.log("promises data > ", data)
            // setChecked(prev => {
            //     return prev.map(el => el = false)
            // })
        } catch (err) {
            console.error(err.message);
        }
    }

    const handleChange = ({ target }, index, userId) => {
        setChecked((prev) => {
            return prev.map((val, i) => i === index ? (target.checked) : val)
        })
        if (target.checked) {
            setToConfirm((prev => [...prev, userId]))
        } else {
            const index = toConfirm.findIndex(id => id === userId)
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
            handleConfirm={handleConfirm}
            checked={checked}
            handleChange={handleChange}
        />
    )
}

export default BasicTable