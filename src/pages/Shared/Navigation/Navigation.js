import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';





const Navigation = () => {
    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1, mb: 2, }}>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar>

                    <img style={{ width: '60px' }} src="https://i.ibb.co/Br04Kf1/images-2-modified.png" alt="" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0, mx: 5 }}>
                        BiCycle24
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 2, mx: 5 }}>
                        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></Link>


                        <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Products</Button></Link>
                        {
                            user?.email ?

                                <Button onClick={logout} color="inherit">Logout</Button>


                                :
                                <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;