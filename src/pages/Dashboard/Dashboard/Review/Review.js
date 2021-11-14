import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';


const Review = () => {
    const [review, setReview] = useState([])
    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("https://stormy-wave-57583.herokuapp.com/addReviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => setReview(result));
        console.log(data);
        reset()
    };
    return (
        <div>
            <h2>your comments write here</h2>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography>user email</Typography>
                    {user?.email && <TextField
                        style={{ width: '50%', border: '2px solid green', }}
                        {...register("email")}

                        defaultValue={user.email}

                    />}
                    <br />
                    <Typography>user name</Typography>
                    {
                        user?.displayName && <TextField
                            style={{ width: '50%', border: '2px solid green', }}
                            {...register("name")}
                            placeholder="Name"
                            defaultValue={user.displayName
                            }

                        />
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>



                        <br />
                        <textarea {...register("review")} style={{ width: 400, height: 200 }} defaultValue="review write here" />
                        <br />
                        <textarea {...register("number")} style={{ width: 100, height: 20 }} placeholder="star number" />
                        <br />
                        <Button> <input type="submit" /></Button>
                    </form>
                </Grid>

            </Grid>
        </div>
    );
};

export default Review;