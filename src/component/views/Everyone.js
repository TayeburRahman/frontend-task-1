import CellTowerIcon from '@mui/icons-material/CellTower';
import TelegramIcon from '@mui/icons-material/Telegram';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Everyone.css';

const Everyone = () => {
    return (
        <Container className='everyone'>
            <Grid className='' sx={{display: 'grid',justifyItems: 'center'}}>
              <Typography className='textLeft marginTop30 home-color' variant="h5" gutterBottom>
                 AVAILABLE FOR EVERYONE
               </Typography>
               <Typography variant="subtitle1" gutterBottom>
                 Here will be a text
               </Typography>
            </Grid>
            <Grid container className='marginCard'>
                <Grid item sm={12} xs={12} md={6} lg={4}>
                    <VolumeDownIcon className='svgSize ' />
                    <Typography className='marginTop40' variant="subtitle1" gutterBottom>
                       Text 1
                   </Typography>
                   <button className="button-17 marginTop30" role="button">Hello 1</button>
                </Grid> 
                <Grid item sm={12} xs={12} md={6} lg={4}>
                    <TelegramIcon className='svgSize'/>
                    <Typography className='marginTop40' variant="subtitle1" gutterBottom>
                      Text 2
                    </Typography>
                    <button className="button-17 marginTop30" role="button">Hello 2</button>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={4}>
                   <CellTowerIcon className='svgSize'/>
                   <Typography className='marginTop40' variant="subtitle1" gutterBottom>
                     Text 3
                   </Typography>
                   <button className="button-17 marginTop30" role="button">Hello 3</button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Everyone;









 