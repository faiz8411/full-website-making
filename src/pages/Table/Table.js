import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { Col, Row } from "reactstrap";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [employees, setEmployees] = React.useState([]);
  const [control, setControl] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/addEmployee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            text: "employee added   successfully!",
            icon: "success",
            button: "ok!",
          });
          reset();
        }
        setOpen(false);
      });
  };

  React.useEffect(() => {
    fetch("http://localhost:5000/allEmployee")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, [employees]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: 300,
    bgcolor: "background.paper",
    border: "",
    boxShadow: 24,
    p: 4,
  };

  const handleDelete = (id) => {
    alert("are you want to delete");
    fetch(`http://localhost:5000/deleteId/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
          swal({
            text: "Delete member successfully!",
            icon: "success",
            button: "ok!",
          });
        }
      });
    console.log(id);
  };

  return (
    <>
      <div className="tableDiv">
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{ margin: "auto" }}
        >
          Add Employee
        </Button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Row style={{ display: "flex", flexDirection: "column" }}>
                <Col>
                  {" "}
                  <Typography
                    variant="h6"
                    align="left"
                    style={{ marginBottom: "18px" }}
                  >
                    Employee form
                  </Typography>
                </Col>
                <Col></Col>
              </Row>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  placeholder="Name"
                  type="text"
                  required
                  fullWidth
                  {...register("Name", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "user name minimum 3 character",
                    },
                    maxLength: {
                      value: 20,
                    },
                  })}
                />
                {errors.Name && (
                  <span style={{ color: "red", textAlign: "left" }}>
                    {errors.Name.message}
                  </span>
                )}
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  placeholder="Email"
                  type="email"
                  required
                  fullWidth
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "please enter valid email",
                    },
                  })}
                />
                {errors.email && (
                  <span style={{ color: "red", textAlign: "left" }}>
                    {errors.email.message}
                  </span>
                )}
                <TextField
                  id="standard-basic"
                  label="phone"
                  variant="standard"
                  placeholder="phone Number "
                  type="number"
                  required
                  fullWidth
                  {...register("phone", {
                    required: "phone is required",

                    pattern: {
                      value: /^([+]\d{2}[ ])?\d{10}$/,
                      message: "phone number should 10 numerical characters",
                    },
                    minLength: {
                      value: 10,
                      message: "Phone number should be minimum 10 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Phone number should be maximum 12 characters",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="errorText" style={{ color: "red" }}>
                    {errors.phone.message}
                  </span>
                )}
                <TextField
                  id="standard-basic"
                  label="address"
                  variant="standard"
                  placeholder="address"
                  type="text"
                  required
                  fullWidth
                  {...register("address", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "user name minimum 3 character",
                    },
                    maxLength: {
                      value: 20,
                    },
                  })}
                />

                {errors.address && (
                  <span style={{ color: "red", textAlign: "left" }}>
                    {errors.address.message}
                  </span>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    marginTop: "10px",
                    align: "center",
                    marginLeft: "100px",
                  }}
                >
                  add
                </Button>
                <Button
                  style={{
                    algn: "right",
                    marginTop: "10px",
                    marginLeft: "10px",
                    color: "white",
                    backgroundColor: "red",
                  }}
                  onClick={handleClose}
                >
                  cancel
                </Button>
              </form>
            </Box>
          </Fade>
        </Modal>
      </div>
      <div>
        <Container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="orders table">
              <TableHead>
                <TableRow>
                  <TableCell className="TableCellStyle">
                    Employee Name
                  </TableCell>
                  <TableCell className="TableCellStyle">Email</TableCell>
                  <TableCell className="TableCellStyle">Mobile</TableCell>
                  <TableCell className="TableCellStyle">Address</TableCell>
                  <TableCell className="action">action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((pd) => (
                  <TableRow
                    key={pd._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography
                        variant="h4"
                        style={{ fontSize: 13 }}
                        display="inline"
                      >
                        {pd.Name}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">{pd.email}</TableCell>
                    <TableCell align="left">{pd.phone}</TableCell>

                    <TableCell align="left">{pd.address}</TableCell>

                    <TableCell align="right">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/user/${pd._id}`}
                      >
                        <Button
                          variant="contained"
                          startIcon={<EditIcon />}
                          color="primary"

                          // onClick={() => handleUpdate(pd._id)}
                          // onClick={handleOpenModal}
                        >
                          Edit
                        </Button>
                      </Link>
                      {`  `}
                      <Button
                        onClick={() => handleDelete(pd._id)}
                        startIcon={<DeleteIcon />}
                        variant="contained"
                        color="error"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
}
