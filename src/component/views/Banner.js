import { Box, Grid, Typography } from '@mui/material';
import { default as React } from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <Box className='banner' sx={{display:"flex", justifyContent: 'center'}}>
            <Grid sx={{width:"95%",marginTop:"15px"}}>
               <Typography className='textLeft marginTop50 home-color' variant="h5" gutterBottom>
                  Here will be a Title
                 </Typography>
                <Grid container className='bannerText text-color'> 
                    <Grid className='page__banner' item sm={12} xs={12}  md={6} lg={6}>
                        <Typography className='textLeft' variant="h6" gutterBottom>
                         Artwork for title 1
                        </Typography> 
                    </Grid>
                    <Grid className='page__banner' item sm={12} xs={12} md={6} lg={6}  > 
                        <Typography className='textLeft__p' variant="h6" gutterBottom>
                         Artwork for title 1
                        </Typography> 
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;