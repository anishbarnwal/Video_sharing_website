import React from 'react'
import { Stack, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'


import Videos from '../components/Videos'
import { getAllVideo } from '../actions/VideoAction'

const Home = () => {

  const dispatch = useDispatch()
  let { videos } = useSelector((state) => state.videoReducer);
  videos = videos.video;
  
  React.useEffect(() => {
    dispatch(getAllVideo())
  },[])

  return (
    <Stack>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Home