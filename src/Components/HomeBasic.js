import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const HomeBasic = () => {
    return (
        
            <Card   sx={{ maxWidth: 520 , margin:'auto', marginTop:'2rem'}} >
                    <CardContent>
                        <Typography variant = "h4" color="text.secondary" gutterBottom>
                            Hi 👋
                        </Typography>
                        <Typography variant="h5" component="div">
                            Welcome to GeekConnect
                        </Typography>
                        
                        <Typography variant="body2">
                            Love Animals. 💕
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                
            </Card>
       
    );
}
export default HomeBasic;
