import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { TeacherContext } from "./Home";

function AdminTeacherEditForm({ index, setModal }) {
  const { teachers, getTeachers } = React.useContext(TeacherContext);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = await fetch("http://localhost:8080/teachers/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doc_id: teachers[index].doc_id,
        classID: teachers[index].classID,
        firstName: firstName,
        lastName: lastName,
      }),
    }).then((resp) => {
      resp.json();
      getTeachers();
    });
    setModal(false);
    return;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>First Name</Form.Label>
      <Form.Control
        defaultValue={teachers[index].firstName}
        required
        placeholder="first name"
        name="first"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></Form.Control>
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        defaultValue={teachers[index].lastName}
        required
        placeholder="last name"
        name="last"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></Form.Control>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function AddTeacherForm({ setModal2 }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const { getTeachers } = React.useContext(TeacherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const rawResponse = await fetch("http://localhost:8080/teachers/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          classID: "",
          firstName: firstName,
          lastName: lastName,
        }),
      }).then((res) => getTeachers());
    })();
    setModal2(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>First Name</Form.Label>
      <Form.Control
        required
        placeholder="John"
        name="first"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></Form.Control>
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        required
        placeholder="Doe"
        name="last"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></Form.Control>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function TeacherAdminDash() {
  const { teachers, getTeachers } = React.useContext(TeacherContext);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  let index = 0;

  const handleEdit = (e) => {
    e.preventDefault();
    index = e.target.id;
    setModal(true);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    (async () => {
      const rawResponse = await fetch("http://localhost:8080/teachers/delete", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doc: teachers[e.target.id].doc_id }),
      }).then((res) => getTeachers());
    })();
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Class ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        {teachers.map((teacher, index) => {
          return (
            <tbody>
            <tr>
              
                <td>{teacher.firstName}</td>
                <td>{teacher.lastName}</td>
                <td>{teacher.classID}</td>
                <td>
                  <Button id={index} onClick={handleEdit} variant="secondary">
                    Edit
                  </Button>
                  <Button id={index} onClick={handleDelete} variant="danger" style={{marginLeft: '3%'}}>
                    Delete
                  </Button>
                </td>
            </tr>
            </tbody>
          );
        })}
      </Table>
      <Modal
        show={modal}
        onHide={() => {
          setModal(false);
        }}
      >
        <Modal.Header closeButton>
          {" "}
          <Modal.Title>Edit Teacher</Modal.Title>
        </Modal.Header>
        <AdminTeacherEditForm index={index} setModal={setModal} />
      </Modal>
      <Button variant="success" onClick={() => setModal2(true)}>
        Add Teacher
      </Button>
      <Modal show={modal2} onHide={() => setModal2(false)}>
        {" "}
        <Modal.Header closeButton>
          <Modal.Title>Add Teacher</Modal.Title>
        </Modal.Header>
        <AddTeacherForm setModal2={setModal2} />
      </Modal>
    </div>
  );
}

export default TeacherAdminDash;
