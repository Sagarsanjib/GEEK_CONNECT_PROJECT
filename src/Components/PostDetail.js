import React from 'react'
import Paper from '@mui/material/Paper';
//import Stack from '@mui/material/Stack';

//import CircularProgress from '@mui/material/CircularProgress';

import LinearProgress from '@mui/material/LinearProgress';


const PostDetail = ({ post_detail }) => {
  return (

    <>

      {post_detail !== undefined ?

        (
          <Paper elevation={5} >
            <img src={post_detail.image}
              alt='bandjihjiojijih'
              style={{ width: "100%", borderRadius: "5px", height: "100%" }}
            />
          </Paper>
        ) :
        (<LinearProgress style={{ margin: "1.5rem 0.75rem 1.5rem 0.75rem" }} />)
      }


    </>
  )
}

export default PostDetail;