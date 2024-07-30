import React from 'react'
import GetImage from '../GetImage'
import { Paper, Tooltip, ThemeProvider, createTheme } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './freelanceDetails.css'
import styled from '@emotion/styled';

function FreelanceDetails({ profile }) {
    const { firstName, lastName, title, averageRating, about, serviceLocation,
        phone, email, profileImageId, numberOfRatings } = profile
    const theme = createTheme();

    const DetailsPaper = styled(Paper)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '90%',
        minWidth: '300px',
        borderRadius: '8px',
        height: 'fit-content',
        padding: '20px',
        textAlign: 'right',
        

        // [theme.breakpoints.down('md')]: {
        //     marginLeft: 'auto',
        //     marginRight: 'auto',
        // },
    }));

    return (
        <>    <ThemeProvider theme={theme}>

            <DetailsPaper variant="outlined">

                <h2 className='profile-title'>{title}</h2>

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
                                        {numberOfRatings !== 0 && `(${numberOfRatings}) `}
                                    </Tooltip>
                                </div>
                                <div className='rating-digit'>
                                    {averageRating ? `${averageRating}` : '0'}
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
            </DetailsPaper>
        </ThemeProvider>
        </>
    )
}

export default FreelanceDetails