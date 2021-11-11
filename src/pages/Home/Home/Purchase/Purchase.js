import { Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth()
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product)
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography>purchase</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ border: '1px solid gray', height: 300, m: 3 }}>
                        <input
                            style={{ width: '50%', border: '2px solid green', }}
                            {...register("name")}
                            placeholder="Name"
                            type="name"
                            defaultValue={product.name}

                        />
                        <br />

                        <input
                            style={{ width: '50%', border: '2px solid green' }}
                            {...register("description")}
                            // placeholder="Description"
                            defaultValue={user.email}
                            type="email"

                        />
                        <br />
                        <input
                            style={{ width: '50%', border: '2px solid green', m: 1 }}
                            {...register("image", { required: true })}
                            placeholder="Image Link"
                            defaultValue={product.image}
                            className="p-2 m-2 w-100 input-field"
                        />
                        <br />
                        <input
                            style={{ width: '50%', border: '2px solid green', m: 2 }}
                            {...register("price", { required: true })}
                            placeholder="Price"
                            defaultValue={product.price}
                            type="number"

                        />
                        <br />
                        <input
                            style={{ width: '50%', border: '2px solid green', m: 2 }}
                            {...register("price", { required: true })}
                            placeholder="Price"
                            type="date"


                        />
                        <br />




                        <input
                            style={{ width: '30%', backgroundColor: 'green', m: 2, color: 'white ' }}
                            type="submit"
                            value="confirm"

                        />
                    </form>
                </Grid>
                <Grid item xs={12} md={6} style={{ border: '1 px solid gray' }}>
                    <Grid>

                        <img style={{ width: '50%' }} src={product.image} alt="" />
                        <Typography>
                            {product.name}
                        </Typography>
                        <Typography>
                            Price: {product.price}$
                        </Typography>
                        <Typography>
                            product description:  {product.description}$
                        </Typography>
                    </Grid>


                </Grid>

            </Grid>
        </Container>
    );
};

export default Purchase;