import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom'



const AllProduct = () => {
    const [products, setProducts] = useState([])
    const { productId } = useParams()
    useEffect(() => {
        fetch('https://stormy-wave-57583.herokuapp.com/Products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, mb: 5 }}>

            <Container>
                <Typography variant="h5" style={{ textAlign: 'left', color: '#F6361F ', fontWeight: 600 }}>
                    ALL PRODUCTS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Grid item xs={4} sm={4} md={4} style={{ height: "500px" }}>
                            <Card sx={{ minWidth: 375, border: 1, boxShadow: 0 }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        style={{ width: '100%', height: '50%', margin: '0 auto' }}
                                        image={product.image}

                                    />
                                </Box>
                                <CardContent>


                                    <Typography variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography>
                                        {product.price}$
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        <Link style={{ textDecoration: 'none' }}
                                            to={`/purchase/${product._id}`}
                                        ><Button
                                            variant="contained">
                                                purchase now
                                            </Button>
                                        </Link>
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box >

    );
};

export default AllProduct;