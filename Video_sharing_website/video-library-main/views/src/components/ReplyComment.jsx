import React from 'react'
import SingleComment from './SingleComment'

const ReplyComment = ({responseComment, comments, user}) => {

  return (
    <div style={{ marginLeft: '20px'}}>
        {responseComment?.length && responseComment.map((comment, index)=> (
      <SingleComment key={index} user={user} comment={comment} comments={comments} />
      )
      )}
    </div>
  )
}

export default ReplyComment