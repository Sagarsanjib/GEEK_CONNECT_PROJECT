import React from 'react'
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { Link } from 'react-router-dom';

import moment from 'moment';

const Comment = ({ single_comment }) => {

  console.log(single_comment);
  console.log(single_comment.message);
  return (
    <>



      <Paper style={{ backgroundColor: "#0A1929" }}>

        <Stack my={1} mx={2} style={{ color: "#6F7E8C" }}>

          <Stack direction="row" gap={2}>

            <Link to={`/profile/${single_comment?.owner?.id}`}>

              <Avatar alt="comment profile picture" src={single_comment?.owner?.picture} />
            </Link>

            <Stack>

              <Link to={`/profile/${single_comment?.owner?.id}`}>

                <Typography variant="p ">
                  {single_comment.owner.firstName} {single_comment.owner.lastName}
                </Typography>
              </Link>

              <Typography variant="caption">
                
              {moment(single_comment.publishDate).fromNow() }
                
              </Typography>

            </Stack>

          </Stack>

          <Typography variant="p" > {single_comment.message}</Typography>

        </Stack>
      </Paper>
    </>
  )
}

export default Comment;