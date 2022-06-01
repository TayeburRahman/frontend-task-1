import LaunchIcon from '@mui/icons-material/Launch';
import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const PopUnder = () => {
    return (
        <Container>
          <Grid container className='marginTop50' sx={{justifyContent:'center'}}>   
            <Grid item sm={12} xs={12} md={6} lg={6} sx={{display:"flex",justifyContent: 'space-around'}}>
               <img
                 src='https://i.ibb.co/vDxNkyx/2022-Dimensions500x300.jpg'
                 alt="{item.title}" 
                 loading="lazy"
               />
            </Grid>
            <Grid item className='textLeft formats__card' sm={12} xs={12} md={6} lg={6} sx={{display:"grid",justifyItems: 'start',alignContent: 'space-between'}}>
               <Typography className='button-color textLeft' variant="h6" gutterBottom component="div">
                  POP-UNDER
               </Typography>
               <Typography variant="subtitle1" gutterBottom component="div">
                  This is one of the most popular ads. After user’s click, this
                  ad opens landing page in behind. So, the user experience is
                  not hampered much.
               </Typography>
               <Button className='textLeft formats__button' variant="text">Learn more <LaunchIcon/> </Button>
            </Grid>
          </Grid>
        </Container> 
    );
};

export default PopUnder;