import React from 'react'
import Comment from './Comment';

const CommentList = (props) => {
  return (

    <>
      {props.comments?.map((ok_comment, idx) => {
        console.log(ok_comment);

        return (
          <Comment key={idx} single_comment={ok_comment} />
        );

      })
      }

    </>
  )
}

export default CommentList;