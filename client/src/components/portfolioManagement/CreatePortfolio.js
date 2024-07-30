import React, { useContext, useState } from 'react'
import { Button, TextField } from '@mui/material'
import useInput from '../../hooks/useInput'
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import { userContext } from '../../App'
import api from '../../services/BaseURL'
import './portfolioManagement.css'

function CreatePortfolio() {
    const { currentUser } = useContext(userContext)
    const [isCreate, setIsCreate] = useState(false)
    const titleProps = useInput('')
    const descriptionProps = useInput('')
    const urlProps = useInput('')

    const handleClick = () => {
        setIsCreate(prev => !prev)
    }

    const handleCreate = async () => {
        try {
            if (titleProps.value === '') return
            const body = {
                freelanceId: currentUser.freelanceId,
                title: titleProps.value,
                description: descriptionProps.value,
                projectUrl: urlProps.value
            }
            const { data } = await api.post('/portfolios/add-portfolio', body)
            console.log(data);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <Button onClick={handleClick}>
                {!isCreate ?
                    <>
                        צור תיק עבודות
                        <CreateNewFolderOutlinedIcon />
                    </>
                    : 'ביטול'}
            </Button>
            {isCreate &&
                <div className='portfolio-form'>
                    <div className='portfolio-input'>
                        כותרת: <TextField
                            type='text'
                            hiddenLabel
                            required
                            label='שדה חובה'
                            variant="filled"
                            size='small'
                            name='title'
                            {...titleProps}
                            sx={{ width: '100%' }}
                        />
                    </div>
                    <div className='portfolio-input'>
                        תיאור: <TextField
                            type='text'
                            hiddenLabel
                            variant="filled"
                            size='small'
                            name='description'
                            {...descriptionProps}
                            sx={{ width: '100%' }}
                        />
                    </div>
                    <div className='portfolio-input'>
                        לינק לפרויקט: <TextField
                            type='text'
                            hiddenLabel
                            variant="filled"
                            size='small'
                            name='url'
                            {...urlProps}
                            sx={{ width: '100%' }}
                        />
                    </div>
                    <Button onClick={handleCreate} >צור</Button>
                </div>
            }
        </div>
    )
}

export default CreatePortfolio