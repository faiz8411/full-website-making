import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Card, CardContent, CardMedia, Container, Grid, Link, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`https://stormy-wave-57583.herokuapp.com/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    const handleDelete = (id) => {
        alert('you want to delete')
        fetch(`https://stormy-wave-57583.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id);
    };
    return (

        <Container>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: 'flex' }}>
                {
                    orders.map(order => <Grid item xs={4} sm={4} md={4} style={{ height: "500px" }}>
                        <Card sx={{ minWidth: 375, border: 1, boxShadow: 0 }}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: '50%', margin: '0 auto' }}
                                    image={order.image}


                                />
                                <Typography style={{ fontSize: 14, backgroundColor: 'green', color: 'white' }} variant="h6" component="div">
                                    your email: {user.email}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    your ordered product:{order.name}

                                </Typography>
                                <Typography style={{ color: 'red', border: '1 px solid gray' }}>
                                    {order.price}$
                                </Typography>
                                <Typography variant="body2" color="text.secondary">


                                    <Button
                                        onClick={() => handleDelete(order?._id)}
                                        variant="contained">
                                        delete
                                    </Button>

                                </Typography>
                            </Box>


                        </Card>
                    </Grid>)
                }
            </Grid>

        </Container>

    );
};

export default Orders;