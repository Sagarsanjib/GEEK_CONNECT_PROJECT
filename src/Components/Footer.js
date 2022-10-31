import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

const Footer = () => {
   

  return (
    <Box style={{paddingTop:"4rem"}}>
     
      <Typography variant="h6" gutterBottom align='center' 
      
      marginBottom="0px"
        component="div"
      >
       copyright &copy; 2022 Sagar & Team!
      </Typography>
       
     
    </Box>
  );
}

export default Footer;