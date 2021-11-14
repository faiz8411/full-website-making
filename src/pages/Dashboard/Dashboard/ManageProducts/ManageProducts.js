import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useAuth from '../../../../hooks/useAuth';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';


const ManageProducts = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
    const [control, setControl] = useState(false)

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");

    const handleStatus = e => {
        setStatus(e.target.value)
    }
    console.log(status)

    console.log(status);
    useEffect(() => {
        fetch(`https://stormy-wave-57583.herokuapp.com/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

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

    const handleUpdate = (id) => {
        fetch(`https://stormy-wave-57583.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };

    return (
        <div>
            {/* <AddService></AddService> */}
            <h2>all order:{orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>product Name</TableCell>
                            <TableCell align="right" style={{ backgroundColor: 'yellow', borderRadius: 10 }}>user email</TableCell>
                            <TableCell align="right">price</TableCell>
                            <TableCell align="right">status</TableCell>
                            <TableCell align="right">action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((pd) => (
                            <TableRow
                                key={pd._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img style={{ width: '80px', marginRight: '20px', }} src={pd.image} alt="" /><Typography variant="h6" style={{ fontSize: 13 }} display="inline">{pd.name}</Typography>


                                </TableCell>
                                <TableCell align="right">{pd?.email}</TableCell>
                                <TableCell align="right">{pd.price}$</TableCell>
                                <TableCell align="right"><TextField onChange={handleStatus} defaultValue={pd.status} variant="outlined" />
                                </TableCell>
                                <TableCell onClick={() => handleUpdate(pd._id)} align="right"><Button variant="text">update</Button></TableCell>
                                <TableCell onClick={() => handleDelete(pd._id)} align="right"><Button variant="text">delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>


    );
};

export default ManageProducts;