import { makeStyles } from "@material-ui/core";
import { Container, Grid, IconButton, List, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
            <Container style={{ backgroundColor: 'black', mb: 5 }}>
                <Grid container spacing={3} marginTop={4} marginBottom={10}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4 }}>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: 'white', mb: 1 }}>Services</ListItemText>
                            <ListItemText >Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#19D3AE', mb: 1 }}>Oral Health</ListItemText>
                            <Box style={{ color: 'white' }}>
                                <ListItemText>Emergency Dental Care</ListItemText>
                                <ListItemText>Check Up</ListItemText>
                                <ListItemText>Treatment of Personal Diseases</ListItemText>
                                <ListItemText>Tooth Extraction</ListItemText>
                                <ListItemText>Check Up</ListItemText>
                                <ListItemText>Check Up</ListItemText>
                                <ListItemText>Check Up</ListItemText>
                            </Box>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: 'white', mb: 1 }}>Our Address</ListItemText>
                            <ListItemText>New York - 101010 Hudson</ListItemText>
                            <ListItemText>Yards</ListItemText>
                        </List>
                        {/* <IconButton className={socialIcon}>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton className={socialIcon}>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton className={socialIcon}>
                        <InstagramIcon />
                    </IconButton>
                    <Typography>Call Now</Typography>
                    <Button variant="contained">+8065432145</Button> */}
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', pt: 4, color: 'white' }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;