import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

const Card3 = () => {
    return (
        <Box className='card__shadow' sx={{ display: 'flex',padding:"10px", width:"90%" }} >
        <Card className='card' sx={{ display: 'flex',padding:"10px", boxShadow:"none"}}>
         <CardMedia
           component="img"
           sx={{ width: 150, height: 150}}
           image="https://i.ibb.co/vDxNkyx/2022-Dimensions500x300.jpg"
           alt="Live from space album cover"
         />
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
           <CardContent className='home-color' sx={{ flex: '1 0 auto' }}>
             <Typography component="div" variant="subtitle1" gutterBottom>
                Title 2
             </Typography>
             <Typography className='textWeight' variant="h6" component="div">
                 Hello, Here will be a text
             </Typography>
           </CardContent> 
         </Box> 
        </Card>
       </Box>
    );
};

export default Card3;