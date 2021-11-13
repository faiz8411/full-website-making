import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


import useAuth from '../../../hooks/useAuth';


const ManageOrders = () => {
    const { user } = useAuth()
    const [manageOrder, setManageOrder] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/myOrders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setManageOrder(data))
    }, [user.email])
    return (
        <div>
            {/* <h2>manage orders:{manageOrder.length}</h2> */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>product Name</TableCell>
                            <TableCell align="right" style={{ backgroundColor: 'yellow', borderRadius: 10 }}>user email</TableCell>
                            <TableCell align="right">price</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manageOrder.map((pd) => (
                            <TableRow
                                key={pd._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img style={{ width: '80px', marginRight: '20px', }} src={pd.image} alt="" /><Typography variant="h6" style={{ fontSize: 13 }} display="inline">{pd.name}</Typography>


                                </TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right">{pd.price}$</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;