import { Card, CardContent, CardMedia, Container, Grid, Link, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const AllReview = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <Container m={5} p={5} sx={{ mt: 5 }}>
                <Typography>top castomer Review</Typography>
                <Grid container spacing={3}>
                    {
                        review.map(pd => <Grid item xs={12} sm={6} md={4}>
                            <Paper sx={{ p: 2, textAlign: 'center' }} variant="outlined">
                                <Typography variant="h5" color="#19D3AE">customer name:{pd.name}</Typography>

                                <Typography variant="subtitle" sx={{ my: 2 }} >customer email:{pd.email} </Typography>
                                <br />
                                <Typography variant="subtitle" sx={{ my: 2, color: 'green' }} >customer review:{pd.review} </Typography>

                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AllReview;