import React from 'react'
import * as timeago from 'timeago.js';
import ReplyComment from './ReplyComment'
import { Button, Stack, Typography } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const SignleComment = ({comment, comments, user}) => {
  const responseComment = comments.filter((comm)=> comm.responseTo === comment._id)
  console.log(responseComment)
  return (
    <div>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <Typography variant='h5'>{comment.writerName}</Typography>
        <Typography variant='body1' sx={{marginLeft: '5px'}}>{timeago.format(comment.createdAt)}</Typography>
        </div>
        <Typography variant='h5' style={{display: 'flex'}}>{comment.comment}</Typography>
        <Stack direction="row" gap="20px" alignItems="center" >
                <Button     color= "primary"
                            sx={{ alignItems: "center", cursor: "pointer" }}
                            disabled={!user}
                            >
                  {comment?.likes?.includes(user?._id) ? (
                    <ThumbUpAltIcon sx={{ fontSize: "22px", color: "primary", mr: "5px" }} />
                      ) : (
                    <ThumbUpOffAltIcon sx={{ fontSize: "22px", color: "gray", mr: "5px" }} />
                    )}
                    {comment?.likes?.length}
                </Button>
                <Button     color= "secondary"
                            sx={{ alignItems: "center", cursor: "pointer" }}
                            disabled={!user}
                            >
                {comment?.dislikes?.includes(user?._id) ? (
                    <ThumbDownAltIcon sx={{ fontSize: "22px", color: "secondary", mr: "5px" }} />
                      ) : (
                  <ThumbDownOffAltIcon sx={{ fontSize: "22px", color: "gray", mr: "5px" }} />
                      )}
                  {parseInt(comment?.dislikes?.length).toLocaleString()}
                </Button>
              </Stack>
       {responseComment?.length ? <ReplyComment responseComment={responseComment} user={user} comments={comments} /> : null}
    </div>
  )
}

export default SignleComment