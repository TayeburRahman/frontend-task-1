import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './publishers.css';

const  Publishers = () => {
    return (
        <Grid className="publishers">
         <Container className=''> 
               <Typography className='' variant="h5" sx={{color:"white",marginTop:"10px"}}>
                 Item 1
               </Typography>
            <Grid container className='marginTop40'>
                <Grid className='grid__justify' item sm={12} xs={12} md={6} lg={4}> 
                    <Box className="radius__impressions" sx={{color:"white"}}>
                      <Typography variant="h3" gutterBottom component="div">
                         1 BN+
                      </Typography>
                      <Typography variant="h6" gutterBottom component="div">
                         Daily Impressions
                      </Typography>
                    </Box> 
                </Grid> 
                <Grid className='grid__justify' item sm={12} xs={12} md={6} lg={4}> 
                   <Box className="radius__paid home-color">
                      <Typography variant="h3" gutterBottom component="div">
                        $500K+
                      </Typography>
                      <Typography variant="h6" gutterBottom component="div">
                        Paid
                      </Typography>
                    </Box> 
                </Grid>
                <Grid className='grid__justify' item sm={12} xs={12} md={6} lg={4}>
                   <Box className="radius__global">
                      <Typography variant="h3" gutterBottom component="div">
                       8K+
                      </Typography>
                      <Typography variant="h6" gutterBottom component="div">
                         Global Publishers
                      </Typography>
                    </Box> 
                </Grid>
            </Grid>
         </Container>
        </Grid>
    );
};

export default  Publishers;