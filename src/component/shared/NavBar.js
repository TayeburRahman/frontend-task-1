import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import OpenDrawer from './Drawer';
import './Nav.css';

const Header = () => {
   
    return (
        <Grid className='Header' sx={{display:"flex", justifyContent: 'center'}}>
              <Grid className='page__header' sx={{width:"95%"}} > 
                 <Grid container>
                    <Grid className='page__header-logo' item sm={4} xs={4}  md={4} lg={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box className='OpenDrawer'>
                            <OpenDrawer/>
                          </Box>
                          <Box>
                             <Typography className='logo' variant="h5" style={{marginLeft:'10px'}}>LOGO</Typography>
                         </Box>
                      </Box>
                   </Grid>
                   <Grid className='page__header-langues' item sm={8} xs={8} md={8} lg={8} sx={{ display: 'flex',justifyContent: "flex-end",alignItems: 'center' }}> 
                      <Link className=" " as={HashLink} to="" sx={{color:"aqua"}}> BN </Link> 
                      <p className='marginL'> \ </p>
                      <Link className=" " as={HashLink} to=""> EN </Link>  
                   </Grid>
                 </Grid>
                <Grid container className='header__nav'  sx={{ display: 'flex',marginTop:"10px" , alignItems: 'center' }}>
                  <Grid className='page__header__link home-color' sx={{ display: 'flex', alignItems: 'center' }} item sm={8} xs={8}  md={9} lg={9}>
                   <Link className="ButtonHeder-m" as={HashLink} to="/home">HOME</Link>
                   <Link className="ButtonHeder-m" as={HashLink} to="/"> ADVERTISERS</Link>
                   <Link className="ButtonHeder-m" as={HashLink} to="/"> INFLUENCERS </Link>
                   <Link className="ButtonHeder-m" as={HashLink} to="/"> AD FORMATS </Link>
                   <Link className="ButtonHeder-m" as={HashLink} to="/"> BLOG </Link>
                   <Link className="ButtonHeder-m" as={HashLink} to="/"> CONTACT US  </Link>
                   
                  </Grid> 
                  <Grid className='page__header__auth' item sm={4} xs={4} md={3} lg={3} sx={{display:'flex', justifyContent: 'flex-end'}}> 
                     <Box className='boxShadow__nav'>
                       <button class="button-34 button" role="button">LOGIN</button>
                       <button class="button-34" role="button">SING UP</button>
                     </Box>
                  </Grid>
                </Grid>
              </Grid>
        </Grid>
    );
};

export default Header;