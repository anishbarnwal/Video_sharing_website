import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const demoImage = "https://www.wyzowl.com/wp-content/uploads/2019/09/YouTube-thumbnail-size-guide-best-practices-top-examples.png"

const VideoCard = ({video}) => {
  const videoId = video?._id
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "300px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/` }>
      <CardMedia component="img" image={video?.imageUrl || demoImage} alt={video?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '70px' }}>
      <Link to={videoId ? `/video/${videoId}` : '/' } style={{textDecoration: 'none'}} >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {video?.title.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={video?.userId ? `/user/${video?.userId}` : '/'} style={{textDecoration: 'none'}} >
        <Typography variant="subtitle2" color="gray" sx={{display: 'flex', alignItem: 'center', mt: '5px'}}>
          <AccountBoxIcon sx={{ fontSize: "18px", color: "gray", mr: '2px' }} />
          {video?.username}
        </Typography>
      </Link>
    </CardContent>
  </Card>
  )
}

export default VideoCard