import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Stack, Box, Typography, Divider } from '@mui/material'

import Videos from '../components/Videos'
import Profile from '../components/Profile'
import { getUserInfo } from '../actions/UserAction'

const User = () => {

    const dispatch = useDispatch()
    const {id} = useParams()

    React.useEffect(() => {
      dispatch(getUserInfo(id))
    },[])
    
    const  userInfo  = useSelector((state)=> state.authReducer.userData)

    if(!userInfo) return "Retreiving User Details..."

  return (
    <Stack>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
        <Profile user={userInfo} />
        <Divider variant="middle">
        <Typography variant="h4" align="center" color="primary">{userInfo.fullName}'s Upload</Typography>
        </Divider>
        <Videos videos={userInfo.video} />
      </Box>
    </Stack>
  )
}

export default User