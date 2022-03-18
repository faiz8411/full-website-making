import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";

import swal from "sweetalert";

const EditPages = () => {
  const [update, setUpdate] = useState({});

  const { id } = useParams();

  const editName = (e) => {
    const editname = e.target.value;
    const editInfo = { ...update };
    editInfo.Name = editname;
    setUpdate(editInfo);
  };
  // console.log(update)
  const editAddress = (e) => {
    const editaddress = e.target.value;
    const updateAddress = { ...update };
    updateAddress.address = editaddress;
    setUpdate(updateAddress);
  };

  const editEmail = (e) => {
    const editemail = e.target.value;
    const updateEmail = { ...update };
    updateEmail.email = editemail;
    setUpdate(updateEmail);
  };

  const editPhone = (e) => {
    const editphone = e.target.value;

    const updatePhone = { ...update };
    updatePhone.phone = editphone;
    setUpdate(updatePhone);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleEmployee/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdate(data);
        console.log(data);
      });
  }, [id]);
  const editUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/updateEmployee/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal({
            text: "information update    successfully!",
            icon: "success",
            button: "ok!",
          });
          setUpdate("");
        }
      });
  };
  // console.log(id)

  return (
    <div>
      <Box className="editBox">
        <Row style={{ display: "flex" }}>
          <Col>
            {" "}
            <Typography className="editForm" variant="h6">
              Edit Form
            </Typography>
          </Col>
          <Col></Col>
        </Row>
        <form onSubmit={editUpdate}>
          <TextField
            className="textField"
            sx={{ width: "90%", mb: 3 }}
            id="outlined-size-small"
            placeholder="Name"
            required
            size="small"
            name="Name"
            // label="name"
            value={update && update.Name}
            defaultValue={update && update.Name}
            onChange={editName}
          />
          <br />
          <TextField
            className="textField"
            sx={{ width: "90%", m: 1 }}
            // label="position"
            id="outlined-textarea"
            placeholder="Position"
            size="small"
            name="Designation"
            value={update && update.email}
            defaultValue={update.email}
            onChange={editEmail}
          />
          <br />
          <TextField
            classNam="textFiled"
            sx={{ width: "90%", m: 1 }}
            id="outlined-textarea"
            placeholder="Age"
            size="small"
            name="age"
            onChange={editPhone}
            value={update && update.phone}
            defaultValue={update.phone}
          />
          <br />
          <TextField
            classNam="textFiled"
            sx={{ width: "90%", mt: 2 }}
            id="outlined-textarea"
            cmd
            placeholder="Address"
            size="large"
            name="address"
            // defaultValue={single?.Address}
            defaultValue={update.address}
            value={update && update.address}
            onChange={editAddress}
          />

          <br />
          <Button
            className="buttonUpdateStyle"
            type="submit"
            variant="contained"
            color="success"
          >
            update
          </Button>
          <Button
            className="buttonStyleCancel"
            // onClick={cancelButton}
            type="submit"
          >
            Cancel
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default EditPages;
