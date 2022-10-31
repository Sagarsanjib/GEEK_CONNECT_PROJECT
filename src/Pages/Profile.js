import React, { useParams } from "react-router-dom";
import ProfileDetails from "../Components/ProfileDetails";

import { useEffect, useState } from 'react';
import { dummyapi } from '../Util';

import PostList from "../Components/PostList";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";





const Profile = () => {

    const { id } = useParams();

    const [posts, setPosts] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);

    const [Profile_Detail, setProfileDetail] = useState([]);

    useEffect(() => {


        (async () => {
            const response = await dummyapi.get(`/user/${id}`);
            const data = response.data;
            //console.log(data);
            setProfileDetail(data);
        })();

        (async () => {

            const response = await dummyapi.get(`/user/${id}/post`);
            const data = response.data.data;
            //console.log(data);
            setPosts(data);
            setPageNumber(1);

        })();

    }, [id])


    const loadMore = () => {

        dummyapi.get(`/user/${id}/post?page=${pageNumber}`)
            .then(response => {
                const post_Array = response?.data?.data ?? [];
                setPosts(oldPost => [...oldPost, ...post_Array]);
                setPageNumber(page => page + 1);
            })
    }

    return (
        <>
            <Container>

                <ProfileDetails    profile_detail={Profile_Detail}/>
                <hr />

                <Typography variant="h6" align="center" color="#66B2FF" mt ={4}>Posts of...</Typography>
                <PostList posts={posts} loadMore={loadMore} />
            </Container>

        </>
    )
}
export default Profile;