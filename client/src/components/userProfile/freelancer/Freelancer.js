import { Button, Divider, List, ListItem } from '@mui/material'
import GetImage from '../../GetImage'
import React, { useState } from 'react'
import LogOut from '../../LogOut'
import './freelancer.css'
import  UpdateDetailsForm  from './UpdateDetailsForm'
import classNames from '../../../styles/classnames'

function Freelancer({ profile, valueProps, handleSubmit }) {
    const { firstName, lastName, email, phone, city, street, building, suite,
        accountType, profileImageId, serviceLocation, title, about, zipCode } = profile

    const [isOpen, setIsOpen] = useState(false);
    const handleClickOpen = () => {
        setIsOpen(true);
    };
    
    const handleClose = () => {
        setIsOpen(false);
    };

    const style = {
        py: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        // backgroundColor: 'background.paper',
      };


    return (
        <>
            <div>
                <div className={`${classNames.backgroundColorWhite} profile-details-wrapper`}>
                    <List sx={style}>
                      <ListItem>
                            <div className='list-item list-item-image'>
                                <GetImage imageId={profileImageId} width={150} className={'private-profile-picture'} />  
                            </div>                            
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                            <div className='list-item'><span className='title'>שם: </span>{`${firstName} ${lastName}`}</div>
                        {/* <ListItemText primary={`${firstName} ${lastName}`} /> */}
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                            <div className='list-item'><span className='title'>כותרת: </span>{` ${title}`}</div>
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                            <div style={{textAlign: 'right'}}><span className='title'>אודות: </span>{`${about}`}</div>
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                            <div className='list-item'><span className='title'>דוא"ל: </span>{` ${email}`}</div>
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                            <div className='list-item'><span className='title'>טלפון: </span>{` ${phone}`}</div>
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                            <div className='list-item'><span className='title'>עיר: </span>{`${city}`}</div>
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                            <div className='list-item'><span className='title'>רחוב: </span>{`${street} ${building}/${suite}`}</div>
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                            <div className='list-item'><span className='title'>מיקוד: </span>{`${zipCode}`}</div>                              </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                            <div className='list-item'><span className='title'>אזור שירות: </span>{`${serviceLocation}`}</div>
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                            <div className='list-item'><span className='title'>סוג חשבון: </span>{`${accountType}`}</div>
                      </ListItem>
                    </List>
                </div>
                <div>
                    <Button onClick={handleClickOpen}>עריכת פרטים</Button>
                    <UpdateDetailsForm 
                        valueProps={valueProps}
                        isOpen={isOpen}
                        handleClose={handleClose}
                        handleSubmit={handleSubmit}
                        />
                    <LogOut />
                </div>
            </div>
        </>
    )
}

export default Freelancer