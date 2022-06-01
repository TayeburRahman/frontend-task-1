import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CardSlider from './cardSlider';

const Slider = () => {
    return (
        <Container className='slider'>
            <Typography className='home-color slider__text' variant="h5" gutterBottom>
                 Item 1
               </Typography>
            <Grid> 
                <CardSlider/>
            </Grid>
        </Container>
    );
};

export default Slider;