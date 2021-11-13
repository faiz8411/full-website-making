import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, RateReviewOutlined, PaymentOutlined, ShoppingBasket, FaceRounded } from '@material-ui/icons'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ManageOrders from '../ManageOrder/ManageOrders';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Admin from '../Admin/Admin';
import Payment from '../Payment/Payment';
import useAuth from '../../../hooks/useAuth';
import ManageProducts from './ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Review from './Review/Review';

const drawerWidth = 240;

function Dashboard(props) {
    const { user, logout, admin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

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
                    <Link to="/home" style={{ textDecoration: 'none' }}><ListItemText style={{ color: 'white' }} primary="HOME" /></Link>
                </ListItem>

            </List>
            <List>

                <ListItem button sx={{ backgroundColor: 'green' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <ShoppingBasket sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <Link to={`${url}`} style={{ textDecoration: 'none' }}> <ListItemText style={{ color: 'white' }} primary="ORDERS" /></Link>
                </ListItem>

            </List>
            <List>

                {admin && <ListItem button sx={{ backgroundColor: 'green' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <ShoppingBasket sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <Link to={`${url}/admin`} style={{ textDecoration: 'none' }}> <ListItemText style={{ color: 'white' }} primary="ADMIN" /></Link>
                </ListItem>}

            </List>
            <List>

                {admin && <ListItem button sx={{ backgroundColor: 'green' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <ShoppingBasket sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <Link to={`${url}/manageProduct`} style={{ textDecoration: 'none' }}> <ListItemText style={{ color: 'white' }} primary="ADD PRODUCTS" /></Link>
                </ListItem>}

            </List>
            <List>

                <ListItem button sx={{ backgroundColor: 'gray' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <PaymentOutlined sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <Link to={`${url}/payment`} style={{ textDecoration: 'none' }}> <ListItemText style={{ color: 'white' }} primary="payment" /></Link>
                </ListItem>

            </List>
            <List>

                <ListItem button sx={{ backgroundColor: 'green' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <RateReviewOutlined sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <Link to={`${url}/review`} style={{ textDecoration: 'none' }}><ListItemText style={{ color: 'white' }} primary="REVIEW" /></Link>
                </ListItem>

            </List>
            <List>

                <ListItem button sx={{ backgroundColor: 'green' }}>
                    <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <FaceRounded sx={{ fontSize: 30, }} />
                    </ListItemIcon>
                    <Link to="/home" style={{ textDecoration: 'none' }}> <ListItemText onClick={logout} style={{ color: 'white' }} primary="LOGOUT" /></Link>
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
                <Switch>
                    <Route exact path={path}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/admin`}>
                        <Admin></Admin>
                    </AdminRoute>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>

                <Typography paragraph>

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
