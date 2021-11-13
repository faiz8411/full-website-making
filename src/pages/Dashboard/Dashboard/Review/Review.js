import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';


const Review = () => {
    const [review, setReview] = useState([])
    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/addReviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
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
                    // className="p-2 m-2 w-100 input-field"
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
                        // className="p-2 m-2 w-100 input-field"
                        />
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <br />

                        <br />
                        <textarea {...register("review")} style={{ width: 400, height: 200 }} />
                        <br />
                        <Button> <input type="submit" /></Button>
                    </form>
                </Grid>

            </Grid>
        </div>
    );
};

export default Review;