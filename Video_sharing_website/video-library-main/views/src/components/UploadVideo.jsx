import React from 'react'
import { useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { addVideo } from '../actions/VideoAction'

const theme = createTheme();

const UploadVideo = ({user, setReload}) => {

    const dispatch = useDispatch();
    const [videoData, setVideoData] = React.useState({ userId: user._id, username: user.username})

    const handleChange = (e) => {
        setVideoData({...videoData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addVideo(videoData))
        setReload((prev)=>prev+1)
        resetForm()
    }

    const resetForm = () => {
      setVideoData({ videoUrl: "", imageUrl: "", title: "", desc: "", userId: user._id, username: user.username})
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <UploadFileIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add A New Video
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="videoUrl"
                  required
                  fullWidth
                  id="videoUrl"
                  label="Video Url"
                  autoFocus
                  value={videoData.videoUrl}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="imageUrl"
                  name="imageUrl"
                  label="Thumbnail Url"
                  value={videoData.imageUrl}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  name="title"
                  label="Write Your Title"
                  value={videoData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  multiline
                  maxRows={3}
                  fullWidth
                  name="desc"
                  id="desc"
                  label="Write Your Description"
                  value={videoData.desc}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Video
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default UploadVideo