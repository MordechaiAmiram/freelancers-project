import React from 'react'
import GetImage from '../GetImage'
import { Tooltip } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function FreelanceDetails({ profile }) {
    const { firstName, lastName, title, rating, about, serviceLocation,
        phone, email, profileImageId, numberOfRatings } = profile

    return (
        <>
            <div className='profile-container'>

                <h2>{title}</h2>

                <GetImage imageId={profileImageId} width={200} className={'profile-picture'} />

                <div className='profile-inner'>
                    <div className='name-and-rating-container'>
                        <div className='name'>{`${firstName} ${lastName}`}</div>

                        <div className='rating'>
                            <div>
                                <div className='number-of-ratings'>
                                    <Tooltip title='מספר מדרגים' placement="top"
                                        slotProps={{
                                            popper: {
                                                modifiers: [
                                                    {
                                                        name: 'offset',
                                                        options: {
                                                            offset: [0, -14],
                                                        },
                                                    },
                                                ],
                                            },
                                        }}>
                                        {numberOfRatings && `(${numberOfRatings}) `}
                                    </Tooltip>
                                </div>
                                <div className='rating-digit'>
                                    {rating ? `${rating}` : '0'}
                                </div>
                            </div>
                            <div>
                                <StarIcon fontSize='large' sx={{ color: 'gold' }} />
                            </div>
                        </div>
                    </div>


                    <div className='work-in-area'>{`מבצע/ת עבודות באזור: ${serviceLocation}`}</div><br />

                    <div className='about'>{about}</div>

                    <div className='contact'>
                        <div><PhoneIcon />{phone} </div>
                        <div><EmailIcon /> {email}</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FreelanceDetails