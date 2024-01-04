import React, { useEffect, useState } from 'react'
import InputField from '../form/InputField'
import api from '../../services/BaseURL'
import './searchField.css'
import Category from '../mainCategories/Category';

function SearchField() {
    const [value, setValue] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            if (!value) {
                setData('')
                return
            }
            try {
                const { data } = await api.get(`/categories/search/?text=${value}`)
                console.log(data);
                setData(data)
            } catch (err) {
                console.error(err);
            }
        }
        fetchData()
    }, [value])
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const initValues = () => {
        setData('')
        setValue('')
    }
    return (
        <>
            <InputField
                label='חפש'
                name='search'
                value={value}
                handleChange={handleChange}
                sx={{ width: '30%', bgcolor: '#fff' }} />

            {data && <div className="dropdown">
                <div className="dropdown-content">
                    {data.map(element => (
                        <div key={element.id} onClick={initValues}>
                            <Category
                                category={element}
                                className={'dropdwon-link'}
                            >
                                {element.name}
                            </Category>
                        </div>
                    ))}
                </div>
            </div>}

        </>
    )
}

export default SearchField