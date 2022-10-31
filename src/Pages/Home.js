
import Container from '@mui/material/Container';
import PostList from '../Components/PostList';

import { useEffect, useState } from 'react';

import { dummyapi } from '../Util';
import HomeBasic from '../Components/HomeBasic';

  

const Home = () =>
{
    
    
    const [posts,setPosts] = useState([]);
    
    const [pageNumber, setPageNumber] = useState(0);


    const loadMore = () =>
    {
        
        dummyapi.get(`/post?page=${pageNumber}`)
        .then(response => {
            const post_Array = response?.data?.data ?? [];
            setPosts(oldPost => [...oldPost,...post_Array]);
            setPageNumber(page => page + 1);
        })
    }

    useEffect(()=>
    {
       (async()=>
       {
        dummyapi.get(`/post`)
        .then(response => {
            const data= response.data.data;
            setPosts(data);
            setPageNumber(1);
        })
       })()
    },[]);

    

    return(
        <>
        
        <Container fixed  >

            <HomeBasic />
            
            <PostList posts = {posts} loadMore = {loadMore}  />
        </Container>
    

        </>
    )
    
}
export default Home;

