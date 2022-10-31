import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { dummyapi } from '../Util';

import Container from '@mui/material/Container';

import PostList from '../Components/PostList';
import SearchBasic from '../Components/SearchBasicCard';
import LinearProgress from '@mui/material/LinearProgress';

const Search = () => {

    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const [posts, setposts] = useState([]);

    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        setposts([]);
        (async () => {
            if (searchParams.has('q')) {
                const response = await dummyapi.get(`/tag/${searchParams.get('q')}/post`);
                console.log(response.data.data);
                setposts(response.data.data);
                setPageNumber(1);
            }
            else {
                navigate('/');
            }

        })()

    }, [searchParams, navigate]);

    const loadMore = async () => {
        dummyapi.get(`/tag/${searchParams.get('q')}/post?page=${pageNumber}`)
            .then(response => {
                const post_Array = response?.data?.data ?? [];
                setposts(oldPost => [...oldPost, ...post_Array]);
                setPageNumber(page => page + 1);
            })
    };
    return (
        <>




            <Container fixed  >


                <SearchBasic query={searchParams.get('q')} />
                {posts.length === 0  ? (<LinearProgress  style={{margin:"1.5rem 0.75rem 1.5rem 0.75rem"}}/>) :
                    (
                        <>
                            
                            <PostList posts={posts} loadMore={loadMore} />

                        </>
                    )

                }

                
            </Container>





        </>
    )
}

export default Search;