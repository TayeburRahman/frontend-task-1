import LaunchIcon from '@mui/icons-material/Launch';
import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const BannerAd = () => {
    return (
      <Container>
      <Grid container className='marginTop50' sx={{justifyContent:'center'}}>   
        <Grid item sm={12} xs={12} md={6} lg={6} sx={{display:"flex",justifyContent: 'space-around'}}>
           <img
             src='https://i.ibb.co/P56HHDN/Image-Sizesand-Formatsfor-Facebook2022500x300.png'
             alt="{item.title}" 
             loading="lazy"
           />
        </Grid>
        <Grid item className='textLeft formats__card' sm={12} xs={12} md={6} lg={6} sx={{display:"grid",justifyItems: 'start',alignContent: 'space-between'}}>
           <Typography className='button-color textLeft' variant="h6" gutterBottom component="div">
             BANNER AD
           </Typography>
           <Typography variant="subtitle1" gutterBottom component="div">
             Choose between the available banner formats. Highly
             effective ad for visibility
           </Typography>
           <Button className='textLeft formats__button' variant="text">Learn more <LaunchIcon/> </Button>
        </Grid>
      </Grid>
    </Container> 
    );
};

export default BannerAd;