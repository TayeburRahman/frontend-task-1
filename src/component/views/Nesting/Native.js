import LaunchIcon from '@mui/icons-material/Launch';
import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Native = () => {
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
            NATIVE
           </Typography>
           <Typography variant="subtitle1" gutterBottom component="div">
              Ad format with the image and the title, that perfectly fits into
              the content of the site.<br/>
              Native ads are placed in the most visible areas of the page
              and, thus, this format shows good results and the level of
              interaction.
           </Typography>
           <Button className='textLeft formats__button' variant="text">Learn more <LaunchIcon/> </Button>
        </Grid>
      </Grid>
    </Container>
    );
};

export default Native;