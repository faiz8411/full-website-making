import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const AllProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/Products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, mb: 5 }}>
            <Typography>
                this is service
            </Typography>
            <Container>
                <Typography>
                    hi
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

                                        <Button variant="contained">purchase now</Button>
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