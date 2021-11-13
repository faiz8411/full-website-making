import { Container, Grid, TextField, Typography } from '@mui/material';
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

        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        alert('your order successfully added in my order')
        data.status = "pending"
        fetch("https://stormy-wave-57583.herokuapp.com/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);



    }


    useEffect(() => {
        fetch(`https://stormy-wave-57583.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    // console.log(product)

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography>purchase</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ border: 0, height: 300, m: 3 }}>
                        {product?.name && <input
                            style={{ width: '50%', border: '2px solid green', m: 1 }}
                            {...register("name")}
                            placeholder="write service name"

                            defaultValue={product?.name}

                            required
                        // className="p-2 m-2 w-100"
                        />}
                        <br />

                        {user?.email && <input
                            style={{ width: '50%', border: '2px solid green', m: 1 }}
                            {...register("email")}
                            defaultValue={user.email}
                            className="p-2 m-2 w-100"
                        />}
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
                            style={{ width: '30%', backgroundColor: 'green', m: 2, color: 'white ' }}
                            type="submit"
                            value="confirm"

                        />
                    </form>
                </Grid>
                <Grid item xs={12} md={6} sx={{ border: 0 }}>
                    <Grid>

                        <img style={{ width: '50%' }} src={product.image} alt="" />
                        <Typography>
                            {product.name}
                        </Typography>
                        <Typography
                            style={{ color: 'green' }}>
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