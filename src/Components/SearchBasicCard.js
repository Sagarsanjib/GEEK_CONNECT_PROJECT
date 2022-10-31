import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const SearchBasic = ({query}) => {
    return (
        
            <Card   sx={{ maxWidth: 520 , margin:'auto', marginTop:'2rem'}} >
                    <CardContent>
                        
                        <Typography variant="h5" component="div">
                            Search Results for - {query}
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
export default SearchBasic;
