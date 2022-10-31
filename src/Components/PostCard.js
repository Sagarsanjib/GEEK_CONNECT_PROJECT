import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CommentIcon from '@mui/icons-material/Comment';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import { dislikePost, likePost } from '../Slice';






const PostCard = (props) => {

    const dispatch = useDispatch();
    const islikes = useSelector(state => state.likedPosts.some(e => e === props.singlePost?.id));

    const Like_Dislike_post = () => {
        if (islikes) {
            dispatch(dislikePost(props.singlePost?.id));
        }
        else {
            dispatch(likePost(props.singlePost?.id));
        }
    }

    return (
        <Card sx={{ maxWidth: 520 }}>
            <CardHeader
                avatar={

                    <Link to={`/profile/${props.singlePost?.owner?.id}`}>

                        <Avatar
                            aria-label="recipe"
                            alt="Remy Sharp"
                            src={props.singlePost?.owner?.picture}
                        />

                    </Link>
                }



                title={

                    <Link to={`/profile/${props.singlePost?.owner?.id}`}>

                        {props.singlePost?.owner?.firstName} {props.singlePost?.owner?.lastName}

                    </Link>

                }





                subheader={props.singlePost?.publishDate}
            />
            <CardMedia
                component="img"

                alt="Paella dish"
                image={props.singlePost?.image}
                onDoubleClick={Like_Dislike_post}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.singlePost?.text}
                </Typography>


                <Stack direction="row" spacing={1} mt={2}>

                    {props.singlePost?.tags?.map((single_tag, idx) => {
                        return (

                            <Link key={idx} to={`/search?q=${single_tag}`}>
                                <Chip label={`#${single_tag}`}

                                    size="small"
                                    style={{ textTransform: "capitalize" }}
                                    onClick={() => { }}
                                />
                            </Link>


                        )
                    })}


                </Stack>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites"

                    onClick={Like_Dislike_post}
                >
                    <FavoriteIcon style={{ color: islikes ? "red" : "inherit" }} />
                </IconButton>

                <Typography variant="caption" display="block" gutterBottom>
                    {props.singlePost.likes + (islikes ? 1 : 0)}
                </Typography>


                <Link to={`/post-comment-detail/${props.singlePost.id}`} style={{ marginLeft: 'auto' }}>
                    <IconButton >
                        <CommentIcon />
                    </IconButton>
                </Link>

            </CardActions>

        </Card>
    );
}

export default PostCard;
