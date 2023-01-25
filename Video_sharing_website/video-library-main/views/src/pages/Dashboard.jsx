import React from 'react'
import { Stack, Box, Typography, Divider } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Videos from '../components/Videos'
import UploadVideo from '../components/UploadVideo'
import { getUserInfo } from '../actions/UserAction'

const Dashboard = () => {

  const dispatch = useDispatch()
  const {id} = useParams()

  const[reload, setReload] = React.useState(0)

  React.useEffect(() => {
    dispatch(getUserInfo(id))
  },[reload])
  
    const  userInfo  = useSelector((state)=> state.authReducer.userData)
    const user = useSelector((state)=> state.authReducer.authData)

    if(!userInfo) return "Retreiving User Details..."

  return (
    <Stack>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
        <UploadVideo user={user} setReload={setReload} />
        <Divider variant="middle">
        <Typography variant="h4" align="center">My Uploads</Typography>
        </Divider>
        <Videos videos={userInfo.video} />
      </Box>
    </Stack>
  )
}

export default Dashboard