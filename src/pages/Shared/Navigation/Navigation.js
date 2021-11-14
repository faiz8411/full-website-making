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
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles'





const Navigation = () => {
    const { user, logout } = useAuth()
    const theme = useTheme()
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right !important'
            }
        }
    })
    const { navIcon, navItemContainer, navLogo } = useStyle()
    return (
        <>
            <Box sx={{ flexGrow: 1, mb: 2, }}>
                <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                        >
                            <MenuIcon />
                        </IconButton>

                        <img style={{ width: '60px' }} src="https://i.ibb.co/Br04Kf1/images-2-modified.png" alt="" />
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 0, mx: 5 }}>
                            BiCycle24
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 2, mx: 5 }}>
                            <Box className={navItemContainer}>
                                <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></Link>


                                <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Products</Button></Link>
                                {
                                    user?.email && <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>
                                }

                                {
                                    user?.email && <NavLink to="/orders" style={{ textDecoration: 'none', color: 'white' }}>
                                        <Button color="inherit">Orders</Button>
                                    </NavLink>
                                }
                                {user?.email ?


                                    <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                        <Button onClick={logout} color="inherit">Logout</Button>
                                    </NavLink>


                                    :
                                    <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                                }
                                {user?.email &&
                                    <Button type="text" color="inherit">welcome:{user.displayName}</Button>}

                            </Box>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navigation;