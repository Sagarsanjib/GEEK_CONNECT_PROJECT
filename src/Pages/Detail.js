


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dummyapi } from '../Util';
import PostDetail from "../Components/PostDetail";
import CommentList from "../Components/CommentList";
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";



const Detail = () =>
{
   const {id} = useParams();
  const [post_detail, setPostDetail] = useState([]);
  const [comments,setComments] = useState();

  useEffect(()=>
  {
        dummyapi.get(`post/${id}`)
        .then (response => {
       //console.log(response.data);
        setPostDetail(response.data);
            
        });
        
  },[id]);

  useEffect(()=>
  {
        dummyapi.get(`post/${id}/comment`)  
        .then (response => {
            console.log(response.data.data);
             setComments(response.data.data);
        });
                 
  },[id]);
 
    return(
        <>
            

            <Container  style={{maxWidth:"520px"}}>
                <Stack mt={4} gap={4}>
                            <PostDetail post_detail={post_detail}/>

                            <Typography variant="body1"  style={{color:"#6da1da"}}>{post_detail?.text}

                                    <Typography variant="caption">   
                                    
                                        {' '} - { "  "}
                                        <Link to = {`/profile/${post_detail?.owner?.id}`}>

                                            @{post_detail?.owner?.firstName} {post_detail?.owner?.lastName}
                                        </Link>
                                    
                                    
                                    </Typography>

                            
                            </Typography>
                            <CommentList comments={comments}/>
                </Stack>
            </Container>
        
        </>
    )
}
export default Detail;