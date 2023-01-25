import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';


const demoProfilePicture = "https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-11639786938sxvzj5ogua.png"

const Profile = ({user}) => {
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
    }}
  >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#000000' }}>
        <CardMedia
          image={user?.image || demoProfilePicture}
          alt={user?.username}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {user?.fullName}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'primary', ml: '5px' }} />
        </Typography>
        {user && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(user?.video?.length).toLocaleString('en-US')} Videos Uploaded
          </Typography>
        )}
      </CardContent>
  </Box>
  )
}

export default Profile