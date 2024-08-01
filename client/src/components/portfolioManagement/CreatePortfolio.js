import React, { useContext, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import useInput from '../../hooks/useInput'
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import { userContext } from '../../App'
import api from '../../services/BaseURL'
import './portfolioManagement.css'

function CreatePortfolio({handleClose, isOpen, handleClickOpen}) {
    const { currentUser } = useContext(userContext)
    const titleProps = useInput('')
    const descriptionProps = useInput('')
    const urlProps = useInput('')
    const [textFieldError, setTextFieldError] = useState(false)


    const handleCreate = async () => {
        try {
            console.log("title value ===", titleProps.value );

            if (titleProps.value === '' || titleProps.value === undefined) {
                setTextFieldError(true)
                return
            }
            const body = {
                freelanceId: currentUser.freelanceId,
                title: titleProps.value,
                description: descriptionProps.value,
                projectUrl: urlProps.value
            }
            const { data } = await api.post('/portfolios/add-portfolio', body)
            handleClose()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <Button onClick={handleClickOpen}>
                        צור תיק עבודות
                        <CreateNewFolderOutlinedIcon />
            </Button>
            <Dialog
                maxWidth={'xs'} 
                onClose={() => {handleClose(); setTextFieldError(false)}} 
                open={isOpen}
                >
                <DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={() => {handleClose(); setTextFieldError(false)}} 
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                        >
                    <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <div className='portfolio-form'>
                        <div className='portfolio-input'>
                            כותרת: <TextField
                                type='text'
                                hiddenLabel
                                required
                                error={textFieldError}
                                label='שדה חובה'
                                variant="standard"
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
                                variant="standard"
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
                                variant="standard"
                                size='small'
                                name='url'
                                {...urlProps}
                                sx={{ width: '100%' }}
                            />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                        <Button variant="contained" onClick={handleCreate} >צור</Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreatePortfolio