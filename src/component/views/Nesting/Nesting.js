import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import './Nesting.css';

const Nesting = () => { 

    let location = useLocation();   
    let popUnder = location.pathname === '/popUnder' ;
    console.log(popUnder)
    
    return (
        <Grid className='paddingTop' >
            <Box sx={{display:"flex",justifyContent:'center'}}>
            <Typography className='textLeft home-color' variant="h5" gutterBottom>
              VERSATILE AD FORMATS
               </Typography>
            </Box> 
            <Grid container className='marginTop50' sx={{justifyContent:'center',}}>   
               <Grid item sm={12} xs={12} md={6} lg={4} sx={{display:"flex",justifyContent: 'space-around', marginBottom:"5px"}}>
                <Link className='nav__link' to="popUnder"><button className="buttonNesting" role="button" 
                 style={{
                    background: popUnder ? '#ff6f00' : 'white',
                    color: popUnder  ? 'white' : '#404040'
                }}
                >POP-UNDER</button> 
                </Link>
                <Link className='nav__link' to="bannerAd" ><button className="buttonNesting" role="button" 
                    style={{
                        background: location.pathname == "/bannerAd" ? '#ff6f00' : 'white',
                        color: location.pathname == "/bannerAd" ? 'white' : '#404040'
                    }}
                    >BANNER AD 
                    </button> 
                </Link>
               </Grid>
               <Grid item sm={12} xs={12} md={6} lg={4} sx={{display:"flex", justifyContent: 'space-around', marginBottom:"5px"}}>
                <Link className='nav__link' to="native"><button className="buttonNesting" role="button"
                 style={{
                    background: location.pathname == "/native" ? '#ff6f00' : 'white',
                    color: location.pathname == "/native" ? 'white' : '#404040'
                }}
                >NATIVE</button> </Link>
                <Link className='nav__link' to="skim"><button className="buttonNesting" role="button"
                 style={{
                    background: location.pathname == "/skim" ? '#ff6f00' : 'white',
                    color: location.pathname == "/skim" ? 'white' : '#404040'
                }}
                >SKIM</button> </Link>
               </Grid>
            </Grid> 
            <Grid container className='' sx={{justifyContent:'center'}}>   
               <Grid item sm={12} xs={12} md={12} lg={12} sx={{display:"flex",justifyContent: 'space-around'}}>
               <Outlet />
               </Grid>
            </Grid> 
        </Grid>
    );
};

export default Nesting;