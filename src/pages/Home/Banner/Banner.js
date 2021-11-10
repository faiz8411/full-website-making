import { Button, Container, Grid, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React from 'react';
import './Banner.css'
import bg from '../../../banner-Images/i-love-cycling-banner-183054174.jpg'
import { NavLink } from 'react-router-dom';


const bannerBg = {
    background: `url(${bg})`,
    width: '100%'

}
const verticleCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}




const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, mb: 5 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={7}>

                </Grid>

                <Grid item style={{ ...verticleCenter, textAlign: 'left' }} xs={12} md={5}>
                    <Box>
                        <Typography variant="h3">
                            Enjoy Your Riding  <br />
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 12, color: 'black', fontWeight: 300 }}>
                            Traditional Sourcing Brought Online. Find Quality Products & Contact Verified Suppliers! Reduce Costs With Factory Direct Sourcing. Low MOQ, OEM/ODM Available. Source Now! Production Monitoring. Trade Assurance. Logistics Service. Most Popular.

                        </Typography>
                        <NavLink to="/allProducts" style={{ textDecoration: 'none' }}><Button variant="contained" style={{ textDecoration: 'none' }}>Explore Your BiCycle</Button></NavLink>
                    </Box>


                </Grid>

            </Grid>







        </Container>
    );
};

export default Banner;