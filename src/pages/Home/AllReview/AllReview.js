import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';



const AllReview = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://stormy-wave-57583.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <Container m={5} p={5} sx={{ mt: 5 }} marginTop={20} >
                <Typography variant="h5" style={{ color: '#C70039', fontWeight: 600, textAlign: 'left' }}> CUSTOMERS REVIEW:</Typography>
                <Grid container spacing={3}>
                    {
                        review.map(pd => <Grid item xs={12} sm={6} md={4}>
                            <Paper sx={{ p: 2, textAlign: 'left' }} variant="outlined">
                                <Typography style={{ fontWeight: 500 }} variant="h6" color="#C70039 " >customer name:{pd.name}</Typography>

                                <Typography style={{ fontWeight: 500, color: 'black', my: 2 }} variant="subtitle" sx={{ my: 2 }} >customer email:{pd.email} </Typography>
                                <br />
                                <Typography style={{ fontWeight: 500, fontSize: 13 }} variant="subtitle" sx={{ my: 2, color: 'gray' }} >customer review:{pd.review} </Typography>

                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AllReview;