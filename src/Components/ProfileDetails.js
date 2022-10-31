import React from 'react'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { Typography } from "@mui/material";

const ProfileDetails = ({ profile_detail }) => {

  console.log(profile_detail);
  return (
    <Container sx={{ maxWidth: 520 }}>



      <Stack direction={"row"} gap={4} mt={4} mb={4}>

        <Avatar
          alt="Remy Sharp"
          src={profile_detail?.picture}
          sx={{ width: "10rem", height: "10rem" }}
        />

        <Stack ml={4}>

          <Typography variant="h3">{profile_detail?.firstName} {profile_detail?.lastName}</Typography>
          <Typography variant="h4">{profile_detail?.location?.city} , {profile_detail?.location?.country}</Typography>
          <Typography variant="h6">Member Since {(new Date(profile_detail.registerDate)).getUTCFullYear()}</Typography>
          <Typography variant="p">{profile_detail.email}</Typography>
          <Typography variant="p">Ph.No: {profile_detail.phone}</Typography>

        </Stack>
      </Stack>

    </Container>
  )
}

export default ProfileDetails;