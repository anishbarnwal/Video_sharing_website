import { Stack, Box } from '@mui/material'

import VideoCard from './VideoCard'

const Videos = ({videos}) => {

  if(!videos) return "Retreiving Videos..."

  if(!videos?.length) return "No Videos Found..."

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={3}>
       {videos.map((video, id) => (
          <Box key={id}> 
            <VideoCard video={video} />
          </Box>
        ))}
    </Stack>
  )
}

export default Videos