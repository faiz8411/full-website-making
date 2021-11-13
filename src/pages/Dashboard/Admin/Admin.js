import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Admin = () => {
    const [email, setEmail] = useState('')
    const [creatAdmin, setCreateAdmin] = useState(false)
    // const { token } = useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://stormy-wave-57583.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    // setEmail('')
                    setCreateAdmin(true)
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <Typography variant="h4">
                please make admin
            </Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%', m: 2 }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                <Button type="submit" variant="contained">make admin</Button>
            </form>
            {creatAdmin && <Alert severity="success">admin created  successfully </Alert>}
        </div>
    );
};

export default Admin;