import { Button, TextField } from '@mui/material'
import React from 'react'
import SingleComment from './SingleComment'

const Comments = ({comments, user}) => {

  const rootComment = comments.filter((comment)=> !comment.responseTo)
  console.log(rootComment)
  const [comment, setComment] = React.useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }    
    if (!comments) return <h2>no Comments</h2>
  return (
    <div>
      <br />
      {/* Root Comment Form */}
    <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextField
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="Add your comments here"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
    </form>
            <p>Replies</p>
            {/* Comment Lists  */}

      {rootComment.map((comment, index)=> (
      <SingleComment key={index} user={user} comment={comment} comments={comments} />
      )
      )}

         
    </div>
  )
}

export default Comments