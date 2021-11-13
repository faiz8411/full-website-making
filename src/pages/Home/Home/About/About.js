import React from 'react';


import Grid from '@mui/material/Grid';
import about from '../../../../banner-Images/H4d55cbf3c0164c7a9a119a9f4630f3e2D.jpg'
import { Container, Typography } from '@material-ui/core';

const About = () => {
    return (
        <Container >

            <Grid container spacing={2} marginTop={20}>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={about} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" style={{ fontWeight: 600, color: '#1FF6C4 ', textAlign: 'left' }}>
                        ABOUT BiCycle24
                    </Typography>
                    <Typography variant="h6" style={{ fontSize: 13, color: 'gray', fontWeight: 500, textAlign: 'left' }}>
                        BiCycle24 co., ltd. located in Dhaka city, Shandong province, is a comprehensive enterprise integrating the research and development,Manufacturing and trade of machinery, specializing in the production of the Electric scooter ,Hoverboard.And we also have multiple branches factories,specialize in Self loading concrete mixing trucks, Mini excavator, loader, backhoe loader and other construction machinery and garden machinery.In recent years, the company introduced advanced technology, the introduction of advanced equipment, and has an excellent production team and perfect quality assurance system.Our company has passed international ISO: 9001-2000 quality certification,Products have CE certification,We have more than 300 employees, 30 technical  personnel, 15 engineers and 20 foreign trade sales staff.And exported products to more than 30 countries and regions, including:Russia and central Asia, Middle East and Iran, Africa, southeast Asia and South Asia, South America and so on.Most of clients are famous all over the world .Truly believe that the service is not to do the best, but to do better.
                        We sincerely hope to cooperate with more customers and friends from all over the world in different waysCooperative relationship of mutual trust and win-win results with you.
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
};

export default About;