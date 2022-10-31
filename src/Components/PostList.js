

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



import PostCard from './PostCard';



const PostList = (props) => {


    return (
        <>
            <Stack spacing={2} mt={4} mb={4} alignItems="center">

                {props.posts.map((single_post, idx) => {
                    return (
                        <PostCard key={idx} singlePost={single_post} />
                    )
                })}

                <Button variant="text" onClick={props.loadMore}>LOAD MORE...</Button>
            </Stack>




        </>

    )
}
export default PostList;