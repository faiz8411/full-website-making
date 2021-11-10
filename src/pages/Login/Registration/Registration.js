import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const Registration = () => {
    const [loginData, SetLoginData] = useState({})
    const history = useHistory()

    const { registerUser, isLoading, user } = useAuth()
    const handleOnBlur = (e) => {
        const Field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[Field] = value
        SetLoginData(newLoginData)
        console.log(newLoginData)
        e.preventDefault()
    }

    const handleLoginSubmit = (e) => {

        if (loginData.password !== loginData.password2) {
            alert('password did not macth')
        }
        registerUser(loginData.email, loginData.name, loginData.password, history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Register
                        </Typography>
                        {!isLoading &&
                            < form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="User Name"

                                    name="name"

                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="User email"

                                    name="email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="User Password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                    type="password"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Retype your Password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                    type="password"
                                />

                                <Button
                                    type="submit"
                                    sx={{ width: '75%', m: 1 }}
                                    variant="contained">
                                    Register

                                </Button>
                                <NavLink to="/login"

                                    style={{ textDecoration: 'none' }}
                                    sx={{ width: '75%', m: 1 }}
                                ><Button variant="text" style={{ color: 'red' }}>Already Register?? please login</Button>
                                </NavLink>


                            </form>}
                        {isLoading && <CircularProgress color="success" />
                        }

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="" style={{ width: '100%' }} alt="" />
                    </Grid>

                </Grid>
            </Grid>
        </Container >
    );
};

export default Registration;