import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <Grid>
         <Container className='footer__container'>
            <Grid container sx={{justifyContent:'center'}}>   
                <Grid item sm={12} xs={6} md={6} lg={3} sx={{display:"grid",justifyContent: 'space-around', marginTop:'10px'}}>
                    <Typography className='home-color textLeft'  sx={{fontSize:'20px'}}  gutterBottom component="div">
                     We are social 
                    </Typography>
                    <Box className="textLeft" sx={{marginTop:"25px"}}>
                        <Typography className='text-color' variant="" gutterBottom  style={{frontWeight:'300', fontSize:"18px"}}>
                           FOLLOW US
                        </Typography>
                        <Box sx={{marginTop:"35px"}}>
                         <Link to="">
                         <img
                           src="https://i.ibb.co/23Vs1ZX/images2removebgpreview100x100.png" 
                           alt='{item.title}'
                           loading="lazy"
                           width='10%'
                           className='footerSvg'
                         />
                         </Link>
                          <Link to="/">
                          <img
                           src="https://i.ibb.co/ZYzDqPN/1200px-Facebookcirclepictogramsvg1removebgpreview100x100.png" 
                           alt='{item.title}'
                           loading="lazy"
                           width='10%'
                           className='footerSvg'
                         />
                          </Link>
                          <Link to="/">
                          <img
                           src="https://i.ibb.co/6yCbFHK/resized-image-Promo-19-removebg-preview.png" 
                           alt='{item.title}'
                           loading="lazy"
                           width='10%'
                           className='footerSvg'
                         /> 
                          </Link>
                        </Box>
                    </Box>
                    <Typography className='textLeft logo' sx={{marginTop:"30px"}}>LOGO</Typography>

                </Grid>
                <Grid item sm={12} xs={6} md={6} lg={3} sx={{display:"grid",justifyContent: 'space-around', marginTop:'10px'}}>
                   <Typography className='home-color textLeft' sx={{fontSize:'20px'}}  component="div">
                      Links
                    </Typography>
                   <Box>
                     <Link className='footer_link' to='/'>  <Typography className='textLeft footer__nav' sx={{marginTop:"25px"}}>ADVERTISERS</Typography></Link>
                     <Link className='footer_link' to='/'>   <Typography className='textLeft footer__nav' sx={{marginTop:"25px"}}>PUBLISHERS</Typography></Link>
                     <Link className='footer_link' to='/'>  <Typography className='textLeft footer__nav' sx={{marginTop:"25px"}}>INFLUENCERS</Typography></Link>
                     <Link className='footer_link' to='/'>   <Typography className='textLeft footer__nav' sx={{marginTop:"25px"}}>AD FORMATS </Typography></Link>
                 </Box> 
                </Grid>
                <Grid item sm={12} xs={6} md={6} lg={3} sx={{display:"grid",justifyContent: 'space-around', marginTop:'10px'}}>
                   <Typography className='home-color textLeft' sx={{fontSize:'20px'}}  component="div">
                     Documentation
                    </Typography>
                   <Box>
                     <Link className='footer_link' to='/'>  <Typography className='textLeft footer__nav' sx={{marginTop:"25px"}}>TERMS & CONDITIONS</Typography></Link>
                     <Link className='footer_link' to='/'>   <Typography className='textLeft footer__nav' sx={{marginTop:"25px"}}>PRIVACY POLICY </Typography></Link>
                     <Link className='footer_link' to='/'>  <Typography className='textLeft footer__nav' sx={{marginTop:"25px"}}>CANCELLATION POLICY</Typography></Link>
                     <Link className='footer_link' to='/'>   <Typography className='textLeft footer__nav' sx={{marginTop:"25px"}}>BLOG </Typography></Link>
                   </Box>
                </Grid>
                <Grid item sm={12} xs={6} md={6} lg={3} sx={{display:"grid",justifyContent: 'space-around', marginTop:'10px'}}>
                    <Typography className='home-color textLeft' sx={{fontSize:'20px'}}  component="div">
                    Support
                    </Typography>
                    <Box>
                     <Link className='footer_link' to='/'>  <Typography className='textLeft text-color' sx={{marginTop:"25px"}}>FAQ</Typography></Link>
                     <Link className='footer_link' to='/'>   <Typography className='textLeft text-color' sx={{marginTop:"25px"}}>MEDIA KIT</Typography></Link> 
                     <Link className='footer_link' to='/'>   <Typography className='textLeft text-color' sx={{marginTop:"25px"}}>CONTACT US</Typography></Link>
                    </Box>
                </Grid> 
            </Grid>
          </Container>
        </Grid>
    );
};

export default Footer;