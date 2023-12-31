import React, { useEffect, useState } from 'react'
import useInput from '../../hooks/useInput'
import InputField from '../form/InputField'
import api from '../../services/BaseURL'
import './searchField.css'
import Category from '../mainCategories/Category';

function SearchField() {
    const textProps = useInput('')
    const [data, setData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            // if (textProps.value === '') return
            try {
                const { data } = await api.get(`/categories/search/?text=${textProps.value}`)
                console.log(data);
                setData(data)
            } catch (err) {
                console.error(err);
            }
        }
        fetchData()
    }, [textProps.value])

    return (
        <>
            <InputField
                label='חפש'
                name='search'
                props={textProps}
                sx={{ width: '30%' }} />
            <div class="dropdown">
                <div class="dropdown-content">
                    {data && data.map(element => (
                        <div key={element.id}>
                            <Category category={element} className={'dropdwon-link'} >{element.name}</Category>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default SearchField