import { makeStyles } from "@material-ui/core";
import { Container, Grid, IconButton, List, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink, Link } from 'react-router-dom';

const useStyle = makeStyles({
    socialIcon: {
        color: '#19D3AE !important',
        border: '1px solid #19D3AE !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover': {
            background: '#19D3AE !important',
            color: '#fff !important'
        }
    }
})

const Footer = () => {
    const { socialIcon } = useStyle();
    // const { socialIcon } = useStyle();
    return (
        <footer>
            <Container style={{ backgroundColor: 'black', my: 5, mb: 5 }}>
                <Grid container spacing={3} marginTop={10} marginBottom={10}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ color: 'white', mb: 1 }}>
                            <ListItemText sx={{ color: '#FF5733 ', mb: 1 }} variant="h3">BiCycle24</ListItemText>
                            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><ListItemText>Home</ListItemText></Link>
                            <ListItemText>servicinng bicycle</ListItemText>
                            <ListItemText>pumping</ListItemText>

                            <ListItemText>Checking</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ color: 'white', mb: 1 }}>
                            <ListItemText sx={{ color: '#FF5733 ', mb: 1 }}>Services</ListItemText>
                            <ListItemText >top bicycle</ListItemText>
                            <ListItemText>Top Review</ListItemText>
                            <ListItemText>professional mechanics</ListItemText>
                            <ListItemText>Google authorised</ListItemText>

                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#FF5733', mb: 1 }}>biCycle point</ListItemText>
                            <Box style={{ color: 'white' }}>
                                <ListItemText>international policy</ListItemText>
                                <ListItemText>Check with review</ListItemText>


                            </Box>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ color: 'white', mb: 1 }}>
                            <ListItemText sx={{ color: '#FF5733 ', mb: 1 }}>Our Address</ListItemText>
                            <input />
                            <ListItemText>Dhaka,jatrabari</ListItemText>
                            <ListItemText>Email:faizullah.noa2014@gmail.co.</ListItemText>
                            <ListItemText>Mobile:+977432345</ListItemText>
                        </List>

                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', pt: 4, color: 'white' }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved By Bicycle24</Typography>
            </Container>
        </footer>
    );
};

export default Footer;