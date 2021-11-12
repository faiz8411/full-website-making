import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, RateReviewOutlined, PaymentOutlined, ShoppingBasket, FaceRounded } from '@material-ui/icons'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Paper, Table, TextField } from '@mui/material';
import ManageOrders from '../ManageOrder/ManageOrders';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>

                <ListItem button sx={{ backgroundColor: 'green' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <Home sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <NavLink to="/home" style={{ textDecoration: 'none' }}><ListItemText style={{ color: 'white' }} primary="Home" /></NavLink>
                </ListItem>

            </List>
            <List>

                <ListItem button sx={{ backgroundColor: 'green' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <ShoppingBasket sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: 'white' }} primary="manage orders" />
                </ListItem>

            </List>
            <List>

                <ListItem button sx={{ backgroundColor: 'gray' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <PaymentOutlined sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: 'white' }} primary="Pay" />
                </ListItem>

            </List>
            <List>

                <ListItem button sx={{ backgroundColor: 'green' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <RateReviewOutlined sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: 'white' }} primary="review" />
                </ListItem>

            </List>
            <List>

                <ListItem button sx={{ backgroundColor: 'green' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <FaceRounded sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: 'white' }} primary="logout" />
                </ListItem>

            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <img style={{ width: '40px', marginRight: '20px' }} src="https://i.ibb.co/Br04Kf1/images-2-modified.png" alt="" /><Typography variant="h6" display="inline">Bicycle24 Dashboard</Typography>

                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Typography paragraph>
                    <ManageOrders></ManageOrders>
                </Typography>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
