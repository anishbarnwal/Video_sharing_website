import React, { useState } from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const VideoInfo = ({reaction, data, user}) => {

    const[seeMore, setSeeMore] = useState(false)

    const seeDetail = (e) => {
        e.preventDefault()
        setSeeMore((prev)=>!prev)
      }
    if(!user) return <Typography variant="h5" color="secondary">"Please, log in to see more detail..."</Typography>
  return (
    <Stack>
        {seeMore ? <Box >
                    <Button variant="outlined" endIcon={<ExpandLessIcon />} onClick={seeDetail}>
                    See Less
                  </Button>
                      <Box sx={{ m: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                      <List
                          sx={{ mt: '10px', width: '100%', maxWidth: 360, }}
                          aria-label="contacts"
                        >
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                              <ThumbUpAltIcon sx={{ fontSize: "22px", color: "black", ml: "5px" }} />
                              </ListItemIcon>
                              <ListItemText primary="This Post is Liked By:" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                                {reaction?.likedUser.map((user) => (
                              <ListItemText inset primary={`${user.fullName}`} />
                                ))}
                            </ListItemButton>
                          </ListItem>
                        </List>
                      <List
                          sx={{ mt: '10px', width: '100%', maxWidth: 360, }}
                          aria-label="contacts"
                        >
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                              <ThumbDownAltIcon sx={{ fontSize: "22px", color: "black", ml: "5px" }} />
                              </ListItemIcon>
                              <ListItemText primary="This Post is Disliked By:" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                                {reaction?.dislikedUser.map((user) => (
                              <ListItemText inset primary={`${user.fullName}`} />
                                ))}
                            </ListItemButton>
                          </ListItem>
                        </List>
                        </Box>
                  <Typography color="gray" variant="h6" fontWeight="bold"  align="left" p={2}>
                  Description: {data.desc}
                  </Typography>
                  </ Box> :
                        <Box>

                            <Button variant="outlined" endIcon={<ExpandMoreIcon />} onClick={seeDetail}>
                              See More
                            </Button>
                        </Box>
                  }
    </Stack>
  )
}

export default VideoInfo